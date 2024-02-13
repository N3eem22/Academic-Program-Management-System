using Generic.Services.IServices.Permissions;
using Microsoft.AspNetCore.Authorization;
using Generic.Domian.Extensions.Auth;

namespace Generic.Api.Filters
{
    public class PermissionAuthorizationHandler : AuthorizationHandler<PermissionRequirement>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public PermissionAuthorizationHandler(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, PermissionRequirement requirement)
        {

            string userId = _httpContextAccessor!.HttpContext == null ? "" : _httpContextAccessor!.HttpContext!.User.GetUserId();
            bool chackUserResult = true /*await _authService.CheckIfUserActive(userId)*/;
            if (context.User == null)
                return;
            if (chackUserResult == true && context.User != null)
            {

                var CheckHubAuth = _httpContextAccessor!.HttpContext!.Request.Path == "/GeneralHub" && !string.IsNullOrEmpty(_httpContextAccessor.HttpContext.Request.Headers.Authorization);
                if (CheckHubAuth)
                {
                    context.Succeed(requirement);
                    return;
                }

                var permission = requirement.Permission.Split('.');
                string AllClaimsPer = $"{permission[0]}.{permission[1]}.{permission[2]}.Full";

                var canAccess = context.User.Claims.Any(c => c.Type == "Permission" && (c.Value == requirement.Permission || c.Value == AllClaimsPer)/*&& c.Issuer == "LOCAL AUTHORITY"*/);

                if (canAccess)
                {
                    context.Succeed(requirement);
                    return;
                }
            }
        }
    }
}
