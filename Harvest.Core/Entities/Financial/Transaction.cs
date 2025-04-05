using Harvest.Core.Entities.Base;
using Harvest.Core.Enums.Financial;

namespace Harvest.Core.Entities.Financial
{
    public class Transaction : BaseEntity
    {
        public decimal Amount { get; set; }
        public DateTime TransactionDate { get; set; }
        public string? Description { get; set; }

        public TransactionType TransactionType { get; set; }

        public int FundId { get; set; }
        public virtual Fund Fund { get; set; }
    }
}
