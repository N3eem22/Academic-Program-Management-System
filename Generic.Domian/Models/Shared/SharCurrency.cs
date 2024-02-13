
namespace Generic.Domian.Models.Shared
{
    [Table("Shar_SharCurrencies")]
    public class SharCurrency : BaseEntity
    {
        [StringLength(50)]
        public string Name { get; set; }
    }
}
