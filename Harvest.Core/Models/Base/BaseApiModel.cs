#nullable disable

namespace Harvest.Core.Models.Base
{
    public class BaseApiModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public DateTime CreatedAt { get; set; }
        public int CreatedById { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int UpdatedById { get; set; }

    }
}
