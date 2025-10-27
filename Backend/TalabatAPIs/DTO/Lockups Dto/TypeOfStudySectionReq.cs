using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class TypeOfStudySectionReq
    {
        [Required(ErrorMessage = "نوع قسم الدراسة مطلوب")]
        public string TheTypeOfStudySectio { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
