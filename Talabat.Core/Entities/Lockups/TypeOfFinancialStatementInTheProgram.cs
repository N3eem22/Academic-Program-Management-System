using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talabat.Core.Entities.Lockups
{   
    [Table("LU_TypeOfFinancialStatementInTheProgram")]
    public class TypeOfFinancialStatementInTheProgram:BaseEntity
    {
        public string TheType { get; set; }
        public int? UniversityId { get; set; }
        [ForeignKey(nameof(UniversityId))]
        public University University { get; set; }

    }
}
