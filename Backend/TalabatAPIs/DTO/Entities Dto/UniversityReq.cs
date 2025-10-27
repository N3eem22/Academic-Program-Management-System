using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Entities_Dto
{
    public class UniversityReq
    {
        [Required(ErrorMessage = " اسم الجامعه مطلوب")]

        public string Name { get; set; }

        [Required(ErrorMessage = " موقع الجامعه مطلوب")]
        public string Location { get; set; }
    }
}
