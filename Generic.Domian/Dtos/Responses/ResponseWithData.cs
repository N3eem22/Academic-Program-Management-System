namespace Generic.Domian.Dtos.Responses
{
    public class ResponseWithData<T> : Response
    {
        public T Data { get; set; }
    }
}
