using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class lastAlter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GraduationSemesters_Graduations_SemesterId",
                table: "GraduationSemesters");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "GraduationSemesters",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldDefaultValue: 10);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GraduationSemesters_Graduations_Grad",
                table: "GraduationSemesters");

            migrationBuilder.DropIndex(
                name: "IX_GraduationSemesters_Grad",
                table: "GraduationSemesters");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "GraduationSemesters",
                type: "int",
                nullable: false,
                defaultValue: 10,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_GraduationSemesters_Graduations_SemesterId",
                table: "GraduationSemesters",
                column: "SemesterId",
                principalTable: "Graduations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
