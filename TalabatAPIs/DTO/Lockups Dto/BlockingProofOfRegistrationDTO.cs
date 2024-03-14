namespace Grad.APIs.DTO.Lockups_Dto
{
    public class BlockingProofOfRegistrationDTO
    {
        public int Id { get; set; }

        public string ReasonsOfBlocking { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
