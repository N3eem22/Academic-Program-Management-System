using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class EditTheStudentLevelReq
    {
        [Required(ErrorMessage = "تعديل مستوى الطالب مطلوب")]
        public string editTheStudentLevel { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
