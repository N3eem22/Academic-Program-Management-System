using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class BurdenCalculationReq
    {

        [Required(ErrorMessage = " يجب إدخال قيمة ل حساب العبء ")]

        public string BurdenCalculationAS { get; set; }

        [Required(ErrorMessage = "يجب إدخال معرف الجامعة")]

        public int? UniversityId { get; set; }
    }
}
