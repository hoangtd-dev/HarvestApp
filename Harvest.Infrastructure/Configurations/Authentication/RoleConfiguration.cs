using Harvest.Core.Entities.Authentication;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Harvest.Infrastructure.Configurations.Authentication
{
    class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasMany(u => u.Users)
                .WithMany(ur => ur.Roles);

            builder.HasMany(r => r.Permissions)
                .WithMany(rp => rp.Roles);
        }
    }
}
