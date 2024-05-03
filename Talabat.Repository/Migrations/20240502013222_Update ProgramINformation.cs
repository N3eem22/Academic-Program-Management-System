using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class UpdateProgramINformation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_CumulativeAverages_ComulativeAvaregeIdId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_ComulativeAvaregeIdId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "ComulativeAvaregeIdId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "Institute",
                table: "AR_ProgramInformation");

            migrationBuilder.AddColumn<int>(
                name: "FacultyId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_FacultyId",
                table: "AR_ProgramInformation",
                column: "FacultyId");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_Faculty_FacultyId",
                table: "AR_ProgramInformation",
                column: "FacultyId",
                principalTable: "Faculty",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_Faculty_FacultyId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_FacultyId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "FacultyId",
                table: "AR_ProgramInformation");

            migrationBuilder.AddColumn<int>(
                name: "ComulativeAvaregeIdId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Institute",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_ComulativeAvaregeIdId",
                table: "AR_ProgramInformation",
                column: "ComulativeAvaregeIdId");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_CumulativeAverages_ComulativeAvaregeIdId",
                table: "AR_ProgramInformation",
                column: "ComulativeAvaregeIdId",
                principalTable: "CumulativeAverages",
                principalColumn: "Id");
        }
    }
}
