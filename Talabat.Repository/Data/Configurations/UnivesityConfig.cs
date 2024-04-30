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
    public class UnivesityConfig : IEntityTypeConfiguration<University>
    {
        public void Configure(EntityTypeBuilder<University> builder)
        {
            builder.HasMany(F => F.UniAppUsers).WithOne(/*Fa => Fa.University*/);


        }
    }


}

