namespace Grad.APIs.DTO.Lockups_Dto
{
    public class TheAcademicDegreeDTO
    {
         public int Id { get; set; }

        public string AcademicDegreeName { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
