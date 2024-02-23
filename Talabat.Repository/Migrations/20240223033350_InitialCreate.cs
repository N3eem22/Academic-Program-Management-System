using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AR_ProgramInformation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProgramNameInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProgramNameInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MajorNameInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MajorNameInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProgramCode = table.Column<int>(type: "int", nullable: false),
                    Institute = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NameInCertificate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NameInCertificateInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BeginningOfTheProgram = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EndOfTheProgram = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InstitutionCode = table.Column<int>(type: "int", nullable: false),
                    TeamCode = table.Column<int>(type: "int", nullable: false),
                    SpecialProgram = table.Column<bool>(type: "bit", nullable: false),
                    CreditHours = table.Column<int>(type: "int", nullable: false),
                    Mandatory_ProjectHours = table.Column<int>(type: "int", nullable: false),
                    OptionalHours = table.Column<int>(type: "int", nullable: false),
                    FreeHours = table.Column<int>(type: "int", nullable: false),
                    AdditionalRegistrationHours = table.Column<int>(type: "int", nullable: false),
                    EligibleHoursforProjectRegistration = table.Column<int>(type: "int", nullable: false),
                    ExcludingTheBudgetTermWhenCalculatingTheGPA = table.Column<bool>(type: "bit", nullable: false),
                    pre_Requisite = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DivisionType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AllowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear = table.Column<bool>(type: "bit", nullable: false),
                    FailureTimesForWarning = table.Column<int>(type: "int", nullable: false),
                    FailureTimesForRe_Enrollment = table.Column<int>(type: "int", nullable: false),
                    TypeOfFinancialStatementInTheProgram = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProgramFeeType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TypeOfSummerFees = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EstimatesOfCourseFeeExemption = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CalculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete = table.Column<bool>(type: "bit", nullable: false),
                    BookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly = table.Column<bool>(type: "bit", nullable: false),
                    Result = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TheResultAppearanceToTheGuide = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReasonForBlockingRegistration = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LinkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration = table.Column<bool>(type: "bit", nullable: false),
                    LinkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees = table.Column<bool>(type: "bit", nullable: false),
                    RegistrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly = table.Column<bool>(type: "bit", nullable: false),
                    NumberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects = table.Column<int>(type: "int", nullable: false),
                    TheReasonForHiddingTheResult = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SummerCourseEstimates = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Questionnaire = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DetailedGradesToBeAnnounced = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AR_ProgramInformation", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Log_ApplicationLogs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ObjectJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Log_ApplicationLogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Perm_ApplicationUser",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Perm_ApplicationUser", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "University",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(70)", maxLength: 70, nullable: false),
                    Location = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_University", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Faculty",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FacultyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Faculty", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Faculty_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_AbsenteeEstimateCalculation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    absenteeEstimateCalculation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_AbsenteeEstimateCalculation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_AbsenteeEstimateCalculation_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_AllGrades",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TheGrade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_AllGrades", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_AllGrades_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_BlockingProofOfRegistration",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ReasonsOfBlocking = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_BlockingProofOfRegistration", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_BlockingProofOfRegistration_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LU_BlockingProofOfRegistration_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_BurdenCalculation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BurdenCalculationAS = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_BurdenCalculation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_BurdenCalculation_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LU_BurdenCalculation_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_CourseRequirement",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    courseRequirement = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_CourseRequirement", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_CourseRequirement_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_CourseType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    courseType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_CourseType", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_CourseType_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_EditTheStudentLevel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    editTheStudentLevel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_EditTheStudentLevel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_EditTheStudentLevel_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LU_EditTheStudentLevel_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_EquivalentGrade",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    equivalentGrade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_EquivalentGrade", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_EquivalentGrade_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_GradesDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TheDetails = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_GradesDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_GradesDetails_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_Hours",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HoursName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_Hours", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_Hours_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_Level",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    levels = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_Level", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_Level_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_PassingTheElectiveGroupBasedOn",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PassingTheElectiveGroup = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_PassingTheElectiveGroupBasedOn", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_PassingTheElectiveGroupBasedOn_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LU_PassingTheElectiveGroupBasedOn_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_Prerequisite",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Prerequisite = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_Prerequisite", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_Prerequisite_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_PreviousQualification",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    previousQualification = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_PreviousQualification", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_PreviousQualification_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_ReasonForBlockingAcademicResult",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TheReasonForBlockingAcademicResult = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_ReasonForBlockingAcademicResult", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_ReasonForBlockingAcademicResult_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_ReasonForBlockingRegistration",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TheReasonForBlockingRegistration = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_ReasonForBlockingRegistration", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_ReasonForBlockingRegistration_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_Semester",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    semesters = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_Semester", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_Semester_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_TheAcademicDegree",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AcademicDegreeName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_TheAcademicDegree", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_TheAcademicDegree_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LU_TheAcademicDegree_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_TheResultAppears",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    resultAppears = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_TheResultAppears", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_TheResultAppears_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_TypeOfFinancialStatementInTheProgram",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TheType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_TypeOfFinancialStatementInTheProgram", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_TypeOfFinancialStatementInTheProgram_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_TypeOfProgramFees",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TypeOfFees = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_TypeOfProgramFees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_TypeOfProgramFees_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_TypeOfStudySection",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TheTypeOfStudySectio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_TypeOfStudySection", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_TypeOfStudySection_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LU_Typeofsummerfees",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TheTypeOfSummerFees = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_Typeofsummerfees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_Typeofsummerfees_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "System Type",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SystemName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_System Type", x => x.Id);
                    table.ForeignKey(
                        name: "FK_System Type_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_System Type_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CollegeCourses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseNameInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseNameInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Sub_CourseNameInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Sub_CourseNameInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseCodeInArabic = table.Column<int>(type: "int", nullable: false),
                    CourseCodeInEnglish = table.Column<int>(type: "int", nullable: false),
                    Sub_CourseCodeInArabic = table.Column<int>(type: "int", nullable: false),
                    Sub_CourseCodeInEnglish = table.Column<int>(type: "int", nullable: false),
                    CourseNickname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContentSummaryInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContentSummaryInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FacultyId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CollegeCourses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CollegeCourses_Faculty_FacultyId",
                        column: x => x.FacultyId,
                        principalTable: "Faculty",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EN_Programs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProgramNameInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProgramNameInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FacultyId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EN_Programs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EN_Programs_Faculty_FacultyId",
                        column: x => x.FacultyId,
                        principalTable: "Faculty",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CollegeCourses_FacultyId",
                table: "CollegeCourses",
                column: "FacultyId");

            migrationBuilder.CreateIndex(
                name: "IX_EN_Programs_FacultyId",
                table: "EN_Programs",
                column: "FacultyId");

            migrationBuilder.CreateIndex(
                name: "IX_Faculty_UniversityId",
                table: "Faculty",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_AbsenteeEstimateCalculation_UniversityId",
                table: "LU_AbsenteeEstimateCalculation",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_AllGrades_UniversityId",
                table: "LU_AllGrades",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_BlockingProofOfRegistration_ProgramInformationId",
                table: "LU_BlockingProofOfRegistration",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_BlockingProofOfRegistration_UniversityId",
                table: "LU_BlockingProofOfRegistration",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_BurdenCalculation_ProgramInformationId",
                table: "LU_BurdenCalculation",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_BurdenCalculation_UniversityId",
                table: "LU_BurdenCalculation",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_CourseRequirement_UniversityId",
                table: "LU_CourseRequirement",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_CourseType_UniversityId",
                table: "LU_CourseType",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_EditTheStudentLevel_ProgramInformationId",
                table: "LU_EditTheStudentLevel",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_EditTheStudentLevel_UniversityId",
                table: "LU_EditTheStudentLevel",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_EquivalentGrade_UniversityId",
                table: "LU_EquivalentGrade",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_GradesDetails_UniversityId",
                table: "LU_GradesDetails",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_Hours_UniversityId",
                table: "LU_Hours",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_Level_UniversityId",
                table: "LU_Level",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_PassingTheElectiveGroupBasedOn_ProgramInformationId",
                table: "LU_PassingTheElectiveGroupBasedOn",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_PassingTheElectiveGroupBasedOn_UniversityId",
                table: "LU_PassingTheElectiveGroupBasedOn",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_Prerequisite_UniversityId",
                table: "LU_Prerequisite",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_PreviousQualification_UniversityId",
                table: "LU_PreviousQualification",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_ReasonForBlockingAcademicResult_UniversityId",
                table: "LU_ReasonForBlockingAcademicResult",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_ReasonForBlockingRegistration_UniversityId",
                table: "LU_ReasonForBlockingRegistration",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_Semester_UniversityId",
                table: "LU_Semester",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_TheAcademicDegree_ProgramInformationId",
                table: "LU_TheAcademicDegree",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_TheAcademicDegree_UniversityId",
                table: "LU_TheAcademicDegree",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_TheResultAppears_UniversityId",
                table: "LU_TheResultAppears",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_TypeOfFinancialStatementInTheProgram_UniversityId",
                table: "LU_TypeOfFinancialStatementInTheProgram",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_TypeOfProgramFees_UniversityId",
                table: "LU_TypeOfProgramFees",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_TypeOfStudySection_UniversityId",
                table: "LU_TypeOfStudySection",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_Typeofsummerfees_UniversityId",
                table: "LU_Typeofsummerfees",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_System Type_ProgramInformationId",
                table: "System Type",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_System Type_UniversityId",
                table: "System Type",
                column: "UniversityId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CollegeCourses");

            migrationBuilder.DropTable(
                name: "EN_Programs");

            migrationBuilder.DropTable(
                name: "Log_ApplicationLogs");

            migrationBuilder.DropTable(
                name: "LU_AbsenteeEstimateCalculation");

            migrationBuilder.DropTable(
                name: "LU_AllGrades");

            migrationBuilder.DropTable(
                name: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropTable(
                name: "LU_BurdenCalculation");

            migrationBuilder.DropTable(
                name: "LU_CourseRequirement");

            migrationBuilder.DropTable(
                name: "LU_CourseType");

            migrationBuilder.DropTable(
                name: "LU_EditTheStudentLevel");

            migrationBuilder.DropTable(
                name: "LU_EquivalentGrade");

            migrationBuilder.DropTable(
                name: "LU_GradesDetails");

            migrationBuilder.DropTable(
                name: "LU_Hours");

            migrationBuilder.DropTable(
                name: "LU_Level");

            migrationBuilder.DropTable(
                name: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropTable(
                name: "LU_Prerequisite");

            migrationBuilder.DropTable(
                name: "LU_PreviousQualification");

            migrationBuilder.DropTable(
                name: "LU_ReasonForBlockingAcademicResult");

            migrationBuilder.DropTable(
                name: "LU_ReasonForBlockingRegistration");

            migrationBuilder.DropTable(
                name: "LU_Semester");

            migrationBuilder.DropTable(
                name: "LU_TheAcademicDegree");

            migrationBuilder.DropTable(
                name: "LU_TheResultAppears");

            migrationBuilder.DropTable(
                name: "LU_TypeOfFinancialStatementInTheProgram");

            migrationBuilder.DropTable(
                name: "LU_TypeOfProgramFees");

            migrationBuilder.DropTable(
                name: "LU_TypeOfStudySection");

            migrationBuilder.DropTable(
                name: "LU_Typeofsummerfees");

            migrationBuilder.DropTable(
                name: "Perm_ApplicationUser");

            migrationBuilder.DropTable(
                name: "System Type");

            migrationBuilder.DropTable(
                name: "Faculty");

            migrationBuilder.DropTable(
                name: "AR_ProgramInformation");

            migrationBuilder.DropTable(
                name: "University");
        }
    }
}
