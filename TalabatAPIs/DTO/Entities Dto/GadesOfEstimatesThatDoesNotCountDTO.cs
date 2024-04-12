using Grad.Core.Entities.CumulativeAverage;
using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class GadesOfEstimatesThatDoesNotCountDTO
    {
        public int? GradeId { get; set; }
        public int? CumulativeAverageId { get; set; }

    }
}
