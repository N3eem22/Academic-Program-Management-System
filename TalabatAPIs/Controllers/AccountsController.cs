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


        public AccountsController(IdentityHelper identityHelper, IMapper mapper, UserManager<AppUser> manager, SignInManager<AppUser> signInManager, ITokenService tokenService)
        {
            _mapper = mapper;
            _manager = manager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _identityHelper = identityHelper;


        }

        [HttpPost("Register")]
        // [Authorize(Roles = "SuperAdmin")]

        public async Task<ActionResult<UserDto>> Register(RegisterDto model)
        {

            if (model.Role != "SuperAdmin" && model.Role != "Admin" && model.Role != "User")
            {
                return BadRequest(new { message = "Invalid role" });
            }

            if (CheckDuplicateEmail(model.Email).Result.Value)
                return BadRequest(new ApiResponse(400, "Email Already Exists"));




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
                return BadRequest(new ApiResponse(400, "Failed to register user"));


            var roleResult = await _manager.AddToRoleAsync(user, model.Role);
            if (!roleResult.Succeeded)
                return BadRequest(new ApiResponse(400, "Failed to assign role to user"));





            _identityHelper.AssignUserToFaculties(user.Id, model.Facultyid);

            _identityHelper.AssignUserToUniversities(user.Id, model.universityID);



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
                return BadRequest(new { message = "Invalid role" });
            }

            var user = await _manager.FindByEmailAsync(model.Email);
            if (user is null) return Unauthorized(new ApiResponse(401));

            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);
            if (!result.Succeeded) return Unauthorized(new ApiResponse(401));


            if (model.Role != user.Role)
            {
                return Unauthorized(new ApiResponse(401, "Unauthorized access"));
            }

            var userRoles = await _manager.GetRolesAsync(user);
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
            return Ok(new { Message = "Logout Succeeded" });
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

