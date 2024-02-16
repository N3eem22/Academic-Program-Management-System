using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Domian.Models.Entities
{
    [Table("EN_Programs")]
    public class Programs:BaseEntity
    {
        public string ProgramNameInArabic { get; set; }
        public string ProgramNameInEnglish { get; set; }

        public int? FacultyId { get; set; }
        [ForeignKey(nameof(FacultyId))]
        public Faculty Faculty { get; set; }
    }
}
