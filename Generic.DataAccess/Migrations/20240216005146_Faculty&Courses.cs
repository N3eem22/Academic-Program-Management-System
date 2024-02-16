using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Generic.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class FacultyCourses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Faculty",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FacultyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Faculty", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Faculty_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CollegeCourses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseNameInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseNameInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Sub_CourseNameInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Sub_CourseNameInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseCodeInArabic = table.Column<int>(type: "int", nullable: false),
                    CourseCodeInEnglish = table.Column<int>(type: "int", nullable: false),
                    Sub_CourseCodeInArabic = table.Column<int>(type: "int", nullable: false),
                    Sub_CourseCodeInEnglish = table.Column<int>(type: "int", nullable: false),
                    CourseNickname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContentSummaryInArabic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContentSummaryInEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FacultyId = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    InsertDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeleteDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InsertBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    UpdateBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DeleteBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CollegeCourses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CollegeCourses_Faculty_FacultyId",
                        column: x => x.FacultyId,
                        principalTable: "Faculty",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_CollegeCourses_FacultyId",
                table: "CollegeCourses",
                column: "FacultyId");

            migrationBuilder.CreateIndex(
                name: "IX_Faculty_UniversityId",
                table: "Faculty",
                column: "UniversityId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CollegeCourses");

            migrationBuilder.DropTable(
                name: "Faculty");
        }
    }
}
