

using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Entities;
using Grad.Core.Entities.Lockups;

namespace Talabat.Core.Entities.Academic_regulation
{
    public class ProgramInformation : BaseEntity
    {
        public int ProgramId {  get; set; }
        [ForeignKey(nameof(ProgramId))] 
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
        public int AcademicDegreeid { get; set; }
        [ForeignKey(nameof(AcademicDegreeid))]
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
        public int SystemTypeId { get; set; }
        [ForeignKey(nameof(SystemTypeId))]
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
        public int BurdanCalculationId { get; set; }
        [ForeignKey(nameof(BurdanCalculationId))]
        public BurdenCalculation BurdenCalculation { get; set; }
        [Required]
        [DefaultValue(1)]
        public bool ExcludingTheBudgetTermWhenCalculatingTheGPA { get; set; }
        [Required]
        public int PassingTheElectiveGroupBasedOnId { get; set; }
        [ForeignKey(nameof(PassingTheElectiveGroupBasedOnId))]
        public PassingTheElectiveGroupBasedOn PassingTheElectiveGroupBasedOn { get; set; }
        public string pre_Requisite { get; set; }
        public ICollection<PI_DivisionType> pI_DivisionTypes { get; set; } = new HashSet<PI_DivisionType>();
        public int EditTheStudentLevelId { get; set; }
        [ForeignKey(nameof(EditTheStudentLevelId))]
        public EditTheStudentLevel EditTheStudentLevel { get; set; }
        public bool AllowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear { get; set; }
        public int FailureTimesForWarning { get; set; }
        public int FailureTimesForRe_Enrollment { get; set; }
        public int BlockingProofOfRegistrationId { get; set; }
        [ForeignKey(nameof(BlockingProofOfRegistrationId))]
        public BlockingProofOfRegistration BlockingProofOfRegistration { get; set; }
        public int TypeOfFinancialStatementInTheProgramId { get; set; }
        [ForeignKey(nameof(TypeOfFinancialStatementInTheProgramId))]
        public TypeOfFinancialStatementInTheProgram TypeOfFinancialStatementInTheProgram { get; set; }
        public int TypeOfProgramFeesId { get; set; }
        [ForeignKey(nameof(TypeOfProgramFeesId))]
        public TypeOfProgramFees TypeOfProgramFees { get; set; }

        public int TypeOfSummerFeesId { get; set; }
        [ForeignKey(nameof(TypeOfSummerFeesId))]
        public TypeOfSummerFees TypeOfSummerFees { get; set; }
        [Required]
        [DefaultValue(0)]
        public bool CalculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete { get; set; }
        [Required]
        [DefaultValue(0)]
        public bool BookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly { get; set; }
        [Required]
        [DefaultValue("الدرجة")]
        public string Result { get; set; }
        public int TheResultAppearsId { get; set; }
        [ForeignKey(nameof(TheResultAppearsId))]
        public TheResultAppears TheResultAppears { get; set; }
        public int TheResultToTheGuidId { get; set; }
        [ForeignKey(nameof(TheResultToTheGuidId))]
        public TheResultAppears TheResultToTheGuid { get; set; }
        public int ReasonForBlockingRegistrationId { get; set; }
        [ForeignKey(nameof(ReasonForBlockingRegistrationId))]
        public ReasonForBlockingRegistration ReasonForBlockingRegistration { get; set; }
        [Required]
        [DefaultValue(1)]
        public bool LinkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration { get; set; }
        [Required]
        [DefaultValue(1)]
        public bool LinkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees { get; set; }
        [DefaultValue(1)]
        public bool RegistrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly { get; set; }
        [Required]
        [DefaultValue(0)]
        public int NumberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects { get; set; }
        public int TheReasonForHiddingTheResultId { get; set; }
        [ForeignKey(nameof(TheReasonForHiddingTheResultId))]
        public ReasonForBlockingAcademicResult TheReasonForHiddingTheResult { get; set; }
        [Required]
        [DefaultValue("استبيان النظام الداخلي")]
        public string Questionnaire { get; set; }

        public ICollection<PI_AllGradesSummerEstimate> pI_AllGradesSummerEstimates { get; set; } = new HashSet<PI_AllGradesSummerEstimate>();
        public ICollection<PI_EstimatesOfCourseFeeExemption> PI_EstimatesOfCourseFeeExemptions { get; set; } = new HashSet<PI_EstimatesOfCourseFeeExemption>();
        public ICollection<PI_DetailedGradesToBeAnnounced> pI_DetailedGradesToBeAnnounced { get; set; } = new HashSet<PI_DetailedGradesToBeAnnounced>();





    }
}
 