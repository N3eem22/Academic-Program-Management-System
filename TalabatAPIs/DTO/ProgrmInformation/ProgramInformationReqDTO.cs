using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.DTO.Entities_Dto.Graduation;
using Grad.APIs.DTO.Entities_Dto.ProgramLEvelsDTO;
using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Control;
using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.CumulativeAverage;
using Grad.Core.Entities.Entities;
using Grad.Core.Entities.Graduation;
using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Entities;

namespace Grad.APIs.DTO.ProgrmInformation
{
    public class ProgramInformationReqDTO
    {
            public int ProgramsId { get; set; }
            public string ProgramNameInArabic { get; set; }
            public string ProgramNameInEnglish { get; set; }
            public string MajorNameInArabic { get; set; }
            public string MajorNameInEnglish { get; set; }
            public int ProgramCode { get; set; }
            public int FacultyId { get; set; }
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
            public ICollection<PI_DivisionTypeReqDTO> pI_DivisionTypes { get; set; } = new HashSet<PI_DivisionTypeReqDTO>();
            public ICollection<PI_AllGradesSummerEstimateReqDTO> pI_AllGradesSummerEstimates { get; set; } = new HashSet<PI_AllGradesSummerEstimateReqDTO>();
            public ICollection<PI_EstimatesOfCourseFeeExemptionReqDTO> PI_EstimatesOfCourseFeeExemptions { get; set; } = new HashSet<PI_EstimatesOfCourseFeeExemptionReqDTO>();
            public ICollection<PI_DetailedGradesToBeAnnouncedReqDTO> pI_DetailedGradesToBeAnnounced { get; set; } = new HashSet<PI_DetailedGradesToBeAnnouncedReqDTO>();

       
    }
    }
