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
    internal class CoursesAndHoursConfig : IEntityTypeConfiguration<CoursesAndHours>
    {
        public void Configure(EntityTypeBuilder<CoursesAndHours> builder)
        {
            builder.ToTable("CoursesAndHours");

            builder.HasKey(ch => new {ch.HourId , ch.CourseInfoId });

            builder.HasOne(ch => ch.CourseInformation)
                .WithMany(f => f.coursesAndHours)
                .HasForeignKey(e => e.CourseInfoId).OnDelete(deleteBehavior: DeleteBehavior.SetNull);

            builder.HasOne(ch => ch.Hours)
            .WithMany(f => f.coursesAndHours)
            .HasForeignKey(e => e.HourId).OnDelete(deleteBehavior: DeleteBehavior.SetNull);
        }
    }
}
