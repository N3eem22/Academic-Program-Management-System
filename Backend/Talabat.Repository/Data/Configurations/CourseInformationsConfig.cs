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
            builder.HasOne(ci => ci.Program)
                   .WithMany(e => e.Courses)
                   .HasForeignKey(ci => ci.ProgramId).IsRequired().OnDelete(deleteBehavior: DeleteBehavior.NoAction);

            builder.HasOne(ci => ci.Semester)
                   .WithMany(e => e.CourseInformation) 
                   .HasForeignKey(ci => ci.SemesterId).IsRequired().OnDelete(deleteBehavior : DeleteBehavior.NoAction);

            builder.HasOne(ci => ci.level)
                   .WithMany(e => e.CourseInformation) 
                   .HasForeignKey(ci => ci.LevelId).IsRequired().OnDelete(deleteBehavior: DeleteBehavior.NoAction); 

            builder.HasOne(ci => ci.Prerequisites)
                   .WithMany(e => e.CourseInformation) 
                   .HasForeignKey(ci => ci.PrerequisiteId).IsRequired().OnDelete(deleteBehavior: DeleteBehavior.NoAction); 

            builder.HasOne(ci => ci.CourseType)
                   .WithMany(e => e.CourseInformation) 
                   .HasForeignKey(ci => ci.CourseTypeId).IsRequired().OnDelete(deleteBehavior: DeleteBehavior.NoAction); 

            builder.HasOne(ci => ci.PreviousQualificationProp)
                .WithMany(e => e.CourseInformation)
                .HasForeignKey(ci => ci.PreviousQualification).OnDelete(deleteBehavior: DeleteBehavior.SetNull).IsRequired(false);

            builder.HasOne(ci => ci.collegeCourses)
              .WithMany(e => e.PartOneCourse)
              .HasForeignKey(ci => ci.PartOneCourse).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(false);

            builder.HasOne(ci => ci.Courses)
             .WithMany(e => e.CourseInformations)
             .HasForeignKey(ci => ci.CourseId).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(true);

            // Configuring relationships with AllGrades
            builder.HasOne(ci => ci.FirstGrades)
                   .WithMany(e =>e.FirstReductionInfo) 
                   .HasForeignKey(ci => ci.FirstReductionEstimatesForFailureTimes).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(false);

            builder.HasOne(ci => ci.SecondGrades)
                   .WithMany(e =>e.SecondReductionInfo) 
                   .HasForeignKey(ci => ci.SecondReductionEstimatesForFailureTimes).OnDelete(deleteBehavior: DeleteBehavior.NoAction).IsRequired(false);

            builder.HasOne(ci => ci.ThirdGrades)
                   .WithMany(e =>e.ThhirdReductionInfo) 
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
