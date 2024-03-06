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
        public int prog_InfoId { get; set; }
        [ForeignKey(nameof(prog_InfoId))]
        public ProgramInformation prog_Info { get; set; }
        [Required]
        public int TheLevelId { get; set; }
        [ForeignKey(nameof(TheLevelId))]
        public Level TheLevel { get; set; }
        [Required]
        public int MinimumHours { get; set; }
        [Required]
        public int MaximumHours { get; set; }
        [Required]
        public string InstitutionCode { get; set; }
    }
}
