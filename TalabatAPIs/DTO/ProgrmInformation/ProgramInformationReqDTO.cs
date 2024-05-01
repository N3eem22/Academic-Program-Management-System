using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Control;
using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.CumulativeAverage;
using Grad.Core.Entities.Entities;
using Grad.Core.Entities.Graduation;

namespace Grad.APIs.DTO.ProgrmInformation
{
    public class ProgramInformationReqDTO
    {
            public int Id { get; set; }
            public int ProgramId { get; set; }
            public string ProgramNameInArabic { get; set; }
            public string ProgramNameInEnglish { get; set; }
            public string MajorNameInArabic { get; set; }
            public string MajorNameInEnglish { get; set; }
            public int ProgramCode { get; set; }
            public string Institute { get; set; }
            public int AcademicDegreeId { get; set; }
            public string Degree { get; set; }
            public string NameInCertificate { get; set; }
            public string NameInCertificateInEnglish { get; set; }
            public string BeginningOfTheProgram { get; set; }
            public string EndOfTheProgram { get; set; }
            public int SystemTypeId { get; set; }
            public int InstitutionCode { get; set; }
            public int TeamCode { get; set; }
            public bool SpecialProgram { get; set; }
            public int CreditHours { get; set; }
            public int Mandatory_ProjectHours { get; set; }
            public int OptionalHours { get; set; }
            public int FreeHours { get; set; }
            public int AdditionalRegistrationHours { get; set; }
            public int EligibleHoursforProjectRegistration { get; set; }
            public int ProjectHours { get; set; }
            public int BurdanCalculationId { get; set; }
            public bool ExcludingTheBudgetTermWhenCalculatingTheGPA { get; set; }
            public int PassingTheElectiveGroupBasedOnId { get; set; }
            public string pre_Requisite { get; set; }
            public int EditTheStudentLevelId { get; set; }
            public bool AllowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear { get; set; }
            public int FailureTimesForWarning { get; set; }
            public int FailureTimesForRe_Enrollment { get; set; }
            public int BlockingProofOfRegistrationId { get; set; }
            public int TypeOfFinancialStatementInTheProgramId { get; set; }
            public int TypeOfProgramFeesId { get; set; }
            public int TypeOfSummerFeesId { get; set; }
            public bool CalculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete { get; set; }
            public bool BookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly { get; set; }
            public string Result { get; set; }
            public int TheResultAppearsId { get; set; }
            public int TheResultToTheGuidId { get; set; }
            public int ReasonForBlockingRegistrationId { get; set; }
            public bool LinkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration { get; set; }
            public bool LinkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees { get; set; }
            public bool RegistrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly { get; set; }
            public int NumberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects { get; set; }
            public int TheReasonForHiddingTheResultId { get; set; }
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
