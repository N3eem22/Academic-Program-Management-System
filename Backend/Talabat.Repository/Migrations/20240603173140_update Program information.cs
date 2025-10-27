using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class updatePrograminformation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Questionnaire",
                table: "AR_ProgramInformation",
                type: "bit",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<bool>(
                name: "TheQuestionnaireIsIncluded",
                table: "AR_ProgramInformation",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TheQuestionnaireIsIncluded",
                table: "AR_ProgramInformation");

            migrationBuilder.AlterColumn<string>(
                name: "Questionnaire",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");
        }
    }
}
