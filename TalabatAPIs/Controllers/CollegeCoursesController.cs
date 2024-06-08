using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications;
using Grad.Core.Specifications.Enities_Spec;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Globalization;
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
        [HttpGet("search")]
        [ProducesResponseType(typeof(IEnumerable<CollegeCoursesDTO>), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<IEnumerable<CollegeCoursesDTO>>> SearchCollegeCourses(
          [FromQuery] int courseCode,
          [FromQuery] int facultyId)
        {
            var spec = new CollegeCoursesSearchSpecification(courseCode, facultyId);
            var collegeCourses = await _unitOfWork.Repository<CollegeCourses>().GetEntityWithSpecAsync(spec);

            if (collegeCourses == null)
                return NotFound(new ApiResponse(404));

            var collegeCourseDTO = _mapper.Map<CollegeCourses, CollegeCoursesDTO>(collegeCourses);
            return Ok(collegeCourseDTO);
        }




        [HttpPost]
        public async Task<ActionResult> AddCollegeCourse(CollegeCoursesReq collegeCourseReq)
        {
            bool exists = await CourseExistsAsync(collegeCourseReq);
            if (exists)
                return StatusCode(409, new ApiResponse(409));

            try
            {
                // تحويل الأرقام العربية إلى أرقام صحيحة
                int courseCodeInArabic = ConvertArabicNumberToInt(collegeCourseReq.CourseCodeInArabic);
                int? subCourseCodeInArabic = string.IsNullOrEmpty(collegeCourseReq.Sub_CourseCodeInArabic) ? (int?)null : ConvertArabicNumberToInt(collegeCourseReq.Sub_CourseCodeInArabic);

                // تعيين القيم المحولة إلى كائن CollegeCourses
                var collegeCourse = new CollegeCourses
                {
                    CourseNameInArabic = collegeCourseReq.CourseNameInArabic,
                    CourseNameInEnglish = collegeCourseReq.CourseNameInEnglish,
                    CourseCodeInArabic = courseCodeInArabic,
                    CourseCodeInEnglish = collegeCourseReq.CourseCodeInEnglish,
                    Sub_CourseNameInArabic = collegeCourseReq.Sub_CourseNameInArabic,
                    Sub_CourseNameInEnglish = collegeCourseReq.Sub_CourseNameInEnglish,
                    Sub_CourseCodeInArabic = subCourseCodeInArabic ?? 0,
                    Sub_CourseCodeInEnglish = collegeCourseReq.Sub_CourseCodeInEnglish ?? 0,
                    CourseNickname = collegeCourseReq.CourseNickname,
                    ContentSummaryInArabic = collegeCourseReq.ContentSummaryInArabic,
                    ContentSummaryInEnglish = collegeCourseReq.ContentSummaryInEnglish,
                    FacultyId = collegeCourseReq.FacultyId
                };

                _unitOfWork.Repository<CollegeCourses>().Add(collegeCourse);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Done : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            catch (FormatException)
            {
                return BadRequest("Invalid Arabic number format.");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCollegeCourse(int id, CollegeCoursesReq collegeCourseReq)
        {
            var collegeCourse = await _unitOfWork.Repository<CollegeCourses>().GetByIdAsync(id);
            if (collegeCourse == null)
                return NotFound(new ApiResponse(404));

            bool exists = await CourseExistsAsync(collegeCourseReq);
            if (exists)
                return StatusCode(409, new ApiResponse(409));

            try
            {
                int courseCodeInArabic = ConvertArabicNumberToInt(collegeCourseReq.CourseCodeInArabic);
                int? subCourseCodeInArabic = string.IsNullOrEmpty(collegeCourseReq.Sub_CourseCodeInArabic) ? (int?)null : ConvertArabicNumberToInt(collegeCourseReq.Sub_CourseCodeInArabic);

                collegeCourse.CourseNameInArabic = collegeCourseReq.CourseNameInArabic;
                collegeCourse.CourseNameInEnglish = collegeCourseReq.CourseNameInEnglish;
                collegeCourse.CourseCodeInArabic = courseCodeInArabic;
                collegeCourse.CourseCodeInEnglish = collegeCourseReq.CourseCodeInEnglish;
                collegeCourse.Sub_CourseNameInArabic = collegeCourseReq.Sub_CourseNameInArabic;
                collegeCourse.Sub_CourseNameInEnglish = collegeCourseReq.Sub_CourseNameInEnglish;
                collegeCourse.Sub_CourseCodeInArabic = subCourseCodeInArabic ?? 0;
                collegeCourse.Sub_CourseCodeInEnglish = collegeCourseReq.Sub_CourseCodeInEnglish ?? 0;
                collegeCourse.CourseNickname = collegeCourseReq.CourseNickname;
                collegeCourse.ContentSummaryInArabic = collegeCourseReq.ContentSummaryInArabic;
                collegeCourse.ContentSummaryInEnglish = collegeCourseReq.ContentSummaryInEnglish;
                collegeCourse.FacultyId = collegeCourseReq.FacultyId;

                _unitOfWork.Repository<CollegeCourses>().Update(collegeCourse);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            catch (FormatException)
            {
                return BadRequest("Invalid Arabic number format.");
            }
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
                x.FacultyId == collegeCourseReq.FacultyId && !x.IsDeleted);
            return exists;
        }


        //private int ConvertArabicNumberToInt(string arabicNumber)
        //{
        //    var culture = new CultureInfo("ar-SA");
        //    if (int.TryParse(arabicNumber, NumberStyles.Any, culture, out int result))
        //    {
        //        return result;
        //    }
        //    else
        //    {
        //        throw new FormatException("Invalid Arabic number format.");
        //    }
        //}

        private int ConvertArabicNumberToInt(string arabicNumber)
        {
            // تحويل الأرقام العربية إلى أرقام لاتينية
            string latinNumber = string.Join("", arabicNumber.Select(c => char.GetNumericValue(c)));

            // تحويل النص الناتج إلى عدد صحيح
            return int.Parse(latinNumber);
        }




    }
}
