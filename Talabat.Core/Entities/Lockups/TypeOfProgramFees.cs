using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_TypeOfProgramFees")]
    public class TypeOfProgramFees: BaseEntity
    {
        public string TypeOfFees { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
  
    }
}
