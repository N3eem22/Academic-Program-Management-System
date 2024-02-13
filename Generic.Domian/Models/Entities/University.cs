using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Domian.Models.Entities
{
    [Table("University")]
    public class University : BaseEntity
    {
        [MaxLength(70)]
        public string Name { get; set; }
        [MaxLength(250)]
        public string Location { get; set; }
    }
}
