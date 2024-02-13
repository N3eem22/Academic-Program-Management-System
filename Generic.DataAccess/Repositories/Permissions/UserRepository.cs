using Generic.DataAccess.DataContexts;
using Generic.Domian.Interfaces.Permissions;
using Microsoft.Extensions.Logging;

namespace Generic.DataAccess.Repositories.Permissions
{
    public class UserRepository : BaseRepository<ApplicationUser>, IUserRepository
    {
        public UserRepository(GenericDbContext context, ILogger logger, IHttpContextAccessor accessor) : base(context, logger, accessor)
        {
        }
    }
}
