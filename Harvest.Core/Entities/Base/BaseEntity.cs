
namespace Harvest.Core.Entities.Base
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public int CreatedById { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int UpdatedById { get; set; }
        public DateTime DeletedAt { get; set; }
        public int DeletedById { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public int Version { get; set; }
    }
}
