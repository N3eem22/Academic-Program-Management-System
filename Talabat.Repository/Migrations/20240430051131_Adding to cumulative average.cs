using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class Addingtocumulativeaverage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal",
                table: "CumulativeAverages",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal",
                table: "CumulativeAverages");
        }
    }
}
