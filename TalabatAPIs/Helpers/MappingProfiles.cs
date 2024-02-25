using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Talabat.APIs.DTO;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Identity;
using Talabat.Core.Entities.Lockups;

namespace Talabat.APIs.Helpers
{
    public class MappingProfiles:Profile
    {
        public MappingProfiles()
        {

            //   CreateMap<CustomerBasket, CustomerBasketDto>();

            CreateMap<AllGrades, AllGradesDTO>()
            .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<AllGradesReq, AllGrades>();
        }
    }
}
