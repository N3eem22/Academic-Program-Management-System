

using Grad.Core.Entities.CumulativeAverage;

using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Entities;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_AllGrades")]
    public class AllGrades:BaseEntity
    {
        public string TheGrade { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<CumulativeAverage> UtmostGrades { get; set; } = new HashSet<CumulativeAverage>();
        public ICollection<GadesOfEstimatesThatDoesNotCount> gadesOfEstimatesThatDoesNotCount { get; set; } = new HashSet<GadesOfEstimatesThatDoesNotCount>();

public ICollection<PI_EstimatesOfCourseFeeExemption > PI_EstimatesOfCourseFeeExemptions { get; set; } = new HashSet<PI_EstimatesOfCourseFeeExemption>();
        public ICollection<PI_AllGradesSummerEstimate> pI_AllGradesSummerEstimates { get; set; } = new HashSet<PI_AllGradesSummerEstimate>();

    }
}
