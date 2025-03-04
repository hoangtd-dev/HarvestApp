#nullable disable
using Harvest.Core.Entities.Base;

namespace Harvest.Core.Entities.Authentication
{
    public class Role : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Permission> Permissions { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
