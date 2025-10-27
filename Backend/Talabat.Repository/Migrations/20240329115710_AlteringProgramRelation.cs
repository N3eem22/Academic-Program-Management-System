using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AlteringProgramRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProgramId",
                table: "Graduations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProgramId",
                table: "CumulativeAverages",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProgramId",
                table: "Controls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Graduations_ProgramId",
                table: "Graduations",
                column: "ProgramId");

            migrationBuilder.CreateIndex(
                name: "IX_CumulativeAverages_ProgramId",
                table: "CumulativeAverages",
                column: "ProgramId");

            migrationBuilder.CreateIndex(
                name: "IX_Controls_ProgramId",
                table: "Controls",
                column: "ProgramId");

            migrationBuilder.AddForeignKey(
                name: "FK_Controls_AR_ProgramInformation_ProgramId",
                table: "Controls",
                column: "ProgramId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CumulativeAverages_AR_ProgramInformation_ProgramId",
                table: "CumulativeAverages",
                column: "ProgramId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Graduations_AR_ProgramInformation_ProgramId",
                table: "Graduations",
                column: "ProgramId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Controls_AR_ProgramInformation_ProgramId",
                table: "Controls");

            migrationBuilder.DropForeignKey(
                name: "FK_CumulativeAverages_AR_ProgramInformation_ProgramId",
                table: "CumulativeAverages");

            migrationBuilder.DropForeignKey(
                name: "FK_Graduations_AR_ProgramInformation_ProgramId",
                table: "Graduations");

            migrationBuilder.DropIndex(
                name: "IX_Graduations_ProgramId",
                table: "Graduations");

            migrationBuilder.DropIndex(
                name: "IX_CumulativeAverages_ProgramId",
                table: "CumulativeAverages");

            migrationBuilder.DropIndex(
                name: "IX_Controls_ProgramId",
                table: "Controls");

            migrationBuilder.DropColumn(
                name: "ProgramId",
                table: "Graduations");

            migrationBuilder.DropColumn(
                name: "ProgramId",
                table: "CumulativeAverages");

            migrationBuilder.DropColumn(
                name: "ProgramId",
                table: "Controls");
        }
    }
}
