using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class UpdateProgramINformation2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_EN_Programs_ProgramId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "DetailedGradesToBeAnnounced",
                table: "AR_ProgramInformation");

            migrationBuilder.RenameColumn(
                name: "ProgramId",
                table: "AR_ProgramInformation",
                newName: "ProgramsId");

            migrationBuilder.RenameIndex(
                name: "IX_AR_ProgramInformation_ProgramId",
                table: "AR_ProgramInformation",
                newName: "IX_AR_ProgramInformation_ProgramsId");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_EN_Programs_ProgramsId",
                table: "AR_ProgramInformation",
                column: "ProgramsId",
                principalTable: "EN_Programs",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_EN_Programs_ProgramsId",
                table: "AR_ProgramInformation");

            migrationBuilder.RenameColumn(
                name: "ProgramsId",
                table: "AR_ProgramInformation",
                newName: "ProgramId");

            migrationBuilder.RenameIndex(
                name: "IX_AR_ProgramInformation_ProgramsId",
                table: "AR_ProgramInformation",
                newName: "IX_AR_ProgramInformation_ProgramId");

            migrationBuilder.AddColumn<string>(
                name: "DetailedGradesToBeAnnounced",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_EN_Programs_ProgramId",
                table: "AR_ProgramInformation",
                column: "ProgramId",
                principalTable: "EN_Programs",
                principalColumn: "Id");
        }
    }
}
