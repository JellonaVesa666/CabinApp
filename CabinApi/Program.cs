using CabinApi.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

// Creates connection to database
builder.Services.AddDbContext<AppDBContext>(options => 
{ 
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")); 
});

var app = builder.Build();

// Enable CORS
app.UseCors(options => options.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Development build settings
}

app.UseAuthorization();

app.MapControllers();

app.Run();
