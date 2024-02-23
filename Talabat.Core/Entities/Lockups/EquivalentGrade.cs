
namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_EquivalentGrade")]
    public class EquivalentGrade:BaseEntity
    {
        public string equivalentGrade { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
    }
}
