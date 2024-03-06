

using Grad.Core.Entities.CumulativeAverage;

namespace Talabat.Core.Entities.Academic_regulation
{
    [Table("AR_ProgramInformation")]
    public class ProgramInformation : BaseEntity
    {
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
        public ICollection<TheAcademicDegree> theAcademicDegrees { get; set; } = new HashSet<TheAcademicDegree>();
        //[DefaultValue("بكالوريوس")]
        //public string Degree { get; set; }
        public string NameInCertificate { get; set; }
        public string NameInCertificateInEnglish { get; set; }
        [DataType(DataType.Date)]
        [Required]
        public string BeginningOfTheProgram { get; set; }
        [DataType(DataType.Date)]
        [Required]
        public string EndOfTheProgram { get; set; }
        //public string SystemType { get; set; }
        public ICollection<SystemType> SystemType { get; set; } = new HashSet<SystemType>();
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
        //public int ProjectHours { get; set; }
        [Required]
        public ICollection<BurdenCalculation> BurdenCalculation { get; set;} = new HashSet<BurdenCalculation>();
        ////[DefaultValue("المستوي الدراسي")]
        //public string GPAcalculation { get; set; }


        //[DefaultValue(0)]
        //public bool PrivateProgram { get; set; }
        //[Required]
        //public string SystemType { get; set; }
        [Required]
        [DefaultValue(1)]
        public bool ExcludingTheBudgetTermWhenCalculatingTheGPA { get; set; }
        [Required]
        public ICollection<PassingTheElectiveGroupBasedOn> passingTheElectiveGroupBasedOns { get; set; } = new HashSet<PassingTheElectiveGroupBasedOn>();
        //[DefaultValue("عدد المقررات")]
        //public string PassingTheElectiveGroupBasedOn { get; set; }
        public string pre_Requisite { get; set; }
        public string DivisionType { get; set; }

        //public string ModifyTheStudentsLevel { get; set; }
        public ICollection<EditTheStudentLevel> editTheStudentLevels { get; set; } = new HashSet<EditTheStudentLevel>();
        public bool AllowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear { get; set; }
        //public int NumberOfElectiveHoursDuringTheYear { get; set; }
        public int FailureTimesForWarning { get; set; }
        public int FailureTimesForRe_Enrollment { get; set; }
        [Required]
        public ICollection<BlockingProofOfRegistration> blockingProofOfRegistration { get; set;} = new HashSet<BlockingProofOfRegistration>();

        //[DefaultValue("بشرط التسجيل مع استثناء الطلاب المستجدين")]
        //public string WithholdingProofOfRegistration { get; set; }
        [Required]
        [DefaultValue("بعام الالتحاق")]
        public string TypeOfFinancialStatementInTheProgram { get; set; }
        [Required]
        [DefaultValue("رسوم بالساعة المعتمدة")]
        public string ProgramFeeType { get; set; }

        public string TypeOfSummerFees { get; set; }
        public string EstimatesOfCourseFeeExemption { get; set; }
        [Required]
        [DefaultValue(0)]
        public bool CalculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete { get; set; }
        [Required]
        [DefaultValue(0)]
        public bool BookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly { get; set;  }
        [Required]
        [DefaultValue("الدرجة")]
        public string Result { get; set; }
        [Required]
        [DefaultValue("التقدير")]
        public string TheResultAppearanceToTheGuide { get; set; }
        public string ReasonForBlockingRegistration { get; set; }
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
        public string TheReasonForHiddingTheResult { get; set; }
        public string SummerCourseEstimates { get; set; }
        [Required]
        [DefaultValue("استبيان النظام الداخلي")]
        public string Questionnaire { get; set; }
        public string DetailedGradesToBeAnnounced { get; set; }
        public CumulativeAverage? ComulativeAvaregeId { get; set; }



    }
}
 