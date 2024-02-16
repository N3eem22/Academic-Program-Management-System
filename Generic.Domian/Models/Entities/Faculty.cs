using Generic.Domian.Models.Lockups;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Domian.Models.Entities
{
    [Table("Faculty")]
    public class Faculty: BaseEntity
    {
        public string FacultyName { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<CollegeCourses> CollegeCourses { get; set; } = new HashSet<CollegeCourses>();
    }
}
