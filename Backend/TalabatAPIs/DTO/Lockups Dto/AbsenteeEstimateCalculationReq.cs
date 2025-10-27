using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class AbsenteeEstimateCalculationReq
    {
        [Required(ErrorMessage = " يجب إدخال قيمة حساب تقدير الغائب")]

        public string absenteeEstimateCalculation { get; set; }

        [Required(ErrorMessage = "يجب إدخال قيمة للصف")]

        public int? UniversityId { get; set; }
    }
}
