using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Domian.Dtos.Requests.HR
{
    public class DepartmentRequest
    {
        public int Id { get; set; }

        [Display(Name = "DepartmentName"), Required(ErrorMessage = "The DepartmentName is required"), MinLength(2, ErrorMessage = "The {0} field length must be grater than or equal {1}."), MaxLength(200, ErrorMessage = "The {0} field length must be less than or equal {1}.")]
        public string Name { get; set; }

    }
}
