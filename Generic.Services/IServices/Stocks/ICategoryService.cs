using Generic.Domian.Dtos.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Services.IServices.Stocks
{
    public interface ICategoryService
    {
        Task<ResponseWithData<IEnumerable<SelectListResponse>>> ListOfCategoriesAsync();
    }
}
