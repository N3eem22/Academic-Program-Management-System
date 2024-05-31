using Grad.Core.Entities.Academic_regulation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class Program_TheGradeSpec : BaseSpecifications<Program_TheGrades>
    {
        public Program_TheGradeSpec(int prog_InfoId)
          : base(c => (c.prog_InfoId == prog_InfoId && c.IsDeleted == false))

        {
            Includes.Add(P => P.prog_Info);
            Includes.Add(p => p.EquivalentEstimate);
            Includes.Add(p => p.GraduationEstimate);
            Includes.Add(p => p.TheGrade);

        }

    }
    
    
}
