using Generic.Api.Untilities;
using Generic.Domian.Constants;
using Generic.Services.IServices.Stocks;
using Microsoft.AspNetCore.Mvc;

namespace Generic.Api.Areas.Stocks
{
    [ApiController]
    [Area(Modules.Stocks)]
    [ApiExplorerSettings(GroupName = Modules.Stocks)]
    public class StocksController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public StocksController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet(ApiRoutes.Stocks.ListOfCategories)]
        public async Task<IActionResult> ListOfCategories()
        {
            var result = await _categoryService.ListOfCategoriesAsync();
            return Ok(result);
        }
    }
}
