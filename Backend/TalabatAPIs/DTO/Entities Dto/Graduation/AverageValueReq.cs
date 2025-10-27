namespace Grad.APIs.DTO.Entities_Dto.Graduation
{
    public class AverageValueReq
    {
        public int value { get; set; }
        public int YearValue { get; set; }
        public int GraduationId { get; set; }
        public int EquivalentGradeId { get; set; }
        public int AllGradesId { get; set; }
    }
}
