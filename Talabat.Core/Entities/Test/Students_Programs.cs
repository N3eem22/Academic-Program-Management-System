using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Core.Entities.Test
{
    public class Students_Programs
    {
        public int StudentsId { get; set; }
        [ForeignKey(nameof(StudentsId))]
        public Students Students { get; set; }

        public int ProgramsId { get; set; }
        [ForeignKey(nameof(ProgramsId))]
        public Programs Programs { get; set; }

    }
}
