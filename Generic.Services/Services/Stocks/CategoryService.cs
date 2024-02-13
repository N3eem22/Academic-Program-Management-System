using AutoMapper;
using Generic.Domian.Constants;
using Generic.Domian.Dtos.Responses;
using Generic.Domian.Interfaces;
using System.Collections.Generic;

namespace Generic.Services.Services.Stocks
{
    public class CategoryService : ICategoryService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CategoryService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ResponseWithData<IEnumerable<SelectListResponse>>> ListOfCategoriesAsync()
        {
            {
                try
                {
                    var categories = await _unitOfWork.CategoriesRepository.GetAllAsync();
                    var categoriesList = _mapper.Map<IEnumerable<SelectListResponse>>(categories);
                    return new ResponseWithData<IEnumerable<SelectListResponse>>
                    {
                        IsSuccess = true,
                        Message = ApplicationMessages.Data,
                        Data = categoriesList,
                    };
                }
                catch (Exception ex)
                {
                    await _unitOfWork.ApplicationLogsRepository.LogInDB(new { }, ex);
                    return new ResponseWithData<IEnumerable<SelectListResponse>>
                    {
                        Errors = new string[] { ApplicationMessages.Error }
                    };
                }
            }
        }


    }
}

