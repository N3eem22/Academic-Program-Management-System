using AutoMapper;
using Grad.APIs.DTO.TestDTO;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Test;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using Talabat.APIs.Controllers;
using Talabat.Core;
using Talabat.Repository.Data.Talabat.Repository.Data;

namespace Grad.APIs.Controllers
{
    public class finalresultController : APIBaseController
    {


        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly GradContext _dbContext;
        private readonly TestHelper _TestHelper;



        public finalresultController(IMapper mapper, IUnitOfWork unitOfWork, GradContext dbContext, TestHelper testHelper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _dbContext = dbContext;
            _TestHelper = testHelper;

        }


        [HttpGet]

        public async Task<ActionResult<IEnumerable<FinalResultDto>>> GetAllStudentsFinalResults()
        {
            var students = await _dbContext.Set<Students>().ToListAsync();
            var finalResultsDto = new List<FinalResultDto>();

            foreach (var student in students)
            {
                var (GPA, finalGrade) = await _TestHelper.CalculateGPAAndGradeAsync(student.Id);

                var finalResultDto = new FinalResultDto
                {
                    Id = student.Id,
                    StudentName = student.StudentName,
                    University =  _TestHelper.GetCollegeNameById(student.UniversityId),
                    Faculty =  _TestHelper.GetCollegeNameById(student.FacultyId),
                    program =  _TestHelper.GetProgramNameById(student.ProgramsId),
                    GPA = GPA,
                    Grade = finalGrade
                };

                finalResultsDto.Add(finalResultDto);
            }

            return Ok(finalResultsDto);
        }

        [HttpGet("{studentId}")]
        public async Task<ActionResult<FinalResultDto>> GetStudentFinalResult(int studentId)
        {
            var student = await _dbContext.Set<Students>().FindAsync(studentId);
            if (student == null)
            {
                return NotFound();
            }

            var (GPA, finalGrade) = await _TestHelper.CalculateGPAAndGradeAsync(studentId);

            var finalResultDto = new FinalResultDto
            {
                Id = student.Id,
                StudentName = student.StudentName,
                University =  _TestHelper.GetUniversityNameByUniversityID(student.UniversityId),
                Faculty =  _TestHelper.GetCollegeNameById(student.FacultyId),
                program =  _TestHelper.GetProgramNameById(student.ProgramsId),
                GPA = GPA,
                Grade = finalGrade
            };

            return Ok(finalResultDto);
        }
    }
}

