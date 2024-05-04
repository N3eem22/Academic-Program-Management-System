using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class UpdateBaseEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "PI_EstimatesOfCourseFeeExemption",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "PI_EstimatesOfCourseFeeExemption",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "PI_DivisionType",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "PI_DivisionType",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "PI_AllGradesSummerEstimate",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "PI_AllGradesSummerEstimate",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "PI_EstimatesOfCourseFeeExemption");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "PI_EstimatesOfCourseFeeExemption");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "PI_DivisionType");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "PI_DivisionType");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "PI_AllGradesSummerEstimate");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "PI_AllGradesSummerEstimate");
        }
    }
}
