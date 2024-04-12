using AutoMapper;
using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.CumulativeAverage;
using Microsoft.AspNetCore.Mvc;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CumulativeAverageController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public CumulativeAverageController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        [HttpPost]
       
        public async Task<ActionResult<CumulativeAverageReq>> AddCumulativeAverage(CumulativeAverageReq cumulativeAverageRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var cumulativeAverage = _mapper.Map<CumulativeAverageReq, CumulativeAverage>(cumulativeAverageRequest);
                _unitOfWork.Repository<CumulativeAverage>().Add(cumulativeAverage);
                var result = await _unitOfWork.CompleteAsync() > 0;

                if (!result)
                {
                    return StatusCode(500, new ApiResponse(500, "A problem occurred while handling your request."));
                }
                var message = result ? AppMessage.Done : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500 , AppMessage.Error));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiResponse(500, ex.Message));
            }
        }
    }
}
