

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
        public ICollection<Graduation> Graduations { get; set; } = new HashSet<Graduation>();
        public ICollection<CourseInformation> CourseInformation { get; set; } = new HashSet<CourseInformation>();


    }
}
