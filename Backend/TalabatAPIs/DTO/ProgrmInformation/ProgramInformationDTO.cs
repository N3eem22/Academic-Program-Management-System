using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.DTO.Entities_Dto.Cumulative_Average;
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
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.ProgrmInformation
{
    public class ProgramInformationDTO
    {
        public int Id { get; set; }
        public int ProgramsId { get; set; }
        public string ProgramNameInArabic { get; set; }
        public string ProgramNameInEnglish { get; set; }
        public string MajorNameInArabic { get; set; }
        public string MajorNameInEnglish { get; set; }
        public int ProgramCode { get; set; }
        public string FacultyId { get; set; }
        public string AcademicDegreeId { get; set; }
        public string NameInCertificate { get; set; }
        public string NameInCertificateInEnglish { get; set; }
        public string BeginningOfTheProgram { get; set; }
        public string EndOfTheProgram { get; set; }
        public string SystemTypeId { get; set; }
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
        public string BurdanCalculationId { get; set; }
        public bool ExcludingTheBudgetTermWhenCalculatingTheGPA { get; set; }
        public string PassingTheElectiveGroupBasedOnId { get; set; }
        public string? PrerequisitesProgramsId { get; set; }
        public string EditTheStudentLevelId { get; set; }
        public bool AllowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear { get; set; }
        public int FailureTimesForWarning { get; set; }
        public int FailureTimesForRe_Enrollment { get; set; }
        public string BlockingProofOfRegistrationId { get; set; }
        public string TypeOfFinancialStatementInTheProgramId { get; set; }
        public string TypeOfProgramFeesId { get; set; }
        public string TypeOfSummerFeesId { get; set; }
        public bool CalculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete { get; set; }
        public bool BookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly { get; set; }
        public string Result { get; set; }
        public string TheResultAppearsId { get; set; }
        public string TheResultToTheGuidId { get; set; }
        public string ReasonForBlockingRegistrationId { get; set; }
        public bool LinkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration { get; set; }
        public bool LinkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees { get; set; }
        public bool RegistrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly { get; set; }
        public int NumberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects { get; set; }
        public string TheReasonForHiddingTheResultId { get; set; }
        public bool Questionnaire { get; set; }
        public bool TheQuestionnaireIsIncluded { get; set; }
        public string pI_DivisionTypes { get; set; } 
        public string pI_AllGradesSummerEstimates { get; set; }
        public string PI_EstimatesOfCourseFeeExemptions { get; set; } 
        public string pI_DetailedGradesToBeAnnounced { get; set; } 




    }
}
