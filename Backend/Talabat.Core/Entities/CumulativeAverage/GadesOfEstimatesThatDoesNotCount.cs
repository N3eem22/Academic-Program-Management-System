using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.CumulativeAverage
{
    public class GadesOfEstimatesThatDoesNotCount : BaseEntity
    {
        public int? GradeId { get; set; }
        [ForeignKey(nameof(GradeId))]
        public AllGrades Grades { get; set; }
        public int? CumulativeAverageId { get; set; }
        [ForeignKey(nameof(CumulativeAverageId))]
        public CumulativeAverage CumulativeAverage { get; set; }
    }
}
