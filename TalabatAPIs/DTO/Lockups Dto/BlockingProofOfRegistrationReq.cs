using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class BlockingProofOfRegistrationReq
    {
        [Required(ErrorMessage = " يجب إدخال قيمة ل اسباب الحظر ")]

        public string ReasonsOfBlocking { get; set; }

        [Required(ErrorMessage = "يجب إدخال معرف الجامعة")]

        public int? UniversityId { get; set; }

    }
}
