using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.CoursesInfo
{
    public class DetailsOfFailingGrades  
    {
        public int CourseInfoId { get; set; }
        public CourseInformation CourseInformation { get; set; }

        public int FailedGradeId { get; set; }
        public GradesDetails FailedGrade { get; set; }

        public int Value { get; set; }
    }
}
