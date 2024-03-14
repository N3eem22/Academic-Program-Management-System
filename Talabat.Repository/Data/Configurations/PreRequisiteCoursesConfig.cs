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
    internal class PreRequisiteCoursesConfig : IEntityTypeConfiguration<PreRequisiteCourses>
    {
        public void Configure(EntityTypeBuilder<PreRequisiteCourses> builder)
        {
            builder.HasKey(pc => new {pc.PreRequisiteCourseId , pc.CourseInfoId});

            builder.HasOne(pc => pc.CourseInformation)
                .WithMany(f => f.preRequisiteCourses)
                .HasForeignKey(e => e.CourseInfoId).OnDelete(deleteBehavior : DeleteBehavior.Cascade).IsRequired(false);

            builder.HasOne(pc => pc.Courses)
                .WithMany(f => f.preRequisiteCourses)
                .HasForeignKey(e => e.PreRequisiteCourseId).OnDelete(deleteBehavior: DeleteBehavior.Cascade).IsRequired(false);
        }
    }
}
