using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class CourseTypeReq
    {
        [Required(ErrorMessage = "نوع الدورة مطلوب")]
        public string courseType { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
