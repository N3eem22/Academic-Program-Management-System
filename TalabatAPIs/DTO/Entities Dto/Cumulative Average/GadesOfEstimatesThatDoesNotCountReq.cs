using Grad.APIs.DTO.Lockups_Dto;
using Grad.Core.Entities.CumulativeAverage;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class GadesOfEstimatesThatDoesNotCountReq
    {
        public int? GradeId { get; set; }
        [AllowNull]
        public int? CumulativeAverageId { get; set; }

    }
}
