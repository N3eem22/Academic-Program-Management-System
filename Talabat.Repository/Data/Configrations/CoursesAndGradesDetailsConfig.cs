using Grad.Core.Entities.CoursesInfo;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configrations
{
    internal class CoursesAndGradesDetailsConfig : IEntityTypeConfiguration<CoursesandGradesDetails>
    {
        public void Configure(EntityTypeBuilder<CoursesandGradesDetails> builder)
        {
            builder.ToTable("CoursesInformationsAndDetailedGrade");

            builder.HasKey(cg => new { cg.CourseInfoId, cg.GradeDetailsId });

            builder.HasOne(cg => cg.GradesDetails)
                .WithMany(f => f.coursesandGradesDetails)
                .HasForeignKey(e => e.GradeDetailsId).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(false);

            builder.HasOne(cg => cg.CourseInformation)
            .WithMany(f => f.coursesandGradesDetails)
            .HasForeignKey(e => e.CourseInfoId).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(false);
        }
    }
}
