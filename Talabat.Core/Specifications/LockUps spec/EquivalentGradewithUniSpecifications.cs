using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.LockUps_spec
{
    public class EquivalentGradewithUniSpecifications : BaseSpecifications<EquivalentGrade>
    {
        public EquivalentGradewithUniSpecifications(int? UniId)
           : base(P => (!UniId.HasValue || P.UniversityId == UniId.Value))

        {
            Includes.Add(G => G.University);
        }

       


        public EquivalentGradewithUniSpecifications(int id) : base(p => p.Id == id)
        {
            Includes.Add(G => G.University);

        }

        public EquivalentGradewithUniSpecifications(string? grade, int? UNiid)
     : base(p =>
         (string.IsNullOrEmpty(grade) || p.equivalentGrade == grade) &&
         (!UNiid.HasValue || p.UniversityId == UNiid)
     )
        {
            Includes.Add(G => G.University);
        }



    }
}
