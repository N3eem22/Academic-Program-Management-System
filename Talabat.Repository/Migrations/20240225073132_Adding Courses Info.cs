using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AddingCoursesInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "Perm_ApplicationUser");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "Perm_ApplicationUser");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "Perm_ApplicationUser");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "Perm_ApplicationUser");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Perm_ApplicationUser");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "Perm_ApplicationUser");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "Perm_ApplicationUser");

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
                    PartOneCourse = table.Column<int>(type: "int", nullable: true)
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
                name: "IX_PreRequisiteCourses_CourseInfoId",
                table: "PreRequisiteCourses",
                column: "CourseInfoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CoursesAndFailingGrades");

            migrationBuilder.DropTable(
                name: "CoursesAndHours");

            migrationBuilder.DropTable(
                name: "CoursesInformationsAndDetailedGrade");

            migrationBuilder.DropTable(
                name: "PreRequisiteCourses");

            migrationBuilder.DropTable(
                name: "EN_CourssesInformations");

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "Perm_ApplicationUser",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "Perm_ApplicationUser",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "Perm_ApplicationUser",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "Perm_ApplicationUser",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Perm_ApplicationUser",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "Perm_ApplicationUser",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "Perm_ApplicationUser",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
