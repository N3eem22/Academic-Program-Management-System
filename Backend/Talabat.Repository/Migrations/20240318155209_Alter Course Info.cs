using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AlterCourseInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CourseId",
                table: "EN_CourssesInformations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PercentageForFristGrade",
                table: "EN_CourssesInformations",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PercentageForSecondGrade",
                table: "EN_CourssesInformations",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PercentageForThirdGrade",
                table: "EN_CourssesInformations",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_CourseId",
                table: "EN_CourssesInformations",
                column: "CourseId");
              
            migrationBuilder.AddForeignKey(
                name: "FK_EN_CourssesInformations_CollegeCourses_CourseId",
                table: "EN_CourssesInformations",
                column: "CourseId",
                principalTable: "CollegeCourses",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EN_CourssesInformations_CollegeCourses_CourseId",
                table: "EN_CourssesInformations");

            migrationBuilder.DropIndex(
                name: "IX_EN_CourssesInformations_CourseId",
                table: "EN_CourssesInformations");

            migrationBuilder.DropColumn(
                name: "CourseId",
                table: "EN_CourssesInformations");

            migrationBuilder.DropColumn(
                name: "PercentageForFristGrade",
                table: "EN_CourssesInformations");

            migrationBuilder.DropColumn(
                name: "PercentageForSecondGrade",
                table: "EN_CourssesInformations");

            migrationBuilder.DropColumn(
                name: "PercentageForThirdGrade",
                table: "EN_CourssesInformations");
        }
    }
}
