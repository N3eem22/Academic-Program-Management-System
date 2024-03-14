


using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Graduation;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_Level")]
    public class Level:BaseEntity
    {
        public string levels { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }


        public ICollection<Graduation> Graduations { get; set; } = new HashSet<Graduation>();

    }
}
