using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class FacultywithUniSpecifications : BaseSpecifications<Faculty>
    {
        public FacultywithUniSpecifications(int? UniId)
           : base(P => (!UniId.HasValue || P.UniversityId == UniId.Value))

        {
            Includes.Add(G => G.University);
        }


        public FacultywithUniSpecifications(int id) : base(p => p.Id == id)
        {
            Includes.Add(G => G.University);

        }

        public FacultywithUniSpecifications(string? facultyName, int? UNiid)
     : base(p =>
         (string.IsNullOrEmpty(facultyName) || p.FacultyName == facultyName) &&
         (!UNiid.HasValue || p.UniversityId == UNiid)
     )
        {
            Includes.Add(G => G.University);
        }

    }
}
