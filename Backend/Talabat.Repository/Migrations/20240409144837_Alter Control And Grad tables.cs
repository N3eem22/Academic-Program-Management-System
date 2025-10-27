using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AlterControlAndGradtables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Graduations_LU_Level_LevelToBePassedId",
                table: "Graduations");

            migrationBuilder.DropForeignKey(
                name: "FK_Graduations_LU_Semester_SemesterToBePassedId",
                table: "Graduations");

            migrationBuilder.DropForeignKey(
                name: "FK_LU_Level_University_UniversityId",
                table: "LU_Level");

            migrationBuilder.DropIndex(
                name: "IX_Graduations_LevelToBePassedId",
                table: "Graduations");

            migrationBuilder.DropIndex(
                name: "IX_Graduations_SemesterToBePassedId",
                table: "Graduations");

            migrationBuilder.DropColumn(
                name: "LevelToBePassedId",
                table: "Graduations");

            migrationBuilder.DropColumn(
                name: "SemesterToBePassedId",
                table: "Graduations");

            migrationBuilder.AlterColumn<int>(
                name: "UniversityId",
                table: "LU_Level",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "LevelId",
                table: "Graduations",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "AddingExciptionLetters",
                table: "Controls",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AllDetailOrNo",
                table: "Controls",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "CalculateEstimate",
                table: "Controls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ChooseTheDetailsOfTheoreticalFailureBasedOn",
                table: "Controls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "DetailsOfTheoreticalFailingGrades",
                table: "Controls",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "EstimateDeprivationAfterTheExamId",
                table: "Controls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EstimateDeprivationBeforeTheExamId",
                table: "Controls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FailingGrades",
                table: "Controls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SuccessGrades",
                table: "Controls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "AverageValues",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AverageValues",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "ACaseOfAbsenceInTheDetailedGrades",
                columns: table => new
                {
                    GradeGetailId = table.Column<int>(type: "int", nullable: false),
                    ControlId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACaseOfAbsenceInTheDetailedGrades", x => new { x.GradeGetailId, x.ControlId });
                    table.ForeignKey(
                        name: "FK_ACaseOfAbsenceInTheDetailedGrades_Controls_ControlId",
                        column: x => x.ControlId,
                        principalTable: "Controls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ACaseOfAbsenceInTheDetailedGrades_LU_GradesDetails_GradeGetailId",
                        column: x => x.GradeGetailId,
                        principalTable: "LU_GradesDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ASuccessRatingDoesNotAddHoursOrAverage",
                columns: table => new
                {
                    GradeId = table.Column<int>(type: "int", nullable: false),
                    ControlId = table.Column<int>(type: "int", nullable: false),
                    ControlId1 = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ASuccessRatingDoesNotAddHoursOrAverage", x => new { x.GradeId, x.ControlId });
                    table.ForeignKey(
                        name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_Controls_ControlId1",
                        column: x => x.ControlId1,
                        principalTable: "Controls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_LU_AllGrades_ControlId",
                        column: x => x.ControlId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DetailsOfExceptionalLetters",
                columns: table => new
                {
                    GradeGetailId = table.Column<int>(type: "int", nullable: false),
                    ControlId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetailsOfExceptionalLetters", x => new { x.GradeGetailId, x.ControlId });
                    table.ForeignKey(
                        name: "FK_DetailsOfExceptionalLetters_Controls_ControlId",
                        column: x => x.ControlId,
                        principalTable: "Controls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DetailsOfExceptionalLetters_LU_GradesDetails_GradeGetailId",
                        column: x => x.GradeGetailId,
                        principalTable: "LU_GradesDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DetailsOfTheoreticalFailingGrades",
                columns: table => new
                {
                    GradeGetailId = table.Column<int>(type: "int", nullable: false),
                    ControlId = table.Column<int>(type: "int", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetailsOfTheoreticalFailingGrades", x => new { x.GradeGetailId, x.ControlId });
                    table.ForeignKey(
                        name: "FK_DetailsOfTheoreticalFailingGrades_Controls_ControlId",
                        column: x => x.ControlId,
                        principalTable: "Controls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DetailsOfTheoreticalFailingGrades_LU_GradesDetails_GradeGetailId",
                        column: x => x.GradeGetailId,
                        principalTable: "LU_GradesDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EstimatesNotDefinedInTheList",
                columns: table => new
                {
                    GradeId = table.Column<int>(type: "int", nullable: false),
                    ControlId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EstimatesNotDefinedInTheList", x => new { x.GradeId, x.ControlId });
                    table.ForeignKey(
                        name: "FK_EstimatesNotDefinedInTheList_Controls_ControlId",
                        column: x => x.ControlId,
                        principalTable: "Controls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EstimatesNotDefinedInTheList_LU_AllGrades_GradeId",
                        column: x => x.GradeId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExceptionalLetterGrades",
                columns: table => new
                {
                    GradeId = table.Column<int>(type: "int", nullable: false),
                    ControlId = table.Column<int>(type: "int", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExceptionalLetterGrades", x => new { x.GradeId, x.ControlId });
                    table.ForeignKey(
                        name: "FK_ExceptionalLetterGrades_Controls_ControlId",
                        column: x => x.ControlId,
                        principalTable: "Controls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ExceptionalLetterGrades_LU_AllGrades_GradeId",
                        column: x => x.GradeId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FailureEstimatesInTheList",
                columns: table => new
                {
                    GradeId = table.Column<int>(type: "int", nullable: false),
                    ControlId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FailureEstimatesInTheList", x => new { x.GradeId, x.ControlId });
                    table.ForeignKey(
                        name: "FK_FailureEstimatesInTheList_Controls_ControlId",
                        column: x => x.ControlId,
                        principalTable: "Controls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FailureEstimatesInTheList_LU_AllGrades_GradeId",
                        column: x => x.GradeId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GraduationLevels",
                columns: table => new
                {
                    LevelId = table.Column<int>(type: "int", nullable: false),
                    GraduationId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GraduationLevels", x => new { x.LevelId, x.GraduationId });
                    table.ForeignKey(
                        name: "FK_GraduationLevels_Graduations_GraduationId",
                        column: x => x.GraduationId,
                        principalTable: "Graduations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GraduationLevels_LU_Level_LevelId",
                        column: x => x.LevelId,
                        principalTable: "LU_Level",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GraduationSemesters",
                columns: table => new
                {
                    SemesterId = table.Column<int>(type: "int", nullable: false),
                    GraduationId = table.Column<int>(type: "int", nullable: false),
                    Grad = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GraduationSemesters", x => new { x.SemesterId, x.GraduationId });
                    table.ForeignKey(
                        name: "FK_GraduationSemesters_Graduations_SemesterId",
                        column: x => x.SemesterId,
                        principalTable: "Graduations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GraduationSemesters_LU_Semester_SemesterId",
                        column: x => x.SemesterId,
                        principalTable: "LU_Semester",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Graduations_LevelId",
                table: "Graduations",
                column: "LevelId");

            migrationBuilder.CreateIndex(
                name: "IX_Controls_EstimateDeprivationAfterTheExamId",
                table: "Controls",
                column: "EstimateDeprivationAfterTheExamId");

            migrationBuilder.CreateIndex(
                name: "IX_Controls_EstimateDeprivationBeforeTheExamId",
                table: "Controls",
                column: "EstimateDeprivationBeforeTheExamId");

            migrationBuilder.CreateIndex(
                name: "IX_ACaseOfAbsenceInTheDetailedGrades_ControlId",
                table: "ACaseOfAbsenceInTheDetailedGrades",
                column: "ControlId");

            migrationBuilder.CreateIndex(
                name: "IX_ASuccessRatingDoesNotAddHoursOrAverage_ControlId",
                table: "ASuccessRatingDoesNotAddHoursOrAverage",
                column: "ControlId");

            migrationBuilder.CreateIndex(
                name: "IX_ASuccessRatingDoesNotAddHoursOrAverage_ControlId1",
                table: "ASuccessRatingDoesNotAddHoursOrAverage",
                column: "ControlId1");

            migrationBuilder.CreateIndex(
                name: "IX_DetailsOfExceptionalLetters_ControlId",
                table: "DetailsOfExceptionalLetters",
                column: "ControlId");

            migrationBuilder.CreateIndex(
                name: "IX_DetailsOfTheoreticalFailingGrades_ControlId",
                table: "DetailsOfTheoreticalFailingGrades",
                column: "ControlId");

            migrationBuilder.CreateIndex(
                name: "IX_EstimatesNotDefinedInTheList_ControlId",
                table: "EstimatesNotDefinedInTheList",
                column: "ControlId");

            migrationBuilder.CreateIndex(
                name: "IX_ExceptionalLetterGrades_ControlId",
                table: "ExceptionalLetterGrades",
                column: "ControlId");

            migrationBuilder.CreateIndex(
                name: "IX_FailureEstimatesInTheList_ControlId",
                table: "FailureEstimatesInTheList",
                column: "ControlId");

            migrationBuilder.CreateIndex(
                name: "IX_GraduationLevels_GraduationId",
                table: "GraduationLevels",
                column: "GraduationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Controls_LU_AllGrades_EstimateDeprivationAfterTheExamId",
                table: "Controls",
                column: "EstimateDeprivationAfterTheExamId",
                principalTable: "LU_AllGrades",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Controls_LU_AllGrades_EstimateDeprivationBeforeTheExamId",
                table: "Controls",
                column: "EstimateDeprivationBeforeTheExamId",
                principalTable: "LU_AllGrades",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Graduations_LU_Level_LevelId",
                table: "Graduations",
                column: "LevelId",
                principalTable: "LU_Level",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_LU_Level_University_UniversityId",
                table: "LU_Level",
                column: "UniversityId",
                principalTable: "University",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Controls_LU_AllGrades_EstimateDeprivationAfterTheExamId",
                table: "Controls");

            migrationBuilder.DropForeignKey(
                name: "FK_Controls_LU_AllGrades_EstimateDeprivationBeforeTheExamId",
                table: "Controls");

            migrationBuilder.DropForeignKey(
                name: "FK_Graduations_LU_Level_LevelId",
                table: "Graduations");

            migrationBuilder.DropForeignKey(
                name: "FK_LU_Level_University_UniversityId",
                table: "LU_Level");

            migrationBuilder.DropTable(
                name: "ACaseOfAbsenceInTheDetailedGrades");

            migrationBuilder.DropTable(
                name: "ASuccessRatingDoesNotAddHoursOrAverage");

            migrationBuilder.DropTable(
                name: "DetailsOfExceptionalLetters");

            migrationBuilder.DropTable(
                name: "DetailsOfTheoreticalFailingGrades");

            migrationBuilder.DropTable(
                name: "EstimatesNotDefinedInTheList");

            migrationBuilder.DropTable(
                name: "ExceptionalLetterGrades");

            migrationBuilder.DropTable(
                name: "FailureEstimatesInTheList");

            migrationBuilder.DropTable(
                name: "GraduationLevels");

            migrationBuilder.DropTable(
                name: "GraduationSemesters");

            migrationBuilder.DropIndex(
                name: "IX_Graduations_LevelId",
                table: "Graduations");

            migrationBuilder.DropIndex(
                name: "IX_Controls_EstimateDeprivationAfterTheExamId",
                table: "Controls");

            migrationBuilder.DropIndex(
                name: "IX_Controls_EstimateDeprivationBeforeTheExamId",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "LevelId",
                table: "Graduations");

            migrationBuilder.DropColumn(
                name: "AddingExciptionLetters",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "AllDetailOrNo",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "CalculateEstimate",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "ChooseTheDetailsOfTheoreticalFailureBasedOn",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "DetailsOfTheoreticalFailingGrades",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "EstimateDeprivationAfterTheExamId",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "EstimateDeprivationBeforeTheExamId",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "FailingGrades",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "SuccessGrades",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "AverageValues");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AverageValues");

            migrationBuilder.AlterColumn<int>(
                name: "UniversityId",
                table: "LU_Level",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LevelToBePassedId",
                table: "Graduations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SemesterToBePassedId",
                table: "Graduations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Graduations_LevelToBePassedId",
                table: "Graduations",
                column: "LevelToBePassedId");

            migrationBuilder.CreateIndex(
                name: "IX_Graduations_SemesterToBePassedId",
                table: "Graduations",
                column: "SemesterToBePassedId");

            migrationBuilder.AddForeignKey(
                name: "FK_Graduations_LU_Level_LevelToBePassedId",
                table: "Graduations",
                column: "LevelToBePassedId",
                principalTable: "LU_Level",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Graduations_LU_Semester_SemesterToBePassedId",
                table: "Graduations",
                column: "SemesterToBePassedId",
                principalTable: "LU_Semester",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_LU_Level_University_UniversityId",
                table: "LU_Level",
                column: "UniversityId",
                principalTable: "University",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
