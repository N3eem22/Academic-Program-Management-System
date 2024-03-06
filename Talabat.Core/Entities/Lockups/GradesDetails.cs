

using Grad.Core.Entities.Entities;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_GradesDetails")]
    public class GradesDetails:BaseEntity
    {
        public string TheDetails { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

        public ICollection<PI_DetailedGradesToBeAnnounced> pI_DetailedGradesToBeAnnounceds { get; set; } = new HashSet<PI_DetailedGradesToBeAnnounced>();

        //public ICollection<ProgramInformation> ProgramInformation { get; set; } = new HashSet<ProgramInformation>();
    }
}
