using Grad.Core.Entities.Graduation;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configurations
{
    public class GraduationLevelConfig : IEntityTypeConfiguration<GraduationLevels>
    {
        public void Configure(EntityTypeBuilder<GraduationLevels> builder)
        {
            builder.HasKey(x => new
            {
                x.LevelId , x.GraduationId
            });
            builder.HasOne(x => x.Level).WithMany(g => g.GraduationLevels).HasForeignKey(g => g.LevelId);
            builder.HasOne(g => g.Graduation).WithMany(g => g.LevelsTobePassed).HasForeignKey(g => g.GraduationId);
        }
    }
}
