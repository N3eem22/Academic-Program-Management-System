using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_TheResultAppears")]
    public class TheResultAppears: BaseEntity
    {
        public string ResultAppears { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<ProgramInformation> Result_Appears { get; set; } = new HashSet<ProgramInformation>();
        public ICollection<ProgramInformation> ResultAppearsToTheGuid { get; set; } = new HashSet<ProgramInformation>();


    }
}
