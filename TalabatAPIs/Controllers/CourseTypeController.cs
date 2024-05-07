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
    public class CourseTypeController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public CourseTypeController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseTypeDTO>>> GetAllCourseTypes(int? UniversityId)
        {
            var spec = new CourseTypewithUniSpecifications(UniversityId);
            var courseTypes = await _unitOfWork.Repository<CourseType>().GetAllWithSpecAsync(spec);
            var courseTypeDTOs = _mapper.Map<IEnumerable<CourseType>, IEnumerable<CourseTypeDTO>>(courseTypes);
            return Ok(courseTypeDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CourseTypeDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<CourseTypeDTO>> GetCourseTypeById(int id)
        {
            var spec = new CourseTypewithUniSpecifications(id);
            var courseType = await _unitOfWork.Repository<CourseType>().GetEntityWithSpecAsync(spec);
            if (courseType == null)
                return NotFound(new ApiResponse(404));
            var courseTypeDTO = _mapper.Map<CourseType, CourseTypeDTO>(courseType);
            return Ok(courseTypeDTO);
        }

        [HttpPost]
        public async Task<ActionResult<CourseTypeReq>> AddCourseType(CourseTypeReq courseTypeReq)
        {
            bool exists = await _unitOfWork.Repository<CourseType>().ExistAsync(
                x => x.courseType.Trim().ToUpper() == courseTypeReq.courseType.Trim().ToUpper() &&
                     x.UniversityId == courseTypeReq.UniversityId && !x.IsDeleted);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var courseType = _unitOfWork.Repository<CourseType>().Add(_mapper.Map<CourseTypeReq, CourseType>(courseTypeReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CourseTypeReq>> UpdateCourseType(int id,  string updatedCourseType)
        {
            var courseType = await _unitOfWork.Repository<CourseType>().GetByIdAsync(id);
            if (courseType == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<CourseType>().ExistAsync(
                x => x.courseType.Trim().ToUpper() == updatedCourseType.Trim().ToUpper() &&
                     x.UniversityId == courseType.UniversityId && !x.IsDeleted);
            if (!exists)
            {
                courseType.courseType = updatedCourseType;
                _unitOfWork.Repository<CourseType>().Update(courseType);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourseType(int id)
        {
            var courseType = await _unitOfWork.Repository<CourseType>().GetByIdAsync(id);
            if (courseType == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<CourseType>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
