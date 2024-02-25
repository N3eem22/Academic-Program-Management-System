namespace Grad.APIs.DTO
{
    public class ResponeWithData<T> : Respone where T : class
    {
        public T Data { get; set; }

    }
}
