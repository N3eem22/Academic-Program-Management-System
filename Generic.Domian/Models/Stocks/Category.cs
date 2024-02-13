namespace Generic.Domian.Models.Stocks
{
    [Table("Stk_Category")]
    public class Category :BaseEntity
    {
        [MaxLength(150)]
        public string Name { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        public int? ParentCategoryId { get; set; }
        [ForeignKey(nameof(ParentCategoryId))]
        public Category ParentCategory { get; set; }
    }
}
