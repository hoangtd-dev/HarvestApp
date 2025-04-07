using Harvest.Core.Entities.Financial;
using Microsoft.EntityFrameworkCore;

namespace Harvest.Infrastructure.SeedData
{
    public static partial class SeedDataConfiguration
    {
        public static void FundSeedData(ModelBuilder builder)
        {
            builder.Entity<Fund>()
                .HasData(
                    new Fund
                    {
                        Id = 1,
                        Name = "Sport Fund",
                        Description = "General Fund for all sport operations",
                        Amount = 100.00m,
                    }
                );
        }
    }
}
