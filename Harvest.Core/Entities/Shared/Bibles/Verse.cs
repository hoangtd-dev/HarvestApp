#nullable disable
using Harvest.Core.Entities.Base;

namespace Harvest.Core.Entities.Shared.Bibles
{
    public class Verse : BaseEntity
    {
        public int VerseNumber { get; set; }
        public string VerseText { get; set; }

        public int ChapterId { get; set; }
        public virtual Chapter Chapter { get; set; }

        public int BookId { get; set; }
        public virtual Book Book { get; set; }

        public int BibleVersionId { get; set; }
        public virtual BibleVersion BibleVersion { get; set; }
    }
}
