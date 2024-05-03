using Grad.Core.Entities.Graduation;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities.Entities;

namespace Grad.Repository.Data.Configurations
{
    internal class ProgramConfig : IEntityTypeConfiguration<Programs>
    {
        public void Configure(EntityTypeBuilder<Programs> builder)
        {
            builder.HasOne(P => P.Faculty)
                .WithMany(P => P.Programs)
                .HasForeignKey(P => P.FacultyId);
        }
    }
}
