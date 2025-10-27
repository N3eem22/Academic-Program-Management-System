using Grad.Core.Entities.Graduation;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;
using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Entities_Dto.Graduation
{
    public class GraduationReq
    {
        [DefaultValue(false)]
        public bool Ratio { get; set; }
        [DefaultValue(false)]
        public bool Rate { get; set; }
        [Required]
        public int ProgramId { get; set; }
        [Required]
        public int Value { get; set; }
        [Required]
        public bool CompulsoryCourses { get; set; }
        [DefaultValue(true)]
        public bool SuccessInEveryCourse { get; set; }
        [Required]
        [DefaultValue(false)]
        public bool PassingMilitaryEducation { get; set; }
        [Required]
        [DefaultValue(false)]
        public bool SummerTraining { get; set; }
        public int? WeeksorHours { get; set; }
        public int? WeeksorHoursTobePassed { get; set; }
        [Required]
        [DefaultValue(false)]
        public bool VerifyPaymentOfFees { get; set; }
        [Required]
        public int MakeSureToPassTheOptionalGroups { get; set; }
        [Required]
        public int DetermineTheRankBasedOn { get; set; }
        [Required]
        public int RateBase { get; set; }
        public ICollection<AverageValueReq>? AverageValues { get; set; } = new HashSet<AverageValueReq>();
        [Required]
        [DefaultValue(false)]
        public bool ComparingCumulativeAverageForEachYear { get; set; }
        public int? StudyYears { get; set; }
        [Required]
        public ICollection<GraduationLevelsReq> LevelsTobePassed { get; set; } = new HashSet<GraduationLevelsReq>();
        [Required]
        public ICollection<GraduationSemestersReq> SemestersTobePssed { get; set; } = new HashSet<GraduationSemestersReq>();
        public int? TheMinimumGradeForTheCourseId { get; set; }
       
    }
    public class CustomBooleanAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value == null)
            {
                // Nullable boolean properties are handled by Required attribute
                return ValidationResult.Success;
            }

            if (value is bool)
            {
                return ValidationResult.Success;
            }

            return new ValidationResult(ErrorMessage);
        }
    }
}
