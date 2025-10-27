using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto.Graduation
{
    public class AverageValueDTO
    {
        public int value { get; set; }
        public int YearValue { get; set; }
        public int GraduationId { get; set; }
        public string EquivalentGrade { get; set; }
        public string Grades { get; set; }
        
    }
}
