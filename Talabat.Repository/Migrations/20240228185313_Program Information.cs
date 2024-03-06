using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class ProgramInformation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LU_BlockingProofOfRegistration_AR_ProgramInformation_ProgramInformationId",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropForeignKey(
                name: "FK_LU_BurdenCalculation_AR_ProgramInformation_ProgramInformationId",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropForeignKey(
                name: "FK_LU_EditTheStudentLevel_AR_ProgramInformation_ProgramInformationId",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropForeignKey(
                name: "FK_LU_PassingTheElectiveGroupBasedOn_AR_ProgramInformation_ProgramInformationId",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropForeignKey(
                name: "FK_LU_TheAcademicDegree_AR_ProgramInformation_ProgramInformationId",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropForeignKey(
                name: "FK_System Type_AR_ProgramInformation_ProgramInformationId",
                table: "System Type");

            migrationBuilder.DropIndex(
                name: "IX_System Type_ProgramInformationId",
                table: "System Type");

            migrationBuilder.DropIndex(
                name: "IX_LU_TheAcademicDegree_ProgramInformationId",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropIndex(
                name: "IX_LU_PassingTheElectiveGroupBasedOn_ProgramInformationId",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropIndex(
                name: "IX_LU_EditTheStudentLevel_ProgramInformationId",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropIndex(
                name: "IX_LU_BurdenCalculation_ProgramInformationId",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropIndex(
                name: "IX_LU_BlockingProofOfRegistration_ProgramInformationId",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropColumn(
                name: "ProgramInformationId",
                table: "System Type");

            migrationBuilder.DropColumn(
                name: "ProgramInformationId",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropColumn(
                name: "ProgramInformationId",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropColumn(
                name: "ProgramInformationId",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropColumn(
                name: "ProgramInformationId",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropColumn(
                name: "ProgramInformationId",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropColumn(
                name: "DetailedGradesToBeAnnounced",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "DivisionType",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "EstimatesOfCourseFeeExemption",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "ProgramFeeType",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "ReasonForBlockingRegistration",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "SummerCourseEstimates",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "TheReasonForHiddingTheResult",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "TheResultAppearanceToTheGuide",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "TypeOfFinancialStatementInTheProgram",
                table: "AR_ProgramInformation");

            migrationBuilder.RenameColumn(
                name: "TypeOfSummerFees",
                table: "AR_ProgramInformation",
                newName: "Degree");

            migrationBuilder.AddColumn<int>(
                name: "AcademicDegreeid",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "BlockingProofOfRegistrationId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "BurdanCalculationId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EditTheStudentLevelId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PassingTheElectiveGroupBasedOnId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProjectHours",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ReasonForBlockingRegistrationId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SystemTypeId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TheReasonForHiddingTheResultId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TheResultAppearsId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TheResultToTheGuidId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TypeOfFinancialStatementInTheProgramId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TypeOfProgramFeesId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TypeOfSummerFeesId",
                table: "AR_ProgramInformation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "LU_DivisionType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Division_Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                    table.PrimaryKey("PK_LU_DivisionType", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LU_DivisionType_University_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "University",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PI_AllGradesSummerEstimate",
                columns: table => new
                {
                    AllGradesId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PI_AllGradesSummerEstimate", x => new { x.ProgramInformationId, x.AllGradesId });
                    table.ForeignKey(
                        name: "FK_PI_AllGradesSummerEstimate_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PI_AllGradesSummerEstimate_LU_AllGrades_AllGradesId",
                        column: x => x.AllGradesId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PI_DetailedGradesToBeAnnounced",
                columns: table => new
                {
                    GradesDetailsId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
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
                    table.PrimaryKey("PK_PI_DetailedGradesToBeAnnounced", x => new { x.ProgramInformationId, x.GradesDetailsId });
                    table.ForeignKey(
                        name: "FK_PI_DetailedGradesToBeAnnounced_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PI_DetailedGradesToBeAnnounced_LU_GradesDetails_GradesDetailsId",
                        column: x => x.GradesDetailsId,
                        principalTable: "LU_GradesDetails",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PI_EstimatesOfCourseFeeExemption",
                columns: table => new
                {
                    AllGradesId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PI_EstimatesOfCourseFeeExemption", x => new { x.ProgramInformationId, x.AllGradesId });
                    table.ForeignKey(
                        name: "FK_PI_EstimatesOfCourseFeeExemption_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PI_EstimatesOfCourseFeeExemption_LU_AllGrades_AllGradesId",
                        column: x => x.AllGradesId,
                        principalTable: "LU_AllGrades",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PI_DivisionType",
                columns: table => new
                {
                    DivisionTypeId = table.Column<int>(type: "int", nullable: false),
                    ProgramInformationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PI_DivisionType", x => new { x.ProgramInformationId, x.DivisionTypeId });
                    table.ForeignKey(
                        name: "FK_PI_DivisionType_AR_ProgramInformation_ProgramInformationId",
                        column: x => x.ProgramInformationId,
                        principalTable: "AR_ProgramInformation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PI_DivisionType_LU_DivisionType_DivisionTypeId",
                        column: x => x.DivisionTypeId,
                        principalTable: "LU_DivisionType",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_AcademicDegreeid",
                table: "AR_ProgramInformation",
                column: "AcademicDegreeid");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_BlockingProofOfRegistrationId",
                table: "AR_ProgramInformation",
                column: "BlockingProofOfRegistrationId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_BurdanCalculationId",
                table: "AR_ProgramInformation",
                column: "BurdanCalculationId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_EditTheStudentLevelId",
                table: "AR_ProgramInformation",
                column: "EditTheStudentLevelId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_PassingTheElectiveGroupBasedOnId",
                table: "AR_ProgramInformation",
                column: "PassingTheElectiveGroupBasedOnId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_ReasonForBlockingRegistrationId",
                table: "AR_ProgramInformation",
                column: "ReasonForBlockingRegistrationId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_SystemTypeId",
                table: "AR_ProgramInformation",
                column: "SystemTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TheReasonForHiddingTheResultId",
                table: "AR_ProgramInformation",
                column: "TheReasonForHiddingTheResultId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TheResultAppearsId",
                table: "AR_ProgramInformation",
                column: "TheResultAppearsId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TheResultToTheGuidId",
                table: "AR_ProgramInformation",
                column: "TheResultToTheGuidId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TypeOfFinancialStatementInTheProgramId",
                table: "AR_ProgramInformation",
                column: "TypeOfFinancialStatementInTheProgramId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TypeOfProgramFeesId",
                table: "AR_ProgramInformation",
                column: "TypeOfProgramFeesId");

            migrationBuilder.CreateIndex(
                name: "IX_AR_ProgramInformation_TypeOfSummerFeesId",
                table: "AR_ProgramInformation",
                column: "TypeOfSummerFeesId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_DivisionType_UniversityId",
                table: "LU_DivisionType",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_PI_AllGradesSummerEstimate_AllGradesId",
                table: "PI_AllGradesSummerEstimate",
                column: "AllGradesId");

            migrationBuilder.CreateIndex(
                name: "IX_PI_DetailedGradesToBeAnnounced_GradesDetailsId",
                table: "PI_DetailedGradesToBeAnnounced",
                column: "GradesDetailsId");

            migrationBuilder.CreateIndex(
                name: "IX_PI_DivisionType_DivisionTypeId",
                table: "PI_DivisionType",
                column: "DivisionTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_PI_EstimatesOfCourseFeeExemption_AllGradesId",
                table: "PI_EstimatesOfCourseFeeExemption",
                column: "AllGradesId");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_BlockingProofOfRegistration_BlockingProofOfRegistrationId",
                table: "AR_ProgramInformation",
                column: "BlockingProofOfRegistrationId",
                principalTable: "LU_BlockingProofOfRegistration",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_BurdenCalculation_BurdanCalculationId",
                table: "AR_ProgramInformation",
                column: "BurdanCalculationId",
                principalTable: "LU_BurdenCalculation",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_EditTheStudentLevel_EditTheStudentLevelId",
                table: "AR_ProgramInformation",
                column: "EditTheStudentLevelId",
                principalTable: "LU_EditTheStudentLevel",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_PassingTheElectiveGroupBasedOn_PassingTheElectiveGroupBasedOnId",
                table: "AR_ProgramInformation",
                column: "PassingTheElectiveGroupBasedOnId",
                principalTable: "LU_PassingTheElectiveGroupBasedOn",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_ReasonForBlockingAcademicResult_TheReasonForHiddingTheResultId",
                table: "AR_ProgramInformation",
                column: "TheReasonForHiddingTheResultId",
                principalTable: "LU_ReasonForBlockingAcademicResult",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_ReasonForBlockingRegistration_ReasonForBlockingRegistrationId",
                table: "AR_ProgramInformation",
                column: "ReasonForBlockingRegistrationId",
                principalTable: "LU_ReasonForBlockingRegistration",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_TheAcademicDegree_AcademicDegreeid",
                table: "AR_ProgramInformation",
                column: "AcademicDegreeid",
                principalTable: "LU_TheAcademicDegree",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_TheResultAppears_TheResultAppearsId",
                table: "AR_ProgramInformation",
                column: "TheResultAppearsId",
                principalTable: "LU_TheResultAppears",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_TheResultAppears_TheResultToTheGuidId",
                table: "AR_ProgramInformation",
                column: "TheResultToTheGuidId",
                principalTable: "LU_TheResultAppears",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_TypeOfFinancialStatementInTheProgram_TypeOfFinancialStatementInTheProgramId",
                table: "AR_ProgramInformation",
                column: "TypeOfFinancialStatementInTheProgramId",
                principalTable: "LU_TypeOfFinancialStatementInTheProgram",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_TypeOfProgramFees_TypeOfProgramFeesId",
                table: "AR_ProgramInformation",
                column: "TypeOfProgramFeesId",
                principalTable: "LU_TypeOfProgramFees",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_LU_Typeofsummerfees_TypeOfSummerFeesId",
                table: "AR_ProgramInformation",
                column: "TypeOfSummerFeesId",
                principalTable: "LU_Typeofsummerfees",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AR_ProgramInformation_System Type_SystemTypeId",
                table: "AR_ProgramInformation",
                column: "SystemTypeId",
                principalTable: "System Type",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_BlockingProofOfRegistration_BlockingProofOfRegistrationId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_BurdenCalculation_BurdanCalculationId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_EditTheStudentLevel_EditTheStudentLevelId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_PassingTheElectiveGroupBasedOn_PassingTheElectiveGroupBasedOnId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_ReasonForBlockingAcademicResult_TheReasonForHiddingTheResultId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_ReasonForBlockingRegistration_ReasonForBlockingRegistrationId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_TheAcademicDegree_AcademicDegreeid",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_TheResultAppears_TheResultAppearsId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_TheResultAppears_TheResultToTheGuidId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_TypeOfFinancialStatementInTheProgram_TypeOfFinancialStatementInTheProgramId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_TypeOfProgramFees_TypeOfProgramFeesId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_LU_Typeofsummerfees_TypeOfSummerFeesId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropForeignKey(
                name: "FK_AR_ProgramInformation_System Type_SystemTypeId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropTable(
                name: "PI_AllGradesSummerEstimate");

            migrationBuilder.DropTable(
                name: "PI_DetailedGradesToBeAnnounced");

            migrationBuilder.DropTable(
                name: "PI_DivisionType");

            migrationBuilder.DropTable(
                name: "PI_EstimatesOfCourseFeeExemption");

            migrationBuilder.DropTable(
                name: "LU_DivisionType");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_AcademicDegreeid",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_BlockingProofOfRegistrationId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_BurdanCalculationId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_EditTheStudentLevelId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_PassingTheElectiveGroupBasedOnId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_ReasonForBlockingRegistrationId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_SystemTypeId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_TheReasonForHiddingTheResultId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_TheResultAppearsId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_TheResultToTheGuidId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_TypeOfFinancialStatementInTheProgramId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_TypeOfProgramFeesId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropIndex(
                name: "IX_AR_ProgramInformation_TypeOfSummerFeesId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "AcademicDegreeid",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "BlockingProofOfRegistrationId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "BurdanCalculationId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "EditTheStudentLevelId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "PassingTheElectiveGroupBasedOnId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "ProjectHours",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "ReasonForBlockingRegistrationId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "SystemTypeId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "TheReasonForHiddingTheResultId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "TheResultAppearsId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "TheResultToTheGuidId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "TypeOfFinancialStatementInTheProgramId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "TypeOfProgramFeesId",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "TypeOfSummerFeesId",
                table: "AR_ProgramInformation");

            migrationBuilder.RenameColumn(
                name: "Degree",
                table: "AR_ProgramInformation",
                newName: "TypeOfSummerFees");

            migrationBuilder.AddColumn<int>(
                name: "ProgramInformationId",
                table: "System Type",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProgramInformationId",
                table: "LU_TheAcademicDegree",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProgramInformationId",
                table: "LU_PassingTheElectiveGroupBasedOn",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProgramInformationId",
                table: "LU_EditTheStudentLevel",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProgramInformationId",
                table: "LU_BurdenCalculation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProgramInformationId",
                table: "LU_BlockingProofOfRegistration",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "DetailedGradesToBeAnnounced",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DivisionType",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EstimatesOfCourseFeeExemption",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProgramFeeType",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ReasonForBlockingRegistration",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SummerCourseEstimates",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TheReasonForHiddingTheResult",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TheResultAppearanceToTheGuide",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TypeOfFinancialStatementInTheProgram",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_System Type_ProgramInformationId",
                table: "System Type",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_TheAcademicDegree_ProgramInformationId",
                table: "LU_TheAcademicDegree",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_PassingTheElectiveGroupBasedOn_ProgramInformationId",
                table: "LU_PassingTheElectiveGroupBasedOn",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_EditTheStudentLevel_ProgramInformationId",
                table: "LU_EditTheStudentLevel",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_BurdenCalculation_ProgramInformationId",
                table: "LU_BurdenCalculation",
                column: "ProgramInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_LU_BlockingProofOfRegistration_ProgramInformationId",
                table: "LU_BlockingProofOfRegistration",
                column: "ProgramInformationId");

            migrationBuilder.AddForeignKey(
                name: "FK_LU_BlockingProofOfRegistration_AR_ProgramInformation_ProgramInformationId",
                table: "LU_BlockingProofOfRegistration",
                column: "ProgramInformationId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LU_BurdenCalculation_AR_ProgramInformation_ProgramInformationId",
                table: "LU_BurdenCalculation",
                column: "ProgramInformationId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LU_EditTheStudentLevel_AR_ProgramInformation_ProgramInformationId",
                table: "LU_EditTheStudentLevel",
                column: "ProgramInformationId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LU_PassingTheElectiveGroupBasedOn_AR_ProgramInformation_ProgramInformationId",
                table: "LU_PassingTheElectiveGroupBasedOn",
                column: "ProgramInformationId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LU_TheAcademicDegree_AR_ProgramInformation_ProgramInformationId",
                table: "LU_TheAcademicDegree",
                column: "ProgramInformationId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_System Type_AR_ProgramInformation_ProgramInformationId",
                table: "System Type",
                column: "ProgramInformationId",
                principalTable: "AR_ProgramInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
