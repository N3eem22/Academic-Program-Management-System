using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.CoursesInfo
{
    public class CoursesandGradesDetails 
    {
        public int? CourseInfoId { get; set; }
        public CourseInformation CourseInformation { get; set; }

        public int? GradeDetailsId { get; set; }
        public GradesDetails GradesDetails { get; set; }

        public int Value { get; set; }
    }
}
