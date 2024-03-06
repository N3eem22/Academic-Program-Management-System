using Grad.Core.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Lockups
{
    [Table("LU_DivisionType")]
   public class DivisionType: BaseEntity
    {
        public string Division_Type { get; set; }

        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

        //public ICollection<ProgramInformation> ProgramInformation { get; set; } = new HashSet<ProgramInformation>();
        public ICollection<PI_DivisionType> pI_DivisionTypes  { get; set; } = new HashSet<PI_DivisionType>();
    }
}
