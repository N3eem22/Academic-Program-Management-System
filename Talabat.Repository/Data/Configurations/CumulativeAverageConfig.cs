using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.CumulativeAverage;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configrations
{
    internal class CumulativeAverageConfig : IEntityTypeConfiguration<CumulativeAverage>
    {
        public void Configure(EntityTypeBuilder<CumulativeAverage> builder)
        {
            builder.HasOne(e => e.Grades)
                .WithMany(g => g.UtmostGrades)
                .HasForeignKey(e => e.UtmostGrade).OnDelete(deleteBehavior : DeleteBehavior.NoAction);
                
        }
    }
}
