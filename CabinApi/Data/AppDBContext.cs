using CabinApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CabinApi.Data
{
    public class AppDBContext: DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options) { }

        // Classes used by ef migrations
        public DbSet<User> Users { get; set; }
        public DbSet<Cabin> Cabin { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Sets email unique
            // Restricts usage of same email address
            modelBuilder.Entity<User>(entity => 
            {
                entity.HasIndex(user => user.Email).IsUnique();
            });
        }
    }
}
