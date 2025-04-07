using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Harvest.Core.Entities.Shared.Bibles;

namespace Harvest.Infrastructure.Configurations.Shared.Bible
{
    class BibleVersionConfiguration : IEntityTypeConfiguration<BibleVersion>
    {
        public void Configure(EntityTypeBuilder<BibleVersion> builder)
        {
            builder.HasOne(bv => bv.Language)
                .WithMany(b => b.BibleVersions)
                .HasForeignKey(bv => bv.LanguageId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
