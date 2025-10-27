

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_CourseRequirement")]
    public class CourseRequirement:BaseEntity
    {
        public string courseRequirement { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
    }
}
