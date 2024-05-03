using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.ProgrmInformation
{
    public class Program_TheGradesReqDTO
    {
        public int prog_InfoId { get; set; }
        public int TheGradeId { get; set; }
        public int EquivalentEstimateId { get; set; }
        public int ThePercentageFrom { get; set; }
        public int ThePercentageTo { get; set; }
        public int PointsFrom { get; set; }
        public int PointsTo { get; set; }
        public int GraduationEstimateId { get; set; }
    }
}
