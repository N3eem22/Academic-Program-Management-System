namespace Grad.APIs.DTO.Lockups_Dto
{
    public class TypeOfProgramFeesDTO
    {
        public int Id { get; set; }

        public string TypeOfFees { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
