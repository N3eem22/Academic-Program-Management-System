using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
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
    public class CollegeCoursesController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public CollegeCoursesController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CollegeCoursesDTO>>> GetAllCollegeCourses(int? FacultyId)
        {
            var spec = new CollegeCoursesReqwithFacultySpecifications(FacultyId);
            var collegeCourses = await _unitOfWork.Repository<CollegeCourses>().GetAllWithSpecAsync(spec);
            var collegeCourseDTOs = _mapper.Map<IEnumerable<CollegeCourses>, IEnumerable<CollegeCoursesDTO>>(collegeCourses);
            return Ok(collegeCourseDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CollegeCoursesDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<CollegeCoursesDTO>> GetCollegeCourseById(int id)
        {
            var spec = new CollegeCoursesReqwithFacultySpecifications(id);
            var collegeCourse = await _unitOfWork.Repository<CollegeCourses>().GetEntityWithSpecAsync(spec);
            if (collegeCourse == null)
                return NotFound(new ApiResponse(404));
            var collegeCourseDTO = _mapper.Map<CollegeCourses, CollegeCoursesDTO>(collegeCourse);
            return Ok(collegeCourseDTO);
        }

        [HttpPost]
        public async Task<ActionResult<CollegeCoursesReq>> AddCollegeCourse(CollegeCoursesReq collegeCourseReq)
        {
            bool exists = await CourseExistsAsync(collegeCourseReq);
            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var collegeCourse = _unitOfWork.Repository<CollegeCourses>().Add(_mapper.Map<CollegeCoursesReq, CollegeCourses>(collegeCourseReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CollegeCoursesReq>> UpdateCollegeCourse(int id, CollegeCoursesReq collegeCourseReq)
        {
            var collegeCourse = await _unitOfWork.Repository<CollegeCourses>().GetByIdAsync(id);
            if (collegeCourse == null)
                return NotFound(new ApiResponse(404));

            bool exists = await CourseExistsAsync(collegeCourseReq);
            if (exists)
                return StatusCode(409, new ApiResponse(409));

            _mapper.Map(collegeCourseReq, collegeCourse);
            _unitOfWork.Repository<CollegeCourses>().Update(collegeCourse);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Updated : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCollegeCourse(int id)
        {
            var collegeCourse = await _unitOfWork.Repository<CollegeCourses>().GetByIdAsync(id);
            if (collegeCourse == null)
                return NotFound(new ApiResponse(404));
           await _unitOfWork.Repository<CollegeCourses>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }

        private async Task<bool> CourseExistsAsync(CollegeCoursesReq collegeCourseReq)
        {
            var exists = await _unitOfWork.Repository<CollegeCourses>().ExistAsync(x =>
                x.CourseNameInArabic.Trim().ToUpper() == collegeCourseReq.CourseNameInArabic.Trim().ToUpper() &&
                x.CourseNameInEnglish.Trim().ToUpper() == collegeCourseReq.CourseNameInEnglish.Trim().ToUpper() &&
                x.CourseCodeInArabic.ToString().Trim().ToUpper() == collegeCourseReq.CourseCodeInArabic.ToString().Trim().ToUpper() &&
                x.CourseCodeInEnglish.ToString().Trim().ToUpper() == collegeCourseReq.CourseCodeInEnglish.ToString().Trim().ToUpper() &&
                x.FacultyId == collegeCourseReq.FacultyId);
            return exists;
        }

    }
}
