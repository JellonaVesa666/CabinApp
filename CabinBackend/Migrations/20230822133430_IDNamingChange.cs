using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CabinBackend.Migrations
{
    /// <inheritdoc />
    public partial class IDNamingChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BusinessId",
                table: "Users",
                newName: "BusinessID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Users",
                newName: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BusinessID",
                table: "Users",
                newName: "BusinessId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Users",
                newName: "Id");
        }
    }
}
