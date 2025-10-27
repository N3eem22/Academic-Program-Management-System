using System.ComponentModel.DataAnnotations.Schema;

namespace Talabat.Core.Entities.Logs
{
    [Table("Log_ApplicationLogs")]
    public class ApplicationLog : BaseEntity
    {
      
        [Required]
        public string UserEmail { get; set; }
        [Required]
        public  string EntityName { get; set; }
        [Required]
        public  string Action { get; set; }
        public DateTime Timestamp { get; set; }
        [Required]
        public  string Changes { get; set; }
    }
}
