using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Control
{
    public class ExceptionalLetterGrades : BaseEntity
    {
        public int GradeId { get; set; }
        public AllGrades Grades { get; set; }
        public int ControlId { get; set; }
        public Control Control { get; set; }
        public int Value { get; set; }
    }
}
