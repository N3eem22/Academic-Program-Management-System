using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto.Graduation
{
    public class GraduationLevelsDTO
    {
        public string Level { get; set; }
        public int GraduationId { get; set; }
       
    }
}
