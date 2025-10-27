using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AcademicLoad : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Semester",
                table: "AR_AcademicLoadAccordingToLevel");

            migrationBuilder.AddColumn<int>(
                name: "SemestersId",
                table: "AR_AcademicLoadAccordingToLevel",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AR_AcademicLoadAccordingToLevel_SemestersId",
                table: "AR_AcademicLoadAccordingToLevel",
                column: "SemestersId");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_AcademicLoadAccordingToLevel_LU_Semester_SemestersId",
                table: "AR_AcademicLoadAccordingToLevel",
                column: "SemestersId",
                principalTable: "LU_Semester",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AR_AcademicLoadAccordingToLevel_LU_Semester_SemestersId",
                table: "AR_AcademicLoadAccordingToLevel");

            migrationBuilder.DropIndex(
                name: "IX_AR_AcademicLoadAccordingToLevel_SemestersId",
                table: "AR_AcademicLoadAccordingToLevel");

            migrationBuilder.DropColumn(
                name: "SemestersId",
                table: "AR_AcademicLoadAccordingToLevel");

            migrationBuilder.AddColumn<string>(
                name: "Semester",
                table: "AR_AcademicLoadAccordingToLevel",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
