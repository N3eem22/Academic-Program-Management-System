using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.CoursesInfo
{
    public class CoursesAndHours 
    {
        public int CourseInfoId { get; set; }
        public CourseInformation CourseInformation { get; set; }

        public int HourId { get; set; }
        public Hours Hours { get; set; }
    }
}
