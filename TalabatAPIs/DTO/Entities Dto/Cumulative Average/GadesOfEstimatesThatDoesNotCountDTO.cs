using Grad.Core.Entities.CumulativeAverage;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class GadesOfEstimatesThatDoesNotCountDTO
    {
        public int GradeId { get; set; }
        public string? Grade { get; set; }
        public int? CumulativeAverageId { get; set; }

    }
}
