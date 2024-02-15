namespace Generic.Domian.Models
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public bool IsDeleted { get; set; } = false;
        public DateTime InsertDate { get; set; } = new DateTime().Now();
        public DateTime UpdateDate { get; set; } = new DateTime().Now();
        public DateTime? DeleteDate { get; set; }
        [StringLength(100)]
        public string? InsertBy { get; set; }
        [StringLength(100)]
        public string? UpdateBy { get; set; }
        //public int TenantCompanyId { get; set; }
        public string? DeleteBy { get; set; }
    }
}
