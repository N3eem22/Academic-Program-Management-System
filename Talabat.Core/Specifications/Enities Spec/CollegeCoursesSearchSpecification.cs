using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class CollegeCoursesSearchSpecification : BaseSpecifications<CollegeCourses>
    {
        public CollegeCoursesSearchSpecification(int courseCode, int facultyId)
            : base(x =>
                ( x.CourseCodeInEnglish == courseCode) &&
            ( x.FacultyId == facultyId))
        {
            Includes.Add(x => x.Faculty); // Include the faculty information
        }
    }
}
