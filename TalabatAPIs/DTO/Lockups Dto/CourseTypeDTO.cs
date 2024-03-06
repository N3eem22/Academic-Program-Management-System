namespace Grad.APIs.DTO.Lockups_Dto
{
    public class CourseTypeDTO
    {
        public int Id { get; set; }

        public string courseType { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
