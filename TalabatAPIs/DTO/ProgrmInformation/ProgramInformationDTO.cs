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
        public string Institue { get; set; }
        public string AcademicDegree { get; set; }
        public string Degree { get; set; }
        public string NameInCertificate { get; set; }
        public string NameInCertificateInEnglish { get; set; }
        public string BeginningOfTheProgram { get; set; }
        public string EndOfTheProgram { get; set; }
        public string SystemType { get; set; }
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
        public string BurdenCalculation { get; set; }
        public bool ExcludingTheBudgetTermWhenCalculatingTheGPA { get; set; }
        public string PassingTheElectiveGroupBasedOn { get; set; }
        public string pre_Requisite { get; set; }
        public string EditTheStudentLevel { get; set; }
        public bool AllowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear { get; set; }
        public int FailureTimesForWarning { get; set; }
        public int FailureTimesForRe_Enrollment { get; set; }
        public string BlockingProofOfRegistration { get; set; }
        public string TypeOfFinancialStatementInTheProgram { get; set; }
        public string TypeOfProgramFees { get; set; }
        public string TypeOfSummerFees { get; set; }
        public bool CalculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete { get; set; }
        public bool BookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly { get; set; }
        public string Result { get; set; }
        public string TheResultAppears { get; set; }
        public string TheResultToTheGuid { get; set; }
        public string ReasonForBlockingRegistration { get; set; }
        public bool LinkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration { get; set; }
        public bool LinkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees { get; set; }
        public bool RegistrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly { get; set; }
        public int NumberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects { get; set; }
        public string TheReasonForHiddingTheResult { get; set; }
        public string Questionnaire { get; set; }
        public ICollection<PI_DivisionTypeDTO> pI_DivisionTypes { get; set; } = new HashSet<PI_DivisionTypeDTO>();
        public ICollection<PI_AllGradesSummerEstimateDTO> pI_AllGradesSummerEstimates { get; set; } = new HashSet<PI_AllGradesSummerEstimateDTO>();
        public ICollection<PI_EstimatesOfCourseFeeExemptionDTO> PI_EstimatesOfCourseFeeExemptions { get; set; } = new HashSet<PI_EstimatesOfCourseFeeExemptionDTO>();
        public ICollection<PI_DetailedGradesToBeAnnouncedDTO> pI_DetailedGradesToBeAnnounced { get; set; } = new HashSet<PI_DetailedGradesToBeAnnouncedDTO>();


    
}
}
