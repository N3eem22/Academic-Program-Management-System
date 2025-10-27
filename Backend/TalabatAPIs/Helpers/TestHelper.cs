using Grad.Core.Entities.Identity;
using Grad.Core.Entities.Test;
using Microsoft.EntityFrameworkCore;
using Talabat.Core.Entities.Entities;
using Talabat.Repository.Data.Talabat.Repository.Data;

namespace Grad.APIs.Helpers
{
    public class TestHelper
    {
        private readonly GradContext _dbContext;

        public TestHelper(GradContext dbContext)
        {
            _dbContext = dbContext;
        }

        public string GetCollegeNameById(int collegeId)
        {

            var collegeName = _dbContext.Set<Faculty>()
                                        .Where(c => c.Id == collegeId)
                                        .Select(c => c.FacultyName)
                                        .FirstOrDefault();
            return collegeName;
        }

        public string GetUniversityNameByUniversityID(int UniversityID)
        {
            var universityName = _dbContext.Set<University>()
                                        .Where(c => c.Id == UniversityID)
                                        .Select(c => c.Name)
                                        .FirstOrDefault();
            return universityName;
        }

        public string GetProgramNameById(int programId)
        {
            var programName = _dbContext.Set<Programs>()
                                        .Where(c => c.Id == programId)
                                        .Select(c => c.ProgramNameInArabic)
                                        .FirstOrDefault();
            return programName;
        }




        public async Task<(double GPA, string Grade)> CalculateGPAAndGradeAsync(int studentId)
            {
                var studentCourses = await _dbContext.Set<Students_Courses>()
                                                     .Where(sc => sc.StudentsId == studentId)
                                                     .ToListAsync();

                double totalPoints = 0;
                int totalHours = 0;

                foreach (var course in studentCourses)
                {
                    double gpaGrade = ConvertGradeToGPA(course.Grade);
                    totalPoints += gpaGrade * course.Hour;
                    totalHours += course.Hour;
                }

                double GPA = totalHours > 0 ? totalPoints / totalHours : 0;

                  GPA = Math.Round(GPA, 2);

                 string finalGrade = GetFinalGrade(GPA);

                return (GPA, finalGrade);
            }

            private double ConvertGradeToGPA(int grade)
            {
                // Convert percentage grade to 4.0 GPA scale
                if (grade >= 90) return 4.0;
                if (grade >= 85) return 3.7;
                if (grade >= 80) return 3.3;
                if (grade >= 75) return 3.0;
                if (grade >= 70) return 2.7;
                if (grade >= 65) return 2.3;
                if (grade >= 60) return 2.0;
                if (grade >= 55) return 1.7;
                if (grade >= 50) return 1.0;
                return 0.0;
            }

            private string GetFinalGrade(double GPA)
            {
                if (GPA >= 3.7) return "ممتاز";
                if (GPA >= 3.0) return "جيد جدا";
                if (GPA >= 2.4) return "جيد";
                if (GPA >= 2.0) return "مقبول";
                return "راسب";
            }
        }



    }


