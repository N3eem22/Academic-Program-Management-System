using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class PassingTheElectiveGroupBasedOnReq
    {
        [Required(ErrorMessage = "تمرير المجموعة الاختيارية مطلوب")]
        public string PassingTheElectiveGroup { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
