using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Core.Entities.Graduation
{
    public class AverageValue
    {
        public int value { get; set; }
        public int YearValue { get; set; }
        public int GraduationId { get; set; }
        [ForeignKey(nameof(GraduationId))]
        public Graduation Graduation { get; set; }

        public int EquivalentGradeId { get; set; }
        [ForeignKey(name: nameof(EquivalentGradeId))]
        public EquivalentGrade EquivalentGrade { get; set; }
        public int AllGradesId { get; set; }
        [ForeignKey(nameof(AllGradesId))]
        public AllGrades AllGrades { get; set; }
    }
}
