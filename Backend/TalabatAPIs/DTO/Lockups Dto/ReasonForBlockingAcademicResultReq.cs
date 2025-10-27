using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class ReasonForBlockingAcademicResultReq
    {
        [Required(ErrorMessage = "سبب حظر النتيجة الأكاديمية مطلوب")]
        public string TheReasonForBlockingAcademicResult { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
