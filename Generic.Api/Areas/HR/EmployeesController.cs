using Generic.Api.Untilities;
using Generic.Domian.Constants;
using Generic.Domian.Dtos.Requests.HR;
using Generic.Services.IServices.HR;
using Generic.Services.Services.HR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Generic.Api.Areas.HR
{
    [ApiController]
    [Area(Modules.HR)]
    [ApiExplorerSettings(GroupName = Modules.HR)]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeesService _employeesService;
        public EmployeesController(IEmployeesService employeesService)
        {
               this._employeesService = employeesService;
        }



        [HttpGet(ApiRoutes.Department.ListOfEmployees)]
        public async Task<IActionResult> ListOfEmployees()
        => Ok(await _employeesService.ListOfEmployeesAsync());

        [HttpGet(ApiRoutes.Department.GetAllEmployees)]
        public async Task<IActionResult> GetAllEmployees()
            => Ok(await _employeesService.GetAllEmployeesAsync());

        [HttpPost(ApiRoutes.Department.AddEmployee)]
        public async Task<IActionResult> AddEmployee(EmployeeRequest EmployeeRequest)
            => Ok(await _employeesService.AddEmployeeAsync(EmployeeRequest));


        [HttpPost(ApiRoutes.Department.UpdateEmployee)]
        public async Task<IActionResult> UpdateEmployee(int EmpId, EmployeeRequest EmployeeRequest)
            => Ok(await _employeesService.UpdateEmployeeAsync(EmpId, EmployeeRequest));


        [HttpPost(ApiRoutes.Department.DeleteEmployee)]
        public async Task<IActionResult> DeleteEmployee(int EmpId)
            => Ok(await _employeesService.DeleteEmployeeAsync(EmpId));


    }
}
