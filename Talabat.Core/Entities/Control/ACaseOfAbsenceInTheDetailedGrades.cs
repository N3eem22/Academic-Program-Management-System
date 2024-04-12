using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Control
{
    public class ACaseOfAbsenceInTheDetailedGrades : BaseEntity
    {
        public int GradeGetailId { get; set; }
        public GradesDetails GradesDetails { get; set; }
        public int ControlId { get; set; }
        public Control Control { get; set; }
    }
}
