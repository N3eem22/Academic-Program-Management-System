using Generic.Domian.Dtos.Requests.HR;
using Generic.Domian.Dtos.Responses.HR;
using Generic.Domian.Dtos.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Services.IServices.HR
{
    public interface IEmployeesService
    {
        Task<ResponseWithData<List<GetListResponse>>> GetAllEmployeesAsync();
        Task<ResponseWithData<EmployeeRequest>> AddEmployeeAsync(EmployeeRequest EmployeeRequest);
        Task<ResponseWithData<EmployeeRequest>> UpdateEmployeeAsync(int EmpId, EmployeeRequest EmployeeRequest);
        Task<Response> DeleteEmployeeAsync(int EmpId);
        Task<ResponseWithData<List<SelectListResponse>>> ListOfEmployeesAsync();
    }
}
