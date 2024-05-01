

using Grad.Core.Entities.CumulativeAverage;
using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Entities;
using Grad.Core.Entities.Lockups;
using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.Graduation;
using Grad.Core.Entities.Control;


namespace Talabat.Core.Entities.Academic_regulation
{
    public class ProgramInformation : BaseEntity
    {
        [ForeignKey("Programs")] 
        public int ProgramId {  get; set; }
        public Programs Programs { get; set; }
        
        [Required]
        public string ProgramNameInArabic { get; set; }
        [Required]
        public string ProgramNameInEnglish { get; set; }
        [Required]
        public string MajorNameInArabic { get; set; }
        public string MajorNameInEnglish { get; set; }
        public int ProgramCode { get; set; }
        public string Institute { get; set; }

        [Required]
        [ForeignKey("AcademicDegree")]
        public int AcademicDegreeid { get; set; }
        public TheAcademicDegree AcademicDegree { get; set; }
        public string Degree { get; set; }
        public string NameInCertificate { get; set; }
        public string NameInCertificateInEnglish { get; set; }
        [DataType(DataType.Date)]
        [Required]
        public string BeginningOfTheProgram { get; set; }
        [DataType(DataType.Date)]
        [Required]
        public string EndOfTheProgram { get; set; }
        [ForeignKey("SystemType")]
        public int SystemTypeId { get; set; }
        public SystemType SystemType { get; set; }
        public int InstitutionCode { get; set; }
        [Required]
        [DefaultValue(0)]
        public int TeamCode { get; set; }
        public bool SpecialProgram { get; set; }
        public int CreditHours { get; set; }
        public int Mandatory_ProjectHours { get; set; }
        public int OptionalHours { get; set; }
        public int FreeHours { get; set; }
        public int AdditionalRegistrationHours { get; set; }
        public int EligibleHoursforProjectRegistration { get; set; }
        public int ProjectHours { get; set; }
        [Required]
        [ForeignKey("BurdenCalculation")]
        public int BurdanCalculationId { get; set; }
        public BurdenCalculation BurdenCalculation { get; set; }
        [Required]
        [DefaultValue(true)]
        public bool ExcludingTheBudgetTermWhenCalculatingTheGPA { get; set; }
        [Required]
        [ForeignKey("PassingTheElectiveGroupBasedOn")]
        public int PassingTheElectiveGroupBasedOnId { get; set; }
        public PassingTheElectiveGroupBasedOn PassingTheElectiveGroupBasedOn { get; set; }
        public string pre_Requisite { get; set; }
        [ForeignKey("EditTheStudentLevel")]
        public int EditTheStudentLevelId { get; set; }
        public EditTheStudentLevel EditTheStudentLevel { get; set; }
        public bool AllowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear { get; set; }
        public int FailureTimesForWarning { get; set; }
        public int FailureTimesForRe_Enrollment { get; set; }
        [ForeignKey("BlockingProofOfRegistration")]
        public int BlockingProofOfRegistrationId { get; set; }
        public BlockingProofOfRegistration BlockingProofOfRegistration { get; set; }
        [ForeignKey("TypeOfFinancialStatementInTheProgram")]
        public int TypeOfFinancialStatementInTheProgramId { get; set; }
        public TypeOfFinancialStatementInTheProgram TypeOfFinancialStatementInTheProgram { get; set; }
        [ForeignKey("TypeOfProgramFees")]
        public int TypeOfProgramFeesId { get; set; }
        public TypeOfProgramFees TypeOfProgramFees { get; set; }

        [ForeignKey("TypeOfSummerFees")]
        public int TypeOfSummerFeesId { get; set; }
        public TypeOfSummerFees TypeOfSummerFees { get; set; }
        [Required]
        [DefaultValue(false)]
        public bool CalculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete { get; set; }
        [Required]
        [DefaultValue(false)]
        public bool BookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly { get; set; }
        [Required]
        [DefaultValue("الدرجة")]
        public string Result { get; set; }
        [ForeignKey("TheResultAppears")]
        public int TheResultAppearsId { get; set; }
        public TheResultAppears TheResultAppears { get; set; }
        [ForeignKey("TheResultToTheGuid")]
        public int TheResultToTheGuidId { get; set; }
        public TheResultAppears TheResultToTheGuid { get; set; }
        [ForeignKey("ReasonForBlockingRegistration")]
        public int ReasonForBlockingRegistrationId { get; set; }
        public ReasonForBlockingRegistration ReasonForBlockingRegistration { get; set; }
        [Required]
        [DefaultValue(true)]
        public bool LinkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration { get; set; }
        [Required]
        [DefaultValue(true)]
        public bool LinkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees { get; set; }
        [DefaultValue(true)]
        public bool RegistrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly { get; set; }
        [Required]
        [DefaultValue(0)]
        public int NumberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects { get; set; }
        [ForeignKey("TheReasonForHiddingTheResult")]
        public int TheReasonForHiddingTheResultId { get; set; }
        public ReasonForBlockingAcademicResult TheReasonForHiddingTheResult { get; set; }
        [Required]
        [DefaultValue("استبيان النظام الداخلي")]
        public string Questionnaire { get; set; }
        public string DetailedGradesToBeAnnounced { get; set; }
        public ICollection<PI_DivisionType> pI_DivisionTypes { get; set; } = new HashSet<PI_DivisionType>();
        public ICollection<PI_AllGradesSummerEstimate> pI_AllGradesSummerEstimates { get; set; } = new HashSet<PI_AllGradesSummerEstimate>();
        public ICollection<PI_EstimatesOfCourseFeeExemption> PI_EstimatesOfCourseFeeExemptions { get; set; } = new HashSet<PI_EstimatesOfCourseFeeExemption>();
        public ICollection<PI_DetailedGradesToBeAnnounced> pI_DetailedGradesToBeAnnounced { get; set; } = new HashSet<PI_DetailedGradesToBeAnnounced>();

        public ICollection<Program_TheGrades> Program_TheGrades { get; set; } = new HashSet<Program_TheGrades>();
        public ICollection<programLevels> programLevels { get; set; } = new HashSet<programLevels>();
        public ICollection<AcademicLoadAccordingToLevel> academicLoadAccordingToLevels { get; set; } = new HashSet<AcademicLoadAccordingToLevel>();
        public ICollection<CourseInformation> Courses { get; set; } = new HashSet<CourseInformation>();
        public ICollection<CumulativeAverage> CumulativeAverages { get; set; } = new HashSet<CumulativeAverage>();
        public ICollection<Graduation> Graduations { get; set; } = new HashSet<Graduation>();
        public ICollection<Control> Controls { get; set; } = new HashSet<Control>();
    }
}
 