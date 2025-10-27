using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.LockUps_spec
{
    public class ReasonForBlockingAcademicResultwithUniSpecifications : BaseSpecifications<ReasonForBlockingAcademicResult>
    {
        public ReasonForBlockingAcademicResultwithUniSpecifications(int? UniId)
            : base(P => (!UniId.HasValue || P.UniversityId == UniId.Value) && !P.IsDeleted)

        {
            Includes.Add(G => G.University);
        }

        //TypeOfSummerFeeswithUniSpecifications


        public ReasonForBlockingAcademicResultwithUniSpecifications(int id) : base(p => p.Id == id && !p.IsDeleted)
        {
            Includes.Add(G => G.University);

        }

        public ReasonForBlockingAcademicResultwithUniSpecifications(string? grade, int? UNiid)
     : base(p =>
         (string.IsNullOrEmpty(grade) || p.TheReasonForBlockingAcademicResult == grade) &&
         (!UNiid.HasValue || p.UniversityId == UNiid) && !p.IsDeleted
     )
        {
            Includes.Add(G => G.University);
        }



    }
}
