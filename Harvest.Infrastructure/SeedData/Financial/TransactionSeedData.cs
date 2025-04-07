using Harvest.Core.Entities.Financial;
using Microsoft.EntityFrameworkCore;
using Harvest.Core.Enums.Financial;

namespace Harvest.Infrastructure.SeedData
{
    public static partial class SeedDataConfiguration
    {
        public static void TransactionSeedData(ModelBuilder builder)
        {
            builder.Entity<Transaction>()
                .HasData(
                    new Transaction
                    {
                        Id = 1,
                        FundId = 1,
                        Amount = 50.00m,
                        TransactionType = TransactionType.Income
                    }
                );
        }
    }
}
