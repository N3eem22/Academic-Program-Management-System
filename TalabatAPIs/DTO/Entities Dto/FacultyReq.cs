using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class FacultyReq
    {
        [Required(ErrorMessage = "اسم الكلية مطلوب")]
        public string FacultyName { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
