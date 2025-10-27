using Grad.Core.Entities.Entities;
using Grad.Core.Entities.Lockups;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities.Academic_regulation;

namespace Grad.Repository.Data.Configrations.ProgramInformationConfog
{
    internal class ProgInfo_DivTypeConfig : IEntityTypeConfiguration<PI_DivisionType>
    {
        public void Configure(EntityTypeBuilder<PI_DivisionType> builder)
        {
          
            builder.HasKey(pi => new { pi.ProgramInformationId, pi.DivisionTypeId });

          
            builder.HasOne(pi => pi.ProgramInformation)
                   .WithMany(p => p.pI_DivisionTypes)
                   .HasForeignKey(pi=>pi.ProgramInformationId).OnDelete(DeleteBehavior.NoAction);

       
           builder.HasOne(pi => pi.DivisionType)
                  .WithMany(p => p.pI_DivisionTypes)
                  .HasForeignKey(pi=>pi.DivisionTypeId).OnDelete(DeleteBehavior.NoAction);

        }
    }
}
