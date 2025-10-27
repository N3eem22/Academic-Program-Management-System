using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class alterCourses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EN_CourssesInformations_LU_PreviousQualification_previousQualification",
                table: "EN_CourssesInformations");

            migrationBuilder.RenameColumn(
                name: "previousQualification",
                table: "EN_CourssesInformations",
                newName: "PreviousQualification");

            migrationBuilder.RenameIndex(
                name: "IX_EN_CourssesInformations_previousQualification",
                table: "EN_CourssesInformations",
                newName: "IX_EN_CourssesInformations_PreviousQualification");

            migrationBuilder.AddColumn<int>(
                name: "ProgramId",
                table: "EN_CourssesInformations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_EN_CourssesInformations_ProgramId",
                table: "EN_CourssesInformations",
                column: "ProgramId");

            migrationBuilder.AddForeignKey(
                name: "FK_EN_CourssesInformations_AR_ProgramInformation_ProgramId",
                table: "EN_CourssesInformations",
                column: "ProgramId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_EN_CourssesInformations_LU_PreviousQualification_PreviousQualification",
                table: "EN_CourssesInformations",
                column: "PreviousQualification",
                principalTable: "LU_PreviousQualification",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EN_CourssesInformations_AR_ProgramInformation_ProgramId",
                table: "EN_CourssesInformations");

            migrationBuilder.DropForeignKey(
                name: "FK_EN_CourssesInformations_LU_PreviousQualification_PreviousQualification",
                table: "EN_CourssesInformations");

            migrationBuilder.DropIndex(
                name: "IX_EN_CourssesInformations_ProgramId",
                table: "EN_CourssesInformations");

            migrationBuilder.DropColumn(
                name: "ProgramId",
                table: "EN_CourssesInformations");

            migrationBuilder.RenameColumn(
                name: "PreviousQualification",
                table: "EN_CourssesInformations",
                newName: "previousQualification");

            migrationBuilder.RenameIndex(
                name: "IX_EN_CourssesInformations_PreviousQualification",
                table: "EN_CourssesInformations",
                newName: "IX_EN_CourssesInformations_previousQualification");

            migrationBuilder.AddForeignKey(
                name: "FK_EN_CourssesInformations_LU_PreviousQualification_previousQualification",
                table: "EN_CourssesInformations",
                column: "previousQualification",
                principalTable: "LU_PreviousQualification",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }
    }
}
