using Grad.Core.Entities.Control;
using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.CumulativeAverage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Specifications;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class ControlSpec : BaseSpecifications<Control>
    {
        public ControlSpec(int? ProgramId)
           : base(c => (!ProgramId.HasValue || c.ProgramId == ProgramId.Value))
        {
            Includes.Add(c => c.FirstGrades);
            Includes.Add(c => c.SecondGrades);
            Includes.Add(c => c.ThirdGrades);
            Includes.Add(c => c.TheoriticalFailure);
            Includes.Add(c => c.EstimateDeprivationBeforeTheExam);
            Includes.Add(c => c.EstimateDeprivationAfterTheExam);
            Includes.Add(c => c.FailureEstimatesInTheLists);
            Includes.Add(c => c.DetailsOfTheoreticalFailingGradesNav);
            Includes.Add(c => c.ACaseOfAbsenceInTheDetailedGrades);
            Includes.Add(c => c.DetailsOfExceptionalLetters);
            Includes.Add(c => c.ExceptionalLetterGrades);
            Includes.Add(c => c.EstimatesNotDefinedInTheLists);
            Includes.Add(c => c.ASuccessRatingDoesNotAddHours);

        }
    }
}
