using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class ProgramLevelsProgramGradesAcademicLoad : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "IX_AR_ProgramLevels_prog_InfoId",
                table: "AR_ProgramLevels",
                column: "prog_InfoId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramLevels_TheLevelId",
                table: "AR_ProgramLevels",
                column: "TheLevelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AR_AcademicLoadAccordingToLevel");

            migrationBuilder.DropTable(
                name: "AR_Program_TheGrades");

            migrationBuilder.DropTable(
                name: "AR_ProgramLevels");
        }
    }
}
