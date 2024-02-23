

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_Semester")]
    public class Semesters:BaseEntity
    {
        public string semesters { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

    }
}
