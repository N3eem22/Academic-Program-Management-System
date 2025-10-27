using Grad.Core.Entities.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Grad.Core.Entities.Academic_regulation;

namespace Grad.Repository.Data.Configrations.Program_LevelsConfig
{
    internal class ProgramLevelsConfig : IEntityTypeConfiguration<programLevels>
    {
        public void Configure(EntityTypeBuilder<programLevels> builder)
        {
            builder.HasOne(pi => pi.prog_Info)
                  .WithMany(pi=>pi.programLevels)
                  .HasForeignKey(pi => pi.prog_InfoId).IsRequired().OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(pi => pi.TheLevel)
                  .WithMany(pi=>pi.ProgramLevels)
                  .HasForeignKey(pi => pi.TheLevelId).IsRequired().OnDelete(DeleteBehavior.NoAction);
        }
    }
}
