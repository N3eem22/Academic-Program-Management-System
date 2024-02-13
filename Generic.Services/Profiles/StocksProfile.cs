using AutoMapper;
using Generic.Domian.Dtos.Responses;
using Generic.Domian.Models.Stocks;

namespace Generic.Services.Profiles
{
    public class StocksProfile : Profile
    {
        public StocksProfile()
        {
            CreateMap<Category, SelectListResponse>();
        }
    }
}
