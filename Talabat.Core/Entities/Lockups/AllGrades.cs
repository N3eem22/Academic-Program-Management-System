

using Grad.Core.Entities.CumulativeAverage;

namespace Talabat.Core.Entities.Lockups
{
    [Table("LU_AllGrades")]
    public class AllGrades:BaseEntity
    {
        public string TheGrade { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }
        public ICollection<CumulativeAverage> UtmostGrades { get; set; } = new HashSet<CumulativeAverage>();
        public ICollection<GadesOfEstimatesThatDoesNotCount> gadesOfEstimatesThatDoesNotCount { get; set; } = new HashSet<GadesOfEstimatesThatDoesNotCount>();

    }
}
