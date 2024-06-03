using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class edittest2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students_Programs");

            migrationBuilder.AddColumn<int>(
                name: "ProgramsId",
                table: "Students",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Students_ProgramsId",
                table: "Students",
                column: "ProgramsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_EN_Programs_ProgramsId",
                table: "Students",
                column: "ProgramsId",
                principalTable: "EN_Programs",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_EN_Programs_ProgramsId",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_Students_ProgramsId",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "ProgramsId",
                table: "Students");

            migrationBuilder.CreateTable(
                name: "Students_Programs",
                columns: table => new
                {
                    ProgramsId = table.Column<int>(type: "int", nullable: false),
                    StudentsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students_Programs", x => new { x.ProgramsId, x.StudentsId });
                    table.ForeignKey(
                        name: "FK_Students_Programs_EN_Programs_ProgramsId",
                        column: x => x.ProgramsId,
                        principalTable: "EN_Programs",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Students_Programs_Students_StudentsId",
                        column: x => x.StudentsId,
                        principalTable: "Students",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Students_Programs_StudentsId",
                table: "Students_Programs",
                column: "StudentsId");
        }
    }
}
