using Stripe.Tax;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Lockups;

namespace Grad.Core.Entities.CumulativeAverage
{

    public class CumulativeAverage  :BaseEntity
    {
        public int ProgramId { get; set; }
        [ForeignKey(nameof(ProgramId))]
        public ProgramInformation Program { get; set; }
        public int ImprovingCourses { get; set; }
        public bool KeepFailing { get; set; }
        public bool MaintainingStudentSuccess { get; set; }
        public int UtmostGrade { get; set; }
        [ForeignKey(nameof(UtmostGrade))]
        public AllGrades Grades { get; set; }
        public bool ChangingCourses { get; set; }
        public int SomeOfGrades { get; set; }
        public int HowToCalculateTheRatio { get; set; }
        public int MultiplyingTheHoursByTheStudentsGrades { get; set; }
        public bool CalculateTheTermOfTheEquationInTheRate { get; set; }
        public bool CalculatingTheSemesterEquationInHourseEarned { get; set; }
        public bool RateApproximation { get; set; }
        public int TheNnumberOfDigitsRroundingTheRate { get; set; }
        public bool ReducingTheRateUponImprovement { get; set; }
        public int MaximumNumberOfAdditionsToFailedCoursesWithoutSuccess { get; set; }
        public int DeleteFailedCoursesAfterSuccess { get; set; }
        public int MaximumCumulativeGPA { get; set; }
        public int CalculateTheCumulativeEstimate { get; set; }
        public int HowToCalculateTheRate { get; set; }
        public int TheNumberOfDigitsRoundinPoints { get; set; }
        public int NumberOfDigitsRoundingTheRatio { get; set; }
        public bool SummerIsNotExcludedInCalculatingTheAnnualAverage { get; set; }
        public bool TheCumulativeAverageDoesNotAppearInTheStudentGradesPortal { get; set; }
        public bool TheSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades { get; set; }
        public bool showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal { get; set; }
        public bool CalculatingFailingGradePoints { get; set; }
        public bool CalculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage { get; set; }
        public int HowToCalculateTheSemesterAverage { get; set; }
        public ICollection<GadesOfEstimatesThatDoesNotCount> GadesOfEstimatesThatDoesNotCount { get; set; } = new HashSet<GadesOfEstimatesThatDoesNotCount>();

    }
}
