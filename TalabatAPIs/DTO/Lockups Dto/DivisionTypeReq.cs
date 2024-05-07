using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class DivisionTypeReq
    {
        [Required(ErrorMessage = "نوع القسم مطلوب")]
        public string Division_Type { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
