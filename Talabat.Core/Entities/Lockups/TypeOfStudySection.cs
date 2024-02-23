using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_TypeOfStudySection")]
    public class TypeOfStudySection:BaseEntity
    {
        public string TheTypeOfStudySectio { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
    }
}
