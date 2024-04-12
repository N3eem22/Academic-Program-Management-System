using Grad.Core.Entities.Control;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configurations
{
    public class FailureEstimatesInTheListConfig : IEntityTypeConfiguration<FailureEstimatesInTheList>
    {
        public void Configure(EntityTypeBuilder<FailureEstimatesInTheList> builder)
        {
            builder.HasKey(x => new
            {
                x.GradeId,
                x.ControlId
            });
            builder.HasOne(g => g.grades).WithMany(g => g.FailureEstimatesInTheLists).HasForeignKey(f => f.GradeId);
            builder.HasOne(g => g.Control).WithMany(g => g.FailureEstimatesInTheLists).HasForeignKey(f => f.ControlId);
        }
    }
}
