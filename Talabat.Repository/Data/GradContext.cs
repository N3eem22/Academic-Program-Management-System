
﻿using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Entities;
using Grad.Core.Entities.Lockups;

﻿using Grad.Core.Entities.CoursesInfo;

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Entities;
using Talabat.Core.Entities.Lockups;
using Talabat.Core.Entities.Logs;
using Talabat.Core.Entities.Permissions;
using Grad.Core.Entities.CumulativeAverage;
using Grad.Core.Entities.Control;
using Grad.Core.Entities.Graduation;

namespace Talabat.Repository.Data
{
    public class GradContext:DbContext 
    {
        #region DbSets


        // Permissions
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
     
        //logs
        public DbSet<ApplicationLog> ApplicationLogs { get; set; }

        //Entities 
        public DbSet<University> Universities { get; set; }
        public DbSet<Faculty> Faculties { get; set; }
        public DbSet<Programs> Programs { get; set; }
        //Cumulative Average
        public DbSet<CumulativeAverage> CumulativeAverages { get; set; }
        public DbSet<GadesOfEstimatesThatDoesNotCount> GadesOfEstimatesThatDoesNotCounts { get; set; }
        //Control
        public DbSet<Control> Controls { get; set; }
        //Graduation 
        public DbSet<Graduation> Graduations { get; set; }
        public DbSet<AverageValue> AverageValues { get; set; }
        //Courses Info
        public DbSet<CourseInformation> CourseInformation { get; set; }
        public DbSet<CoursesandGradesDetails> CoursesandGradesDetails { get; set; } 
        public DbSet<CoursesAndHours> CoursesAndHours { get; set; }
        public DbSet<DetailsOfFailingGrades> DetailsOfFailingGrades { get; set; }
        public DbSet<PreRequisiteCourses> PreRequisiteCourses { get; set; }
        //Lockups
        public DbSet<SystemType> SystemTypes { get; set; }
        public DbSet<AllGrades> AllGrades { get; set; }
        public DbSet<AbsenteeEstimateCalculation> AbsenteeEstimateCalculations { get; set; }
        public DbSet<BlockingProofOfRegistration> BlockingProofOfRegistrations { get; set; }
        public DbSet<BurdenCalculation> BurdenCalculations { get; set; }
        public DbSet<CourseRequirement> CourseRequirements { get; set; }
        public DbSet<CourseType> CourseTypes { get; set; }
        public DbSet<EditTheStudentLevel> editTheStudentLevels { get; set; }
        public DbSet<EquivalentGrade> equivalentGrades { get; set; }
        public DbSet<GradesDetails> GradesDetails { get; set; }
        public DbSet<Hours> Hours { get; set; }
        public DbSet<Level> Levels { get; set; }
        public DbSet<PassingTheElectiveGroupBasedOn> passingTheElectiveGroupBasedOns { get; set; }
        public DbSet<PreviousQualification> previousQualifications { get; set; }
        public DbSet<ReasonForBlockingAcademicResult> reasonForBlockingAcademicResults { get; set; }
        public DbSet<ReasonForBlockingRegistration> reasonForBlockingRegistrations { get; set; }
        public DbSet<Semesters> Semesters { get; set; }
        public DbSet<TheAcademicDegree> theAcademicDegrees { get; set; }
        public DbSet<TheResultAppears> TheResultAppears { get; set; }
        public DbSet<TypeOfFinancialStatementInTheProgram> typeOfFinancialStatementInThePrograms { get; set; }
        public DbSet<TypeOfProgramFees> TypeOfProgramFees { get; set; }
        public DbSet<TypeOfStudySection> typeOfStudySections { get; set; }
        public DbSet<TypeOfSummerFees> TypeOfSummerFees { get; set; }
        public DbSet<CollegeCourses> CollegeCourses { get; set; }
        public DbSet<Prerequisites> Prerequisites { get; set; }
        public DbSet<DivisionType> divisionTypes { get; set; }
        //Academic_Regulation
        public DbSet<ProgramInformation> ProgramInformation { get; set; }
        public DbSet<programLevels> programLevels { get; set; }
        public DbSet<Program_TheGrades> Program_TheGrades { get; set; }
        public DbSet<AcademicLoadAccordingToLevel> AcademicLoadAccordingToLevels { get; set; }
        #endregion
        public GradContext(DbContextOptions<GradContext> options):base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           // modelBuilder.ApplyConfiguration(new ProductConfig());
           modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(modelBuilder);
    
           
        }


    }
}
