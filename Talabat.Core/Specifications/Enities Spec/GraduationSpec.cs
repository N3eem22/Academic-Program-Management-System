using Grad.Core.Entities.CumulativeAverage;
using Grad.Core.Entities.Graduation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class GraduationSpec : BaseSpecifications<Graduation>
    {
        public GraduationSpec(int? ProgramId)
          : base(c => (!ProgramId.HasValue || c.ProgramId == ProgramId.Value))
        {
            Includes.Add(G => G.AverageValues);
            Includes.Add(G => G.Grades);
            Includes.Add(G => G.LevelsTobePassed);
            Includes.Add(G => G.SemestersTobePssed);
           



        }
    }
}
