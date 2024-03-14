
namespace Talabat.Core.Entities.Entities
{
    [Table("EN_Programs")]
    public class Programs:BaseEntity
    {
        public string ProgramNameInArabic { get; set; }
        public string ProgramNameInEnglish { get; set; }

        public int? FacultyId { get; set; }
        [ForeignKey(nameof(FacultyId))]
        public Faculty Faculty { get; set; }

       public ICollection<ProgramInformation> Program_Information { get; set; } = new HashSet<ProgramInformation>();
    }
}
