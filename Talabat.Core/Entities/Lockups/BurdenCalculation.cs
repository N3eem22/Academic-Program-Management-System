

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_BurdenCalculation")]
   public class BurdenCalculation : BaseEntity
    {
        public string BurdenCalculationAS { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

        public int? ProgramInformationId { get; set; }
        [ForeignKey(nameof(ProgramInformationId))]

        public ProgramInformation ProgramInformation { get; set; }
    }
}
