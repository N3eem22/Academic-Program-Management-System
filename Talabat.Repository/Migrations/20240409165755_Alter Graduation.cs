using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AlterGraduation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GraduationSemesters_Graduations_Grad",
                table: "GraduationSemesters");

            migrationBuilder.DropIndex(
                name: "IX_GraduationSemesters_Grad",
                table: "GraduationSemesters");

            migrationBuilder.CreateIndex(
                name: "IX_GraduationSemesters_GraduationId",
                table: "GraduationSemesters",
                column: "GraduationId");

            migrationBuilder.AddForeignKey(
                name: "FK_GraduationSemesters_Graduations_GraduationId",
                table: "GraduationSemesters",
                column: "GraduationId",
                principalTable: "Graduations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GraduationSemesters_Graduations_GraduationId",
                table: "GraduationSemesters");

            migrationBuilder.DropIndex(
                name: "IX_GraduationSemesters_GraduationId",
                table: "GraduationSemesters");

            migrationBuilder.CreateIndex(
                name: "IX_GraduationSemesters_Grad",
                table: "GraduationSemesters",
                column: "Grad");

            migrationBuilder.AddForeignKey(
                name: "FK_GraduationSemesters_Graduations_Grad",
                table: "GraduationSemesters",
                column: "Grad",
                principalTable: "Graduations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
