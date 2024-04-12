using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto.Graduation
{
    public class GraduationSemestersDTO
    {
        public string Semester { get; set; }
       
        public int GraduationId { get; set; }
      
    }
}
