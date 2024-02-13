using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Domian.Dtos.Requests.HR
{
    public class EmployeeRequest
    {
        public int Id { get; set; }

        [Display(Name = "الاسم بالكامل")]
        [Required(ErrorMessage = "هذا الحقل إجباري"),MinLength(3, ErrorMessage = "الحد الادني 3 احرف"),MaxLength(150,ErrorMessage ="الحد الاقصي 150 حرف")]
        [RegularExpression(@"^[\u0600-\u06FF\s]+$", ErrorMessage = "برجاء كتابة الاسم بالعربية فقط")]
        public string Name { get; set; }

        [Display(Name = "البريد الالكتروني")]
        [MaxLength(150, ErrorMessage = "الحد الاقصي 150 حرف")]
        [RegularExpression("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", ErrorMessage = "برجاء ادخال بريد الكتروني صحيح")]
        public string? Email { get; set; }

        [Display(Name = "رقم الهاتف")]
        [RegularExpression(@"^\d{11}$", ErrorMessage = "برجاء ادخال رقم هاتف صحيح")]
        public string? Mobile { get; set; }

        [Display(Name = "رقم الهوية")]
        [RegularExpression(@"^\d{14}$", ErrorMessage = "برجاء ادخال رقم الهوية صحيح")]
        public string NId { get; set; }

        [Display(Name = "تاريخ التوظيف")]
        public DateTime? HireDate { get; set; }

        [Display(Name = "العنوان")]
        [MaxLength(250, ErrorMessage = "الحد الاقصي 250 حرف")]
        public string Address { get; set; }


        [Display(Name = "تاريخ الميلاد")]
        public DateTime? BirthDate { get; set; }

        [Display(Name = "القسم")]
        [Required(ErrorMessage = "هذا الحقل إجباري")]
        public int DepartmentId { get; set; }


    }
}
