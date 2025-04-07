using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Harvest.Core.Entities.Shared.Songs;

namespace Harvest.Infrastructure.Configurations.Shared.Songs
{
    class LyricConfiguration : IEntityTypeConfiguration<Lyric>
    {
        public void Configure(EntityTypeBuilder<Lyric> builder)
        {
            builder.HasOne(l => l.Song)
                .WithMany(s => s.Lyrics)
                .HasForeignKey(l => l.SongId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(l => l.Language)
                .WithMany()
                .HasForeignKey(l => l.LanguageId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
