using Generic.Api.Untilities;
using Generic.Domian.Constants;
using Generic.Domian.Dtos.Requests.HR;
using Generic.Services.IServices.HR;
using Microsoft.AspNetCore.Mvc;

namespace Generic.Api.Areas.HR
{
    [ApiController]
    [Area(Modules.HR)]
    [ApiExplorerSettings(GroupName = Modules.HR)]
    public class DepartmentsController : ControllerBase
    {
        private readonly IDepartmentsService _departmentsService;

        public DepartmentsController(IDepartmentsService departmentsService)
        {
            _departmentsService = departmentsService;
        }

        [HttpGet(ApiRoutes.Department.ListOfDepartments)]
        public async Task<IActionResult> ListOfDepartments() 
            => Ok(await _departmentsService.ListOfDepartmentsAsync());
      
        [HttpGet(ApiRoutes.Department.GetAllDepartments)]
        public async Task<IActionResult> GetAllDepartments() 
            => Ok(await _departmentsService.GetAllDepartmentsAsync());

        [HttpPost(ApiRoutes.Department.AddDepartment)]
        public async Task<IActionResult> AddDepartment(DepartmentRequest departmentRequest) 
            => Ok(await _departmentsService.AddDepartmentAsync(departmentRequest));


        [HttpPost(ApiRoutes.Department.UpdateDepartment)]
        public async Task<IActionResult> UpdateDepartment(int deptId,DepartmentRequest departmentRequest) 
            => Ok(await _departmentsService.UpdateDepartmentAsync(deptId, departmentRequest));
        

        [HttpPost(ApiRoutes.Department.DeleteDepartment)]
        public async Task<IActionResult> DeleteDepartment(int deptId) 
            => Ok(await _departmentsService.DeleteDepartmentAsync(deptId));

    }
}
