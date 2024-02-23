

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_Hours")]
    public class Hours:BaseEntity
    {
        public string HoursName { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
    }
}
