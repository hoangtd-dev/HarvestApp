using Harvest.Core.Entities.Shared.Bibles;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Harvest.Infrastructure.Configurations.Shared.Bible
{
    class VerseConfiguration : IEntityTypeConfiguration<Verse>
    {
        public void Configure(EntityTypeBuilder<Verse> builder)
        {
            builder.HasOne(v => v.Book)
                .WithMany(b => b.Verses)
                .HasForeignKey(v => v.BookId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(v => v.BibleVersion)
                .WithMany(bv => bv.Verses)
                .HasForeignKey(v => v.BibleVersionId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(v => v.Chapter)
                .WithMany(c => c.Verses)
                .HasForeignKey(v => v.ChapterId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
