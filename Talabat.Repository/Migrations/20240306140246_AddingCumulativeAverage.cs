using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AddingCumulativeAverage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CumulativeAverages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImprovingCourses = table.Column<int>(type: "int", nullable: false),
                    KeepFailing = table.Column<bool>(type: "bit", nullable: false),
                    MaintainingStudentSuccess = table.Column<bool>(type: "bit", nullable: false),
                    UtmostGrade = table.Column<int>(type: "int", nullable: false),
                    ChangingCourses = table.Column<bool>(type: "bit", nullable: false),
                    SomeOfGrades = table.Column<int>(type: "int", nullable: false),
                    HowToCalculateTheRatio = table.Column<int>(type: "int", nullable: false),
                    MultiplyingTheHoursByTheStudentsGrades = table.Column<int>(type: "int", nullable: false),
                    CalculateTheTermOfTheEquationInTheRate = table.Column<bool>(type: "bit", nullable: false),
                    CalculatingTheSemesterEquationInHourseEarned = table.Column<bool>(type: "bit", nullable: false),
                    RateApproximation = table.Column<bool>(type: "bit", nullable: false),
                    TheNnumberOfDigitsRroundingTheRate = table.Column<int>(type: "int", nullable: false),
                    ReducingTheRateUponImprovement = table.Column<bool>(type: "bit", nullable: false),
                    MaximumNumberOfAdditionsToFailedCoursesWithoutSuccess = table.Column<int>(type: "int", nullable: false),
                    DeleteFailedCoursesAfterSuccess = table.Column<int>(type: "int", nullable: false),
                    MaximumCumulativeGPA = table.Column<int>(type: "int", nullable: false),
                    CalculateTheCumulativeEstimate = table.Column<int>(type: "int", nullable: false),
                    HowToCalculateTheRate = table.Column<int>(type: "int", nullable: false),
                    TheNumberOfDigitsRoundinPoints = table.Column<int>(type: "int", nullable: false),
                    NumberOfDigitsRoundingTheRatio = table.Column<int>(type: "int", nullable: false),
                    SummerIsNotExcludedInCalculatingTheAnnualAverage = table.Column<bool>(type: "bit", nullable: false),
                    TheCumulativeAverageDoesNotAppearInTheStudentGradesPortal = table.Column<bool>(type: "bit", nullable: false),
                    TheSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades = table.Column<bool>(type: "bit", nullable: false),
                    CalculatingFailingGradePoints = table.Column<bool>(type: "bit", nullable: false),
                    CalculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage = table.Column<bool>(type: "bit", nullable: false),
                    HowToCalculateTheSemesterAverage = table.Column<int>(type: "int", nullable: false),
                    ProgramInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CumulativeAverages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CumulativeAverages_AR_ProgramInformation_ProgramInfoId",
                        column: x => x.ProgramInfoId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CumulativeAverages_LU_AllGrades_UtmostGrade",
                        column: x => x.UtmostGrade,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "GadesOfEstimates",
                columns: table => new
                {
                    GradeId = table.Column<int>(type: "int", nullable: false),
                    CumulativeAverageId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GadesOfEstimates", x => new { x.GradeId, x.CumulativeAverageId });
                    table.ForeignKey(
                        name: "FK_GadesOfEstimates_CumulativeAverages_CumulativeAverageId",
                        column: x => x.CumulativeAverageId,
                        principalTable: "CumulativeAverages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GadesOfEstimates_LU_AllGrades_GradeId",
                        column: x => x.GradeId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CumulativeAverages_ProgramInfoId",
                table: "CumulativeAverages",
                column: "ProgramInfoId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CumulativeAverages_UtmostGrade",
                table: "CumulativeAverages",
                column: "UtmostGrade");

            migrationBuilder.CreateIndex(
                name: "IX_GadesOfEstimates_CumulativeAverageId",
                table: "GadesOfEstimates",
                column: "CumulativeAverageId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GadesOfEstimates");

            migrationBuilder.DropTable(
                name: "CumulativeAverages");
        }
    }
}
