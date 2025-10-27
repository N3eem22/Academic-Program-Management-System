using Grad.Core.Entities.CoursesInfo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class UniwithUsersSpecifications : BaseSpecifications<University>
    {
        public UniwithUsersSpecifications(IEnumerable<int> uniIds)
            : base(c => uniIds.Contains(c.Id) && !c.IsDeleted)
        {
        }
    }

}
