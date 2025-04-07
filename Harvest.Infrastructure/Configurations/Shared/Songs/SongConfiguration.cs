using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Harvest.Core.Entities.Shared.Songs;

namespace Harvest.Infrastructure.Configurations.Shared.Songs
{
    class SongConfiguration : IEntityTypeConfiguration<Song>
    {
        public void Configure(EntityTypeBuilder<Song> builder)
        {

        }
    }
}
