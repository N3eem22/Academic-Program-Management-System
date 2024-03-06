namespace Grad.APIs.DTO.Lockups_Dto
{
    public class PreviousQualificationDTO
    {
        public int Id { get; set; }

        public string previousQualification { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
