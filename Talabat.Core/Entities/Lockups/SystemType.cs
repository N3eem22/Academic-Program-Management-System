
namespace Talabat.Core.Entities.Lockups
{
    [Table("System Type")]

    public class SystemType : BaseEntity
    {
        public string SystemName { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<ProgramInformation> Program_Information { get; set; } = new HashSet<ProgramInformation>();


    }
}
