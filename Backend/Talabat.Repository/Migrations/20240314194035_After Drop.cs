using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AfterDrop : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Log_ApplicationLogs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ObjectJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_BlockingProofOfRegistration", x => x.Id);
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_BurdenCalculation", x => x.Id);
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                name: "LU_DivisionType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Division_Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_DivisionType", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_DivisionType_University_UniversityId",
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_EditTheStudentLevel", x => x.Id);
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_PassingTheElectiveGroupBasedOn", x => x.Id);
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LU_TheAcademicDegree", x => x.Id);
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
                    ResultAppears = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_System Type", x => x.Id);
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
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

            migrationBuilder.CreateTable(
                name: "EN_CourssesInformations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MaximumGrade = table.Column<int>(type: "int", nullable: false),
                    SemesterId = table.Column<int>(type: "int", nullable: false),
                    LevelId = table.Column<int>(type: "int", nullable: false),
                    PrerequisiteId = table.Column<int>(type: "int", nullable: false),
                    CourseTypeId = table.Column<int>(type: "int", nullable: false),
                    LinkRegistrationToHours = table.Column<int>(type: "int", nullable: false),
                    ChooseDetailesofFailingGrades = table.Column<int>(type: "int", nullable: false),
                    SuccessRate = table.Column<int>(type: "int", nullable: false),
                    Gender = table.Column<int>(type: "int", nullable: false, defaultValue: 2),
                    AddingCourse = table.Column<int>(type: "int", nullable: false),
                    PassOrFailSubject = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    RegistrationForTheCourseInTheSummerTerm = table.Column<bool>(type: "bit", nullable: false),
                    FirstReductionEstimatesForFailureTimes = table.Column<int>(type: "int", nullable: true),
                    SecondReductionEstimatesForFailureTimes = table.Column<int>(type: "int", nullable: true),
                    ThirdReductionEstimatesForFailureTimes = table.Column<int>(type: "int", nullable: true),
                    previousQualification = table.Column<int>(type: "int", nullable: true),
                    NumberOfPreviousPreRequisiteCourses = table.Column<int>(type: "int", nullable: false),
                    PartOneCourse = table.Column<int>(type: "int", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EN_CourssesInformations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EN_CourssesInformations_CollegeCourses_PartOneCourse",
                        column: x => x.PartOneCourse,
                        principalTable: "CollegeCourses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EN_CourssesInformations_LU_AllGrades_FirstReductionEstimatesForFailureTimes",
                        column: x => x.FirstReductionEstimatesForFailureTimes,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EN_CourssesInformations_LU_AllGrades_SecondReductionEstimatesForFailureTimes",
                        column: x => x.SecondReductionEstimatesForFailureTimes,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EN_CourssesInformations_LU_AllGrades_ThirdReductionEstimatesForFailureTimes",
                        column: x => x.ThirdReductionEstimatesForFailureTimes,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EN_CourssesInformations_LU_CourseType_CourseTypeId",
                        column: x => x.CourseTypeId,
                        principalTable: "LU_CourseType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EN_CourssesInformations_LU_Level_LevelId",
                        column: x => x.LevelId,
                        principalTable: "LU_Level",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EN_CourssesInformations_LU_Prerequisite_PrerequisiteId",
                        column: x => x.PrerequisiteId,
                        principalTable: "LU_Prerequisite",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EN_CourssesInformations_LU_PreviousQualification_previousQualification",
                        column: x => x.previousQualification,
                        principalTable: "LU_PreviousQualification",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_EN_CourssesInformations_LU_Semester_SemesterId",
                        column: x => x.SemesterId,
                        principalTable: "LU_Semester",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AR_ProgramInformation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProgramId = table.Column<int>(type: "int", nullable: false),
                    ProgramNameInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProgramNameInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MajorNameInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MajorNameInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProgramCode = table.Column<int>(type: "int", nullable: false),
                    Institute = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AcademicDegreeid = table.Column<int>(type: "int", nullable: false),
                    Degree = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NameInCertificate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NameInCertificateInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BeginningOfTheProgram = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EndOfTheProgram = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SystemTypeId = table.Column<int>(type: "int", nullable: false),
                    InstitutionCode = table.Column<int>(type: "int", nullable: false),
                    TeamCode = table.Column<int>(type: "int", nullable: false),
                    SpecialProgram = table.Column<bool>(type: "bit", nullable: false),
                    CreditHours = table.Column<int>(type: "int", nullable: false),
                    Mandatory_ProjectHours = table.Column<int>(type: "int", nullable: false),
                    OptionalHours = table.Column<int>(type: "int", nullable: false),
                    FreeHours = table.Column<int>(type: "int", nullable: false),
                    AdditionalRegistrationHours = table.Column<int>(type: "int", nullable: false),
                    EligibleHoursforProjectRegistration = table.Column<int>(type: "int", nullable: false),
                    ProjectHours = table.Column<int>(type: "int", nullable: false),
                    BurdanCalculationId = table.Column<int>(type: "int", nullable: false),
                    ExcludingTheBudgetTermWhenCalculatingTheGPA = table.Column<bool>(type: "bit", nullable: false),
                    PassingTheElectiveGroupBasedOnId = table.Column<int>(type: "int", nullable: false),
                    pre_Requisite = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EditTheStudentLevelId = table.Column<int>(type: "int", nullable: false),
                    AllowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear = table.Column<bool>(type: "bit", nullable: false),
                    FailureTimesForWarning = table.Column<int>(type: "int", nullable: false),
                    FailureTimesForRe_Enrollment = table.Column<int>(type: "int", nullable: false),
                    BlockingProofOfRegistrationId = table.Column<int>(type: "int", nullable: false),
                    TypeOfFinancialStatementInTheProgramId = table.Column<int>(type: "int", nullable: false),
                    TypeOfProgramFeesId = table.Column<int>(type: "int", nullable: false),
                    TypeOfSummerFeesId = table.Column<int>(type: "int", nullable: false),
                    CalculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete = table.Column<bool>(type: "bit", nullable: false),
                    BookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly = table.Column<bool>(type: "bit", nullable: false),
                    Result = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TheResultAppearsId = table.Column<int>(type: "int", nullable: false),
                    TheResultToTheGuidId = table.Column<int>(type: "int", nullable: false),
                    ReasonForBlockingRegistrationId = table.Column<int>(type: "int", nullable: false),
                    LinkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration = table.Column<bool>(type: "bit", nullable: false),
                    LinkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees = table.Column<bool>(type: "bit", nullable: false),
                    RegistrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly = table.Column<bool>(type: "bit", nullable: false),
                    NumberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects = table.Column<int>(type: "int", nullable: false),
                    TheReasonForHiddingTheResultId = table.Column<int>(type: "int", nullable: false),
                    Questionnaire = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DetailedGradesToBeAnnounced = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AR_ProgramInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_EN_Programs_ProgramId",
                        column: x => x.ProgramId,
                        principalTable: "EN_Programs",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_BlockingProofOfRegistration_BlockingProofOfRegistrationId",
                        column: x => x.BlockingProofOfRegistrationId,
                        principalTable: "LU_BlockingProofOfRegistration",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_BurdenCalculation_BurdanCalculationId",
                        column: x => x.BurdanCalculationId,
                        principalTable: "LU_BurdenCalculation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_EditTheStudentLevel_EditTheStudentLevelId",
                        column: x => x.EditTheStudentLevelId,
                        principalTable: "LU_EditTheStudentLevel",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_PassingTheElectiveGroupBasedOn_PassingTheElectiveGroupBasedOnId",
                        column: x => x.PassingTheElectiveGroupBasedOnId,
                        principalTable: "LU_PassingTheElectiveGroupBasedOn",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_ReasonForBlockingAcademicResult_TheReasonForHiddingTheResultId",
                        column: x => x.TheReasonForHiddingTheResultId,
                        principalTable: "LU_ReasonForBlockingAcademicResult",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_ReasonForBlockingRegistration_ReasonForBlockingRegistrationId",
                        column: x => x.ReasonForBlockingRegistrationId,
                        principalTable: "LU_ReasonForBlockingRegistration",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_TheAcademicDegree_AcademicDegreeid",
                        column: x => x.AcademicDegreeid,
                        principalTable: "LU_TheAcademicDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_TheResultAppears_TheResultAppearsId",
                        column: x => x.TheResultAppearsId,
                        principalTable: "LU_TheResultAppears",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_TheResultAppears_TheResultToTheGuidId",
                        column: x => x.TheResultToTheGuidId,
                        principalTable: "LU_TheResultAppears",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_TypeOfFinancialStatementInTheProgram_TypeOfFinancialStatementInTheProgramId",
                        column: x => x.TypeOfFinancialStatementInTheProgramId,
                        principalTable: "LU_TypeOfFinancialStatementInTheProgram",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_TypeOfProgramFees_TypeOfProgramFeesId",
                        column: x => x.TypeOfProgramFeesId,
                        principalTable: "LU_TypeOfProgramFees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_LU_Typeofsummerfees_TypeOfSummerFeesId",
                        column: x => x.TypeOfSummerFeesId,
                        principalTable: "LU_Typeofsummerfees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramInformation_System Type_SystemTypeId",
                        column: x => x.SystemTypeId,
                        principalTable: "System Type",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CoursesAndFailingGrades",
                columns: table => new
                {
                    CourseInfoId = table.Column<int>(type: "int", nullable: false),
                    FailedGradeId = table.Column<int>(type: "int", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursesAndFailingGrades", x => new { x.CourseInfoId, x.FailedGradeId });
                    table.ForeignKey(
                        name: "FK_CoursesAndFailingGrades_EN_CourssesInformations_CourseInfoId",
                        column: x => x.CourseInfoId,
                        principalTable: "EN_CourssesInformations",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CoursesAndFailingGrades_LU_GradesDetails_FailedGradeId",
                        column: x => x.FailedGradeId,
                        principalTable: "LU_GradesDetails",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CoursesAndHours",
                columns: table => new
                {
                    CourseInfoId = table.Column<int>(type: "int", nullable: false),
                    HourId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursesAndHours", x => new { x.HourId, x.CourseInfoId });
                    table.ForeignKey(
                        name: "FK_CoursesAndHours_EN_CourssesInformations_CourseInfoId",
                        column: x => x.CourseInfoId,
                        principalTable: "EN_CourssesInformations",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CoursesAndHours_LU_Hours_HourId",
                        column: x => x.HourId,
                        principalTable: "LU_Hours",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CoursesInformationsAndDetailedGrade",
                columns: table => new
                {
                    CourseInfoId = table.Column<int>(type: "int", nullable: false),
                    GradeDetailsId = table.Column<int>(type: "int", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursesInformationsAndDetailedGrade", x => new { x.CourseInfoId, x.GradeDetailsId });
                    table.ForeignKey(
                        name: "FK_CoursesInformationsAndDetailedGrade_EN_CourssesInformations_CourseInfoId",
                        column: x => x.CourseInfoId,
                        principalTable: "EN_CourssesInformations",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CoursesInformationsAndDetailedGrade_LU_GradesDetails_GradeDetailsId",
                        column: x => x.GradeDetailsId,
                        principalTable: "LU_GradesDetails",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PreRequisiteCourses",
                columns: table => new
                {
                    PreRequisiteCourseId = table.Column<int>(type: "int", nullable: false),
                    CourseInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreRequisiteCourses", x => new { x.PreRequisiteCourseId, x.CourseInfoId });
                    table.ForeignKey(
                        name: "FK_PreRequisiteCourses_CollegeCourses_PreRequisiteCourseId",
                        column: x => x.PreRequisiteCourseId,
                        principalTable: "CollegeCourses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PreRequisiteCourses_EN_CourssesInformations_CourseInfoId",
                        column: x => x.CourseInfoId,
                        principalTable: "EN_CourssesInformations",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AR_AcademicLoadAccordingToLevel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Prog_InfoId = table.Column<int>(type: "int", nullable: false),
                    Semester = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LevelId = table.Column<int>(type: "int", nullable: false),
                    MinimumHours = table.Column<int>(type: "int", nullable: false),
                    ExceptionToMinimumHours = table.Column<int>(type: "int", nullable: false),
                    MaximumHours = table.Column<int>(type: "int", nullable: false),
                    ExceptionToTheMaximumHours = table.Column<int>(type: "int", nullable: false),
                    Re_registrationHours = table.Column<int>(type: "int", nullable: false),
                    AcademicNoticeHours = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AR_AcademicLoadAccordingToLevel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AR_AcademicLoadAccordingToLevel_AR_ProgramInformation_Prog_InfoId",
                        column: x => x.Prog_InfoId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_AcademicLoadAccordingToLevel_LU_Level_LevelId",
                        column: x => x.LevelId,
                        principalTable: "LU_Level",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AR_Program_TheGrades",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    prog_InfoId = table.Column<int>(type: "int", nullable: false),
                    TheGradeId = table.Column<int>(type: "int", nullable: false),
                    EquivalentEstimateId = table.Column<int>(type: "int", nullable: false),
                    ThePercentageFrom = table.Column<int>(type: "int", nullable: false),
                    ThePercentageTo = table.Column<int>(type: "int", nullable: false),
                    PointsFrom = table.Column<int>(type: "int", nullable: false),
                    PointsTo = table.Column<int>(type: "int", nullable: false),
                    GraduationEstimateId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AR_Program_TheGrades", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AR_Program_TheGrades_AR_ProgramInformation_prog_InfoId",
                        column: x => x.prog_InfoId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_Program_TheGrades_LU_AllGrades_TheGradeId",
                        column: x => x.TheGradeId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_Program_TheGrades_LU_EquivalentGrade_EquivalentEstimateId",
                        column: x => x.EquivalentEstimateId,
                        principalTable: "LU_EquivalentGrade",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_Program_TheGrades_LU_EquivalentGrade_GraduationEstimateId",
                        column: x => x.GraduationEstimateId,
                        principalTable: "LU_EquivalentGrade",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AR_ProgramLevels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    prog_InfoId = table.Column<int>(type: "int", nullable: false),
                    TheLevelId = table.Column<int>(type: "int", nullable: false),
                    MinimumHours = table.Column<int>(type: "int", nullable: false),
                    MaximumHours = table.Column<int>(type: "int", nullable: false),
                    InstitutionCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AR_ProgramLevels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AR_ProgramLevels_AR_ProgramInformation_prog_InfoId",
                        column: x => x.prog_InfoId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AR_ProgramLevels_LU_Level_TheLevelId",
                        column: x => x.TheLevelId,
                        principalTable: "LU_Level",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CumulativeAverage",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImprovingCourses = table.Column<int>(type: "int", nullable: false),
                    KeepFailing = table.Column<bool>(type: "bit", nullable: false),
                    MaintainingStudentSuccess = table.Column<bool>(type: "bit", nullable: false),
                    UtmostGrade = table.Column<int>(type: "int", nullable: false),
                    ChangingCourses = table.Column<bool>(type: "bit", nullable: false),
                    SomeOfGrades = table.Column<int>(type: "int", nullable: false),
                    HowToCalculateTheRatio = table.Column<int>(type: "int", nullable: false),
                    MultiplyingTheHoursByTheStudentsGrades = table.Column<int>(type: "int", nullable: false),
                    CalculateTheTermOfTheEquationInTheRate = table.Column<bool>(type: "bit", nullable: false),
                    CalculatingTheSemesterEquationInHourseEarned = table.Column<bool>(type: "bit", nullable: false),
                    RateApproximation = table.Column<bool>(type: "bit", nullable: false),
                    TheNnumberOfDigitsRroundingTheRate = table.Column<int>(type: "int", nullable: false),
                    ReducingTheRateUponImprovement = table.Column<bool>(type: "bit", nullable: false),
                    MaximumNumberOfAdditionsToFailedCoursesWithoutSuccess = table.Column<int>(type: "int", nullable: false),
                    DeleteFailedCoursesAfterSuccess = table.Column<int>(type: "int", nullable: false),
                    MaximumCumulativeGPA = table.Column<int>(type: "int", nullable: false),
                    CalculateTheCumulativeEstimate = table.Column<int>(type: "int", nullable: false),
                    HowToCalculateTheRate = table.Column<int>(type: "int", nullable: false),
                    TheNumberOfDigitsRoundinPoints = table.Column<int>(type: "int", nullable: false),
                    NumberOfDigitsRoundingTheRatio = table.Column<int>(type: "int", nullable: false),
                    SummerIsNotExcludedInCalculatingTheAnnualAverage = table.Column<bool>(type: "bit", nullable: false),
                    TheCumulativeAverageDoesNotAppearInTheStudentGradesPortal = table.Column<bool>(type: "bit", nullable: false),
                    TheSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades = table.Column<bool>(type: "bit", nullable: false),
                    CalculatingFailingGradePoints = table.Column<bool>(type: "bit", nullable: false),
                    CalculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage = table.Column<bool>(type: "bit", nullable: false),
                    HowToCalculateTheSemesterAverage = table.Column<int>(type: "int", nullable: false),
                    ProgramInfoId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CumulativeAverage", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CumulativeAverage_AR_ProgramInformation_ProgramInfoId",
                        column: x => x.ProgramInfoId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CumulativeAverage_LU_AllGrades_UtmostGrade",
                        column: x => x.UtmostGrade,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PI_AllGradesSummerEstimate",
                columns: table => new
                {
                    AllGradesId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PI_AllGradesSummerEstimate", x => new { x.ProgramInformationId, x.AllGradesId });
                    table.ForeignKey(
                        name: "FK_PI_AllGradesSummerEstimate_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PI_AllGradesSummerEstimate_LU_AllGrades_AllGradesId",
                        column: x => x.AllGradesId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PI_DetailedGradesToBeAnnounced",
                columns: table => new
                {
                    GradesDetailsId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PI_DetailedGradesToBeAnnounced", x => new { x.ProgramInformationId, x.GradesDetailsId });
                    table.ForeignKey(
                        name: "FK_PI_DetailedGradesToBeAnnounced_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PI_DetailedGradesToBeAnnounced_LU_GradesDetails_GradesDetailsId",
                        column: x => x.GradesDetailsId,
                        principalTable: "LU_GradesDetails",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PI_DivisionType",
                columns: table => new
                {
                    DivisionTypeId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PI_DivisionType", x => new { x.ProgramInformationId, x.DivisionTypeId });
                    table.ForeignKey(
                        name: "FK_PI_DivisionType_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PI_DivisionType_LU_DivisionType_DivisionTypeId",
                        column: x => x.DivisionTypeId,
                        principalTable: "LU_DivisionType",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PI_EstimatesOfCourseFeeExemption",
                columns: table => new
                {
                    AllGradesId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PI_EstimatesOfCourseFeeExemption", x => new { x.ProgramInformationId, x.AllGradesId });
                    table.ForeignKey(
                        name: "FK_PI_EstimatesOfCourseFeeExemption_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PI_EstimatesOfCourseFeeExemption_LU_AllGrades_AllGradesId",
                        column: x => x.AllGradesId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "GadesOfEstimatesThatDoesNotCount",
                columns: table => new
                {
                    GradeId = table.Column<int>(type: "int", nullable: false),
                    CumulativeAverageId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GadesOfEstimatesThatDoesNotCount", x => new { x.GradeId, x.CumulativeAverageId });
                    table.ForeignKey(
                        name: "FK_GadesOfEstimatesThatDoesNotCount_CumulativeAverage_CumulativeAverageId",
                        column: x => x.CumulativeAverageId,
                        principalTable: "CumulativeAverage",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GadesOfEstimatesThatDoesNotCount_LU_AllGrades_GradeId",
                        column: x => x.GradeId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AR_AcademicLoadAccordingToLevel_LevelId",
                table: "AR_AcademicLoadAccordingToLevel",
                column: "LevelId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_AcademicLoadAccordingToLevel_Prog_InfoId",
                table: "AR_AcademicLoadAccordingToLevel",
                column: "Prog_InfoId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_Program_TheGrades_EquivalentEstimateId",
                table: "AR_Program_TheGrades",
                column: "EquivalentEstimateId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_Program_TheGrades_GraduationEstimateId",
                table: "AR_Program_TheGrades",
                column: "GraduationEstimateId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_Program_TheGrades_prog_InfoId",
                table: "AR_Program_TheGrades",
                column: "prog_InfoId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_Program_TheGrades_TheGradeId",
                table: "AR_Program_TheGrades",
                column: "TheGradeId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_AcademicDegreeid",
                table: "AR_ProgramInformation",
                column: "AcademicDegreeid");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_BlockingProofOfRegistrationId",
                table: "AR_ProgramInformation",
                column: "BlockingProofOfRegistrationId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_BurdanCalculationId",
                table: "AR_ProgramInformation",
                column: "BurdanCalculationId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_EditTheStudentLevelId",
                table: "AR_ProgramInformation",
                column: "EditTheStudentLevelId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_PassingTheElectiveGroupBasedOnId",
                table: "AR_ProgramInformation",
                column: "PassingTheElectiveGroupBasedOnId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_ProgramId",
                table: "AR_ProgramInformation",
                column: "ProgramId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_ReasonForBlockingRegistrationId",
                table: "AR_ProgramInformation",
                column: "ReasonForBlockingRegistrationId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_SystemTypeId",
                table: "AR_ProgramInformation",
                column: "SystemTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TheReasonForHiddingTheResultId",
                table: "AR_ProgramInformation",
                column: "TheReasonForHiddingTheResultId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TheResultAppearsId",
                table: "AR_ProgramInformation",
                column: "TheResultAppearsId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TheResultToTheGuidId",
                table: "AR_ProgramInformation",
                column: "TheResultToTheGuidId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TypeOfFinancialStatementInTheProgramId",
                table: "AR_ProgramInformation",
                column: "TypeOfFinancialStatementInTheProgramId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TypeOfProgramFeesId",
                table: "AR_ProgramInformation",
                column: "TypeOfProgramFeesId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TypeOfSummerFeesId",
                table: "AR_ProgramInformation",
                column: "TypeOfSummerFeesId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramLevels_prog_InfoId",
                table: "AR_ProgramLevels",
                column: "prog_InfoId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramLevels_TheLevelId",
                table: "AR_ProgramLevels",
                column: "TheLevelId");

            migrationBuilder.CreateIndex(
                name: "IX_CollegeCourses_FacultyId",
                table: "CollegeCourses",
                column: "FacultyId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesAndFailingGrades_FailedGradeId",
                table: "CoursesAndFailingGrades",
                column: "FailedGradeId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesAndHours_CourseInfoId",
                table: "CoursesAndHours",
                column: "CourseInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesInformationsAndDetailedGrade_GradeDetailsId",
                table: "CoursesInformationsAndDetailedGrade",
                column: "GradeDetailsId");

            migrationBuilder.CreateIndex(
                name: "IX_CumulativeAverage_ProgramInfoId",
                table: "CumulativeAverage",
                column: "ProgramInfoId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CumulativeAverage_UtmostGrade",
                table: "CumulativeAverage",
                column: "UtmostGrade");

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_CourseTypeId",
                table: "EN_CourssesInformations",
                column: "CourseTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_FirstReductionEstimatesForFailureTimes",
                table: "EN_CourssesInformations",
                column: "FirstReductionEstimatesForFailureTimes");

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_LevelId",
                table: "EN_CourssesInformations",
                column: "LevelId");

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_PartOneCourse",
                table: "EN_CourssesInformations",
                column: "PartOneCourse");

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_PrerequisiteId",
                table: "EN_CourssesInformations",
                column: "PrerequisiteId");

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_previousQualification",
                table: "EN_CourssesInformations",
                column: "previousQualification");

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_SecondReductionEstimatesForFailureTimes",
                table: "EN_CourssesInformations",
                column: "SecondReductionEstimatesForFailureTimes");

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_SemesterId",
                table: "EN_CourssesInformations",
                column: "SemesterId");

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_ThirdReductionEstimatesForFailureTimes",
                table: "EN_CourssesInformations",
                column: "ThirdReductionEstimatesForFailureTimes");

            migrationBuilder.CreateIndex(
                name: "IX_EN_Programs_FacultyId",
                table: "EN_Programs",
                column: "FacultyId");

            migrationBuilder.CreateIndex(
                name: "IX_Faculty_UniversityId",
                table: "Faculty",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_GadesOfEstimatesThatDoesNotCount_CumulativeAverageId",
                table: "GadesOfEstimatesThatDoesNotCount",
                column: "CumulativeAverageId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_AbsenteeEstimateCalculation_UniversityId",
                table: "LU_AbsenteeEstimateCalculation",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_AllGrades_UniversityId",
                table: "LU_AllGrades",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_BlockingProofOfRegistration_UniversityId",
                table: "LU_BlockingProofOfRegistration",
                column: "UniversityId");

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
                name: "IX_LU_DivisionType_UniversityId",
                table: "LU_DivisionType",
                column: "UniversityId");

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
                name: "IX_PI_AllGradesSummerEstimate_AllGradesId",
                table: "PI_AllGradesSummerEstimate",
                column: "AllGradesId");

            migrationBuilder.CreateIndex(
                name: "IX_PI_DetailedGradesToBeAnnounced_GradesDetailsId",
                table: "PI_DetailedGradesToBeAnnounced",
                column: "GradesDetailsId");

            migrationBuilder.CreateIndex(
                name: "IX_PI_DivisionType_DivisionTypeId",
                table: "PI_DivisionType",
                column: "DivisionTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_PI_EstimatesOfCourseFeeExemption_AllGradesId",
                table: "PI_EstimatesOfCourseFeeExemption",
                column: "AllGradesId");

            migrationBuilder.CreateIndex(
                name: "IX_PreRequisiteCourses_CourseInfoId",
                table: "PreRequisiteCourses",
                column: "CourseInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_System Type_UniversityId",
                table: "System Type",
                column: "UniversityId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AR_AcademicLoadAccordingToLevel");

            migrationBuilder.DropTable(
                name: "AR_Program_TheGrades");

            migrationBuilder.DropTable(
                name: "AR_ProgramLevels");

            migrationBuilder.DropTable(
                name: "CoursesAndFailingGrades");

            migrationBuilder.DropTable(
                name: "CoursesAndHours");

            migrationBuilder.DropTable(
                name: "CoursesInformationsAndDetailedGrade");

            migrationBuilder.DropTable(
                name: "GadesOfEstimatesThatDoesNotCount");

            migrationBuilder.DropTable(
                name: "Log_ApplicationLogs");

            migrationBuilder.DropTable(
                name: "LU_AbsenteeEstimateCalculation");

            migrationBuilder.DropTable(
                name: "LU_CourseRequirement");

            migrationBuilder.DropTable(
                name: "LU_TypeOfStudySection");

            migrationBuilder.DropTable(
                name: "Perm_ApplicationUser");

            migrationBuilder.DropTable(
                name: "PI_AllGradesSummerEstimate");

            migrationBuilder.DropTable(
                name: "PI_DetailedGradesToBeAnnounced");

            migrationBuilder.DropTable(
                name: "PI_DivisionType");

            migrationBuilder.DropTable(
                name: "PI_EstimatesOfCourseFeeExemption");

            migrationBuilder.DropTable(
                name: "PreRequisiteCourses");

            migrationBuilder.DropTable(
                name: "LU_EquivalentGrade");

            migrationBuilder.DropTable(
                name: "LU_Hours");

            migrationBuilder.DropTable(
                name: "CumulativeAverage");

            migrationBuilder.DropTable(
                name: "LU_GradesDetails");

            migrationBuilder.DropTable(
                name: "LU_DivisionType");

            migrationBuilder.DropTable(
                name: "EN_CourssesInformations");

            migrationBuilder.DropTable(
                name: "AR_ProgramInformation");

            migrationBuilder.DropTable(
                name: "CollegeCourses");

            migrationBuilder.DropTable(
                name: "LU_AllGrades");

            migrationBuilder.DropTable(
                name: "LU_CourseType");

            migrationBuilder.DropTable(
                name: "LU_Level");

            migrationBuilder.DropTable(
                name: "LU_Prerequisite");

            migrationBuilder.DropTable(
                name: "LU_PreviousQualification");

            migrationBuilder.DropTable(
                name: "LU_Semester");

            migrationBuilder.DropTable(
                name: "EN_Programs");

            migrationBuilder.DropTable(
                name: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropTable(
                name: "LU_BurdenCalculation");

            migrationBuilder.DropTable(
                name: "LU_EditTheStudentLevel");

            migrationBuilder.DropTable(
                name: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropTable(
                name: "LU_ReasonForBlockingAcademicResult");

            migrationBuilder.DropTable(
                name: "LU_ReasonForBlockingRegistration");

            migrationBuilder.DropTable(
                name: "LU_TheAcademicDegree");

            migrationBuilder.DropTable(
                name: "LU_TheResultAppears");

            migrationBuilder.DropTable(
                name: "LU_TypeOfFinancialStatementInTheProgram");

            migrationBuilder.DropTable(
                name: "LU_TypeOfProgramFees");

            migrationBuilder.DropTable(
                name: "LU_Typeofsummerfees");

            migrationBuilder.DropTable(
                name: "System Type");

            migrationBuilder.DropTable(
                name: "Faculty");

            migrationBuilder.DropTable(
                name: "University");
        }
    }
}
