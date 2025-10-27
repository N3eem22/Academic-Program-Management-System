using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Core.Entities.CoursesInfo
{
    public class PreRequisiteCourses
    {
        public int PreRequisiteCourseId { get; set; }
        public CollegeCourses Courses { get; set; }
        public int CourseInfoId { get; set; }
        public CourseInformation CourseInformation { get; set; }
    }
}
