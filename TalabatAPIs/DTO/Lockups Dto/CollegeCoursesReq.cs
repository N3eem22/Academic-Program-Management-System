using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class CollegeCoursesReq
    {
        [Required(ErrorMessage = "اسم الدورة بالعربية مطلوب")]
        public string CourseNameInArabic { get; set; }

        [Required(ErrorMessage = "اسم الدورة بالإنجليزية مطلوب")]
        public string CourseNameInEnglish { get; set; }

        [Required(ErrorMessage = "الكود الخاص بالدورة بالعربية مطلوب")]
        public int CourseCodeInArabic { get; set; }

        [Required(ErrorMessage = "الكود الخاص بالدورة بالإنجليزية مطلوب")]
        public int CourseCodeInEnglish { get; set; }

        [StringLength(50, MinimumLength = 3, ErrorMessage = "يجب أن يكون الاسم الفرعي بين 3 و 50 حرفًا")]
        public string Sub_CourseNameInArabic { get; set; }

        [StringLength(50, MinimumLength = 3, ErrorMessage = "يجب أن يكون الاسم الفرعي بين 3 و 50 حرفًا")]
        public string Sub_CourseNameInEnglish { get; set; }

        public int? Sub_CourseCodeInArabic { get; set; }

        public int? Sub_CourseCodeInEnglish { get; set; }

        public string CourseNickname { get; set; }

        public string ContentSummaryInArabic { get; set; }

        public string ContentSummaryInEnglish { get; set; }

        [Required(ErrorMessage = "معرف الكلية مطلوب")]
        public int? FacultyId { get; set; }
    }
}
