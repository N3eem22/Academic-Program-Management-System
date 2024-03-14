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
        }
    }
}
