using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Graduation
{
    public class GraduationLevels : BaseEntity
    {
        public int LevelId { get; set; }
        [ForeignKey(nameof(LevelId))]
        public Level Level { get; set; }
        public int GraduationId { get; set; }
        [ForeignKey(nameof(GraduationId))]
        public Graduation Graduation { get; set; }
    }
}
