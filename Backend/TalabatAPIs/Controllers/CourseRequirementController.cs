using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseRequirementController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public CourseRequirementController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseRequirementDTO>>> GetAllCourseRequirements(int? UniversityId)
        {
            var spec = new CourseRequirementwithUniSpecifications(UniversityId);
            var requirements = await _unitOfWork.Repository<CourseRequirement>().GetAllWithSpecAsync(spec);

            var requirementDTOs = _mapper.Map<IEnumerable<CourseRequirement>, IEnumerable<CourseRequirementDTO>>(requirements);

            return Ok(requirementDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CourseRequirementDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<CourseRequirementDTO>> GetCourseRequirementById(int id)
        {
            var spec = new CourseRequirementwithUniSpecifications(id);
            var requirement = await _unitOfWork.Repository<CourseRequirement>().GetEntityWithSpecAsync(spec);

            if (requirement == null)
                return NotFound(new ApiResponse(404));

            var requirementDTO = _mapper.Map<CourseRequirement, CourseRequirementDTO>(requirement);

            return Ok(requirementDTO);
        }

        [HttpPost]
        public async Task<ActionResult<CourseRequirementReq>> AddCourseRequirement(CourseRequirementReq requirementDTO)
        {
            bool exists = await _unitOfWork.Repository<CourseRequirement>().ExistAsync(
                x => x.courseRequirement.Trim().ToUpper() == requirementDTO.courseRequirement.Trim().ToUpper() &&
                     x.UniversityId == requirementDTO.UniversityId && !x.IsDeleted);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var requirement = _unitOfWork.Repository<CourseRequirement>().Add(_mapper.Map<CourseRequirementReq, CourseRequirement>(requirementDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CourseRequirementReq>> UpdateCourseRequirement(int id, string updatedRequirement)
        {
            var requirement = await _unitOfWork.Repository<CourseRequirement>().GetByIdAsync(id);

            if (requirement == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<CourseRequirement>().ExistAsync(
                x => x.courseRequirement.Trim().ToUpper() == updatedRequirement.Trim().ToUpper() && x.UniversityId == requirement.UniversityId && !x.IsDeleted);

            if (!exists)
            {
                requirement.courseRequirement = updatedRequirement;
                _unitOfWork.Repository<CourseRequirement>().Update(requirement);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourseRequirement(int id)
        {
            var requirement = await _unitOfWork.Repository<CourseRequirement>().GetByIdAsync(id);

            if (requirement == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<CourseRequirement>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
