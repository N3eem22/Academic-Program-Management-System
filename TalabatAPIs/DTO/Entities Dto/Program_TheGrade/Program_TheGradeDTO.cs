using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto.Program_TheGrade
{
    public class Program_TheGradeDTO
    {
        public int Id { get; set; }
        public int prog_InfoId { get; set; }
        public string TheGrade { get; set; }
        public string EquivalentEstimate { get; set; }
        public int ThePercentageFrom { get; set; }
        public int ThePercentageTo { get; set; }
        public int PointsFrom { get; set; }
        public int PointsTo { get; set; }
        public string GraduationEstimate { get; set; }
    }
}
