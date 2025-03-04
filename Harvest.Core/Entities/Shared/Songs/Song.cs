#nullable disable
using Harvest.Core.Entities.Base;

namespace Harvest.Core.Entities.Shared.Songs
{
    public class Song : BaseEntity
    {
        public string Name { get; set; }
        public string Artists { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Lyric> Lyrics { get; set; }
    }
}
