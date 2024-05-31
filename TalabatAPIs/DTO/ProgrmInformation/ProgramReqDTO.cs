using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Entities;

namespace Grad.APIs.DTO.ProgrmInformation
{
    public class ProgramReqDTO
    {
        public string ProgramNameInArabic { get; set; }
        public string ProgramNameInEnglish { get; set; }
        public int FacultyId { get; set; }

    }
}
