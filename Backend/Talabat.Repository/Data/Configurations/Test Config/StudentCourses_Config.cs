using Grad.Core.Entities.Test;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configurations.Test_Config
{
    internal class StudentCourses_Config : IEntityTypeConfiguration<Students_Courses>
    {
        public void Configure(EntityTypeBuilder<Students_Courses> builder)
        {

            builder.HasKey(s => new { s.CollegeCoursesId, s.StudentsId });


            builder.HasOne(s => s.Students)
                   .WithMany(s => s.Courses)
                   .HasForeignKey(s => s.StudentsId).OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(s => s.Courses)
                   .WithMany(s => s.Students_Courses)
                   .HasForeignKey(s => s.CollegeCoursesId).OnDelete(DeleteBehavior.NoAction);
        }
    }
}
