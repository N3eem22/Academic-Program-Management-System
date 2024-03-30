

using Grad.Core.Entities.CumulativeAverage;

using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Entities;
using Grad.Core.Entities.Control;
using System.Xml;
using Grad.Core.Entities.Graduation;
using Grad.Core.Entities.CoursesInfo;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_AllGrades")]
    public class AllGrades:BaseEntity
    {
        public string TheGrade { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<CourseInformation> FirstReductionInfo { get; set; } = new HashSet<CourseInformation>();
        public ICollection<CourseInformation> SecondReductionInfo { get; set; } = new HashSet<CourseInformation>();
        public ICollection<CourseInformation> ThhirdReductionInfo { get; set; } = new HashSet<CourseInformation>();
        public ICollection<CumulativeAverage> UtmostGrades { get; set; } = new HashSet<CumulativeAverage>();
        public ICollection<GadesOfEstimatesThatDoesNotCount> gadesOfEstimatesThatDoesNotCount { get; set; } = new HashSet<GadesOfEstimatesThatDoesNotCount>();
        public ICollection<PI_EstimatesOfCourseFeeExemption > PI_EstimatesOfCourseFeeExemptions { get; set; } = new HashSet<PI_EstimatesOfCourseFeeExemption>();
        public ICollection<PI_AllGradesSummerEstimate> pI_AllGradesSummerEstimates { get; set; } = new HashSet<PI_AllGradesSummerEstimate>();
        public ICollection<Control> FirstReduction { get; set; } = new HashSet<Control>();
        public ICollection<Control> SecondReduction { get; set; } = new HashSet<Control>();
        public ICollection<Control> ThirdReduction { get; set; } = new HashSet<Control>();
        public ICollection<Control> TheoriticalFailure { get; set; } = new HashSet<Control>();
        public ICollection<AverageValue> AverageValues { get; set; } = new HashSet<AverageValue>();
        public ICollection<Graduation> Graduations { get; set; } = new HashSet<Graduation>();


        public ICollection<Program_TheGrades> program_TheGrades { get; set; } = new HashSet<Program_TheGrades>();

    }
}
