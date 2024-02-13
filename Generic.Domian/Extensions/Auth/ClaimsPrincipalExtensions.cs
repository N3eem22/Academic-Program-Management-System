using System.Security.Claims;

namespace Generic.Domian.Extensions.Auth
{
    public static class ClaimsPrincipalExtensions
    {
        public static string GetUserId(this ClaimsPrincipal principal)
        {
            return principal.FindFirstValue("uid");
        }
        public static int GetCompanyId(this ClaimsPrincipal principal)
        {
            int companyId = 0;
            int.TryParse(principal.FindFirstValue("companyId"), out companyId);
            return companyId;
        }

        public static string GetUserName(this ClaimsPrincipal principal)
        {
            return principal.FindFirstValue("{http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name");

        }
    }
}
