using CabinBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace CabinBackend.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options) { }

        // Classes used by ef migrations
        public DbSet<User> User { get; set; }
        public DbSet<Cabin> Cabin { get; set; }
        public DbSet<Company> Company { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Sets email as unique
            // Restricts usage of same email address
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(user => user.Email).IsUnique();
            });
            // Sets business id as  unique
            // Restricts usage of same business id
            modelBuilder.Entity<Company>(entity =>
            {
                entity.HasIndex(company =>  company.BusinessId).IsUnique();
            });
        }
    }
}
