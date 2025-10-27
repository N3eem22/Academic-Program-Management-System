using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class ReasonForBlockingRegistrationReq
    {
        [Required(ErrorMessage = "سبب حظر التسجيل مطلوب")]
        public string TheReasonForBlockingRegistration { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
