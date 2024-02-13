namespace Generic.Domian.Models.HR
{
    [Table("Hr_Employee")]
    public class Employee : BaseEntity
    {
        [MaxLength(150)]
        public string Name { get; set; }

        [MaxLength(150)]
        public string? Email { get; set; }

        [MaxLength(20)]
        public string? Mobile { get; set; }

        [MaxLength(20)]
        public string NId { get; set; }

        public DateTime? HireDate { get; set; }

        [MaxLength(250)]
        public string Address { get; set; }

        public DateTime? BirthDate { get; set; }

        public int? DepartmentId { get; set; }
        [ForeignKey(nameof(DepartmentId))]
        public Department Department { get; set; }
    }
}
