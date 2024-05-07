using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class TheResultAppearsReq
    {
        [Required(ErrorMessage = "ظهور النتيجة مطلوب")]
        public string resultAppears { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
