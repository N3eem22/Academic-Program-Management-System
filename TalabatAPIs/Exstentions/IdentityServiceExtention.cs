using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Talabat.Core.Entities.Identity;
using Talabat.Core.Services;
using Talabat.Repository.Data;
using Talabat.Repository.Data.Talabat.Repository.Data;
using Talabat.Service;

namespace Talabat.APIs.Exstentions
{
    public static class IdentityServiceExtention
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection Services,IConfiguration configuration)
        {
            Services.AddScoped<ITokenService, TokenService>();
           Services.AddIdentity<AppUser, IdentityRole>().AddDefaultTokenProviders()
          .AddEntityFrameworkStores<GradContext>();
            Services.AddAuthentication(Options=>
            {
                Options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                Options.DefaultChallengeScheme= JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(Options=>
            {
                Options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer=true,
                    ValidIssuer = configuration["JWT:Issuer"],
                    ValidateAudience=true,
                    ValidAudience= configuration["JWT:Audience"],
                    ValidateLifetime=true,
                    ValidateIssuerSigningKey=true,
                    IssuerSigningKey= new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Key"]))


            };
            });
            return Services;
        }
    }
}
