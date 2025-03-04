#nullable disable
using Harvest.Core.Entities.Base;
using Harvest.Core.Entities.Common;

namespace Harvest.Core.Entities.Shared.Bibles
{
    public class Chapter : BaseEntity
    {
        public int ChapterNumber { get; set; }
        public string ChapterTitle { get; set; }

        public int LanguageId { get; set; }
        public virtual Language Language { get; set; }

        public virtual ICollection<Verse> Verses { get; set; }
    }
}
