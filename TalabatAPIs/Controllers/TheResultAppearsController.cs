using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TheResultAppearsController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public TheResultAppearsController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TheResultAppearsDTO>>> GetAllTheResultAppears(int? UniversityId)
        {
            var spec = new TheResultAppearswithUniSpecifications(UniversityId);
            var theResultAppears = await _unitOfWork.Repository<TheResultAppears>().GetAllWithSpecAsync(spec);

            var theResultAppearsDTO = _mapper.Map<IEnumerable<TheResultAppears>, IEnumerable<TheResultAppearsDTO>>(theResultAppears);

            return Ok(theResultAppearsDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TheResultAppearsDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<TheResultAppearsDTO>> GetTheResultAppearsById(int id)
        {
            var spec = new TheResultAppearswithUniSpecifications(id);
            var theResultAppears = await _unitOfWork.Repository<TheResultAppears>().GetEntityWithSpecAsync(spec);

            if (theResultAppears == null)
                return NotFound(new ApiResponse(404));

            var theResultAppearsDTO = _mapper.Map<TheResultAppears, TheResultAppearsDTO>(theResultAppears);

            return Ok(theResultAppearsDTO);
        }

        [HttpPost]
        public async Task<ActionResult<TheResultAppearsReq>> AddTheResultAppears(TheResultAppearsReq theResultAppearsReq)
        {
            bool exists = await _unitOfWork.Repository<TheResultAppears>().ExistAsync(
                x => x.resultAppears.Trim().ToUpper() == theResultAppearsReq.resultAppears.Trim().ToUpper() &&
                     x.UniversityId == theResultAppearsReq.UniversityId);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var theResultAppears = _unitOfWork.Repository<TheResultAppears>().Add(_mapper.Map<TheResultAppearsReq, TheResultAppears>(theResultAppearsReq));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TheResultAppearsReq>> UpdateTheResultAppears(int id, string updatedResultAppears)
        {
            var theResultAppears = await _unitOfWork.Repository<TheResultAppears>().GetByIdAsync(id);

            if (theResultAppears == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<TheResultAppears>().ExistAsync(
                x => x.resultAppears.Trim().ToUpper() == updatedResultAppears.Trim().ToUpper() && x.UniversityId == theResultAppears.UniversityId);

            if (!exists)
            {
                theResultAppears.resultAppears = updatedResultAppears;
                _unitOfWork.Repository<TheResultAppears>().Update(theResultAppears);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTheResultAppears(int id)
        {
            var theResultAppears = await _unitOfWork.Repository<TheResultAppears>().GetByIdAsync(id);

            if (theResultAppears == null)
                return NotFound(new ApiResponse(404));

            _unitOfWork.Repository<TheResultAppears>().Delete(theResultAppears);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
