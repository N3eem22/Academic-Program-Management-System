using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto.ProgramLEvelsDTO
{
    public class ProgramLevelRequestDto
    {
            public int prog_InfoId { get; set; }
            public int TheLevelId { get; set; }
            public int MinimumHours { get; set; }
            public int MaximumHours { get; set; }
            public string InstitutionCode { get; set; }   

}
}
