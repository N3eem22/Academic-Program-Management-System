using Grad.Core.Entities.Control;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities.Entities;

namespace Grad.Repository.Data.Configurations
{
    public class FacultyConfig : IEntityTypeConfiguration<Faculty>
    {
        public void Configure(EntityTypeBuilder<Faculty> builder)
        {
            builder.HasMany(F => F.FacultyAppUsers).WithOne();

           
        }
    }

    
    }

