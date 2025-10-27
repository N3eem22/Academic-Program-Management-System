using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities.Entities;
using Talabat.Core.Entities.Identity;

namespace Grad.Repository.Data.Configurations
{
    public class AppUserConfig : IEntityTypeConfiguration<AppUser>
    {
        public void Configure(EntityTypeBuilder<AppUser> builder)
        {
            builder.HasMany(F => F.Faculties).WithOne();

            builder.HasMany(F => F.Universities).WithOne();



        }
    }


}
    

    

