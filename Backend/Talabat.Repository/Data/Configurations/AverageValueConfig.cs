using Grad.Core.Entities.Graduation;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configurations
{
    public class AverageValueConfig : IEntityTypeConfiguration<AverageValue>
    {
        public void Configure(EntityTypeBuilder<AverageValue> builder)
        {
            builder.HasKey(e => new {e.EquivalentGradeId , e.GraduationId });
            builder.HasOne(p => p.EquivalentGrade)
                .WithMany(f => f.AverageValues)
                .HasForeignKey(e => e.EquivalentGradeId).OnDelete(deleteBehavior: DeleteBehavior.Cascade).IsRequired();

           builder.HasOne(p => p.Graduation)
          .WithMany(f => f.AverageValues)
          .HasForeignKey(e => e.GraduationId).OnDelete(deleteBehavior: DeleteBehavior.Cascade).IsRequired();

           builder.HasOne(p => p.AllGrades)
          .WithMany(f => f.AverageValues)
          .HasForeignKey(e => e.AllGradesId).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired();


        }
    }
}
