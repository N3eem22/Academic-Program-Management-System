namespace Generic.Domian.Dtos.Responses
{
    public class Response
    {
        public int IdOfAddedObject { get; set; }
        public int ErrorsCount { get; set; }
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
        public bool IsUpdated { get; set; }
        public bool IsExists { get; set; }
        public bool IsNotFound { get; set; }
        public bool IaActive { get; set; }
        public IEnumerable<string> Errors { get; set; } = new List<string>();
    }
}
