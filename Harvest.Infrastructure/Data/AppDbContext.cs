using Harvest.Core.Entities.Authentication;
using Harvest.Core.Entities.Common;
using Harvest.Core.Entities.Financial;
using Harvest.Core.Entities.Shared.Bibles;
using Harvest.Infrastructure.Configurations.Authentication;
using Harvest.Infrastructure.Configurations.Common;
using Harvest.Infrastructure.Configurations.Financial;
using Harvest.Infrastructure.Configurations.Shared.Bible;
using Harvest.Infrastructure.Configurations.Shared.Songs;
using Harvest.Infrastructure.SeedData;
using Microsoft.EntityFrameworkCore;

namespace Harvest.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<Role> Roles { get; set; }

        public DbSet<Language> Languages { get; set; }

        public DbSet<BibleVersion> BibleVersions { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Chapter> Chapters { get; set; }
        public DbSet<Verse> Verses { get; set; }

        public DbSet<Fund> Funds { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Authentication
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new PermissionConfiguration());

            // Financial
            modelBuilder.ApplyConfiguration(new FundConfiguration());
            modelBuilder.ApplyConfiguration(new TransactionConfiguration());

            // Common
            modelBuilder.ApplyConfiguration(new LanguageConfiguration());

            // Shared
            modelBuilder.ApplyConfiguration(new BibleVersionConfiguration());
            modelBuilder.ApplyConfiguration(new BookConfiguration());
            modelBuilder.ApplyConfiguration(new ChapterConfiguration());
            modelBuilder.ApplyConfiguration(new VerseConfiguration());


            modelBuilder.ApplyConfiguration(new SongConfiguration());
            modelBuilder.ApplyConfiguration(new LyricConfiguration());

            // Seed data
            SeedDataConfiguration.Initialize(modelBuilder);
            base.OnModelCreating(modelBuilder);
        }
    }
}
