using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Harvest.Core.Entities.Shared.Bibles;

namespace Harvest.Infrastructure.Configurations.Shared.Bible
{
    class BookConfiguration : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.HasOne(b => b.Language)
                .WithMany(b => b.Books)
                .HasForeignKey(b => b.LanguageId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
