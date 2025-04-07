#nullable disable
using Harvest.Core.Entities.Base;
using Harvest.Core.Entities.Shared.Bibles;

namespace Harvest.Core.Entities.Common
{
    public class Language : BaseEntity
    {
        public string Name { get; set; }
        public string Code { get; set; }

        public virtual ICollection<Book> Books { get; set; }
        public virtual ICollection<Chapter> Chapters { get; set; }
        public virtual ICollection<BibleVersion> BibleVersions { get; set; }
    }
}
