using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class TypeOfFinancialStatementInTheProgramReq
    {
        [Required(ErrorMessage = "نوع البيان المالي في البرنامج مطلوب")]
        public string TheType { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
