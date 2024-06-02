using Grad.Core.Entities.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Grad.Core.Entities.Test;

namespace Grad.Repository.Data.Configurations.Test_Config
{
    internal class StudentProgram_Config : IEntityTypeConfiguration<Students_Programs>
    {
        public void Configure(EntityTypeBuilder<Students_Programs> builder)
        {

            builder.HasKey(s => new { s.ProgramsId, s.StudentsId });


            builder.HasOne(s => s.Students)
                   .WithMany(s => s.Programs)
                   .HasForeignKey(s => s.StudentsId).OnDelete(DeleteBehavior.NoAction);


            builder.HasOne(s => s.Programs)
                   .WithMany(s => s.Students_Programs)
                   .HasForeignKey(s => s.ProgramsId).OnDelete(DeleteBehavior.NoAction);

        }

     }
}
