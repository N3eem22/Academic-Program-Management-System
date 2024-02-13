using Generic.DataAccess.DataContexts;
using Generic.Domian.Interfaces.HR;
using Microsoft.Extensions.Logging;

namespace Generic.DataAccess.Repositories.HR
{
    public class EmployeeRepository : BaseRepository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(GenericDbContext context, ILogger logger, IHttpContextAccessor accessor) : base(context, logger, accessor)
        {
        }
    }
}
