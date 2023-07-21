using CabinBackend.Data;
using CabinBackend.Helpers;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddScoped<JwtService>();

// Context connection to database
builder.Services.AddDbContext<AppDBContext>(options => 
{ 
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")); 
});

var app = builder.Build();

// Development build settings
if (app.Environment.IsDevelopment())
{
    // Enable CORS
    app.UseCors(options => options.WithOrigins("http://localhost:3000")
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials());
}

app.UseAuthorization();

app.MapControllers();

app.Run();
