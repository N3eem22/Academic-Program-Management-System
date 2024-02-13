using Generic.DataAccess.DataContexts;
using Generic.Domian.Interfaces.Stocks;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic.DataAccess.Repositories.Stocks
{
    public class CategoryRepository : BaseRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(GenericDbContext context, ILogger logger, IHttpContextAccessor accessor) : base(context, logger, accessor)
        {
        }
    }
}
