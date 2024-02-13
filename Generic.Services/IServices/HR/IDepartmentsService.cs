using Generic.Domian.Dtos.Requests.HR;
using Generic.Domian.Dtos.Responses;
using Generic.Domian.Dtos.Responses.HR;

namespace Generic.Services.IServices.HR
{
    public interface IDepartmentsService
    {
        Task<ResponseWithData<List<GetListResponse>>> GetAllDepartmentsAsync();
        Task<ResponseWithData<DepartmentRequest>> AddDepartmentAsync(DepartmentRequest departmentRequest);
        Task<ResponseWithData<DepartmentRequest>> UpdateDepartmentAsync(int deptId, DepartmentRequest departmentRequest);
        Task<Response> DeleteDepartmentAsync(int deptId);
        Task<ResponseWithData<List<SelectListResponse>>> ListOfDepartmentsAsync();
    }
}
