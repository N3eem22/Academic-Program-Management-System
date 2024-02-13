using Generic.Api.Filters;
using Generic.Api.Untilities;
using Generic.Domian.Options;
using Generic.Domian.SwaggerFilters;
using Generic.Services.IServices.Seeds;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;

namespace Generic.Api
{
    public static class Configurations
    {
        public static IServiceCollection ApiLayerConfigurations(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IAuthorizationPolicyProvider, PermissionPolicyProvider>();
            services.AddScoped<IAuthorizationHandler, PermissionAuthorizationHandler>();

            services.Configure<JwtSettings>(configuration.GetSection("JWT"));
            services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddCors();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc(Modules.Auth, new OpenApiInfo
                {
                    Title = "Auth",
                    Version = "v1"
                });
                c.SwaggerDoc(Modules.HR, new OpenApiInfo
                {
                    Title = "HR",
                    Version = "v1"
                });
                c.SwaggerDoc(Modules.Shared, new OpenApiInfo
                {
                    Title = "Shared",
                    Version = "v1"
                });
                c.SwaggerDoc(Modules.Stocks, new OpenApiInfo
                {
                    Title = "Stocks",
                    Version = "v1"
                });

                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Please insert JWT with Bearer into field",
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement {
                {
                    new OpenApiSecurityScheme
                    {
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer",

                    },
                    In = ParameterLocation.Header,
                    Name= "Bearer",
                    },
                    new string[] { }
                }
                });
                c.SchemaFilter<AppSwaggerFilter>();
            });
            return services;
        }

        public static WebApplication ApiLayerAppConfigurations(this WebApplication app)
        {
            try
            {
                SeedData(app);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }


            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint($"/swagger/{Modules.Auth}/swagger.json", "Auth v1");
                c.SwaggerEndpoint($"/swagger/{Modules.HR}/swagger.json", "HR v1");
                c.SwaggerEndpoint($"/swagger/{Modules.Shared}/swagger.json", "Shared v1");
                c.SwaggerEndpoint($"/swagger/{Modules.Stocks}/swagger.json", "Stocks v1");
            });
            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "FilesServer/files")),
                RequestPath = new PathString("/FilesServer/files")
            });

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();
            return app;
        }


        private async static void SeedData(IHost app) //can be placed at the very bottom under app.Run()
        {
            var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

            using (var scope = scopedFactory.CreateScope())
            {
                var dbInitializer = scope.ServiceProvider.GetService<IDbInitSeedsService>();
                await dbInitializer.Initialize();
            }
        }
    }
}
