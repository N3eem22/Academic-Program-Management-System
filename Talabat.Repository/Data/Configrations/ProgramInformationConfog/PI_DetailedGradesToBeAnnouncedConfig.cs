using Grad.Core.Entities.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configrations.ProgramInformationConfog
{
    internal class PI_DetailedGradesToBeAnnouncedConfig : IEntityTypeConfiguration<PI_DetailedGradesToBeAnnounced>
    {
        public void Configure(EntityTypeBuilder<PI_DetailedGradesToBeAnnounced> builder)
        {

            builder.HasKey(pi => new { pi.ProgramInformationId, pi.GradesDetailsId});


            builder.HasOne(pi => pi.ProgramInformation)
                   .WithMany(p => p.pI_DetailedGradesToBeAnnounced)
                   .HasForeignKey(pi => pi.ProgramInformationId).OnDelete(DeleteBehavior.NoAction);


            builder.HasOne(pi => pi.GradesDetails)
                   .WithMany(p => p.pI_DetailedGradesToBeAnnounceds)
                   .HasForeignKey(pi => pi.GradesDetailsId).OnDelete(DeleteBehavior.NoAction);

        }
    
    }
}
