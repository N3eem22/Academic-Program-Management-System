using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talabat.Core.Entities.Lockups
{   
    [Table("LU_Typeofsummerfees")]
    public class TypeOfSummerFees:BaseEntity
    {
        public string TheTypeOfSummerFees { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }


    }
}
