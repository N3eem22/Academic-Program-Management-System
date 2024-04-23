using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities.Identity;
using Grad.Core.Entities.Identity;

namespace Grad.Repository.Data.Configurations
{
    public class AppUserFacultyConfig : IEntityTypeConfiguration<AppUserFaculty>
    {
        public void Configure(EntityTypeBuilder<AppUserFaculty> builder)
        {
            builder.HasKey(AF => new {AF.AppUserId , AF.FacultyId });

        }
    }
   
}
