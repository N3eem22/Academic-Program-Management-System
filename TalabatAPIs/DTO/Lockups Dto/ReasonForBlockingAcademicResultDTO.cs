namespace Grad.APIs.DTO.Lockups_Dto
{
    public class ReasonForBlockingAcademicResultDTO
    {
        public int Id { get; set; }

        public string TheReasonForBlockingAcademicResult { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }

    }
}
