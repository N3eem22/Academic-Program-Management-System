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
    public class ACaseOfAbsenceInTheDetailedGradesConfig : IEntityTypeConfiguration<ACaseOfAbsenceInTheDetailedGrades>
    {
        public void Configure(EntityTypeBuilder<ACaseOfAbsenceInTheDetailedGrades> builder)
        {
           builder.HasKey(x => new
           {
               x.GradeDetailId ,
               x.ControlId
           });
            builder.HasOne(g => g.GradesDetails).WithMany(g => g.ACaseOfAbsenceInTheDetailedGrades).HasForeignKey(f => f.GradeDetailId);
            builder.HasOne(g => g.Control).WithMany(g => g.ACaseOfAbsenceInTheDetailedGrades).HasForeignKey(f => f.ControlId);
        }
    }
}
