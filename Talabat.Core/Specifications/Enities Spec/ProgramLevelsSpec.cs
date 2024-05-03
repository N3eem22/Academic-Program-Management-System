using Grad.Core.Entities.Academic_regulation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class ProgramLevelsSpec : BaseSpecifications<programLevels>
    {
        public ProgramLevelsSpec(int? prog_InfoId)
          : base(c => (!prog_InfoId.HasValue || c.prog_InfoId == prog_InfoId.Value && c.IsDeleted == false))

        {
            Includes.Add(P => P.prog_Info);
            Includes.Add(p => p.TheLevel);

        }
    
    }
}
