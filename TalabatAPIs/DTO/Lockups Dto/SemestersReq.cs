using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class SemestersReq
    {
        [Required(ErrorMessage = "الفصل الدراسي مطلوب")]
        public string semesters { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
