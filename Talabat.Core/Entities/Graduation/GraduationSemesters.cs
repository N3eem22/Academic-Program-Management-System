using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Graduation
{
    public class GraduationSemesters : BaseEntity
    {
        public int SemesterId { get; set; }
        [ForeignKey(nameof(SemesterId))]
        public Semesters semesters { get; set; }
        public int GraduationId { get; set; }
        [ForeignKey(nameof(Grad))]
        public Graduation Graduation { get; set; }
    }
}
