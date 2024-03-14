using Grad.Core.Entities.Academic_regulation;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configrations.AcademicLoadAccordingToLevelConfig
{
    internal class AcademicLoadAccordingToLevel_Config : IEntityTypeConfiguration<AcademicLoadAccordingToLevel>
    {
        public void Configure(EntityTypeBuilder<AcademicLoadAccordingToLevel> builder)
        {
            builder.HasOne(pi => pi.Program_Info)
                .WithMany()
                .HasForeignKey(pi => pi.Prog_InfoId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.AcademicLevel)
                .WithMany()
                .HasForeignKey(pi => pi.LevelId).IsRequired().OnDelete(DeleteBehavior.NoAction);
        }
    }
}
