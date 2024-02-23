using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AlteringDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "University");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "University");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "University");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "University");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "University");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "University");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "University");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "System Type");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "System Type");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "System Type");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "System Type");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "System Type");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "System Type");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "System Type");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_Typeofsummerfees");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_Typeofsummerfees");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_Typeofsummerfees");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_Typeofsummerfees");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_Typeofsummerfees");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_Typeofsummerfees");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_Typeofsummerfees");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_TypeOfStudySection");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_TypeOfStudySection");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_TypeOfStudySection");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_TypeOfStudySection");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_TypeOfStudySection");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_TypeOfStudySection");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_TypeOfStudySection");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_TypeOfProgramFees");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_TypeOfProgramFees");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_TypeOfProgramFees");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_TypeOfProgramFees");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_TypeOfProgramFees");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_TypeOfProgramFees");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_TypeOfProgramFees");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_TypeOfFinancialStatementInTheProgram");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_TypeOfFinancialStatementInTheProgram");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_TypeOfFinancialStatementInTheProgram");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_TypeOfFinancialStatementInTheProgram");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_TypeOfFinancialStatementInTheProgram");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_TypeOfFinancialStatementInTheProgram");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_TypeOfFinancialStatementInTheProgram");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_TheResultAppears");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_TheResultAppears");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_TheResultAppears");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_TheResultAppears");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_TheResultAppears");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_TheResultAppears");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_TheResultAppears");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_TheAcademicDegree");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_Semester");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_Semester");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_Semester");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_Semester");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_Semester");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_Semester");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_Semester");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_ReasonForBlockingRegistration");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_ReasonForBlockingRegistration");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_ReasonForBlockingRegistration");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_ReasonForBlockingRegistration");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_ReasonForBlockingRegistration");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_ReasonForBlockingRegistration");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_ReasonForBlockingRegistration");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_ReasonForBlockingAcademicResult");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_ReasonForBlockingAcademicResult");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_ReasonForBlockingAcademicResult");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_ReasonForBlockingAcademicResult");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_ReasonForBlockingAcademicResult");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_ReasonForBlockingAcademicResult");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_ReasonForBlockingAcademicResult");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_PreviousQualification");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_PreviousQualification");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_PreviousQualification");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_PreviousQualification");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_PreviousQualification");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_PreviousQualification");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_PreviousQualification");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_Prerequisite");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_Prerequisite");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_Prerequisite");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_Prerequisite");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_Prerequisite");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_Prerequisite");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_Prerequisite");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_PassingTheElectiveGroupBasedOn");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_Level");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_Level");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_Level");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_Level");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_Level");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_Level");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_Level");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_Hours");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_Hours");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_Hours");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_Hours");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_Hours");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_Hours");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_Hours");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_GradesDetails");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_GradesDetails");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_GradesDetails");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_GradesDetails");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_GradesDetails");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_GradesDetails");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_GradesDetails");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_EquivalentGrade");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_EquivalentGrade");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_EquivalentGrade");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_EquivalentGrade");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_EquivalentGrade");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_EquivalentGrade");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_EquivalentGrade");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_EditTheStudentLevel");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_CourseType");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_CourseType");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_CourseType");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_CourseType");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_CourseType");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_CourseType");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_CourseType");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_CourseRequirement");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_CourseRequirement");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_CourseRequirement");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_CourseRequirement");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_CourseRequirement");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_CourseRequirement");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_CourseRequirement");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_BurdenCalculation");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_BlockingProofOfRegistration");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_AllGrades");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_AllGrades");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_AllGrades");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_AllGrades");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_AllGrades");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_AllGrades");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_AllGrades");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "LU_AbsenteeEstimateCalculation");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "LU_AbsenteeEstimateCalculation");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "LU_AbsenteeEstimateCalculation");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "LU_AbsenteeEstimateCalculation");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "LU_AbsenteeEstimateCalculation");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "LU_AbsenteeEstimateCalculation");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "LU_AbsenteeEstimateCalculation");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "Log_ApplicationLogs");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "Log_ApplicationLogs");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "Log_ApplicationLogs");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "Log_ApplicationLogs");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Log_ApplicationLogs");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "Log_ApplicationLogs");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "Log_ApplicationLogs");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "Faculty");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "Faculty");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "Faculty");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "Faculty");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Faculty");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "Faculty");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "Faculty");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "EN_Programs");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "EN_Programs");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "EN_Programs");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "EN_Programs");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "EN_Programs");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "EN_Programs");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "EN_Programs");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "CollegeCourses");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "CollegeCourses");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "CollegeCourses");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "CollegeCourses");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "CollegeCourses");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "CollegeCourses");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "CollegeCourses");

            migrationBuilder.DropColumn(
                name: "DeleteBy",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "DeleteDate",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "InsertBy",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "AR_ProgramInformation");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "AR_ProgramInformation");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "University",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "University",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "University",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "University",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "University",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "University",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "University",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "System Type",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "System Type",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "System Type",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "System Type",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "System Type",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "System Type",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "System Type",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_Typeofsummerfees",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_Typeofsummerfees",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_Typeofsummerfees",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_Typeofsummerfees",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_Typeofsummerfees",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_Typeofsummerfees",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_Typeofsummerfees",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_TypeOfStudySection",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_TypeOfStudySection",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_TypeOfStudySection",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_TypeOfStudySection",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_TypeOfStudySection",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_TypeOfStudySection",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_TypeOfStudySection",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_TypeOfProgramFees",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_TypeOfProgramFees",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_TypeOfProgramFees",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_TypeOfProgramFees",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_TypeOfProgramFees",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_TypeOfProgramFees",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_TypeOfProgramFees",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_TypeOfFinancialStatementInTheProgram",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_TypeOfFinancialStatementInTheProgram",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_TypeOfFinancialStatementInTheProgram",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_TypeOfFinancialStatementInTheProgram",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_TypeOfFinancialStatementInTheProgram",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_TypeOfFinancialStatementInTheProgram",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_TypeOfFinancialStatementInTheProgram",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_TheResultAppears",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_TheResultAppears",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_TheResultAppears",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_TheResultAppears",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_TheResultAppears",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_TheResultAppears",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_TheResultAppears",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_TheAcademicDegree",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_TheAcademicDegree",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_TheAcademicDegree",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_TheAcademicDegree",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_TheAcademicDegree",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_TheAcademicDegree",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_TheAcademicDegree",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_Semester",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_Semester",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_Semester",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_Semester",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_Semester",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_Semester",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_Semester",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_ReasonForBlockingRegistration",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_ReasonForBlockingRegistration",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_ReasonForBlockingRegistration",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_ReasonForBlockingRegistration",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_ReasonForBlockingRegistration",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_ReasonForBlockingRegistration",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_ReasonForBlockingRegistration",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_ReasonForBlockingAcademicResult",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_ReasonForBlockingAcademicResult",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_ReasonForBlockingAcademicResult",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_ReasonForBlockingAcademicResult",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_ReasonForBlockingAcademicResult",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_ReasonForBlockingAcademicResult",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_ReasonForBlockingAcademicResult",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_PreviousQualification",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_PreviousQualification",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_PreviousQualification",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_PreviousQualification",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_PreviousQualification",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_PreviousQualification",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_PreviousQualification",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_Prerequisite",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_Prerequisite",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_Prerequisite",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_Prerequisite",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_Prerequisite",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_Prerequisite",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_Prerequisite",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_PassingTheElectiveGroupBasedOn",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_PassingTheElectiveGroupBasedOn",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_PassingTheElectiveGroupBasedOn",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_PassingTheElectiveGroupBasedOn",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_PassingTheElectiveGroupBasedOn",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_PassingTheElectiveGroupBasedOn",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_PassingTheElectiveGroupBasedOn",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_Level",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_Level",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_Level",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_Level",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_Level",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_Level",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_Level",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_Hours",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_Hours",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_Hours",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_Hours",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_Hours",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_Hours",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_Hours",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_GradesDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_GradesDetails",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_GradesDetails",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_GradesDetails",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_GradesDetails",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_GradesDetails",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_GradesDetails",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_EquivalentGrade",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_EquivalentGrade",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_EquivalentGrade",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_EquivalentGrade",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_EquivalentGrade",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_EquivalentGrade",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_EquivalentGrade",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_EditTheStudentLevel",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_EditTheStudentLevel",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_EditTheStudentLevel",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_EditTheStudentLevel",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_EditTheStudentLevel",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_EditTheStudentLevel",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_EditTheStudentLevel",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_CourseType",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_CourseType",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_CourseType",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_CourseType",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_CourseType",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_CourseType",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_CourseType",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_CourseRequirement",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_CourseRequirement",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_CourseRequirement",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_CourseRequirement",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_CourseRequirement",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_CourseRequirement",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_CourseRequirement",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_BurdenCalculation",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_BurdenCalculation",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_BurdenCalculation",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_BurdenCalculation",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_BurdenCalculation",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_BurdenCalculation",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_BurdenCalculation",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_BlockingProofOfRegistration",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_BlockingProofOfRegistration",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_BlockingProofOfRegistration",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_BlockingProofOfRegistration",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_BlockingProofOfRegistration",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_BlockingProofOfRegistration",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_BlockingProofOfRegistration",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_AllGrades",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_AllGrades",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_AllGrades",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_AllGrades",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_AllGrades",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_AllGrades",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_AllGrades",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "LU_AbsenteeEstimateCalculation",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "LU_AbsenteeEstimateCalculation",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "LU_AbsenteeEstimateCalculation",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "LU_AbsenteeEstimateCalculation",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "LU_AbsenteeEstimateCalculation",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "LU_AbsenteeEstimateCalculation",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "LU_AbsenteeEstimateCalculation",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "Log_ApplicationLogs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "Log_ApplicationLogs",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "Log_ApplicationLogs",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "Log_ApplicationLogs",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Log_ApplicationLogs",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "Log_ApplicationLogs",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "Log_ApplicationLogs",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "Faculty",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "Faculty",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "Faculty",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "Faculty",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Faculty",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "Faculty",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "Faculty",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "EN_Programs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "EN_Programs",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "EN_Programs",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "EN_Programs",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "EN_Programs",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "EN_Programs",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "EN_Programs",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "CollegeCourses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "CollegeCourses",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "CollegeCourses",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "CollegeCourses",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "CollegeCourses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "CollegeCourses",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "CollegeCourses",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeleteBy",
                table: "AR_ProgramInformation",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeleteDate",
                table: "AR_ProgramInformation",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InsertBy",
                table: "AR_ProgramInformation",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                table: "AR_ProgramInformation",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AR_ProgramInformation",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdateBy",
                table: "AR_ProgramInformation",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "AR_ProgramInformation",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
