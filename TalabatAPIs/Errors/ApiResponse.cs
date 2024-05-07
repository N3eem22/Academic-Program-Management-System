namespace Talabat.APIs.Errors
{
    public class ApiResponse
    {
        public int StatusCode { get; set; }
        public string? Message { get; set; }
        public ApiResponse(int statuscode,string? message=null)
        {
            StatusCode = statuscode;
            Message = message ?? GetDefaultMessageForStausCode(StatusCode);
        }

        private string? GetDefaultMessageForStausCode(int? code)
        {
            return code switch
            {
                400 => "طلب غير صالح",
                401 => "ليس لديك الصلاحية",
                404 => "المورد غير موجود",
                500 => "خطأ داخلي في الخادم",
                409 => "المورد موجود بالفعل",
                _ => null
            };

        }
    }
}
