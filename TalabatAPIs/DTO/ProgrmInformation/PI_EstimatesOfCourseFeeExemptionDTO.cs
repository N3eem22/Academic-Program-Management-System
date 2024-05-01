using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.ProgrmInformation
{
    public class PI_EstimatesOfCourseFeeExemptionDTO
    {
        public int Id { get; set; }
        public int AllGradesId { get; set; }
        public int ProgramInformationId { get; set; }
        public string AllGrades_Etomate { get; set; }  

    }
}
