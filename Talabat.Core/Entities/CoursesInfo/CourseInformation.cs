using Talabat.Core.Entities;

namespace Grad.Core.Entities.CoursesInfo
{
    public enum ChooseDetailesofFailingGrades { AllDetails = 0 , NoneOdDetails =1 , SumOfDetails =2 }
    public enum AddingCourse { AddingToGPA = 0, AddingToHoursOnly = 1, NotAddedToGPA = 2 }
    public enum Gender { Male = 0, Female = 1, Both }   
    public class CourseInformation : BaseEntity
    {
        public int MaximumGrade { get; set; }

        public int SemesterId { get; set; }
        [ForeignKey(nameof(SemesterId))]
        public Semesters Semester { get; set; }

        public int LevelId { get; set; }
        [ForeignKey(nameof(LevelId))]
        public Level level { get; set; }

        public int PrerequisiteId { get; set; }
        [ForeignKey(nameof(PrerequisiteId))]
        public Prerequisites Prerequisites { get; set; }

        public int CourseTypeId { get; set; }
        [ForeignKey(nameof(CourseTypeId))]
        public CourseType CourseType { get; set; }
        public int LinkRegistrationToHours { get; set; }
        public int ChooseDetailesofFailingGrades { get; set; }
        public int SuccessRate { get; set; }
        public int Gender { get; set; }
        public int AddingCourse { get; set; }
        public bool PassOrFailSubject { get; set; }
        public bool RegistrationForTheCourseInTheSummerTerm { get; set; }
        public int FirstReductionEstimatesForFailureTimes { get; set; }
        [ForeignKey(nameof(FirstReductionEstimatesForFailureTimes))]
        public AllGrades FirstGrades { get; set; }

        public int SecondReductionEstimatesForFailureTimes { get; set; }
        [ForeignKey(nameof(SecondReductionEstimatesForFailureTimes))]
        public AllGrades SecondGrades { get; set; }

        public int ThirdReductionEstimatesForFailureTimes { get; set; }
        [ForeignKey(nameof(ThirdReductionEstimatesForFailureTimes))]
        public AllGrades ThirdGrades { get; set; }
        public int previousQualification { get; set; }
        [ForeignKey(nameof(previousQualification))]
        public PreviousQualification PreviousQualification { get; set; }
        public int NumberOfPreviousPreRequisiteCourses { get; set; }
        public int PartOneCourse { get; set; }
        public CollegeCourses collegeCourses { get; set; }
        public ICollection<CoursesandGradesDetails> coursesandGradesDetails { get; set; }  = new HashSet<CoursesandGradesDetails>();
        public ICollection<CoursesAndHours> coursesAndHours { get; set; } = new HashSet<CoursesAndHours>();
        public ICollection<DetailsOfFailingGrades> detailsOfFailingGrades { get; set; } = new HashSet<DetailsOfFailingGrades>();
        public ICollection<PreRequisiteCourses> preRequisiteCourses { get; set; } = new HashSet<PreRequisiteCourses>();

    }
}
