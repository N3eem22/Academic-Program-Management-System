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
        [ForeignKey("prog_Info")]
        public int prog_InfoId { get; set; }
        public ProgramInformation prog_Info { get; set; }
        [ForeignKey("TheGrade")]
        public int TheGradeId { get; set; }
        public AllGrades TheGrade { get; set; }
        [ForeignKey("EquivalentEstimate")]
        public int EquivalentEstimateId { get; set; }
        public EquivalentGrade EquivalentEstimate { get; set; }
        public int ThePercentageFrom { get; set; }
        public int ThePercentageTo { get; set;}
        public int PointsFrom { get; set; }
        public int PointsTo { get; set;}
        [ForeignKey("GraduationEstimate")]
        public int GraduationEstimateId { get; set; }
        public EquivalentGrade GraduationEstimate { get; set; }


    }
}
