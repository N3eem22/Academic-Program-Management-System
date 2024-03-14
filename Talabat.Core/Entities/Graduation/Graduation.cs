using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Graduation
{
    public class Graduation : BaseEntity
    {
        public bool Ratio { get; set; }
        public bool Rate { get; set; }
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
        public int LevelToBePassedId { get; set; }
        [ForeignKey(nameof(LevelToBePassedId))]
        public Level Level { get; set; }
        public int SemesterToBePassedId { get; set; }
        [ForeignKey(nameof(SemesterToBePassedId))]
        public Semesters Semesters { get; set; }
        public int? TheMinimumGradeForTheCourseId { get; set; }
        [ForeignKey(nameof(TheMinimumGradeForTheCourseId))]
        public AllGrades? Grades { get; set; }
    }
}
