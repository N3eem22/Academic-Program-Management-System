using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core.Entities.Identity;
using Talabat.Core.Services;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _manager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IdentityHelper _identityHelper;

        public UsersController(IdentityHelper identityHelper ,  IMapper mapper, UserManager<AppUser> manager, SignInManager<AppUser> signInManager, ITokenService tokenService)
        {
            _mapper = mapper;
            _manager = manager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _identityHelper = identityHelper;
        }

        [HttpGet("GetUsers")]
      
        public async Task<IActionResult> GetUsers(string? SearchValue)
        {
            if (string.IsNullOrEmpty(SearchValue))
            {
                var users = await _manager.Users.ToListAsync();
                var usersReturn = users.Select(async u => new UsersReturn
                {
                    Id = u.Id,
                    DisplayName = u.DisplayName,
                    Email = u.Email,
                    PhoneNumber = u.PhoneNumber,
                    Role = string.Join(",", await _manager.GetRolesAsync(u)),
                    Faculties = _identityHelper.GetUserFacultiesName(u.Id) ,
                    Universities = _identityHelper.GetUserUniversitiesName(u.Id)
                }).Select(task => task.Result).ToList();

                return Ok(usersReturn);

            }
            else
            {
                var user = await _manager.FindByEmailAsync(SearchValue);
                if (user == null)
                {
                    return NotFound(new ApiResponse(404, "User Not Found"));
                }

                var userRoles = await _manager.GetRolesAsync(user);
                var mappedUser = new UsersReturn()
                {
                    Id = user.Id,
                    DisplayName = user.DisplayName,
                    Email = user.Email,
                    PhoneNumber = user.PhoneNumber,
                    Role = userRoles.FirstOrDefault() ,
                    Faculties = _identityHelper.GetUserFacultiesName(user.Id),
                    Universities = _identityHelper.GetUserUniversitiesName(user.Id)
                };
                return Ok(new List<UsersReturn> { mappedUser });
            }
        }

        [HttpGet("Details")]
    
        public async Task<IActionResult> Details(string id)
        {
            if (id is null)

                return BadRequest( new ApiResponse(400));

            var user = await _manager.FindByIdAsync(id);
            if (user is null)
                return NotFound(new ApiResponse(404 , "User Not Found"));

            var userRoles = await _manager.GetRolesAsync(user);

            var mappedUser = new UsersReturn()
            {
                Id = user.Id,
                DisplayName = user.DisplayName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                Role = userRoles.FirstOrDefault(),
                Faculties = _identityHelper.GetUserFacultiesName(user.Id),
                Universities = _identityHelper.GetUserUniversitiesName(user.Id)
            };
            return Ok(mappedUser);

        }

        [HttpPut("Update")]
       

        public async Task<IActionResult> UpdateUser(string id, UserReq UpdatedUser)
        {
            if (id != UpdatedUser.Id)
            {
                return BadRequest(new ApiResponse(400));
            }

            if (UpdatedUser.Role != "SuperAdmin" && UpdatedUser.Role != "Admin" && UpdatedUser.Role != "User")
            {
                return BadRequest(new { message = "Invalid role" });
            }
            var User = await _manager.FindByIdAsync(id);

            User.PhoneNumber = UpdatedUser.PhoneNumber;
            User.Email = UpdatedUser.Email;
            User.DisplayName = UpdatedUser.DisplayName;
            User.Role = UpdatedUser.Role;

            var userRoles = await _manager.GetRolesAsync(User);
            await _manager.RemoveFromRolesAsync(User, userRoles); 
            await _manager.AddToRoleAsync(User , UpdatedUser.Role);

            await _identityHelper.UpdateUserFacultiesAsync(User.Id, UpdatedUser.Faculties);
            await _identityHelper.UpdateUserUniversitiesAsync(User.Id, UpdatedUser.Universities);


            await _manager.UpdateAsync(User);


            var mappedUser = new UsersReturn()
            {
                Id = User.Id,
                DisplayName = User.DisplayName,
                Email = User.Email,
                PhoneNumber = User.PhoneNumber,
                Role = userRoles.FirstOrDefault(),
                Faculties = _identityHelper.GetUserFacultiesName(User.Id),
                Universities = _identityHelper.GetUserUniversitiesName(User.Id)
            };

            return Ok(mappedUser);
        }
        
        [HttpDelete]

        public async Task<IActionResult> DeleteUser(string id)
        {
            var user = await _manager.FindByIdAsync(id);

            if (user == null)
            {
                return NotFound(new ApiResponse(404, "User not found"));
            }

            var result = await _manager.DeleteAsync(user);
            var message = result.Succeeded ? "User deleted successfully" : "Error deleting user";

            return result.Succeeded
                ? Ok(new { Message = message })
                : StatusCode(500, new { Error = message });
        }



        [HttpPost("reset-password")]
      //  [Authorize(Roles = "SuperAdmin")]
        public async Task<IActionResult> ResetPassword(ResetPasswordRequest request)
        {
            var user = await _manager.FindByEmailAsync(request.Email);
            if (user == null)
            {
                return NotFound(new { Message = "User not found." });
            }

            // Reset user's password
            var token = await _manager.GeneratePasswordResetTokenAsync(user);
            var resetPasswordResult = await _manager.ResetPasswordAsync(user, token, request.NewPassword);
            if (resetPasswordResult.Succeeded)
            {
                return Ok(new { Message = "Password reset successfully." });
            }
            else
            {
                return BadRequest(new { Message = "Failed to reset password." });
            }
        }




    }
}
