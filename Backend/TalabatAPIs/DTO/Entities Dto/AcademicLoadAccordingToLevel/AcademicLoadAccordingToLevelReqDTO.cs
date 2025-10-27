using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto.AcademicLoadAccordingToLevel
{
    public class AcademicLoadAccordingToLevelReqDTO
    {
        public int Prog_InfoId { get; set; }
        public int SemestersId { get; set; }
        public int LevelId { get; set; }
        public int MinimumHours { get; set; }
        public int ExceptionToMinimumHours { get; set; }
        public int MaximumHours { get; set; }
        public int ExceptionToTheMaximumHours { get; set; }
        public int Re_registrationHours { get; set; }
        public int AcademicNoticeHours { get; set; }
    }
}
