using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto.AcademicLoadAccordingToLevel
{
    public class AcademicLoadAccordingToLevelDTO
    {
        public int Id { get; set; }
        public int Prog_InfoId { get; set; }
        public string AL_Semesters { get; set; }
        public string AcademicLevel { get; set; }
        public int MinimumHours { get; set; }
        public int ExceptionToMinimumHours { get; set; }
        public int MaximumHours { get; set; }
        public int ExceptionToTheMaximumHours { get; set; }
        public int Re_registrationHours { get; set; }
        public int AcademicNoticeHours { get; set; }
    }
}
