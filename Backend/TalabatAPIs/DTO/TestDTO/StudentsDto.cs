namespace Grad.APIs.DTO.TestDTO
{
    public class StudentsDto
    {
        public int Id { get; set; }

        public string StudentName { get; set; }
        public string BirthDate { get; set; }
        public string Type { get; set; }
        public string Nationality { get; set; }
        public string Religion { get; set; }
        public int NationalId { get; set; }
        public string University { get; set; }

        public string Faculty { get; set; }

       public string program { get; set; }


        public List<CourseRequest> Courses { get; set; }


    }
}
