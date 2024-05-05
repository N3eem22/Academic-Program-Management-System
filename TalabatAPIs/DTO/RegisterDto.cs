using System.ComponentModel.DataAnnotations;

namespace Talabat.APIs.DTO
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    namespace Talabat.APIs.DTO
    {
        public class RegisterDto
        {
            [Required(ErrorMessage = "البريد الإلكتروني مطلوب")]
            [EmailAddress(ErrorMessage = "البريد الإلكتروني غير صحيح")]
            public string Email { get; set; }

            [Required(ErrorMessage = "اسم العرض مطلوب")]
            public string DisplayName { get; set; }

            [Required(ErrorMessage = "رقم الهاتف مطلوب")]
            [RegularExpression(@"^(011|012|015|010)\d{8}$", ErrorMessage = "رقم الهاتف يجب أن يكون رقم مصري صالح")]
            public string PhoneNumber { get; set; }

            [Required(ErrorMessage = "كلمة المرور مطلوبة")]
            [StringLength(15, MinimumLength = 8, ErrorMessage = "يجب أن تكون كلمة المرور بين 8 و15 أحرف")]
            public string Password { get; set; }

            [Required(ErrorMessage = "دور المستخدم مطلوب")]
            public string Role { get; set; }

            [Required(ErrorMessage = "معرف الكلية مطلوب")]
            public List<int> Facultyid { get; set; }

            [Required(ErrorMessage = "معرف الجامعة مطلوب")]
            public List<int> UniversityID { get; set; }
        }
    }

}
