using Grad.APIs.Helpers;
using Microsoft.AspNetCore.Mvc;
using Talabat.APIs.Errors;
using Talabat.APIs.Helpers;
using Talabat.Core;
using Talabat.Core.Repositories;
using Talabat.Core.Services;
using Talabat.Repository;
using Talabat.Repository.Data;
using Talabat.Repository.Data.Talabat.Repository.Data;
using Talabat.Service;

namespace Talabat.APIs.Exstentions
{
    public static class ApplicationServiceExtention
    {
        public static IServiceCollection AddApplicationService(this IServiceCollection Services)
        {
          
            Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            
            Services.AddScoped(typeof(IUnitOfWork), typeof(UnitOfWork));

            Services.AddScoped<IdentityHelper>();

            Services.AddScoped<IdentityHelper>(sp =>
            {
                var dbContext = sp.GetRequiredService<GradContext>();
                return new IdentityHelper(dbContext);
            });


            Services.AddScoped<TestHelper>();

            Services.AddScoped<TestHelper>(sp =>
            {
                var dbContext = sp.GetRequiredService<GradContext>();
                return new TestHelper(dbContext);
            });



            Services.AddAutoMapper(typeof(MappingProfiles));
            Services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = (actionContext) =>
                {
                    var errors = actionContext.ModelState.Where(p => p.Value.Errors.Count() > 0).
                                                        SelectMany(p => p.Value.Errors).
                                                        Select(e => e.ErrorMessage).ToArray();
                    var ValidationErorResponse = new ApiValidationErrorResponse()
                    {
                        Errors = errors
                    };
                    return new BadRequestObjectResult(ValidationErorResponse);
                };
            });
            return Services;
        }
    }
}
