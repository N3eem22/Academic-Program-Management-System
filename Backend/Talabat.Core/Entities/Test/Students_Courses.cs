using Grad.Core.Entities.CoursesInfo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Core.Entities.Test
{
    public class Students_Courses
    {
        public int CollegeCoursesId { get; set; }
        [ForeignKey(nameof(CollegeCoursesId))]
        public CollegeCourses Courses { get; set; }

        public int StudentsId { get; set; }
        [ForeignKey(nameof(StudentsId))]
        public  Students Students { get; set; }
        public int Grade { get; set; }
        public int Hour { get; set; }
        public float percentage { get; set; }


    }
}
