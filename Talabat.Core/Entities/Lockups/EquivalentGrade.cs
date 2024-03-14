
using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Graduation;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_EquivalentGrade")]
    public class EquivalentGrade:BaseEntity
    {
        public string equivalentGrade { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<AverageValue> AverageValues { get; set; } = new HashSet<AverageValue>();


    }
}
