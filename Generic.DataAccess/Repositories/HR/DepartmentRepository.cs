using Generic.DataAccess.DataContexts;
using Generic.Domian.Interfaces.HR;
using Microsoft.Extensions.Logging;

namespace Generic.DataAccess.Repositories.HR
{
    public class DepartmentRepository : BaseRepository<Department>, IDepartmentRepository
    {
        public DepartmentRepository(GenericDbContext context, ILogger logger, IHttpContextAccessor accessor) : base(context, logger, accessor)
        {

        }
    }
}
