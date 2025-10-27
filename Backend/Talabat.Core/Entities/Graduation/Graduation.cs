
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Graduation
{
    public class Graduation : BaseEntity
    {
        public bool Ratio { get; set; }
        public bool Rate { get; set; }
        public int ProgramId { get; set; }
        [ForeignKey(nameof(ProgramId))]
        public ProgramInformation Program { get; set; }
        public int Value { get; set; }
        public bool CompulsoryCourses { get; set; }
        [DefaultValue(true)]
        public bool SuccessInEveryCourse { get; set; }
        public bool PassingMilitaryEducation { get; set; }
        public bool SummerTraining { get; set; }
        public int? WeeksorHours { get; set; }
        public int? WeeksorHoursTobePassed { get; set; }
        public bool VerifyPaymentOfFees { get; set; }
        public int MakeSureToPassTheOptionalGroups { get; set; }
        public int DetermineTheRankBasedOn { get; set; }
        public int RateBase { get; set; }
        public ICollection<AverageValue>? AverageValues { get; set; } = new HashSet<AverageValue>();
        [DefaultValue(false)]
        public bool ComparingCumulativeAverageForEachYear { get; set; }
        public int? StudyYears { get; set; }
        public ICollection<GraduationLevels> LevelsTobePassed { get; set; } = new HashSet<GraduationLevels>();
        public ICollection<GraduationSemesters> SemestersTobePssed { get; set; } = new HashSet<GraduationSemesters>();
        public int? TheMinimumGradeForTheCourseId { get; set; }
        [ForeignKey(nameof(TheMinimumGradeForTheCourseId))]
        public AllGrades? Grades { get; set; }
    }
}
