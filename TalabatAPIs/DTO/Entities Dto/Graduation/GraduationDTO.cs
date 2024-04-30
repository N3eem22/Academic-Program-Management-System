using Stripe;
using System.ComponentModel;

namespace Grad.APIs.DTO.Entities_Dto.Graduation
{
    public class GraduationDTO
    {
        public int Id { get; set; }
        public bool Ratio { get; set; }
        public bool Rate { get; set; }
        public int ProgramId { get; set; }

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
        public ICollection<AverageValueDTO>? AverageValues { get; set; } = new HashSet<AverageValueDTO>();
        public string GraduationAverageValues { get; set; }
        public bool ComparingCumulativeAverageForEachYear { get; set; }
        public int? StudyYears { get; set; }
        public ICollection<GraduationLevelsDTO> LevelsTobePassed { get; set; } = new HashSet<GraduationLevelsDTO>();
        public string GraduationLevels { get; set; }
        public ICollection<GraduationSemestersDTO> SemestersTobePssed { get; set; } = new HashSet<GraduationSemestersDTO>();
        public string GraduationSemesters { get; set; }
        public string? TheMinimumGradeForTheCourse { get; set; }
    }
}
