

using Grad.Core.Entities.Entities;

using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.Control;
using System.Net.Http.Headers;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_GradesDetails")]
    public class GradesDetails:BaseEntity
    {
        public string TheDetails { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

        public ICollection<PI_DetailedGradesToBeAnnounced> pI_DetailedGradesToBeAnnounceds { get; set; } = new HashSet<PI_DetailedGradesToBeAnnounced>();

        //public ICollection<ProgramInformation> ProgramInformation { get; set; } = new HashSet<ProgramInformation>();
        public ICollection<CoursesandGradesDetails> coursesandGradesDetails { get; set; } = new HashSet<CoursesandGradesDetails>();
        public ICollection<DetailsOfFailingGrades> detailsOfFailingGrades { get; set; } = new HashSet<DetailsOfFailingGrades>();
        public ICollection<ACaseOfAbsenceInTheDetailedGrades> ACaseOfAbsenceInTheDetailedGrades = new HashSet<ACaseOfAbsenceInTheDetailedGrades>(); 
        public ICollection<DetailsOfExceptionalLetters> DetailsOfExceptionalLetters = new HashSet<DetailsOfExceptionalLetters>();
        public ICollection<DetailsOfTheoreticalFailingGrades> DetailsOfTheoreticalFailingGrades = new HashSet<DetailsOfTheoreticalFailingGrades>();
    }
}
