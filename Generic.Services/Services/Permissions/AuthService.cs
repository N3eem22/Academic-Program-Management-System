using Generic.Domian.Interfaces;
using Generic.Domian.Models.Permissions;
using Generic.Domian.Options;
using Generic.Services.IServices.Permissions;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Generic.Domian.Extensions;
using Generic.Domian.Constants;
using Generic.Domian.Dtos.Responses.Auth;
using Generic.Domian.Dtos.Requests.Auth;

namespace Generic.Services.Services.Permissions
{
    public class AuthService : IAuthService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly DateTime _TokenExpiryDateTime;
        private readonly JwtSettings _jwt;
        public AuthService(IUnitOfWork unitOfWork, UserManager<ApplicationUser> userManager, IOptions<JwtSettings> jwt)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _jwt = jwt.Value;

            try
            {
                _TokenExpiryDateTime = new DateTime().Now().AddHours(Convert.ToInt64(_jwt.TokenExpiryTimeInHour));
            }
            catch
            {
                DateTime.Now.AddDays(1);
            }
        }

        public async Task<AuthResponse> LoginAsync(GetTokenRequest model)
        {
            var response = new AuthResponse();
            try
            {
                var user = await _userManager.FindByNameAsync(model.Username);
                if (user == null)
                {
                    response.Errors = new string[] { ApplicationMessages.InvalidUsername };
                    return response;
                }
                if (!await _userManager.CheckPasswordAsync(user, model.Password))
                {
                    response.Errors = new string[] { ApplicationMessages.InvalidPassword };
                    return response;
                }

                var userRoles = await _userManager.GetRolesAsync(user);
                var authClaims = new List<Claim>
                {
                    new Claim(type:ClaimTypes.Name, value:user.UserName),
                    new Claim("uid", Guid.NewGuid().ToString()),
                    new Claim("companyId", "1"),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(type: ClaimTypes.Role, value: userRole));
                }

                string token = GenerateToken(authClaims);
                response.IsAuthenticated = true;
                response.FullName = user.FullName;
                response.Roles = userRoles.ToList();
                response.Token = token;
                response.ExpiresOn = _TokenExpiryDateTime;
                response.UserId = user.Id;
                response.UserName = user.UserName;
            }
            catch (Exception ex)
            {
                await _unitOfWork.ApplicationLogsRepository.LogInDB(model, ex);
                response.Errors = new string[] { ApplicationMessages.Error };
            }
            return response;
        }

        private string GenerateToken(IEnumerable<Claim> claims)
        {
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwt.Key));
            var token = new JwtSecurityToken(
                issuer: _jwt.Issuer,
                audience: _jwt.Audience,
                expires: _TokenExpiryDateTime,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256),
                claims: claims
            );

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        }

    }
}
