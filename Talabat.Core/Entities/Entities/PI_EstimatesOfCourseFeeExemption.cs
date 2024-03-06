using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Core.Entities.Entities
{
    public class PI_EstimatesOfCourseFeeExemption
    {
        [ForeignKey("AllGrades")]
        public int AllGradesId { get; set; }
        [ForeignKey("ProgramInformation")]
        public int ProgramInformationId { get; set; }
        public AllGrades AllGrades { get; set; }
        public ProgramInformation ProgramInformation { get; set; }
    }
}
