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
using Talabat.Core.Entities.Lockups;

namespace Grad.Repository.Data.Configrations.ProgramInformationConfig
{
    internal class ProgramInformationConfig : IEntityTypeConfiguration<ProgramInformation>
    {
        public void Configure(EntityTypeBuilder<ProgramInformation> builder)
        {
            builder.ToTable("AR_ProgramInformation");

            //Relations 1-M
            builder.HasOne(pi => pi.AcademicDegree)
                   .WithMany(pi=> pi.Program_Information)
                   .HasForeignKey(pi => pi.AcademicDegreeid).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.SystemType)
                   .WithMany(pi=>pi.Program_Information)
                   .HasForeignKey(pi => pi.SystemTypeId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.BurdenCalculation)
                   .WithMany(pi=>pi.Program_Information)
                   .HasForeignKey(pi => pi.BurdanCalculationId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.PassingTheElectiveGroupBasedOn)
                   .WithMany(pi=>pi.Program_Information)
                   .HasForeignKey(pi => pi.PassingTheElectiveGroupBasedOnId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.EditTheStudentLevel)
                  .WithMany(pi=>pi.Program_Information)
                  .HasForeignKey(pi => pi.EditTheStudentLevelId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.BlockingProofOfRegistration)
                   .WithMany(pi => pi.Program_Information)
                   .HasForeignKey(pi => pi.BlockingProofOfRegistrationId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TypeOfFinancialStatementInTheProgram)
                   .WithMany(pi => pi.Program_Information)
                    .HasForeignKey(pi => pi.TypeOfFinancialStatementInTheProgramId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TypeOfProgramFees)
                   .WithMany(pi => pi.Program_Information)
                   .HasForeignKey(pi => pi.TypeOfProgramFeesId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TypeOfSummerFees)
                   .WithMany(pi => pi.Program_Information)
                   .HasForeignKey(pi => pi.TypeOfSummerFeesId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TheResultAppears)
                   .WithMany(pi => pi.Result_Appears)
                   .HasForeignKey(pi => pi.TheResultAppearsId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TheResultToTheGuid)
                   .WithMany(pi => pi.ResultAppearsToTheGuid)
                   .HasForeignKey(pi => pi.TheResultToTheGuidId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.ReasonForBlockingRegistration)
                   .WithMany(pi => pi.Program_Information)
                   .HasForeignKey(pi => pi.ReasonForBlockingRegistrationId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);


            builder.HasOne(pi => pi.TheReasonForHiddingTheResult)
                   .WithMany(pi => pi.Program_Information)
                   .HasForeignKey(pi => pi.TheReasonForHiddingTheResultId).IsRequired(false).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.Programs)
                  .WithMany(pi=>pi.Program_Information)
                  .HasForeignKey(pi => pi.ProgramId).IsRequired().OnDelete(DeleteBehavior.NoAction);




        }
    }
}
