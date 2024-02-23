

namespace Talabat.Core.Entities.Entities
{
    [Table("Faculty")]
    public class Faculty: BaseEntity
    {
        public string FacultyName { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<CollegeCourses> CollegeCourses { get; set; } = new HashSet<CollegeCourses>();
        public ICollection<Programs> Programs { get; set; } = new HashSet<Programs>();
    }
}
