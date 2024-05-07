using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class TypeOfFeesReq
    {
        [Required(ErrorMessage = "نوع الرسوم مطلوب")]
        public string TypeOfFees { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
