using Grad.Core.Entities.Control;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class ControlDTO
    {
        public int Id { get; set; }
        public int ProgramId { get; set; }
        public int? SubtractFromTheDiscountRate { get; set; }
        public string? FirstReductionEstimatesForFailureTimes { get; set; }
        public int? PercentageForFristGrade { get; set; }
        public string? SecondReductionEstimatesForFailureTimes { get; set; }
        public int? PercentageForSecondGrade { get; set; }
        public string? ThirdReductionEstimatesForFailureTimes { get; set; }
        public int? PercentageForThirdGrade { get; set; }
        public bool? CalculatingTheBudgetEstimateFromTheReductionEstimates { get; set; }
        public bool? ExceptionToDiscountEstimates { get; set; }
        public int TheGrade { get; set; }
        public bool PlacementOfStudentsInTheCourse { get; set; }
        public string? EstimatingTheTheoreticalFailure { get; set; }
        public ICollection<FailureEstimatesInTheListDTO> FailureEstimatesInTheLists { get; set; } = new HashSet<FailureEstimatesInTheListDTO>();

        public bool DetailsOfTheoreticalFailingGrades { get; set; }
        public ICollection<DetailsOfTheoreticalFailingGradesDTO> DetailsOfTheoreticalFailingGradesNav { get; set; } = new HashSet<DetailsOfTheoreticalFailingGradesDTO>();
        public int ChooseTheDetailsOfTheoreticalFailureBasedOn { get; set; }
        public int CalculateEstimate { get; set; }
        public ICollection<ACaseOfAbsenceInTheDetailedGradesDTO> ACaseOfAbsenceInTheDetailedGrades { get; set; } = new HashSet<ACaseOfAbsenceInTheDetailedGradesDTO>();
        public bool AllDetailOrNo { get; set; }
        public ICollection<DetailsOfExceptionalLettersDTO> DetailsOfExceptionalLetters { get; set; } = new HashSet<DetailsOfExceptionalLettersDTO>();

        public int SuccessGrades { get; set; }      
        public bool AddingExciptionLetters { get; set; }
        public ICollection<ExceptionalLetterGradesDTO> ExceptionalLetterGrades { get; set; } = new HashSet<ExceptionalLetterGradesDTO>();

        public ICollection<EstimatesNotDefinedInTheListDTO> EstimatesNotDefinedInTheLists { get; set; } = new HashSet<EstimatesNotDefinedInTheListDTO>();

        public int FailingGrades { get; set; }
        public string? EstimateDeprivationBeforeTheExam { get; set; }
        public string? EstimateDeprivationAfterTheExam { get; set; }
        public ICollection<ASuccessRatingDoesNotAddHoursOrAverageDTO> ASuccessRatingDoesNotAddHours { get; set; } = new HashSet<ASuccessRatingDoesNotAddHoursOrAverageDTO>();

    }
}
