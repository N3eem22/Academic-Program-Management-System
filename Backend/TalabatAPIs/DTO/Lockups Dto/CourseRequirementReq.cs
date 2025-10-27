using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class CourseRequirementReq
    {
        [Required(ErrorMessage = "متطلب الدورة مطلوب")]
        public string courseRequirement { get; set; }

        [Required(ErrorMessage = "معرف الجامعة مطلوب")]
        public int? UniversityId { get; set; }
    }
}
