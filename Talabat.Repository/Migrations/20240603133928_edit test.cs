using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class edittest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_Courses_EN_CourssesInformations_CourseInformationId",
                table: "Students_Courses");

            migrationBuilder.RenameColumn(
                name: "CourseInformationId",
                table: "Students_Courses",
                newName: "CollegeCoursesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Courses_CollegeCourses_CollegeCoursesId",
                table: "Students_Courses",
                column: "CollegeCoursesId",
                principalTable: "CollegeCourses",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_Courses_CollegeCourses_CollegeCoursesId",
                table: "Students_Courses");

            migrationBuilder.RenameColumn(
                name: "CollegeCoursesId",
                table: "Students_Courses",
                newName: "CourseInformationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Courses_EN_CourssesInformations_CourseInformationId",
                table: "Students_Courses",
                column: "CourseInformationId",
                principalTable: "EN_CourssesInformations",
                principalColumn: "Id");
        }
    }
}
