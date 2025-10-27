using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Test;

namespace Grad.Repository.Data.Configurations.Test_Config
{
    internal class Student_Config : IEntityTypeConfiguration<Students>
    {
        public void Configure(EntityTypeBuilder<Students> builder)
        {
            builder.ToTable("Students");

            //Relations 1-M
            builder.HasOne(s => s.faculty)
                   .WithMany(s => s.Students)
                   .HasForeignKey(s => s.FacultyId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(s => s.University)
                  .WithMany(s => s.Students)
                  .HasForeignKey(s => s.UniversityId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(s => s.Programs)
                .WithMany(s => s.Students)
                .HasForeignKey(s => s.ProgramsId).IsRequired().OnDelete(DeleteBehavior.NoAction);

        }
    }
}
