using Grad.Core.Entities.CoursesInfo;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata.Ecma335;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class CourseInfoDTO
    {
        public int ProgramId { get; set; }
        public int CourseId { get; set; }
        public int MaximumGrade { get; set; }
        public int SemesterId { get; set; }
        public int LevelId { get; set; }
        public int PrerequisiteId { get; set; }
        public int CourseTypeId { get; set; }
        public int LinkRegistrationToHours { get; set; }
        public int ChooseDetailesofFailingGrades { get; set; }
        public int SuccessRate { get; set; }
        public int? previousQualification { get; set; }
        public int Gender { get; set; }
        public int AddingCourse { get; set; }
        public bool PassOrFailSubject { get; set; }
        public bool RegistrationForTheCourseInTheSummerTerm { get; set; }
        public int? FirstReductionEstimatesForFailureTimes { get; set; }
        public int? PercentageForFristGrade { get; set; }
        public int? SecondReductionEstimatesForFailureTimes { get; set; }
        public int? PercentageForSecondGrade { get; set; }
        public int? ThirdReductionEstimatesForFailureTimes { get; set; }
        public int? PercentageForThirdGrade { get; set; }
        public int NumberOfPreviousPreRequisiteCourses { get; set; }
        public int? PartOneCourse { get; set; }
        public ICollection<CoursesAndGradesDetailsDTO> CoursesandGradesDetails { get; set; } = new HashSet<CoursesAndGradesDetailsDTO>();
        public ICollection<CoursesAndHoursDTO> coursesAndHours { get; set; } = new HashSet<CoursesAndHoursDTO>();
        public ICollection<DetailsOfFailingGradesDTO> detailsOfFailingGrades { get; set; } = new HashSet<DetailsOfFailingGradesDTO>();
        public ICollection<PreRequisiteCoursesDTO> preRequisiteCourses { get; set; } = new HashSet<PreRequisiteCoursesDTO>();

    }
}
