using AutoMapper;
using Grad.APIs.DTO;
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
    public class PreviousQualificationController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public PreviousQualificationController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PreviousQualificationDTO>>> GetAllPreviousQualifications(int? UniversityId)
        {
            var spec = new PreviousQualificationwithUniSpecifications(UniversityId);
            var qualifications = await _unitOfWork.Repository<PreviousQualification>().GetAllWithSpecAsync(spec);

            var qualificationsDTO = _mapper.Map<IEnumerable<PreviousQualification>, IEnumerable<PreviousQualificationDTO>>(qualifications);

            return Ok(qualificationsDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(PreviousQualificationDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<PreviousQualificationDTO>> GetPreviousQualificationById(int id)
        {
            var spec = new PreviousQualificationwithUniSpecifications(id);
            var qualification = await _unitOfWork.Repository<PreviousQualification>().GetEntityWithSpecAsync(spec);

            if (qualification == null)
                return NotFound(new ApiResponse(404));

            var qualificationDTO = _mapper.Map<PreviousQualification, PreviousQualificationDTO>(qualification);

            return Ok(qualificationDTO);
        }

        [HttpPost]
        public async Task<ActionResult<PreviousQualificationReq>> AddPreviousQualification(PreviousQualificationReq qualificationDTO)
        {
            bool exists = await _unitOfWork.Repository<PreviousQualification>().ExistAsync(
                x => x.previousQualification.Trim().ToUpper() == qualificationDTO.previousQualification.Trim().ToUpper() &&
                     x.UniversityId == qualificationDTO.UniversityId && !x.IsDeleted);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var qualification = _unitOfWork.Repository<PreviousQualification>().Add(_mapper.Map<PreviousQualificationReq, PreviousQualification>(qualificationDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PreviousQualificationReq>> UpdatePreviousQualification(int id, string updatedQualification)
        {
            var qualification = await _unitOfWork.Repository<PreviousQualification>().GetByIdAsync(id);

            if (qualification == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<PreviousQualification>().ExistAsync(
                x => x.previousQualification.Trim().ToUpper() == updatedQualification.Trim().ToUpper() &&  x.UniversityId == qualification.UniversityId && !x.IsDeleted);

            if (!exists)
            {
                qualification.previousQualification = updatedQualification;
                _unitOfWork.Repository<PreviousQualification>().Update(qualification);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePreviousQualification(int id)
        {
            var qualification = await _unitOfWork.Repository<PreviousQualification>().GetByIdAsync(id);

            if (qualification == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<PreviousQualification>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
