using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class TheRestOfTheTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CoursesAndFailingGrades_EN_CourssesInformations_CourseInfoId",
                table: "CoursesAndFailingGrades");

            migrationBuilder.DropForeignKey(
                name: "FK_CoursesAndFailingGrades_LU_GradesDetails_FailedGradeId",
                table: "CoursesAndFailingGrades");

            migrationBuilder.DropForeignKey(
                name: "FK_CoursesInformationsAndDetailedGrade_EN_CourssesInformations_CourseInfoId",
                table: "CoursesInformationsAndDetailedGrade");

            migrationBuilder.DropForeignKey(
                name: "FK_CoursesInformationsAndDetailedGrade_LU_GradesDetails_GradeDetailsId",
                table: "CoursesInformationsAndDetailedGrade");

            migrationBuilder.DropForeignKey(
                name: "FK_CumulativeAverage_AR_ProgramInformation_ProgramInfoId",
                table: "CumulativeAverage");

            migrationBuilder.DropForeignKey(
                name: "FK_CumulativeAverage_LU_AllGrades_UtmostGrade",
                table: "CumulativeAverage");

            migrationBuilder.DropForeignKey(
                name: "FK_GadesOfEstimatesThatDoesNotCount_CumulativeAverage_CumulativeAverageId",
                table: "GadesOfEstimatesThatDoesNotCount");

            migrationBuilder.DropForeignKey(
                name: "FK_GadesOfEstimatesThatDoesNotCount_LU_AllGrades_GradeId",
                table: "GadesOfEstimatesThatDoesNotCount");

            migrationBuilder.DropForeignKey(
                name: "FK_PreRequisiteCourses_CollegeCourses_PreRequisiteCourseId",
                table: "PreRequisiteCourses");

            migrationBuilder.DropForeignKey(
                name: "FK_PreRequisiteCourses_EN_CourssesInformations_CourseInfoId",
                table: "PreRequisiteCourses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GadesOfEstimatesThatDoesNotCount",
                table: "GadesOfEstimatesThatDoesNotCount");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CumulativeAverage",
                table: "CumulativeAverage");

            migrationBuilder.RenameTable(
                name: "GadesOfEstimatesThatDoesNotCount",
                newName: "GadesOfEstimatesThatDoesNotCounts");

            migrationBuilder.RenameTable(
                name: "CumulativeAverage",
                newName: "CumulativeAverages");

            migrationBuilder.RenameIndex(
                name: "IX_GadesOfEstimatesThatDoesNotCount_CumulativeAverageId",
                table: "GadesOfEstimatesThatDoesNotCounts",
                newName: "IX_GadesOfEstimatesThatDoesNotCounts_CumulativeAverageId");

            migrationBuilder.RenameIndex(
                name: "IX_CumulativeAverage_UtmostGrade",
                table: "CumulativeAverages",
                newName: "IX_CumulativeAverages_UtmostGrade");

            migrationBuilder.RenameIndex(
                name: "IX_CumulativeAverage_ProgramInfoId",
                table: "CumulativeAverages",
                newName: "IX_CumulativeAverages_ProgramInfoId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GadesOfEstimatesThatDoesNotCounts",
                table: "GadesOfEstimatesThatDoesNotCounts",
                columns: new[] { "GradeId", "CumulativeAverageId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_CumulativeAverages",
                table: "CumulativeAverages",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Controls",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SubtractFromTheDiscountRate = table.Column<int>(type: "int", nullable: true),
                    FirstReductionEstimatesForFailureTimes = table.Column<int>(type: "int", nullable: true),
                    PercentageForFristGrade = table.Column<int>(type: "int", nullable: true),
                    SecondReductionEstimatesForFailureTimes = table.Column<int>(type: "int", nullable: true),
                    PercentageForSecondGrade = table.Column<int>(type: "int", nullable: true),
                    ThirdReductionEstimatesForFailureTimes = table.Column<int>(type: "int", nullable: true),
                    PercentageForThirdGrade = table.Column<int>(type: "int", nullable: true),
                    CalculatingTheBudgetEstimateFromTheReductionEstimates = table.Column<bool>(type: "bit", nullable: true),
                    ExceptionToDiscountEstimates = table.Column<bool>(type: "bit", nullable: true),
                    TheGrade = table.Column<int>(type: "int", nullable: false),
                    PlacementOfStudentsInTheCourse = table.Column<bool>(type: "bit", nullable: false),
                    EstimatingTheTheoreticalFailure = table.Column<int>(type: "int", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Controls", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Controls_LU_AllGrades_EstimatingTheTheoreticalFailure",
                        column: x => x.EstimatingTheTheoreticalFailure,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Controls_LU_AllGrades_FirstReductionEstimatesForFailureTimes",
                        column: x => x.FirstReductionEstimatesForFailureTimes,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Controls_LU_AllGrades_SecondReductionEstimatesForFailureTimes",
                        column: x => x.SecondReductionEstimatesForFailureTimes,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Controls_LU_AllGrades_ThirdReductionEstimatesForFailureTimes",
                        column: x => x.ThirdReductionEstimatesForFailureTimes,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Graduations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ratio = table.Column<bool>(type: "bit", nullable: false),
                    Rate = table.Column<bool>(type: "bit", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false),
                    CompulsoryCourses = table.Column<bool>(type: "bit", nullable: false),
                    SuccessInEveryCourse = table.Column<bool>(type: "bit", nullable: false),
                    PassingMilitaryEducation = table.Column<bool>(type: "bit", nullable: false),
                    SummerTraining = table.Column<bool>(type: "bit", nullable: false),
                    WeeksorHours = table.Column<int>(type: "int", nullable: true),
                    WeeksorHoursTobePassed = table.Column<int>(type: "int", nullable: true),
                    VerifyPaymentOfFees = table.Column<bool>(type: "bit", nullable: false),
                    MakeSureToPassTheOptionalGroups = table.Column<int>(type: "int", nullable: false),
                    DetermineTheRankBasedOn = table.Column<int>(type: "int", nullable: false),
                    RateBase = table.Column<int>(type: "int", nullable: false),
                    ComparingCumulativeAverageForEachYear = table.Column<bool>(type: "bit", nullable: false),
                    StudyYears = table.Column<int>(type: "int", nullable: true),
                    LevelToBePassedId = table.Column<int>(type: "int", nullable: false),
                    SemesterToBePassedId = table.Column<int>(type: "int", nullable: false),
                    TheMinimumGradeForTheCourseId = table.Column<int>(type: "int", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Graduations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Graduations_LU_AllGrades_TheMinimumGradeForTheCourseId",
                        column: x => x.TheMinimumGradeForTheCourseId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Graduations_LU_Level_LevelToBePassedId",
                        column: x => x.LevelToBePassedId,
                        principalTable: "LU_Level",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Graduations_LU_Semester_SemesterToBePassedId",
                        column: x => x.SemesterToBePassedId,
                        principalTable: "LU_Semester",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AverageValues",
                columns: table => new
                {
                    GraduationId = table.Column<int>(type: "int", nullable: false),
                    EquivalentGradeId = table.Column<int>(type: "int", nullable: false),
                    value = table.Column<int>(type: "int", nullable: false),
                    YearValue = table.Column<int>(type: "int", nullable: false),
                    AllGradesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AverageValues", x => new { x.EquivalentGradeId, x.GraduationId });
                    table.ForeignKey(
                        name: "FK_AverageValues_Graduations_GraduationId",
                        column: x => x.GraduationId,
                        principalTable: "Graduations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AverageValues_LU_AllGrades_AllGradesId",
                        column: x => x.AllGradesId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AverageValues_LU_EquivalentGrade_EquivalentGradeId",
                        column: x => x.EquivalentGradeId,
                        principalTable: "LU_EquivalentGrade",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AverageValues_AllGradesId",
                table: "AverageValues",
                column: "AllGradesId");

            migrationBuilder.CreateIndex(
                name: "IX_AverageValues_GraduationId",
                table: "AverageValues",
                column: "GraduationId");

            migrationBuilder.CreateIndex(
                name: "IX_Controls_EstimatingTheTheoreticalFailure",
                table: "Controls",
                column: "EstimatingTheTheoreticalFailure");

            migrationBuilder.CreateIndex(
                name: "IX_Controls_FirstReductionEstimatesForFailureTimes",
                table: "Controls",
                column: "FirstReductionEstimatesForFailureTimes");

            migrationBuilder.CreateIndex(
                name: "IX_Controls_SecondReductionEstimatesForFailureTimes",
                table: "Controls",
                column: "SecondReductionEstimatesForFailureTimes");

            migrationBuilder.CreateIndex(
                name: "IX_Controls_ThirdReductionEstimatesForFailureTimes",
                table: "Controls",
                column: "ThirdReductionEstimatesForFailureTimes");

            migrationBuilder.CreateIndex(
                name: "IX_Graduations_LevelToBePassedId",
                table: "Graduations",
                column: "LevelToBePassedId");

            migrationBuilder.CreateIndex(
                name: "IX_Graduations_SemesterToBePassedId",
                table: "Graduations",
                column: "SemesterToBePassedId");

            migrationBuilder.CreateIndex(
                name: "IX_Graduations_TheMinimumGradeForTheCourseId",
                table: "Graduations",
                column: "TheMinimumGradeForTheCourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesAndFailingGrades_EN_CourssesInformations_CourseInfoId",
                table: "CoursesAndFailingGrades",
                column: "CourseInfoId",
                principalTable: "EN_CourssesInformations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesAndFailingGrades_LU_GradesDetails_FailedGradeId",
                table: "CoursesAndFailingGrades",
                column: "FailedGradeId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesInformationsAndDetailedGrade_EN_CourssesInformations_CourseInfoId",
                table: "CoursesInformationsAndDetailedGrade",
                column: "CourseInfoId",
                principalTable: "EN_CourssesInformations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesInformationsAndDetailedGrade_LU_GradesDetails_GradeDetailsId",
                table: "CoursesInformationsAndDetailedGrade",
                column: "GradeDetailsId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CumulativeAverages_AR_ProgramInformation_ProgramInfoId",
                table: "CumulativeAverages",
                column: "ProgramInfoId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CumulativeAverages_LU_AllGrades_UtmostGrade",
                table: "CumulativeAverages",
                column: "UtmostGrade",
                principalTable: "LU_AllGrades",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GadesOfEstimatesThatDoesNotCounts_CumulativeAverages_CumulativeAverageId",
                table: "GadesOfEstimatesThatDoesNotCounts",
                column: "CumulativeAverageId",
                principalTable: "CumulativeAverages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GadesOfEstimatesThatDoesNotCounts_LU_AllGrades_GradeId",
                table: "GadesOfEstimatesThatDoesNotCounts",
                column: "GradeId",
                principalTable: "LU_AllGrades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PreRequisiteCourses_CollegeCourses_PreRequisiteCourseId",
                table: "PreRequisiteCourses",
                column: "PreRequisiteCourseId",
                principalTable: "CollegeCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PreRequisiteCourses_EN_CourssesInformations_CourseInfoId",
                table: "PreRequisiteCourses",
                column: "CourseInfoId",
                principalTable: "EN_CourssesInformations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CoursesAndFailingGrades_EN_CourssesInformations_CourseInfoId",
                table: "CoursesAndFailingGrades");

            migrationBuilder.DropForeignKey(
                name: "FK_CoursesAndFailingGrades_LU_GradesDetails_FailedGradeId",
                table: "CoursesAndFailingGrades");

            migrationBuilder.DropForeignKey(
                name: "FK_CoursesInformationsAndDetailedGrade_EN_CourssesInformations_CourseInfoId",
                table: "CoursesInformationsAndDetailedGrade");

            migrationBuilder.DropForeignKey(
                name: "FK_CoursesInformationsAndDetailedGrade_LU_GradesDetails_GradeDetailsId",
                table: "CoursesInformationsAndDetailedGrade");

            migrationBuilder.DropForeignKey(
                name: "FK_CumulativeAverages_AR_ProgramInformation_ProgramInfoId",
                table: "CumulativeAverages");

            migrationBuilder.DropForeignKey(
                name: "FK_CumulativeAverages_LU_AllGrades_UtmostGrade",
                table: "CumulativeAverages");

            migrationBuilder.DropForeignKey(
                name: "FK_GadesOfEstimatesThatDoesNotCounts_CumulativeAverages_CumulativeAverageId",
                table: "GadesOfEstimatesThatDoesNotCounts");

            migrationBuilder.DropForeignKey(
                name: "FK_GadesOfEstimatesThatDoesNotCounts_LU_AllGrades_GradeId",
                table: "GadesOfEstimatesThatDoesNotCounts");

            migrationBuilder.DropForeignKey(
                name: "FK_PreRequisiteCourses_CollegeCourses_PreRequisiteCourseId",
                table: "PreRequisiteCourses");

            migrationBuilder.DropForeignKey(
                name: "FK_PreRequisiteCourses_EN_CourssesInformations_CourseInfoId",
                table: "PreRequisiteCourses");

            migrationBuilder.DropTable(
                name: "AverageValues");

            migrationBuilder.DropTable(
                name: "Controls");

            migrationBuilder.DropTable(
                name: "Graduations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GadesOfEstimatesThatDoesNotCounts",
                table: "GadesOfEstimatesThatDoesNotCounts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CumulativeAverages",
                table: "CumulativeAverages");

            migrationBuilder.RenameTable(
                name: "GadesOfEstimatesThatDoesNotCounts",
                newName: "GadesOfEstimatesThatDoesNotCount");

            migrationBuilder.RenameTable(
                name: "CumulativeAverages",
                newName: "CumulativeAverage");

            migrationBuilder.RenameIndex(
                name: "IX_GadesOfEstimatesThatDoesNotCounts_CumulativeAverageId",
                table: "GadesOfEstimatesThatDoesNotCount",
                newName: "IX_GadesOfEstimatesThatDoesNotCount_CumulativeAverageId");

            migrationBuilder.RenameIndex(
                name: "IX_CumulativeAverages_UtmostGrade",
                table: "CumulativeAverage",
                newName: "IX_CumulativeAverage_UtmostGrade");

            migrationBuilder.RenameIndex(
                name: "IX_CumulativeAverages_ProgramInfoId",
                table: "CumulativeAverage",
                newName: "IX_CumulativeAverage_ProgramInfoId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GadesOfEstimatesThatDoesNotCount",
                table: "GadesOfEstimatesThatDoesNotCount",
                columns: new[] { "GradeId", "CumulativeAverageId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_CumulativeAverage",
                table: "CumulativeAverage",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesAndFailingGrades_EN_CourssesInformations_CourseInfoId",
                table: "CoursesAndFailingGrades",
                column: "CourseInfoId",
                principalTable: "EN_CourssesInformations",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesAndFailingGrades_LU_GradesDetails_FailedGradeId",
                table: "CoursesAndFailingGrades",
                column: "FailedGradeId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesInformationsAndDetailedGrade_EN_CourssesInformations_CourseInfoId",
                table: "CoursesInformationsAndDetailedGrade",
                column: "CourseInfoId",
                principalTable: "EN_CourssesInformations",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesInformationsAndDetailedGrade_LU_GradesDetails_GradeDetailsId",
                table: "CoursesInformationsAndDetailedGrade",
                column: "GradeDetailsId",
                principalTable: "LU_GradesDetails",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CumulativeAverage_AR_ProgramInformation_ProgramInfoId",
                table: "CumulativeAverage",
                column: "ProgramInfoId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CumulativeAverage_LU_AllGrades_UtmostGrade",
                table: "CumulativeAverage",
                column: "UtmostGrade",
                principalTable: "LU_AllGrades",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GadesOfEstimatesThatDoesNotCount_CumulativeAverage_CumulativeAverageId",
                table: "GadesOfEstimatesThatDoesNotCount",
                column: "CumulativeAverageId",
                principalTable: "CumulativeAverage",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GadesOfEstimatesThatDoesNotCount_LU_AllGrades_GradeId",
                table: "GadesOfEstimatesThatDoesNotCount",
                column: "GradeId",
                principalTable: "LU_AllGrades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PreRequisiteCourses_CollegeCourses_PreRequisiteCourseId",
                table: "PreRequisiteCourses",
                column: "PreRequisiteCourseId",
                principalTable: "CollegeCourses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PreRequisiteCourses_EN_CourssesInformations_CourseInfoId",
                table: "PreRequisiteCourses",
                column: "CourseInfoId",
                principalTable: "EN_CourssesInformations",
                principalColumn: "Id");
        }
    }
}
