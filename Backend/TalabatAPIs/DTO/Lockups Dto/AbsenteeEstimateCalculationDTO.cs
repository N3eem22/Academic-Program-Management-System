namespace Grad.APIs.DTO.Lockups_Dto
{
    public class AbsenteeEstimateCalculationDTO
    {
        public int Id { get; set; }

        public string absenteeEstimateCalculation { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
