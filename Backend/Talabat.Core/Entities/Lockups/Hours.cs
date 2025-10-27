

using Grad.Core.Entities.CoursesInfo;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_Hours")]
    public class Hours:BaseEntity
    {
        public string HoursName { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<CoursesAndHours> coursesAndHours { get; set; } = new HashSet<CoursesAndHours>();
    }
}
