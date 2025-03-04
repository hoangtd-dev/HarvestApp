#nullable disable
using Harvest.Core.Entities.Base;

namespace Harvest.Core.Entities.Authentication
{
    public class Permission : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Role> Roles { get; set; }
    }
}
