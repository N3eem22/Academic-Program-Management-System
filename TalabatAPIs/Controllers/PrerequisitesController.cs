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
    public class PrerequisitesController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public PrerequisitesController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PrerequisitesDTO>>> GetAllPrerequisites(int? UniversityId)
        {
            var spec = new PrerequisiteswithUniSpecifications(UniversityId);
            var prerequisites = await _unitOfWork.Repository<Prerequisites>().GetAllWithSpecAsync(spec);

            var prerequisitesDTO = _mapper.Map<IEnumerable<Prerequisites>, IEnumerable<PrerequisitesDTO>>(prerequisites);

            return Ok(prerequisitesDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(PrerequisitesDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<PrerequisitesDTO>> GetPrerequisiteById(int id)
        {
            var spec = new PrerequisiteswithUniSpecifications(id);
            var prerequisite = await _unitOfWork.Repository<Prerequisites>().GetEntityWithSpecAsync(spec);

            if (prerequisite == null)
                return NotFound(new ApiResponse(404));

            var prerequisiteDTO = _mapper.Map<Prerequisites, PrerequisitesDTO>(prerequisite);

            return Ok(prerequisiteDTO);
        }

        [HttpPost]
        public async Task<ActionResult<PrerequisitesReq>> AddPrerequisite(PrerequisitesReq prerequisiteDTO)
        {
            bool exists = await _unitOfWork.Repository<Prerequisites>().ExistAsync(
                x => x.Prerequisite.Trim().ToUpper() == prerequisiteDTO.Prerequisite.Trim().ToUpper() &&
                     x.UniversityId == prerequisiteDTO.UniversityId);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var prerequisite = _unitOfWork.Repository<Prerequisites>().Add(_mapper.Map<PrerequisitesReq, Prerequisites>(prerequisiteDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PrerequisitesReq>> UpdatePrerequisite(int id, string updatedPrerequisite)
        {
            var prerequisite = await _unitOfWork.Repository<Prerequisites>().GetByIdAsync(id);

            if (prerequisite == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<Prerequisites>().ExistAsync(
                x => x.Prerequisite.Trim().ToUpper() == updatedPrerequisite.Trim().ToUpper() && x.UniversityId == prerequisite.UniversityId);

            if (!exists)
            {
                prerequisite.Prerequisite = updatedPrerequisite;
                _unitOfWork.Repository<Prerequisites>().Update(prerequisite);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrerequisite(int id)
        {
            var prerequisite = await _unitOfWork.Repository<Prerequisites>().GetByIdAsync(id);

            if (prerequisite == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<Prerequisites>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
