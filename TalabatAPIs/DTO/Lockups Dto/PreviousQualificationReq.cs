using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class PreviousQualificationReq
    {
        [Required(ErrorMessage = "المؤهل السابق مطلوب")]
        public string previousQualification { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
