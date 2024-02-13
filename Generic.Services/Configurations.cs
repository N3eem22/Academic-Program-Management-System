using Generic.Services.IServices.AppConfig;
using Generic.Services.IServices.HR;
using Generic.Services.IServices.Permissions;
using Generic.Services.IServices.Seeds;
using Generic.Services.IServices.Shared;
using Generic.Services.Services.AppConfig;
using Generic.Services.Services.HR;
using Generic.Services.Services.Permissions;
using Generic.Services.Services.Seeds;
using Generic.Services.Services.Shared;
using System.Reflection;

namespace Generic.Services
{
    public static class Configurations
    {
        public static IServiceCollection ServicesLayerConfigurations(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            services.AddScoped<IFileUploader, FileUploader>();
            services.AddScoped<IDbInitSeedsService, DbInitSeedsService>();

            //Shared
            services.AddScoped<ISharedService, SharedService>();



            //Auth
            services.AddScoped<IAuthService, AuthService>();



            //Stocks
            services.AddScoped<ICategoryService, CategoryService>();


            //Hr
            services.AddScoped<IDepartmentsService, DepartmentsService>();
            services.AddScoped<IEmployeesService, EmployeeService>();




            return services;
        }
    }
}
