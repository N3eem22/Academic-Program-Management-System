using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grad.Repository.Migrations
{
    public partial class AddingAuditLogs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Log_ApplicationLogs");

            migrationBuilder.RenameColumn(
                name: "ObjectJson",
                table: "Log_ApplicationLogs",
                newName: "UserEmail");

            migrationBuilder.RenameColumn(
                name: "Message",
                table: "Log_ApplicationLogs",
                newName: "EntityName");

            migrationBuilder.AddColumn<string>(
                name: "Action",
                table: "Log_ApplicationLogs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Changes",
                table: "Log_ApplicationLogs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "Timestamp",
                table: "Log_ApplicationLogs",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Action",
                table: "Log_ApplicationLogs");

            migrationBuilder.DropColumn(
                name: "Changes",
                table: "Log_ApplicationLogs");

            migrationBuilder.DropColumn(
                name: "Timestamp",
                table: "Log_ApplicationLogs");

            migrationBuilder.RenameColumn(
                name: "UserEmail",
                table: "Log_ApplicationLogs",
                newName: "ObjectJson");

            migrationBuilder.RenameColumn(
                name: "EntityName",
                table: "Log_ApplicationLogs",
                newName: "Message");

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Log_ApplicationLogs",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
