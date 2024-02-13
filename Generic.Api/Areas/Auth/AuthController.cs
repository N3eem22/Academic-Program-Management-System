using Generic.Api.Untilities;
using Generic.Domian.Constants;
using Generic.Domian.Dtos.Requests.Auth;
using Generic.Services.IServices.Permissions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Generic.Api.Areas.Auth
{
    [ApiController]
    [Area(Modules.Auth)]
    [ApiExplorerSettings(GroupName = Modules.Auth)]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [AllowAnonymous]
        [HttpPost(ApiRoutes.Auth.Login)]
        public async Task<IActionResult> Login(GetTokenRequest model)
        {
            return Ok(await _authService.LoginAsync(model));
        }
    }
}
