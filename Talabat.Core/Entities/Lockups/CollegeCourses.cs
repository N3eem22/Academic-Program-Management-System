using Grad.Core.Entities.CoursesInfo;

namespace Talabat.Core.Entities.Lockups
{
    [Table("CollegeCourses")]
    public class CollegeCourses:BaseEntity
    {
        public string CourseNameInArabic { get; set; }
        public string CourseNameInEnglish { get; set; }
        public string Sub_CourseNameInArabic { get; set; }
        public string Sub_CourseNameInEnglish { get; set; }
        public int CourseCodeInArabic { get; set; }
        public int CourseCodeInEnglish { get; set; }
        public int Sub_CourseCodeInArabic { get; set; }
        public int Sub_CourseCodeInEnglish { get; set; }
        public string CourseNickname { get; set; }
        public string ContentSummaryInArabic { get; set; }
        public string ContentSummaryInEnglish { get; set; }
        public int? FacultyId { get; set; }
        [ForeignKey(nameof(FacultyId))]
        public Faculty Faculty { get; set; }
        public ICollection<PreRequisiteCourses> preRequisiteCourses { get; set; } = new HashSet<PreRequisiteCourses>();

        public ICollection<CourseInformation> CourseInformations { get; set; } = new HashSet<CourseInformation>();
        public ICollection<CourseInformation> PartOneCourse { get; set; } = new HashSet<CourseInformation>();


    }
}
