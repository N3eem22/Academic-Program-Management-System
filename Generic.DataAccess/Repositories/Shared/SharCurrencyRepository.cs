using Generic.DataAccess.DataContexts;
using Generic.Domian.Interfaces.Shared;
using Microsoft.Extensions.Logging;

namespace Generic.DataAccess.Repositories.Shared
{
    public class SharCurrencyRepository : BaseRepository<SharCurrency>, ISharCurrencyRepository
    {
        public SharCurrencyRepository(GenericDbContext context, ILogger logger, IHttpContextAccessor accessor) : base(context, logger, accessor)
        {
        }
    }
}
