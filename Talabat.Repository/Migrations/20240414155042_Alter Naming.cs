using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AlterNaming : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACaseOfAbsenceInTheDetailedGrades_LU_GradesDetails_GradeGetailId",
                table: "ACaseOfAbsenceInTheDetailedGrades");

            migrationBuilder.DropForeignKey(
                name: "FK_DetailsOfExceptionalLetters_LU_GradesDetails_GradeGetailId",
                table: "DetailsOfExceptionalLetters");

            migrationBuilder.DropForeignKey(
                name: "FK_DetailsOfTheoreticalFailingGrades_LU_GradesDetails_GradeGetailId",
                table: "DetailsOfTheoreticalFailingGrades");

            migrationBuilder.RenameColumn(
                name: "GradeGetailId",
                table: "DetailsOfTheoreticalFailingGrades",
                newName: "GradeDetailId");

            migrationBuilder.RenameColumn(
                name: "GradeGetailId",
                table: "DetailsOfExceptionalLetters",
                newName: "GradeDetailId");

            migrationBuilder.RenameColumn(
                name: "GradeGetailId",
                table: "ACaseOfAbsenceInTheDetailedGrades",
                newName: "GradeDetailId");

            migrationBuilder.AddForeignKey(
                name: "FK_ACaseOfAbsenceInTheDetailedGrades_LU_GradesDetails_GradeDetailId",
                table: "ACaseOfAbsenceInTheDetailedGrades",
                column: "GradeDetailId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DetailsOfExceptionalLetters_LU_GradesDetails_GradeDetailId",
                table: "DetailsOfExceptionalLetters",
                column: "GradeDetailId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DetailsOfTheoreticalFailingGrades_LU_GradesDetails_GradeDetailId",
                table: "DetailsOfTheoreticalFailingGrades",
                column: "GradeDetailId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACaseOfAbsenceInTheDetailedGrades_LU_GradesDetails_GradeDetailId",
                table: "ACaseOfAbsenceInTheDetailedGrades");

            migrationBuilder.DropForeignKey(
                name: "FK_DetailsOfExceptionalLetters_LU_GradesDetails_GradeDetailId",
                table: "DetailsOfExceptionalLetters");

            migrationBuilder.DropForeignKey(
                name: "FK_DetailsOfTheoreticalFailingGrades_LU_GradesDetails_GradeDetailId",
                table: "DetailsOfTheoreticalFailingGrades");

            migrationBuilder.RenameColumn(
                name: "GradeDetailId",
                table: "DetailsOfTheoreticalFailingGrades",
                newName: "GradeGetailId");

            migrationBuilder.RenameColumn(
                name: "GradeDetailId",
                table: "DetailsOfExceptionalLetters",
                newName: "GradeGetailId");

            migrationBuilder.RenameColumn(
                name: "GradeDetailId",
                table: "ACaseOfAbsenceInTheDetailedGrades",
                newName: "GradeGetailId");

            migrationBuilder.AddForeignKey(
                name: "FK_ACaseOfAbsenceInTheDetailedGrades_LU_GradesDetails_GradeGetailId",
                table: "ACaseOfAbsenceInTheDetailedGrades",
                column: "GradeGetailId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DetailsOfExceptionalLetters_LU_GradesDetails_GradeGetailId",
                table: "DetailsOfExceptionalLetters",
                column: "GradeGetailId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DetailsOfTheoreticalFailingGrades_LU_GradesDetails_GradeGetailId",
                table: "DetailsOfTheoreticalFailingGrades",
                column: "GradeGetailId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
