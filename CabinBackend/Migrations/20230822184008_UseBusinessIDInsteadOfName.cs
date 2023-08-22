using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CabinBackend.Migrations
{
    /// <inheritdoc />
    public partial class UseBusinessIDInsteadOfName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Company_BusinessID_CompanyName",
                table: "Company");

            migrationBuilder.CreateIndex(
                name: "IX_Company_BusinessID",
                table: "Company",
                column: "BusinessID",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Company_BusinessID",
                table: "Company");

            migrationBuilder.CreateIndex(
                name: "IX_Company_BusinessID_CompanyName",
                table: "Company",
                columns: new[] { "BusinessID", "CompanyName" },
                unique: true);
        }
    }
}
