using CabinApi.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace CabinApi.Data
{
    public class AppDBContext: DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
