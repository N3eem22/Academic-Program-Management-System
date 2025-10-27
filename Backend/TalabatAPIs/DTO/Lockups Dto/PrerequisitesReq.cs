using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class PrerequisitesReq
    {
        [Required(ErrorMessage = "الشرط المسبق مطلوب")]
        public string Prerequisite { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
