

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_PreviousQualification")]
    public class PreviousQualification:BaseEntity
    {
        public string previousQualification { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
    }
}
