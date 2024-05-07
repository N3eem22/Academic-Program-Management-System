using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class AllGradesReq
    {
        [Required(ErrorMessage = "يجب إدخال قيمة للصف")]
        public string TheGrade { get; set; }

        [Required(ErrorMessage = "يجب إدخال معرف الجامعة")]
        public int? UniversityId { get; set; }
    }
}