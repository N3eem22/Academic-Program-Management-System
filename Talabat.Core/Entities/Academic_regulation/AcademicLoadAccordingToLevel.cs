using Stripe.Tax;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Academic_regulation
{
    [Table("AR_AcademicLoadAccordingToLevel")]
    public class AcademicLoadAccordingToLevel: BaseEntity
    {
        [ForeignKey("Program_Info")]
        public int Prog_InfoId { get; set; }
        public ProgramInformation Program_Info { get; set; }
        public string Semester { get; set; }
        [ForeignKey("AcademicLevel")]
        public int LevelId { get; set; }
        public Level AcademicLevel { get; set; }
        public int MinimumHours{ get; set; }
        public int ExceptionToMinimumHours { get; set; }
        public int MaximumHours { get; set; }
        public int ExceptionToTheMaximumHours { get; set; }
        public int Re_registrationHours { get; set; }
        public int AcademicNoticeHours { get; set; }
    }
}
