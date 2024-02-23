

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_EditTheStudentLevel")]
    public class EditTheStudentLevel: BaseEntity
    {
        public string editTheStudentLevel { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

        public int? ProgramInformationId { get; set; }
        [ForeignKey(nameof(ProgramInformationId))]

        public ProgramInformation ProgramInformation { get; set; }
    }
}
