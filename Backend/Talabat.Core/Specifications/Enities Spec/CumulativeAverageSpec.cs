using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.CumulativeAverage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class CumulativeAverageSpec : BaseSpecifications<CumulativeAverage>
    {
        public CumulativeAverageSpec(int? ProgramId)
           : base(c => (!ProgramId.HasValue || c.ProgramId == ProgramId.Value))
        {
            Includes.Add(c => c.Grades);
            Includes.Add(c => c.GadesOfEstimatesThatDoesNotCount);
            
            
        }
    }
}
