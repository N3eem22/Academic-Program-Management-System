using Grad.Core.Entities.Graduation;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configrations
{
    public class GraduationConfig : IEntityTypeConfiguration<Graduation>
    {
        public void Configure(EntityTypeBuilder<Graduation> builder)
        {
            builder.HasOne(e => e.Level)
                .WithMany(l => l.Graduations)
                .HasForeignKey(e => e.LevelToBePassedId).OnDelete(deleteBehavior : DeleteBehavior.NoAction);

            builder.HasOne(e => e.Semesters)
                .WithMany(l => l.Graduations)
                .HasForeignKey(e => e.SemesterToBePassedId).OnDelete(deleteBehavior: DeleteBehavior.NoAction); ;

            builder.HasOne(e => e.Grades)
                .WithMany(l => l.Graduations)
                .HasForeignKey(e => e.TheMinimumGradeForTheCourseId).OnDelete(deleteBehavior: DeleteBehavior.NoAction); ;
        }
    }
}
