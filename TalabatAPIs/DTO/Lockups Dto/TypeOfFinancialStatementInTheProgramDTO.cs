namespace Grad.APIs.DTO.Lockups_Dto
{
    public class TypeOfFinancialStatementInTheProgramDTO
    {
        public int Id { get; set; }

        public string TheType { get; set; }
        public int? UniversityId { get; set; }


        public string University { get; set; }
    }
}
