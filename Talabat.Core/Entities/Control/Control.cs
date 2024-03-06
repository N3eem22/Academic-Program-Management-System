using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;

namespace Grad.Core.Entities.Control
{
    public class Control : BaseEntity
    {
        public int? SubtractFromTheDiscountRate { get; set; }
        public int? FirstReductionEstimatesForFailureTimes { get; set; }
        [ForeignKey(nameof(FirstReductionEstimatesForFailureTimes))]
        public AllGrades? FirstGrades { get; set; }

        public int? SecondReductionEstimatesForFailureTimes { get; set; }
        [ForeignKey(nameof(SecondReductionEstimatesForFailureTimes))]
        public AllGrades? SecondGrades { get; set; }

        public int? ThirdReductionEstimatesForFailureTimes { get; set; }
        [ForeignKey(nameof(ThirdReductionEstimatesForFailureTimes))]
        public AllGrades? ThirdGrades { get; set; }
    }
}
