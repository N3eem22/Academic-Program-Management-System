using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Academic_regulation
{
    [Table("AR_Program_TheGrades")]
    public class Program_TheGrades: BaseEntity
    {
        public int prog_InfoId { get; set; }
        [ForeignKey(nameof(prog_InfoId))]
        public ProgramInformation prog_Info { get; set; }
        public int TheGradeId { get; set; }
        [ForeignKey(nameof(TheGradeId))]
        public AllGrades TheGrade { get; set; }
        public int EquivalentEstimateId { get; set; }
        [ForeignKey(nameof(EquivalentEstimateId))]
        public EquivalentGrade EquivalentEstimate { get; set; }
        public int ThePercentageFrom { get; set; }
        public int ThePercentageTo { get; set;}
        public int PointsFrom { get; set; }
        public int PointsTo { get; set;}
        public int GraduationEstimateId { get; set; }
        [ForeignKey(nameof(GraduationEstimateId))]
        public EquivalentGrade GraduationEstimate { get; set; }


    }
}
