using Grad.Core.Entities.CoursesInfo;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grad.Repository.Data.Configrations
{
    internal class CourseInformationConfig : IEntityTypeConfiguration<CourseInformation>
    {
        public void Configure(EntityTypeBuilder<CourseInformation> builder)
        {
            builder.ToTable("EN_CourssesInformations");

            // Relationships
            builder.HasOne(ci => ci.Semester)
                   .WithMany() 
                   .HasForeignKey(ci => ci.SemesterId).IsRequired().OnDelete(deleteBehavior : DeleteBehavior.NoAction);

            builder.HasOne(ci => ci.level)
                   .WithMany() 
                   .HasForeignKey(ci => ci.LevelId).IsRequired().OnDelete(deleteBehavior: DeleteBehavior.NoAction); 

            builder.HasOne(ci => ci.Prerequisites)
                   .WithMany() 
                   .HasForeignKey(ci => ci.PrerequisiteId).IsRequired().OnDelete(deleteBehavior: DeleteBehavior.NoAction); 

            builder.HasOne(ci => ci.CourseType)
                   .WithMany() 
                   .HasForeignKey(ci => ci.CourseTypeId).IsRequired().OnDelete(deleteBehavior: DeleteBehavior.NoAction); 

            builder.HasOne(ci => ci.PreviousQualification)
                .WithMany()
                .HasForeignKey(ci => ci.previousQualification).OnDelete(deleteBehavior: DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne(ci => ci.collegeCourses)
              .WithMany()
              .HasForeignKey(ci => ci.PartOneCourse).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(false);

            // Configuring relationships with AllGrades
            builder.HasOne(ci => ci.FirstGrades)
                   .WithMany() 
                   .HasForeignKey(ci => ci.FirstReductionEstimatesForFailureTimes).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(false);

            builder.HasOne(ci => ci.SecondGrades)
                   .WithMany() 
                   .HasForeignKey(ci => ci.SecondReductionEstimatesForFailureTimes).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(false);

            builder.HasOne(ci => ci.ThirdGrades)
                   .WithMany() 
                   .HasForeignKey(ci => ci.ThirdReductionEstimatesForFailureTimes).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(false);


            builder.Property(ci => ci.MaximumGrade).IsRequired();
            builder.Property(ci => ci.LinkRegistrationToHours).IsRequired();
            builder.Property(ci => ci.PassOrFailSubject).HasDefaultValue(false);


            builder.Property(ci => ci.Gender)
                   .HasConversion<int>()
                   .HasDefaultValue(Gender.Both); 

        }
    }
}
