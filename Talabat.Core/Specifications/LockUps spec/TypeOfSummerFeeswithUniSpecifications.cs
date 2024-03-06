using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.LockUps_spec
{
    public class TypeOfSummerFeeswithUniSpecifications : BaseSpecifications<TypeOfSummerFees>
    {
        public TypeOfSummerFeeswithUniSpecifications(int? UniId)
            : base(P => (!UniId.HasValue || P.UniversityId == UniId.Value))

        {
            Includes.Add(G => G.University);
        }

        //TypeOfSummerFeeswithUniSpecifications
        //TheResultAppearswithUniSpecifications

        public TypeOfSummerFeeswithUniSpecifications(int id) : base(p => p.Id == id)
        {
            Includes.Add(G => G.University);

        }

        public TypeOfSummerFeeswithUniSpecifications(string? grade, int? UNiid)
     : base(p =>
         (string.IsNullOrEmpty(grade) || p.TheTypeOfSummerFees == grade) &&
         (!UNiid.HasValue || p.UniversityId == UNiid)
     )
        {
            Includes.Add(G => G.University);
        }



    }
}
