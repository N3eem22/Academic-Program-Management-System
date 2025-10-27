namespace Grad.APIs.DTO.Lockups_Dto
{
    public class PrerequisitesDTO
    {
        public int Id { get; set; }

        public string Prerequisite { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
