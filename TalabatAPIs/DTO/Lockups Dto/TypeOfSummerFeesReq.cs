using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class TypeOfSummerFeesReq
    {
        [Required(ErrorMessage = "نوع رسوم الصيف مطلوب")]
        public string TheTypeOfSummerFees { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
