
namespace Talabat.Core.Entities.Entities
{
    enum Gender  { Male =0 , Female = 1 , Both  }
    [Table("EN_CourssesInformations")]
    public class CourseInformation : BaseEntity
    {
        public int MaximumGrade { get; set; }
        [Required]
        public int SemesterId { get; set; }
        [ForeignKey(nameof(SemesterId))]
        public Semesters Semester { get; set; }
        [Required]
        public int LevelId { get; set; }
        [ForeignKey(nameof(LevelId))]
        public Level level { get; set; }
        [Required]
        public int PrerequisiteId { get; set; }
        [ForeignKey(nameof(PrerequisiteId))]
        public Prerequisites Prerequisites { get; set; }
        [Required]
        public int CourseTypeId { get; set; }
        [ForeignKey(nameof(CourseTypeId))]
        public CourseType CourseType { get; set; }
        public int LinkRegistrationToHours { get; set; }
        public int SuccessRate { get; set; }
        public int Gender { get; set; }
        public bool PassOrFailSubject { get; set; }
        public bool RegistrationForTheCourseInTheSummerTerm { get; set; }
    }
}
