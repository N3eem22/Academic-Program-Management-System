using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Test
{
    [Table("Students")]
    public class Students: BaseEntity
    {
        public string StudentName { get; set; }
        public string BirthDate { get; set; }
        public string Type { get; set; }
        public string nationality { get; set; }
        public string religion { get; set; }
        public int NationalId { get; set; }
        public int UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

        public int FacultyId { get; set; }
        [ForeignKey(nameof(FacultyId))]
        public Faculty faculty { get; set; }

        public int ProgramsId {  get; set; }
        [ForeignKey(nameof(ProgramsId))]
        public Programs Programs { get; set; }

        public ICollection<Students_Courses> Courses { get; set; } = new HashSet<Students_Courses>();

    }
}
