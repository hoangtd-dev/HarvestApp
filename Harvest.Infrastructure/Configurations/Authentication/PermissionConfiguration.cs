using Harvest.Core.Entities.Authentication;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Harvest.Infrastructure.Configurations.Authentication
{
    class PermissionConfiguration : IEntityTypeConfiguration<Permission>
    {
        public void Configure(EntityTypeBuilder<Permission> builder)
        {
            
        }
    }
}
