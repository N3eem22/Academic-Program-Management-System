using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities.Entities;
using Talabat.Core.Specifications;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace Grad.Core.Specifications.Enities_Spec
{
    public class ProgramInformationSpec : BaseSpecifications<ProgramInformation>
    {
        public ProgramInformationSpec(int ProgramsId)
         : base(c => ( c.ProgramsId == ProgramsId && c.IsDeleted == false))
        {
            Includes.Add(Pi => Pi.Programs);
            Includes.Add(pi => pi.AcademicDegree);
            Includes.Add(pi => pi.SystemType);
            Includes.Add(pi => pi.BurdenCalculation);
            Includes.Add(pi => pi.PassingTheElectiveGroupBasedOn);
            Includes.Add(pi => pi.EditTheStudentLevel);
            Includes.Add(pi => pi.BlockingProofOfRegistration);
            Includes.Add(pi => pi.TypeOfFinancialStatementInTheProgram);
            Includes.Add(pi => pi.TypeOfProgramFees);
            Includes.Add(pi => pi.TypeOfSummerFees);
            Includes.Add(pi => pi.TheResultAppears);
            Includes.Add(pi => pi.TheResultToTheGuid);
            Includes.Add(pi => pi.ReasonForBlockingRegistration);
            Includes.Add(pi => pi.TheReasonForHiddingTheResult);
            Includes.Add(pi => pi.pI_DivisionTypes);
            Includes.Add(pi => pi.pI_AllGradesSummerEstimates);
            Includes.Add(pi => pi.PI_EstimatesOfCourseFeeExemptions);
            Includes.Add(pi => pi.pI_DetailedGradesToBeAnnounced);
            Includes.Add(pi => pi.Institue);
            //Includes.Add(pi => pi.Program_TheGrades);
            //Includes.Add(pi => pi.programLevels);
            //Includes.Add(pi => pi.academicLoadAccordingToLevels);
            //Includes.Add(pi => pi.Courses);
            //Includes.Add(pi => pi.CumulativeAverages);
            //Includes.Add(pi => pi.Graduations);
            //Includes.Add(pi => pi.Controls);

        }
    }
}
