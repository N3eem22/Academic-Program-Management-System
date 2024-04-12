using Grad.Core.Entities.CoursesInfo;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class DetailsOfFailingGradesDTO
    {
        public int CourseInfoId { get; set; }

        public int FailedGradeId { get; set; }

        public int Value { get; set; }
    }
}
