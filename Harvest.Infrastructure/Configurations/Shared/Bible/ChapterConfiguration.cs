using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Harvest.Core.Entities.Shared.Bibles;

namespace Harvest.Infrastructure.Configurations.Shared.Bible
{
    class ChapterConfiguration : IEntityTypeConfiguration<Chapter>
    {
        public void Configure(EntityTypeBuilder<Chapter> builder)
        {
            builder.HasOne(c => c.Language)
                .WithMany(b => b.Chapters)
                .HasForeignKey(c => c.Language)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
