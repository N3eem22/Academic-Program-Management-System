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
    public class GraduationSemestersConfig : IEntityTypeConfiguration<GraduationSemesters>
    {
        public void Configure(EntityTypeBuilder<GraduationSemesters> builder)
        {
            builder.HasKey(g => new
            {
                g.SemesterId ,
                g.GraduationId
            });
            builder.HasOne(g=> g.semesters).WithMany(s => s.GraduationSemesters).HasForeignKey(g => g.SemesterId);
            builder.HasOne(g => g.Graduation).WithMany(s => s.SemestersTobePssed).HasForeignKey(g => g.GraduationId);

        }
    }
}
