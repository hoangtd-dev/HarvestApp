#nullable disable
using Harvest.Core.Entities.Base;
using Harvest.Core.Entities.Common;

namespace Harvest.Core.Entities.Shared.Bibles
{
    public class Book : BaseEntity
    {
        public string Name { get; set; }
        public string Testament { get; set; }
        public int Order { get; set; }

        public int LanguageId { get; set; }
        public virtual Language Language { get; set; }
        public virtual ICollection<Verse> Verses { get; set; }
    }
}
