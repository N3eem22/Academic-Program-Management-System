using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class TheAcademicDegreeReq
    {
        [Required(ErrorMessage = "اسم الدرجة الأكاديمية مطلوب")]
        public string AcademicDegreeName { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
