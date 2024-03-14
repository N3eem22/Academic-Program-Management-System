using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Academic_regulation
{
    [Table("AR_ProgramLevels")]
    public class programLevels: BaseEntity
    {
        [ForeignKey("prog_Info")]
        public int prog_InfoId { get; set; }
        public ProgramInformation prog_Info { get; set; }
        [Required]
        [ForeignKey("TheLevel")]
        public int TheLevelId { get; set; }
        public Level TheLevel { get; set; }
        [Required]
        public int MinimumHours { get; set; }
        [Required]
        public int MaximumHours { get; set; }
        [Required]
        public string InstitutionCode { get; set; }
    }
}
