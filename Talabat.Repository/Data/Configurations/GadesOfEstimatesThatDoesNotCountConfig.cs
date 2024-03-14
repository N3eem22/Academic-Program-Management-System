using Grad.Core.Entities.CumulativeAverage;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configrations
{
    internal class GadesOfEstimatesThatDoesNotCountConfig : IEntityTypeConfiguration<GadesOfEstimatesThatDoesNotCount>
    {
        public void Configure(EntityTypeBuilder<GadesOfEstimatesThatDoesNotCount> builder)
        {
            builder.HasKey(k => new { k.GradeId, k.CumulativeAverageId });
            builder.HasOne(k => k.Grades)
                .WithMany(g => g.gadesOfEstimatesThatDoesNotCount)
                .HasForeignKey(k => k.GradeId).OnDelete(deleteBehavior : DeleteBehavior.Cascade);
            builder.HasOne(k => k.CumulativeAverage)
            .WithMany(g => g.gadesOfEstimatesThatDoesNotCount)
            .HasForeignKey(k => k.CumulativeAverageId).OnDelete(deleteBehavior: DeleteBehavior.Cascade);
        }
    }
}
