using Grad.Core.Entities.Graduation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.LockUps_spec
{
    public class ProgramSpec : BaseSpecifications<Programs>
    {
        public ProgramSpec(int? FacultyId)
          : base(c => (!FacultyId.HasValue || c.FacultyId == FacultyId.Value && c.IsDeleted == false))
        
            {
              Includes.Add(P => P.Faculty);      
            }
    }
}
