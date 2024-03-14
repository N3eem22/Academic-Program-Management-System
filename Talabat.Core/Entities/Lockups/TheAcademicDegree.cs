using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities.Academic_regulation;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_TheAcademicDegree")]
    public class TheAcademicDegree : BaseEntity
    {
        
        public string AcademicDegreeName { get; set; }
        [ForeignKey("University")]
        public int? UniversityId { get; set; }
        public University University { get; set; }

        public ICollection<ProgramInformation> Program_Information { get; set; } = new HashSet<ProgramInformation>();

    }
}
