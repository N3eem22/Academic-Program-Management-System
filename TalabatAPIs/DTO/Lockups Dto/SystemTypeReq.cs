using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class SystemTypeReq
    {
        [Required(ErrorMessage = "اسم النظام مطلوب")]
        public string SystemName { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
