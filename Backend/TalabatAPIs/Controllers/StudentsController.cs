using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.DTO.TestDTO;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Identity;
using Grad.Core.Entities.Test;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Lockups;
using Talabat.Repository.Data.Talabat.Repository.Data;

namespace Grad.APIs.Controllers
{
  
    public class StudentsController : APIBaseController
    {


        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly GradContext _dbContext;
        private readonly TestHelper _TestHelper;



        public StudentsController(IMapper mapper, IUnitOfWork unitOfWork , GradContext dbContext , TestHelper testHelper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _dbContext = dbContext;
            _TestHelper = testHelper;

        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<StudentsDto>>> GetAllStudents()
        {
            var students = await _unitOfWork.Repository<Students>().GetAllAsync();

            var courses = await _dbContext.Set<Students_Courses>().ToListAsync();

            var studentsDto = students.Select( student => new StudentsDto
            {
                Id = student.Id,
                StudentName = student.StudentName,
                BirthDate = student.BirthDate,
                Type = student.Type,
                Nationality = student.nationality,
                Religion = student.religion,
                NationalId = student.NationalId,
                University =   _TestHelper.GetUniversityNameByUniversityID(student.UniversityId),
                Faculty=   _TestHelper.GetCollegeNameById(student.FacultyId),
                program =  _TestHelper.GetProgramNameById(student.ProgramsId),
                Courses = courses
                    .Where(course => course.StudentsId == student.Id)
                    .Select(course => new CourseRequest
                    {
                        CollegeCoursesId = course.CollegeCoursesId,
                        Grade = course.Grade,
                        Hour = course.Hour,
                        Percentage = course.percentage
                    })
                    .ToList()
            }).ToList();

            return Ok(studentsDto);
        }



        [HttpPost]
        public async Task<ActionResult<StudentsDto>> AddStudent(StudentReq studentReq)
            {
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newStudent = new Students
            {
                StudentName = studentReq.StudentName,
                BirthDate = studentReq.BirthDate,
                Type = studentReq.Type,
                nationality = studentReq.nationality,
                religion = studentReq.religion,
                NationalId = studentReq.NationalId,
                UniversityId = studentReq.UniversityId,
                FacultyId = studentReq.FacultyId,
                ProgramsId = studentReq.programId
            };

            try
            {
                _unitOfWork.Repository<Students>().Add(newStudent);
                var result = await _unitOfWork.CompleteAsync() > 0;

                if (studentReq.Courses != null && studentReq.Courses.Any())
                {
                    foreach (var course in studentReq.Courses)
                    {
                        var newStudentCourse = new Students_Courses
                        {
                            CollegeCoursesId = course.CollegeCoursesId,
                            StudentsId = newStudent.Id,
                            Grade = course.Grade,
                            Hour = course.Hour,
                            percentage = course.Percentage
                        };
                      await  _dbContext.Set<Students_Courses>().AddAsync(newStudentCourse);
                    }
                    var result2 = await _unitOfWork.CompleteAsync() > 0;
                }

                var message = result ? AppMessage.Done : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while adding the student: {ex.Message}");
            }

           
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteStudent(int id)
        {
            try
            {

                var studentToDelete = await _unitOfWork.Repository<Students>().GetByIdAsync(id);

                if (studentToDelete == null)
                {
                    return NotFound($"Student with ID {id} not found.");
                }



                var studentCourses = await _dbContext.Set<Students_Courses>().Where(sc => sc.StudentsId == id).ToListAsync();
                if (studentCourses != null && studentCourses.Any())
                {
                    foreach (var course in studentCourses)
                    {
                        _dbContext.Set<Students_Courses>().Remove(course);
                    }
                    await _unitOfWork.CompleteAsync();
                }

                // حذف الطالب من قاعدة البيانات
                _unitOfWork.Repository<Students>().Delete(studentToDelete);
                await _unitOfWork.CompleteAsync();

              

                return Ok($"Student with ID {id} deleted successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while deleting the student: {ex.Message}");
            }
        }



    }

}
