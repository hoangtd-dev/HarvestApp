#nullable disable
using Harvest.Core.Entities.Base;
using Harvest.Core.Entities.Common;

namespace Harvest.Core.Entities.Shared.Songs
{
    public class Lyric : BaseEntity
    {
        public string LyricsText { get; set; }
        public string ImgSrc { get; set; }
        public string Mp4Src { get; set; }

        public int SongId { get; set; }
        public virtual Song Song { get; set; }

        public int LanguageId { get; set; }
        public virtual Language Language { get; set; }
    }
}
