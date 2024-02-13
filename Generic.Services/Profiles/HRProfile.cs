using AutoMapper;
using Generic.Domian.Dtos.Requests.HR;
using Generic.Domian.Dtos.Responses;
using Generic.Domian.Dtos.Responses.HR;
using Generic.Domian.Models.HR;

namespace Generic.Services.Profiles
{
    public class HRProfile : Profile
    {
        public HRProfile()
        {

            //Department
            CreateMap<Department, DepartmentRequest>().ReverseMap();
            CreateMap<Department, GetListResponse>();
            CreateMap<Department, SelectListResponse>();


            CreateMap<Employee, EmployeeRequest>().ReverseMap();
            CreateMap<Employee, GetListResponse>();
            CreateMap<Employee, SelectListResponse>();
        }
    }
}
