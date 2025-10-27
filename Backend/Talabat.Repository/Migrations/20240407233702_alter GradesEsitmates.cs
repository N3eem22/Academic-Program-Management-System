using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class alterGradesEsitmates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "GadesOfEstimatesThatDoesNotCounts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "GadesOfEstimatesThatDoesNotCounts",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "GadesOfEstimatesThatDoesNotCounts");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "GadesOfEstimatesThatDoesNotCounts");
        }
    }
}
