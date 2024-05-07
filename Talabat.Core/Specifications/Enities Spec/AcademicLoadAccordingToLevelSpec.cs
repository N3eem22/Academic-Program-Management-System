using Grad.Core.Entities.Academic_regulation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class AcademicLoadAccordingToLevelSpec : BaseSpecifications<AcademicLoadAccordingToLevel>
    {
        public AcademicLoadAccordingToLevelSpec(int Prog_InfoId)
          : base(c => (c.Prog_InfoId == Prog_InfoId && c.IsDeleted == false))

        {
            //Includes.Add(P => P.Prog_InfoId);
            Includes.Add(p => p.AcademicLevel);
            Includes.Add(p => p.AL_Semesters);


        }
    
    }
}
