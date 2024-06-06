using Grad.Core.Entities.Graduation;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.LockUps_spec
{
    public class ProgramSpec : BaseSpecifications<Programs>
    {
        public ProgramSpec(int facultyId, string? searchValue)
            : base(c =>
                (c.FacultyId == facultyId) &&
                (string.IsNullOrEmpty(searchValue) || c.ProgramNameInArabic.Contains(searchValue)) &&
                c.IsDeleted == false)
        {
            Includes.Add(p => p.Faculty);
        }
    }
}
