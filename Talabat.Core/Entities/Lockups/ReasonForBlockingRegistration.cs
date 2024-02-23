

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_ReasonForBlockingRegistration")]
     public class ReasonForBlockingRegistration: BaseEntity
    {
        public string TheReasonForBlockingRegistration { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
    }
}
