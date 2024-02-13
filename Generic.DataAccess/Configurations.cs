using Generic.DataAccess.DataContexts;
using Generic.DataAccess.Repositories;
using Generic.Domian.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;

namespace Generic.DataAccess
{
    public static class Configurations
    {
        public static IServiceCollection DataAccessLayerConfigurations(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<GenericDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));


            // For Identity 
            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
            {
                options.SignIn.RequireConfirmedAccount = true;
                options.User.RequireUniqueEmail = false;
                //options.SignIn.RequireConfirmedAccount = false;
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 6;
            }).AddEntityFrameworkStores<GenericDbContext>();
            
            services.AddControllersWithViews().AddJsonOptions(x =>  x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

            // Adding Authentication  
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.SaveToken = false;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidAudience = configuration["JWT:Audience"],
                    ValidIssuer = configuration["JWT:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Key"]))
                };
            });

            services.AddTransient<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }
}
