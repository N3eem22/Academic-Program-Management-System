using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class GradesDetailsReq
    {
        [Required(ErrorMessage = "التفاصيل مطلوبة")]
        public string TheDetails { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
