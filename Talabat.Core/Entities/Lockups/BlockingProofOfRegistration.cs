
namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_BlockingProofOfRegistration")]
    public class BlockingProofOfRegistration: BaseEntity
    {
        public string ReasonsOfBlocking { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

        public int? ProgramInformationId { get; set; }
        [ForeignKey(nameof(ProgramInformationId))]

        public ProgramInformation ProgramInformation { get; set; }
    }
}
