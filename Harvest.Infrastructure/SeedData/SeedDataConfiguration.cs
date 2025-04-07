using Microsoft.EntityFrameworkCore;


namespace Harvest.Infrastructure.SeedData
{
    public static partial class SeedDataConfiguration
    {
        public static void Initialize(ModelBuilder builder) 
        {
            FundSeedData(builder);
            TransactionSeedData(builder);
        }
    }
}
