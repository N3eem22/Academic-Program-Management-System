namespace Grad.APIs.DTO.Lockups_Dto
{
    public class EquivalentGradeDTO
    {
        public int Id { get; set; }

        public string equivalentGrade { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
