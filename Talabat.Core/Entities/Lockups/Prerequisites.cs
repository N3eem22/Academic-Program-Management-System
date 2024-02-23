

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_Prerequisite")]
    public class Prerequisites : BaseEntity
    {
        public string Prerequisite { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

    }
}
