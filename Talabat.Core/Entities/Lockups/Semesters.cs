

using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.Graduation;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_Semester")]
    public class Semesters:BaseEntity
    {
        public string semesters { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<GraduationSemesters> GraduationSemesters { get; set; } = new HashSet<GraduationSemesters>();
        public ICollection<CourseInformation> CourseInformation { get; set; } = new HashSet<CourseInformation>();
        public ICollection<AcademicLoadAccordingToLevel> academicLoadAccordingToLevels { get; set; } = new HashSet<AcademicLoadAccordingToLevel>();


    }
}
