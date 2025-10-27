
namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_BlockingProofOfRegistration")]
    public class BlockingProofOfRegistration: BaseEntity
    {
        public string ReasonsOfBlocking { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<ProgramInformation> Program_Information { get; set; } = new HashSet<ProgramInformation>();


    }
}
