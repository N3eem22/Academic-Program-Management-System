

namespace Talabat.Core.Entities.Lockups 
{
    [Table("LU_AbsenteeEstimateCalculation")]
    public class AbsenteeEstimateCalculation: BaseEntity
    {
        public string absenteeEstimateCalculation { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
    }
}
