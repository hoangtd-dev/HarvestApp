using Harvest.Core.Entities.Financial;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Harvest.Infrastructure.Configurations.Financial
{
    class TransactionConfiguration : IEntityTypeConfiguration<Transaction>
    {
        public void Configure(EntityTypeBuilder<Transaction> builder)
        {
            builder.HasOne(t => t.Fund)
                .WithMany(a => a.Transactions)
                .HasForeignKey(t => t.FundId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
