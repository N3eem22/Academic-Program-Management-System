using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AlterControlTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_Controls_ControlId1",
                table: "ASuccessRatingDoesNotAddHoursOrAverage");

            migrationBuilder.DropForeignKey(
                name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_LU_AllGrades_ControlId",
                table: "ASuccessRatingDoesNotAddHoursOrAverage");

            migrationBuilder.DropIndex(
                name: "IX_ASuccessRatingDoesNotAddHoursOrAverage_ControlId1",
                table: "ASuccessRatingDoesNotAddHoursOrAverage");

            migrationBuilder.DropColumn(
                name: "ControlId1",
                table: "ASuccessRatingDoesNotAddHoursOrAverage");

            migrationBuilder.AddForeignKey(
                name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_Controls_ControlId",
                table: "ASuccessRatingDoesNotAddHoursOrAverage",
                column: "ControlId",
                principalTable: "Controls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_LU_AllGrades_GradeId",
                table: "ASuccessRatingDoesNotAddHoursOrAverage",
                column: "GradeId",
                principalTable: "LU_AllGrades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_Controls_ControlId",
                table: "ASuccessRatingDoesNotAddHoursOrAverage");

            migrationBuilder.DropForeignKey(
                name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_LU_AllGrades_GradeId",
                table: "ASuccessRatingDoesNotAddHoursOrAverage");

            migrationBuilder.AddColumn<int>(
                name: "ControlId1",
                table: "ASuccessRatingDoesNotAddHoursOrAverage",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ASuccessRatingDoesNotAddHoursOrAverage_ControlId1",
                table: "ASuccessRatingDoesNotAddHoursOrAverage",
                column: "ControlId1");

            migrationBuilder.AddForeignKey(
                name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_Controls_ControlId1",
                table: "ASuccessRatingDoesNotAddHoursOrAverage",
                column: "ControlId1",
                principalTable: "Controls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ASuccessRatingDoesNotAddHoursOrAverage_LU_AllGrades_ControlId",
                table: "ASuccessRatingDoesNotAddHoursOrAverage",
                column: "ControlId",
                principalTable: "LU_AllGrades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
