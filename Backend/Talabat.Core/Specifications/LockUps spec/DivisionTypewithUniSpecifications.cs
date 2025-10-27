using Grad.Core.Entities.Lockups;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.LockUps_spec
{
    public class DivisionTypewithUniSpecifications : BaseSpecifications<DivisionType>
    {
        public DivisionTypewithUniSpecifications(int? UniId)
          : base(P => (!UniId.HasValue || P.UniversityId == UniId.Value) && !P.IsDeleted)

        {
            Includes.Add(G => G.University);
        }

     


        public DivisionTypewithUniSpecifications(int id) : base(p => p.Id == id && !p.IsDeleted)
        {
            Includes.Add(G => G.University);

        }

        public DivisionTypewithUniSpecifications(string? grade, int? UNiid)
     : base(p =>
         (string.IsNullOrEmpty(grade) || p.Division_Type == grade) &&
         (!UNiid.HasValue || p.UniversityId == UNiid) && !p.IsDeleted
     )
        {
            Includes.Add(G => G.University);
        }

    }
}

