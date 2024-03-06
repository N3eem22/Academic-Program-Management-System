using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class ProgramInformationProgram : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProgramId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_ProgramId",
                table: "AR_ProgramInformation",
                column: "ProgramId");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_EN_Programs_ProgramId",
                table: "AR_ProgramInformation",
                column: "ProgramId",
                principalTable: "EN_Programs",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_EN_Programs_ProgramId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_ProgramId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "ProgramId",
                table: "AR_ProgramInformation");
        }
    }
}
