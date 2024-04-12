using Grad.Core.Entities.Graduation;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto.Graduation
{
    public class GraduationReq
    {
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
        public ICollection<AverageValueReq>? AverageValues { get; set; } = new HashSet<AverageValueReq>();
      
        public bool ComparingCumulativeAverageForEachYear { get; set; }
        public int? StudyYears { get; set; }
        public ICollection<GraduationLevelsReq> LevelsTobePassed { get; set; } = new HashSet<GraduationLevelsReq>();
        public ICollection<GraduationSemestersReq> SemestersTobePssed { get; set; } = new HashSet<GraduationSemestersReq>();
        public int? TheMinimumGradeForTheCourseId { get; set; }
       
    }
}
