#nullable disable
using Harvest.Core.Entities.Base;

namespace Harvest.Core.Entities.Authentication
{
    public class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        //public string Salt { get; set; }
        //public string Token { get; set; }
        //public DateTime TokenExpiration { get; set; }

        public virtual ICollection<Role> Roles { get; set; }
    }
}
