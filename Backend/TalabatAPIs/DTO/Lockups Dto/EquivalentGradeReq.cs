using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class EquivalentGradeReq
    {
        [Required(ErrorMessage = "الدرجة المكافئة مطلوبة")]
        public string equivalentGrade { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}