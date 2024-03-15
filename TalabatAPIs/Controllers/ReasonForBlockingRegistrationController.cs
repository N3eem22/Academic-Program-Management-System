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
    public class ReasonForBlockingRegistrationController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public ReasonForBlockingRegistrationController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReasonForBlockingRegistrationDTO>>> GetAllReasonsForBlockingRegistration(int? UniversityId)
        {
            var spec = new ReasonForBlockingRegistrationwithUniSpecifications(UniversityId);
            var reasons = await _unitOfWork.Repository<ReasonForBlockingRegistration>().GetAllWithSpecAsync(spec);

            var reasonsDTO = _mapper.Map<IEnumerable<ReasonForBlockingRegistration>, IEnumerable<ReasonForBlockingRegistrationDTO>>(reasons);

            return Ok(reasonsDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ReasonForBlockingRegistrationDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<ReasonForBlockingRegistrationDTO>> GetReasonForBlockingRegistrationById(int id)
        {
            var spec = new ReasonForBlockingRegistrationwithUniSpecifications(id);
            var reason = await _unitOfWork.Repository<ReasonForBlockingRegistration>().GetEntityWithSpecAsync(spec);

            if (reason == null)
                return NotFound(new ApiResponse(404));

            var reasonDTO = _mapper.Map<ReasonForBlockingRegistration, ReasonForBlockingRegistrationDTO>(reason);

            return Ok(reasonDTO);
        }

        [HttpPost]
        public async Task<ActionResult<ReasonForBlockingRegistrationReq>> AddReasonForBlockingRegistration(ReasonForBlockingRegistrationReq reasonDTO)
        {
            bool exists = await _unitOfWork.Repository<ReasonForBlockingRegistration>().ExistAsync(
                x => x.TheReasonForBlockingRegistration.Trim().ToUpper() == reasonDTO.TheReasonForBlockingRegistration.Trim().ToUpper() &&
                     x.UniversityId == reasonDTO.UniversityId);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var reason = _unitOfWork.Repository<ReasonForBlockingRegistration>().Add(_mapper.Map<ReasonForBlockingRegistrationReq, ReasonForBlockingRegistration>(reasonDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ReasonForBlockingRegistrationReq>> UpdateReasonForBlockingRegistration(int id, string updatedReason)
        {
            var reason = await _unitOfWork.Repository<ReasonForBlockingRegistration>().GetByIdAsync(id);

            if (reason == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<ReasonForBlockingRegistration>().ExistAsync(
                x => x.TheReasonForBlockingRegistration.Trim().ToUpper() == updatedReason.Trim().ToUpper() && x.UniversityId == reason.UniversityId);

            if (!exists)
            {
                reason.TheReasonForBlockingRegistration = updatedReason;
                _unitOfWork.Repository<ReasonForBlockingRegistration>().Update(reason);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReasonForBlockingRegistration(int id)
        {
            var reason = await _unitOfWork.Repository<ReasonForBlockingRegistration>().GetByIdAsync(id);

            if (reason == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<ReasonForBlockingRegistration>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
