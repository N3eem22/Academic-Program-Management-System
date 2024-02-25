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
    internal class DetailesOfFaolingGradesConfig : IEntityTypeConfiguration<DetailsOfFailingGrades>
    {
        public void Configure(EntityTypeBuilder<DetailsOfFailingGrades> builder)
        {
            builder.ToTable("CoursesAndFailingGrades");

            builder.HasKey(cf => new { cf.CourseInfoId, cf.FailedGradeId});

            builder.HasOne(cf => cf.CourseInformation)
                .WithMany(f => f.detailsOfFailingGrades)
                .HasForeignKey(e => e.CourseInfoId).OnDelete(deleteBehavior: DeleteBehavior.SetNull);

            builder.HasOne(cf => cf.FailedGrade)
            .WithMany(f => f.detailsOfFailingGrades)
            .HasForeignKey(e => e.FailedGradeId).OnDelete(deleteBehavior: DeleteBehavior.NoAction);
        }
    }
}
