using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.LockUps_spec
{
    public class EditTheStudentLevelwithUniSpecifications : BaseSpecifications<EditTheStudentLevel>
    {

        public EditTheStudentLevelwithUniSpecifications(int? UniId)
            : base(P => (!UniId.HasValue || P.UniversityId == UniId.Value))

        {
            Includes.Add(G => G.University);
        }





        public EditTheStudentLevelwithUniSpecifications(int id) : base(p => p.Id == id)
        {
            Includes.Add(G => G.University);

        }

        public EditTheStudentLevelwithUniSpecifications(string? grade, int? UNiid)
     : base(p =>
         (string.IsNullOrEmpty(grade) || p.editTheStudentLevel == grade) &&
         (!UNiid.HasValue || p.UniversityId == UNiid)
     )
        {
            Includes.Add(G => G.University);
        }

    }
}
