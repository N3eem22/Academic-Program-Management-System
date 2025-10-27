namespace Grad.APIs.DTO.TestDTO
{
    public class StudentReq
    {

        public string StudentName { get; set; }
        public string BirthDate { get; set; }
        public string Type { get; set; }
        public string nationality { get; set; }
        public string religion { get; set; }
        public int NationalId { get; set; }
        public int UniversityId { get; set; }

        public int FacultyId { get; set; }

        public int programId { get; set; }


        public List<CourseRequest> Courses { get; set; }


    }
}
