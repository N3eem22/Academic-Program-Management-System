using Generic.DataAccess.DataContexts;
using Generic.Domian.Interfaces.Logs;
using Generic.Domian.Models.Logs;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Generic.DataAccess.Repositories.Logs
{
    public class ApplicationLogRepository : BaseRepository<ApplicationLog>, IApplicationLogRepository
    {
        public ApplicationLogRepository(GenericDbContext context, ILogger logger, IHttpContextAccessor accessor) : base(context, logger, accessor)
        {
        }

        public async Task LogInDB(object ModelObject, object MessageObject)
        {
            try
            {
                await _context.ApplicationLogs.AddAsync(new ApplicationLog
                {
                    ObjectJson = JsonConvert.SerializeObject(ModelObject),
                    Message = JsonConvert.SerializeObject(MessageObject),
                });

                await _context.SaveChangesAsync();
            }
            catch
            {

            }
        }
    }
}
