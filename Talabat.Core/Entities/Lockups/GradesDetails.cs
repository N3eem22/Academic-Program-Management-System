

<<<<<<< HEAD
using Grad.Core.Entities.Entities;
=======
using Grad.Core.Entities.CoursesInfo;
>>>>>>> e91b97755146969c84567f62fc6b98bdf465ea96

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_GradesDetails")]
    public class GradesDetails:BaseEntity
    {
        public string TheDetails { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
<<<<<<< HEAD

        public ICollection<PI_DetailedGradesToBeAnnounced> pI_DetailedGradesToBeAnnounceds { get; set; } = new HashSet<PI_DetailedGradesToBeAnnounced>();

        //public ICollection<ProgramInformation> ProgramInformation { get; set; } = new HashSet<ProgramInformation>();
=======
        public ICollection<CoursesandGradesDetails> coursesandGradesDetails { get; set; } = new HashSet<CoursesandGradesDetails>();
        public ICollection<DetailsOfFailingGrades> detailsOfFailingGrades { get; set; } = new HashSet<DetailsOfFailingGrades>();

>>>>>>> e91b97755146969c84567f62fc6b98bdf465ea96
    }
}
