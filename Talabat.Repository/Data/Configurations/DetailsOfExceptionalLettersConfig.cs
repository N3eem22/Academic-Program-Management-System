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
    public class DetailsOfExceptionalLettersConfig : IEntityTypeConfiguration<DetailsOfExceptionalLetters>
    {
        public void Configure(EntityTypeBuilder<DetailsOfExceptionalLetters> builder)
        {
            builder.HasKey(x => new
            {
                x.GradeGetailId,
                x.ControlId
            });
            builder.HasOne(g => g.GradesDetails).WithMany(g => g.DetailsOfExceptionalLetters).HasForeignKey(f => f.GradeGetailId);
            builder.HasOne(g => g.Control).WithMany(g => g.DetailsOfExceptionalLetters).HasForeignKey(f => f.ControlId);
        }
    }
}
