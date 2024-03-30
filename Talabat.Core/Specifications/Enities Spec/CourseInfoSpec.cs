using Grad.Core.Entities.CoursesInfo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class CourseInfoSpec : BaseSpecifications<CourseInformation>
    {
        public CourseInfoSpec(int? courseId)
           : base(c => (!courseId.HasValue || c.CourseId == courseId.Value))
        {
            Includes.Add(c => c.Courses);
            Includes.Add(c => c.Semester);
            Includes.Add(c => c.level);
            Includes.Add(c => c.Prerequisites);
            Includes.Add(c => c.CourseType);
            Includes.Add(c => c.FirstGrades);
            Includes.Add(c => c.SecondGrades);
            Includes.Add(c => c.ThirdGrades);
            Includes.Add(c => c.PreviousQualification);
            Includes.Add(c => c.PreviousQualification);
            Includes.Add(c => c.coursesandGradesDetails);
            Includes.Add(c => c.coursesAndHours);
            Includes.Add(c => c.detailsOfFailingGrades);
            Includes.Add(c => c.preRequisiteCourses);


        }
    }
}
