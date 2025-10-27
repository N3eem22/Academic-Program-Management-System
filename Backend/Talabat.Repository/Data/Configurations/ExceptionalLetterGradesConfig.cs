using Grad.Core.Entities.Control;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configurations
{
    public class ExceptionalLetterGradesConfig : IEntityTypeConfiguration<ExceptionalLetterGrades>
    {
        public void Configure(EntityTypeBuilder<ExceptionalLetterGrades> builder)
        {
            builder.HasKey(x => new
            {
                x.GradeId,
                x.ControlId
            });
            builder.HasOne(g => g.Grades).WithMany(g => g.ExceptionalLetterGrades).HasForeignKey(f => f.GradeId);
            builder.HasOne(g => g.Control).WithMany(g => g.ExceptionalLetterGrades).HasForeignKey(f => f.ControlId);
        }
    }
}
