using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Control
{
    public class Control : BaseEntity
    {
        public int ProgramId { get; set; }
        public ProgramInformation Program { get; set; }
        public int? SubtractFromTheDiscountRate { get; set; }
        public int? FirstReductionEstimatesForFailureTimes { get; set; }
        [ForeignKey(nameof(FirstReductionEstimatesForFailureTimes))]
        public AllGrades? FirstGrades { get; set; }
        public int? PercentageForFristGrade { get; set; }
        public int? SecondReductionEstimatesForFailureTimes { get; set; }
        [ForeignKey(nameof(SecondReductionEstimatesForFailureTimes))]
        public AllGrades? SecondGrades { get; set; }
        public int? PercentageForSecondGrade { get; set; }
        public int? ThirdReductionEstimatesForFailureTimes { get; set; }
        [ForeignKey(nameof(ThirdReductionEstimatesForFailureTimes))]
        public AllGrades? ThirdGrades { get; set; }
        public int? PercentageForThirdGrade { get; set; }
        public bool? CalculatingTheBudgetEstimateFromTheReductionEstimates { get; set; }
        public bool? ExceptionToDiscountEstimates { get; set; }
        public int TheGrade { get; set; }
        public bool PlacementOfStudentsInTheCourse { get; set; }
        public int? EstimatingTheTheoreticalFailure { get; set; }
        public AllGrades? TheoriticalFailure { get; set; }

        public ICollection<FailureEstimatesInTheList> FailureEstimatesInTheLists { get; set; } = new HashSet<FailureEstimatesInTheList>();
        public bool DetailsOfTheoreticalFailingGrades { get; set; }
        public ICollection<DetailsOfTheoreticalFailingGrades> DetailsOfTheoreticalFailingGradesNav { get; set; } = new HashSet<DetailsOfTheoreticalFailingGrades>();
        public int ChooseTheDetailsOfTheoreticalFailureBasedOn { get; set; }
        public int CalculateEstimate { get; set; }
        public ICollection<ACaseOfAbsenceInTheDetailedGrades> ACaseOfAbsenceInTheDetailedGrades { get; set; } = new HashSet<ACaseOfAbsenceInTheDetailedGrades>();
        public bool AllDetailOrNo { get; set; }
        public ICollection<DetailsOfExceptionalLetters> DetailsOfExceptionalLetters { get; set; } = new HashSet<DetailsOfExceptionalLetters>();
        public bool AddingExciptionLetters { get; set; }
        public ICollection<ExceptionalLetterGrades> ExceptionalLetterGrades { get; set; } = new HashSet<ExceptionalLetterGrades>();

        public ICollection<EstimatesNotDefinedInTheList> EstimatesNotDefinedInTheLists { get; set; } = new HashSet<EstimatesNotDefinedInTheList>();

        public int SuccessGrades { get; set; }
        public int FailingGrades { get; set; }
        public int? EstimateDeprivationBeforeTheExamId { get; set; }
        public AllGrades EstimateDeprivationBeforeTheExam { get; set; }
        public int? EstimateDeprivationAfterTheExamId { get; set; }
        public AllGrades EstimateDeprivationAfterTheExam { get; set; }
        public ICollection<ASuccessRatingDoesNotAddHoursOrAverage> ASuccessRatingDoesNotAddHours { get; set; } = new HashSet<ASuccessRatingDoesNotAddHoursOrAverage>();

    }
}
