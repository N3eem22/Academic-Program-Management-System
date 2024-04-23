

using Grad.Core.Entities.Identity;
using Talabat.Core.Entities.Identity;

namespace Talabat.Core.Entities.Entities
{
    [Table("Faculty")]
    public class Faculty: BaseEntity
    {
        public string FacultyName { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<AppUserFaculty> FacultyAppUsers { get; set; } = new HashSet<AppUserFaculty>();

        public ICollection<CollegeCourses> CollegeCourses { get; set; } = new HashSet<CollegeCourses>();
        public ICollection<Programs> Programs { get; set; } = new HashSet<Programs>();
    }
}
