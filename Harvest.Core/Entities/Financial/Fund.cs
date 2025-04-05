using Harvest.Core.Entities.Base;

namespace Harvest.Core.Entities.Financial
{
    public class Fund : BaseEntity
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public decimal Amount { get; set; }

        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}
