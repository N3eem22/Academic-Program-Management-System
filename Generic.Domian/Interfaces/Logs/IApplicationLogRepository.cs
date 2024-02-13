using Generic.Domian.Dtos.Requests.Auth;
using Generic.Domian.Models.Logs;

namespace Generic.Domian.Interfaces.Logs
{
    public interface IApplicationLogRepository : IBaseRepository<ApplicationLog>
    {
        Task LogInDB(object ModelObject, object MessageObject);
    }
}
