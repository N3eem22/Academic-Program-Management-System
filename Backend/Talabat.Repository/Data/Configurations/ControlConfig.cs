using Grad.Core.Entities.Control;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configrations
{
    public class ControlConfig : IEntityTypeConfiguration<Control>
    {
        public void Configure(EntityTypeBuilder<Control> builder)
        {
            builder.HasOne(ci => ci.Program)
                  .WithMany(e => e.Controls)
                  .HasForeignKey(ci => ci.ProgramId).IsRequired().OnDelete(deleteBehavior: DeleteBehavior.NoAction);

            builder.HasOne(e => e.FirstGrades)
                .WithMany(e => e.FirstReduction)
                .HasForeignKey(e => e.FirstReductionEstimatesForFailureTimes).OnDelete(deleteBehavior : DeleteBehavior.NoAction);

            builder.HasOne(e => e.SecondGrades)
                .WithMany(e => e.SecondReduction)
                .HasForeignKey(e => e.SecondReductionEstimatesForFailureTimes).OnDelete(deleteBehavior: DeleteBehavior.NoAction);

            builder.HasOne(e => e.ThirdGrades)
                .WithMany(e => e.ThirdReduction)
                .HasForeignKey(e => e.ThirdReductionEstimatesForFailureTimes).OnDelete(deleteBehavior: DeleteBehavior.NoAction);

            builder.HasOne(e => e.TheoriticalFailure)
              .WithMany(e => e.TheoriticalFailure)
              .HasForeignKey(e => e.EstimatingTheTheoreticalFailure).OnDelete(deleteBehavior: DeleteBehavior.NoAction);

            builder.HasOne(e => e.EstimateDeprivationBeforeTheExam)
             .WithMany(e => e.EstimateDeprivationBeforeTheExam)
             .HasForeignKey(e => e.EstimateDeprivationBeforeTheExamId).OnDelete(deleteBehavior: DeleteBehavior.NoAction);

            builder.HasOne(e => e.EstimateDeprivationAfterTheExam)
            .WithMany(e => e.EstimateDeprivationAfterTheExam)
            .HasForeignKey(e => e.EstimateDeprivationAfterTheExamId).OnDelete(deleteBehavior: DeleteBehavior.NoAction);
        }
    }
}
