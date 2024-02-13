namespace Generic.Domian.Models.Logs
{
    [Table("Log_ApplicationLogs")]
    public class ApplicationLog : BaseEntity
    {
        public string ObjectJson { get; set; }
        public string Message { get; set; }
    }
}
