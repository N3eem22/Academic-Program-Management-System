namespace Generic.Domian.Models.HR
{
    [Table("Hr_Departments")]
    public class Department : BaseEntity
    {
        [MaxLength(250)]
        public string Name { get; set; }
    }
}
