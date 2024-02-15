
using Generic.Domian.Models.Logs;
using Generic.Domian.Models.Lockups;

namespace Generic.DataAccess.DataContexts
{
    public class GenericDbContext : IdentityDbContext<ApplicationUser>
    {

        public IHttpContextAccessor _accessor { get; set; }

        public GenericDbContext(DbContextOptions<GenericDbContext> options, IHttpContextAccessor accessor) : base(options)
        {
            _accessor = accessor;
        }

        #region DbSets


        // Permissions
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }


        //HR
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }


        //Stocks
        public DbSet<Category> Categories { get; set; }


        //Shared
        public DbSet<SharCurrency> SharCurrencies { get; set; }

        //logs
        public DbSet<ApplicationLog> ApplicationLogs { get; set; }

        //Entities 
        public DbSet<University> Universities { get; set; }
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



        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            int companyId = _accessor!.HttpContext == null ? 0 : _accessor!.HttpContext!.User.GetCompanyId();
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);
            modelBuilder.AddQueryFilterToAllEntitiesAssignableFrom<BaseEntity>(x => /*x.TenantCompanyId == companyId&&*/  x.IsDeleted == false);

            modelBuilder.Seed();

            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.NoAction;
            }

            modelBuilder.Entity<ApplicationUser>().ToTable("Perm_Users");
            modelBuilder.Entity<IdentityRole>().ToTable("Perm_Roles");
            modelBuilder.Entity<IdentityUserRole<string>>().ToTable("Perm_UserRoles");
            modelBuilder.Entity<IdentityUserClaim<string>>().ToTable("Perm_UserClaims");
            modelBuilder.Entity<IdentityUserLogin<string>>().ToTable("Perm_UserLogins");
            modelBuilder.Entity<IdentityRoleClaim<string>>().ToTable("Perm_RoleClaims");
            modelBuilder.Entity<IdentityUserToken<string>>().ToTable("Perm_UserTokens");
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = new CancellationToken())
        {
            DateTime dateNow = new DateTime().Now();
            string userId = _accessor!.HttpContext == null ? "" : _accessor!.HttpContext!.User.GetUserId();
            int companyId = _accessor!.HttpContext == null ? 0 : _accessor!.HttpContext!.User.GetCompanyId();

            var entries = ChangeTracker
                .Entries()
                .Where(e => e.Entity is BaseEntity && (
                        e.State == EntityState.Added
                        || e.State == EntityState.Modified
                        || e.State == EntityState.Deleted)
                        );

            foreach (var entityEntry in entries)
            {

                //((BaseEntity)entityEntry.Entity).TenantCompanyId = companyId;


                ((BaseEntity)entityEntry.Entity).UpdateDate = dateNow;
                ((BaseEntity)entityEntry.Entity).UpdateBy = userId;

                if (entityEntry.State == EntityState.Added)
                {
                    ((BaseEntity)entityEntry.Entity).InsertDate = dateNow;
                    ((BaseEntity)entityEntry.Entity).InsertBy = userId;
                }
                if (entityEntry.State == EntityState.Deleted)
                {
                    entityEntry.State = EntityState.Modified;
                    ((BaseEntity)entityEntry.Entity).DeleteDate = dateNow;
                    ((BaseEntity)entityEntry.Entity).DeleteBy = userId;
                    ((BaseEntity)entityEntry.Entity).IsDeleted = true;
                }
            }

            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }
    }

}