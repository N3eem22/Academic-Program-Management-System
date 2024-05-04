using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto.ProgramLEvelsDTO
{
    public class ProgramLevelResponseDto
    { 
        public int Id { get; set; }
        public int prog_InfoId { get; set; }
        public string TheLevel { get; set; }
        [Required]
        public int MinimumHours { get; set; }
        [Required]
        public int MaximumHours { get; set; }
        [Required]
        public string InstitutionCode { get; set; }

    }

}

