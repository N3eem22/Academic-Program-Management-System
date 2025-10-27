using Grad.Core.Entities.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configurations
{
    public class AppUserUniConfig : IEntityTypeConfiguration<AppUserUni>
    {
        public void Configure(EntityTypeBuilder<AppUserUni> builder)
        {
            builder.HasKey(AF => new { AF.AppUserId, AF.UniversityId });

        }
    }

}