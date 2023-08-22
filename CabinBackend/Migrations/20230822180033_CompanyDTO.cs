using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CabinBackend.Migrations
{
    /// <inheritdoc />
    public partial class CompanyDTO : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BusinessID",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CompanyForm",
                table: "Users");

            migrationBuilder.CreateTable(
                name: "Company",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyForm = table.Column<int>(type: "int", nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    BusinessID = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Company", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Company_CompanyName",
                table: "Company",
                column: "CompanyName",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Company");

            migrationBuilder.AddColumn<string>(
                name: "BusinessID",
                table: "Users",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "CompanyForm",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
