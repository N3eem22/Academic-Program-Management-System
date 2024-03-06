using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Entities
{
    [Table("PI_DetailedGradesToBeAnnounced")]
    public class PI_DetailedGradesToBeAnnounced: BaseEntity
    {
        [ForeignKey("GradesDetails")]
        public int GradesDetailsId { get; set; }
        [ForeignKey("ProgramInformation")]
        public int ProgramInformationId { get; set; }
        public GradesDetails GradesDetails { get; set; }
        public ProgramInformation ProgramInformation { get; set; }
    }
}
