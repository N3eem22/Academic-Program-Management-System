using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Talabat.APIs.DTO;
using Talabat.APIs.DTO.Talabat.APIs.DTO;
using Talabat.APIs.Errors;
using Talabat.APIs.Exstentions;
using Talabat.Core;
using Talabat.Core.Entities.Entities;
using Talabat.Core.Entities.Identity;
using Talabat.Core.Entities.Lockups;
using Talabat.Core.Services;
using Talabat.Repository.Data;

namespace Talabat.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _manager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IdentityHelper _identityHelper;
        private readonly IUnitOfWork _unitOfWork;

        public AccountsController(IdentityHelper identityHelper, IMapper mapper, UserManager<AppUser> manager, SignInManager<AppUser> signInManager, ITokenService tokenService, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _manager = manager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _identityHelper = identityHelper;
            _unitOfWork = unitOfWork;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto model)
        {
            if (model.Role != "SuperAdmin" && model.Role != "Admin" && model.Role != "User")
            {
                return BadRequest(new { message = "دور غير صالح" });
            }

            if (CheckDuplicateEmail(model.Email).Result.Value)
                return BadRequest(new ApiResponse(400, "البريد الإلكتروني موجود بالفعل"));

            var user = new AppUser()
            {
                DisplayName = model.DisplayName,
                Email = model.Email,
                UserName = model.Email.Split('@')[0],
                PhoneNumber = model.PhoneNumber,
                Role = model.Role
            };

            var result = await _manager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return BadRequest(new ApiResponse(400, "فشل تسجيل المستخدم"));

            var roleResult = await _manager.AddToRoleAsync(user, model.Role);
            if (!roleResult.Succeeded)
                return BadRequest(new ApiResponse(400, "فشل في تعيين الدور للمستخدم"));

            _identityHelper.AssignUserToFaculties(user.Id, model.Facultyid);
            _identityHelper.AssignUserToUniversities(user.Id, model.UniversityID);

            var userRoles = await _manager.GetRolesAsync(user);
            var returnedUser = new UserDto()
            {
                DisplayName = user.DisplayName,
                Email = user.Email,
                UserRole = userRoles.FirstOrDefault(), // Assuming the user has only one role
                Token = await _tokenService.CreateTokenAsync(user, _manager)
            };

            return Ok(returnedUser);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto model)
        {
            if (model.Role != "SuperAdmin" && model.Role != "Admin" && model.Role != "User")
            {
                return BadRequest(new { message = "دور غير صالح" });
            }

            var user = await _manager.FindByEmailAsync(model.Email);
            if (user is null) return Unauthorized(new ApiResponse(401, "غير مصرح به"));

            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);
            if (!result.Succeeded) return Unauthorized(new ApiResponse(401, "غير مصرح به"));

            if (model.Role != user.Role)
            {
                return Unauthorized(new ApiResponse(401, "تصريح غير صحيح"));
            }
           
            var userRoles = await _manager.GetRolesAsync(user);
            if (model.Role == "User")
            {
                var facultyId = _identityHelper.GetUserFaculties(user.Id).FirstOrDefault();
                var UniId = _identityHelper.GetUserUniversities(user.Id).FirstOrDefault();

                if (facultyId != null && UniId !=null)
                {
                    var facultyEntity = await _unitOfWork.Repository<Faculty>().GetByIdAsync(facultyId);
                    var UniEntity = await _unitOfWork.Repository<University>().GetByIdAsync(UniId);
                    if (facultyEntity != null)
                    {
                        var facultyName = facultyEntity.FacultyName;
                        var UniName = UniEntity.Id;
                        return Ok(new
                        {
                            Email = user.Email,
                            Token = await _tokenService.CreateTokenAsync(user, _manager),
                            UserRole = userRoles.FirstOrDefault(),
                            FacultyName = facultyName ,
                            UniversityId = UniId
                        });
                    }
                    else
                    {
                        return NotFound("Faculty not found.");
                    }
                }
                else
                {
                    return NotFound("User faculties not found.");
                }
            }

            else if(model.Role == "Admin")
            {
                var UniId = _identityHelper.GetUserUniversities(user.Id).FirstOrDefault();

                if ( UniId != null)
                {
                    var UniEntity = await _unitOfWork.Repository<University>().GetByIdAsync(UniId);
                    if (UniEntity != null)
                    {
                        
                        var UniName = UniEntity.Id;
                        return Ok(new
                        {
                            Email = user.Email,
                            Token = await _tokenService.CreateTokenAsync(user, _manager),
                            UserRole = userRoles.FirstOrDefault(),
                            UniversityId = UniId
                        });
                    }
                    else
                    {
                        return NotFound("Faculty not found.");
                    }
                }
                else
                {
                    return NotFound("User faculties not found.");
                }
            }
  
            return Ok(new UserDto()
            {
                DisplayName = user.DisplayName,
                Email = user.Email,
                Token = await _tokenService.CreateTokenAsync(user, _manager),
                UserRole = userRoles.FirstOrDefault()
            });
        }

        [HttpPost("Logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok(new { Message = "تسجيل الخروج ناجح" });
        }

        [Authorize]
        [HttpGet("GetCurrentUser")]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var Email = User.FindFirstValue(ClaimTypes.Email);
            var user = await _manager.FindByEmailAsync(Email);
            var userRoles = await _manager.GetRolesAsync(user);
            var ReturnedUser = new UserDto()
            {
                DisplayName = user.DisplayName,
                Email = user.Email,
                Token = await _tokenService.CreateTokenAsync(user, _manager),
                UserRole = userRoles.FirstOrDefault()
            };
            return Ok(ReturnedUser);
        }

        [HttpGet("Address")]
        public async Task<ActionResult<AddressDto>> GetUserAddress()
        {
            var user = await _manager.GetUserAddressAsync(User);
            var mappedUser = _mapper.Map<Address, AddressDto>(user.Address);
            return Ok(mappedUser);
        }

        [HttpPut("Address")]
        public async Task<ActionResult<AddressDto>> UpdateAddress(AddressDto updatedAddress)
        {
            var user = await _manager.GetUserAddressAsync(User);
            if (user is null)
                return Unauthorized(new ApiResponse(401));
            var address = _mapper.Map<AddressDto, Address>(updatedAddress);
            address.Id = user.Address.Id;
            user.Address = address;
            var result = await _manager.UpdateAsync(user);
            if (!result.Succeeded) return BadRequest(new ApiResponse(400));
            return Ok(updatedAddress);
        }

        [HttpGet("CheckDuplicateEmail")]
        public async Task<ActionResult<bool>> CheckDuplicateEmail(string email)
        {
            var user = await _manager.FindByEmailAsync(email);
            if (user != null)
                return true;
            else
                return false;
        }
    }
}
