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
    internal class PI_AllGradesSummerEstimateConfig : IEntityTypeConfiguration<PI_AllGradesSummerEstimate>
    {
        public void Configure(EntityTypeBuilder<PI_AllGradesSummerEstimate> builder)
        {

            builder.HasKey(pi => new { pi.ProgramInformationId, pi.AllGradesId });


            builder.HasOne(pi => pi.ProgramInformation)
                   .WithMany(p => p.pI_AllGradesSummerEstimates)
                   .HasForeignKey(pi => pi.ProgramInformationId).OnDelete(DeleteBehavior.NoAction);


            builder.HasOne(pi => pi.AllGrades)
                   .WithMany(p => p.pI_AllGradesSummerEstimates)
                   .HasForeignKey(pi => pi.AllGradesId).OnDelete(DeleteBehavior.NoAction);

        }
    
    }
}
