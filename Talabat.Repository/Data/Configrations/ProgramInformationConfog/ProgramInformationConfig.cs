using Grad.Core.Entities.Entities;
using Grad.Core.Entities.Lockups;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities.Academic_regulation;

namespace Grad.Repository.Data.Configrations.ProgramInformationConfig
{
    internal class ProgramInformationConfig : IEntityTypeConfiguration<ProgramInformation>
    {
        public void Configure(EntityTypeBuilder<ProgramInformation> builder)
        {
            builder.ToTable("AR_ProgramInformation");

            //Relations 1-M
            builder.HasOne(pi => pi.AcademicDegree)
                   .WithMany()
                   .HasForeignKey(pi => pi.AcademicDegreeid).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.SystemType)
                   .WithMany()
                   .HasForeignKey(pi => pi.SystemTypeId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.BurdenCalculation)
                   .WithMany()
                   .HasForeignKey(pi => pi.BurdanCalculationId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.PassingTheElectiveGroupBasedOn)
                   .WithMany()
                   .HasForeignKey(pi => pi.PassingTheElectiveGroupBasedOnId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.EditTheStudentLevel)
                  .WithMany()
                  .HasForeignKey(pi => pi.EditTheStudentLevelId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.BlockingProofOfRegistration)
                   .WithMany()
                   .HasForeignKey(pi => pi.BlockingProofOfRegistrationId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TypeOfFinancialStatementInTheProgram)
                   .WithMany()
                    .HasForeignKey(pi => pi.TypeOfFinancialStatementInTheProgramId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TypeOfProgramFees)
                   .WithMany()
                   .HasForeignKey(pi => pi.TypeOfProgramFeesId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TypeOfSummerFees)
                   .WithMany()
                   .HasForeignKey(pi => pi.TypeOfSummerFeesId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TheResultAppears)
                   .WithMany()
                   .HasForeignKey(pi => pi.TheResultAppearsId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TheResultToTheGuid)
                   .WithMany()
                   .HasForeignKey(pi => pi.TheResultToTheGuidId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.ReasonForBlockingRegistration)
                   .WithMany()
                   .HasForeignKey(pi => pi.ReasonForBlockingRegistrationId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);


            builder.HasOne(pi => pi.TheReasonForHiddingTheResult)
                   .WithMany()
                   .HasForeignKey(pi => pi.TheReasonForHiddingTheResultId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.Programs)
                  .WithMany()
                  .HasForeignKey(pi => pi.ProgramId).IsRequired().OnDelete(DeleteBehavior.NoAction);




        }
    }
}
