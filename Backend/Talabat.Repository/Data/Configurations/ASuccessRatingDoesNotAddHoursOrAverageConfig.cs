using Grad.Core.Entities.Control;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configurations
{
    public class ASuccessRatingDoesNotAddHoursOrAverageConfig : IEntityTypeConfiguration<ASuccessRatingDoesNotAddHoursOrAverage>
    {
        public void Configure(EntityTypeBuilder<ASuccessRatingDoesNotAddHoursOrAverage> builder)
        {
            builder.HasKey(x => new
            {
                x.GradeId,
                x.ControlId
            });
            builder.HasOne(g => g.Grades).WithMany(g => g.ASuccessRatingDoesNotAddHoursOrAverages).HasForeignKey(f => f.GradeId);
            builder.HasOne(g => g.Control).WithMany(g => g.ASuccessRatingDoesNotAddHours).HasForeignKey(f => f.ControlId);
        }
    }
}
