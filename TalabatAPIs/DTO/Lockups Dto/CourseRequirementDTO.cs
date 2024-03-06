namespace Grad.APIs.DTO.Lockups_Dto
{
    public class CourseRequirementDTO
    {
        public int Id { get; set; }

        public string courseRequirement { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
