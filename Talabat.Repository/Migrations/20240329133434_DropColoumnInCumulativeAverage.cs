using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class DropColoumnInCumulativeAverage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CumulativeAverages_AR_ProgramInformation_ProgramInfoId",
                table: "CumulativeAverages");

            migrationBuilder.DropIndex(
                name: "IX_CumulativeAverages_ProgramInfoId",
                table: "CumulativeAverages");

            migrationBuilder.DropColumn(
                name: "ProgramInfoId",
                table: "CumulativeAverages");

            migrationBuilder.AddColumn<int>(
                name: "ComulativeAvaregeIdId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "ProgramInfoId",
                table: "CumulativeAverages",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_CumulativeAverages_ProgramInfoId",
                table: "CumulativeAverages",
                column: "ProgramInfoId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_CumulativeAverages_AR_ProgramInformation_ProgramInfoId",
                table: "CumulativeAverages",
                column: "ProgramInfoId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
