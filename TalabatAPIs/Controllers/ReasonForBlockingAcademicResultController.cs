using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
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
    public class ReasonForBlockingAcademicResultController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public ReasonForBlockingAcademicResultController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReasonForBlockingAcademicResultDTO>>> GetAllReasonsForBlockingAcademicResults(int? UniversityId)
        {
            var spec = new ReasonForBlockingAcademicResultwithUniSpecifications(UniversityId);
            var reasons = await _unitOfWork.Repository<ReasonForBlockingAcademicResult>().GetAllWithSpecAsync(spec);

            var reasonsDTO = _mapper.Map<IEnumerable<ReasonForBlockingAcademicResult>, IEnumerable<ReasonForBlockingAcademicResultDTO>>(reasons);

            return Ok(reasonsDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ReasonForBlockingAcademicResultDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<ReasonForBlockingAcademicResultDTO>> GetReasonForBlockingAcademicResultById(int id)
        {
            var spec = new ReasonForBlockingAcademicResultwithUniSpecifications(id);
            var reason = await _unitOfWork.Repository<ReasonForBlockingAcademicResult>().GetEntityWithSpecAsync(spec);

            if (reason == null)
                return NotFound(new ApiResponse(404));

            var reasonDTO = _mapper.Map<ReasonForBlockingAcademicResult, ReasonForBlockingAcademicResultDTO>(reason);

            return Ok(reasonDTO);
        }

        [HttpPost]
        public async Task<ActionResult<ReasonForBlockingAcademicResultReq>> AddReasonForBlockingAcademicResult(ReasonForBlockingAcademicResultReq reasonDTO)
        {
            bool exists = await _unitOfWork.Repository<ReasonForBlockingAcademicResult>().ExistAsync(
                x => x.TheReasonForBlockingAcademicResult.Trim().ToUpper() == reasonDTO.TheReasonForBlockingAcademicResult.Trim().ToUpper() &&
                     x.UniversityId == reasonDTO.UniversityId && !x.IsDeleted);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var reason = _unitOfWork.Repository<ReasonForBlockingAcademicResult>().Add(_mapper.Map<ReasonForBlockingAcademicResultReq, ReasonForBlockingAcademicResult>(reasonDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ReasonForBlockingAcademicResultReq>> UpdateReasonForBlockingAcademicResult(int id, string updatedReason)
        {
            var reason = await _unitOfWork.Repository<ReasonForBlockingAcademicResult>().GetByIdAsync(id);

            if (reason == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<ReasonForBlockingAcademicResult>().ExistAsync(
                x => x.TheReasonForBlockingAcademicResult.Trim().ToUpper() == updatedReason.Trim().ToUpper() && x.UniversityId == reason.UniversityId);

            if (!exists)
            {
                reason.TheReasonForBlockingAcademicResult = updatedReason;
                _unitOfWork.Repository<ReasonForBlockingAcademicResult>().Update(reason);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReasonForBlockingAcademicResult(int id)
        {
            var reason = await _unitOfWork.Repository<ReasonForBlockingAcademicResult>().GetByIdAsync(id);

            if (reason == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<ReasonForBlockingAcademicResult>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
