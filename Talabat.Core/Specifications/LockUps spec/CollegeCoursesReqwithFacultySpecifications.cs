using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.LockUps_spec
{
    public class CollegeCoursesReqwithFacultySpecifications : BaseSpecifications<CollegeCourses>
    {
        public CollegeCoursesReqwithFacultySpecifications(int? FacId)
          : base(P => (!FacId.HasValue || P.FacultyId == FacId.Value))

        {
            Includes.Add(G => G.Faculty);
        }






        public CollegeCoursesReqwithFacultySpecifications(int id) : base(p => p.Id == id)
        {
            Includes.Add(G => G.Faculty);

        }

        public CollegeCoursesReqwithFacultySpecifications(string? grade, int? Facid)
     : base(p =>
         (string.IsNullOrEmpty(grade) || p.CourseNameInArabic == grade) &&
         (!Facid.HasValue || p.FacultyId == Facid)
     )
        {
            Includes.Add(G => G.Faculty);
        }

    }
}

