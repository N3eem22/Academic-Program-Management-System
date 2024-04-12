using AutoMapper;
using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Entities.CoursesInfo;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CoursesInformationsController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public CoursesInformationsController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        [HttpPost]
        public async Task<ActionResult<CourseInfoDTO>> AddCourseInfo([FromBody] CourseInfoDTO courseInfoDTO)
        {
            var preValidationResult = await ValidateForeignKeyExistence(courseInfoDTO);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                var CourseInfo = _unitOfWork.Repository<CourseInformation>().Add(_mapper.Map<CourseInfoDTO, CourseInformation>(courseInfoDTO));
                var result = await _unitOfWork.CompleteAsync() > 0;

                var message = result ? AppMessage.Done : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = $"An error occurred while processing your request: {ex.Message}" });
            }
        }
        private async Task<ActionResult> ValidateForeignKeyExistence(CourseInfoDTO courseInfoDTO)
        {
            // Program existence check
            var programExists = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(courseInfoDTO.ProgramId) != null;
            if (!programExists)
            {
                return NotFound(new ApiResponse(404, $"Program with ID {courseInfoDTO.ProgramId} not found."));
            }

            // Semester existence check
            var semesterExists = await _unitOfWork.Repository<Semesters>().GetByIdAsync(courseInfoDTO.SemesterId) != null;
            if (!semesterExists)
            {
                return NotFound(new ApiResponse(404, $"Semester with ID {courseInfoDTO.SemesterId} not found."));
            }

            // Level existence check
            var levelExists = await _unitOfWork.Repository<Level>().GetByIdAsync(courseInfoDTO.LevelId) != null;
            if (!levelExists)
            {
                return NotFound(new ApiResponse(404, $"Level with ID {courseInfoDTO.LevelId} not found."));
            }

            // CourseType existence check
            var courseTypeExists = await _unitOfWork.Repository<CourseType>().GetByIdAsync(courseInfoDTO.CourseTypeId) != null;
            if (!courseTypeExists)
            {
                return NotFound(new ApiResponse(404, $"CourseType with ID {courseInfoDTO.CourseTypeId} not found."));
            }            
       
            var prerequisiteExists = await _unitOfWork.Repository<Prerequisites>().GetByIdAsync(courseInfoDTO.PrerequisiteId) != null;
            if (!prerequisiteExists)
                {
                    return NotFound(new ApiResponse(404, $"Prerequisite with ID {courseInfoDTO.PrerequisiteId} not found."));
                }
            // Prerequisite courses checks 
            foreach (var prereqCourse in courseInfoDTO.PreRequisiteCourses)
            {
                var prereqExists = await _unitOfWork.Repository<CollegeCourses>().GetByIdAsync(prereqCourse.PreRequisiteCourseId) != null;
                if (!prereqExists)
                {
                    return NotFound(new ApiResponse(404, $"Prerequisite Course with ID {prereqCourse.PreRequisiteCourseId} not found."));
                }
                var courseExists = await _unitOfWork.Repository<CourseInformation>().GetByIdAsync(prereqCourse.CourseInfoId) != null;
                if (!courseExists)
                {
                    return NotFound(new ApiResponse(404, $"Course with ID {prereqCourse.CourseInfoId} not found."));
                }
            }
            // Courses and Grades Details checks
            foreach (var gradeDetail in courseInfoDTO.CoursesandGradesDetails)
            {
                if (gradeDetail.CourseInfoId.HasValue) 
                {
                    var courseExists = await _unitOfWork.Repository<CourseInformation>().GetByIdAsync(gradeDetail.CourseInfoId.Value) != null;
                    if (!courseExists)
                    {
                        return NotFound(new ApiResponse(404, $"Course with ID {gradeDetail.CourseInfoId} not found."));
                    }
                }
               

                if (gradeDetail.GradeDetailsId.HasValue) // Check if GradeDetailsId is not null
                {
                    var gradeExists = await _unitOfWork.Repository<GradesDetails>().GetByIdAsync(gradeDetail.GradeDetailsId.Value) != null; // Use .Value to get the int
                    if (!gradeExists)
                    {
                        return NotFound(new ApiResponse(404, $"Grade Detail with ID {gradeDetail.GradeDetailsId} not found."));
                    }
                }
               
            }
            //Courses and hours check
            foreach (var coursesAndHours in courseInfoDTO.CoursesAndHours)
            {
                var prereqExists = await _unitOfWork.Repository<Hours>().GetByIdAsync(coursesAndHours.HourId) != null;
                if (!prereqExists)
                {
                    return NotFound(new ApiResponse(404, $"Hours with ID {coursesAndHours.HourId} not found."));
                }
                var courseExists = await _unitOfWork.Repository<CourseInformation>().GetByIdAsync(coursesAndHours.CourseInfoId) != null;
                if (!courseExists)
                {
                    return NotFound(new ApiResponse(404, $"Course with ID {coursesAndHours.CourseInfoId} not found."));
                }
            }






            return null;
        }

    }
}
