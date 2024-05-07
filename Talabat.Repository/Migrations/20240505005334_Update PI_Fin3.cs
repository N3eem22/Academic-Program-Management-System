using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class UpdatePI_Fin3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_Faculty_FacultyId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "Degree",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "pre_Requisite",
                table: "AR_ProgramInformation");

            migrationBuilder.AddColumn<int>(
                name: "PrerequisitesProgramsId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_PrerequisitesProgramsId",
                table: "AR_ProgramInformation",
                column: "PrerequisitesProgramsId");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_EN_Programs_PrerequisitesProgramsId",
                table: "AR_ProgramInformation",
                column: "PrerequisitesProgramsId",
                principalTable: "EN_Programs",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_Faculty_FacultyId",
                table: "AR_ProgramInformation",
                column: "FacultyId",
                principalTable: "Faculty",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_EN_Programs_PrerequisitesProgramsId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_Faculty_FacultyId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_PrerequisitesProgramsId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "PrerequisitesProgramsId",
                table: "AR_ProgramInformation");

            migrationBuilder.AddColumn<string>(
                name: "Degree",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "pre_Requisite",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_Faculty_FacultyId",
                table: "AR_ProgramInformation",
                column: "FacultyId",
                principalTable: "Faculty",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
