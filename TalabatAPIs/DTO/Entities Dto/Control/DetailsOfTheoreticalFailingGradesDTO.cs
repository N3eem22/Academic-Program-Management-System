using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class DetailsOfTheoreticalFailingGradesDTO
    {
        public string GradeDetail { get; set; }
        public int GradeDetailId { get; set; }

        public int ControlId { get; set; }
        public int Value { get; set; }
    }
}
