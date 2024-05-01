using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class ControlReq
    {
        public int ProgramId { get; set; }

        public int? SubtractFromTheDiscountRate { get; set; }
        public int? FirstReductionEstimatesForFailureTimes { get; set; }
        public int? PercentageForFristGrade { get; set; }
        public int? SecondReductionEstimatesForFailureTimes { get; set; }
        public int? PercentageForSecondGrade { get; set; }
        public int? ThirdReductionEstimatesForFailureTimes { get; set; }
        public int? PercentageForThirdGrade { get; set; }
        public bool? CalculatingTheBudgetEstimateFromTheReductionEstimates { get; set; }
        public bool? ExceptionToDiscountEstimates { get; set; }
        public int TheGrade { get; set; }
        public bool PlacementOfStudentsInTheCourse { get; set; }
        public int? EstimatingTheTheoreticalFailure { get; set; }

        public ICollection<FailureEstimatesInTheListReq> FailureEstimatesInTheLists { get; set; } = new HashSet<FailureEstimatesInTheListReq>();
        public bool DetailsOfTheoreticalFailingGrades { get; set; }
        public ICollection<DetailsOfTheoreticalFailingGradesReq> DetailsOfTheoreticalFailingGradesNav { get; set; } = new HashSet<DetailsOfTheoreticalFailingGradesReq>();
        public int ChooseTheDetailsOfTheoreticalFailureBasedOn { get; set; }
        public int CalculateEstimate { get; set; }
        public ICollection<ACaseOfAbsenceInTheDetailedGradesReq> ACaseOfAbsenceInTheDetailedGrades { get; set; } = new HashSet<ACaseOfAbsenceInTheDetailedGradesReq>();
        public bool AllDetailOrNo { get; set; }
        public ICollection<DetailsOfExceptionalLettersReq> DetailsOfExceptionalLetters { get; set; } = new HashSet<DetailsOfExceptionalLettersReq>();
        public bool AddingExciptionLetters { get; set; }
        public ICollection<ExceptionalLetterGradesReq> ExceptionalLetterGrades { get; set; } = new HashSet<ExceptionalLetterGradesReq>();

        public ICollection<EstimatesNotDefinedInTheListReq> EstimatesNotDefinedInTheLists { get; set; } = new HashSet<EstimatesNotDefinedInTheListReq>();

        public int SuccessGrades { get; set; }
        public int FailingGrades { get; set; }
        public int? EstimateDeprivationBeforeTheExamId { get; set; }
        public int? EstimateDeprivationAfterTheExamId { get; set; }
        public ICollection<ASuccessRatingDoesNotAddHoursOrAverageReq> ASuccessRatingDoesNotAddHours { get; set; } = new HashSet<ASuccessRatingDoesNotAddHoursOrAverageReq>();

    }
}
