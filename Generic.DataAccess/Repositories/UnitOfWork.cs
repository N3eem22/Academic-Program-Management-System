using Generic.DataAccess.DataContexts;
using Generic.DataAccess.Repositories.HR;
using Generic.DataAccess.Repositories.Logs;
using Generic.DataAccess.Repositories.Permissions;
using Generic.DataAccess.Repositories.Shared;
using Generic.DataAccess.Repositories.Stocks;
using Generic.Domian.Interfaces;
using Generic.Domian.Interfaces.Logs;
using Generic.Domian.Interfaces.Permissions;
using Generic.Domian.Interfaces.Shared;
using Generic.Domian.Interfaces.Stocks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Generic.DataAccess.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly GenericDbContext _context;

        private readonly ILogger _logger;
        private readonly IConfiguration _config;

        //HR
        public IBaseRepository<Department> DepartmentsRepository { get; private set; }
        public IBaseRepository<Employee> EmployeesRepository { get; private set; }

        //Stocks
        public ICategoryRepository CategoriesRepository { get; private set; }

        //Permissions
        public IUserRepository UsersRepository { get; private set; }

        //Shared
        public ISharCurrencyRepository SharCurrenciesRepository { get; private set; }

        //Logs
        public IApplicationLogRepository ApplicationLogsRepository { get; }


        public UnitOfWork(GenericDbContext context, ILoggerFactory loggerFactory, IConfiguration config, IHttpContextAccessor accessor)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger("logs");
            _config = config;

            CategoriesRepository = new CategoryRepository(_context, _logger, accessor);
            DepartmentsRepository = new DepartmentRepository(_context, _logger, accessor);
            EmployeesRepository = new EmployeeRepository(_context, _logger, accessor);
            UsersRepository = new UserRepository(_context, _logger, accessor);
            SharCurrenciesRepository = new SharCurrencyRepository(_context, _logger, accessor);
            ApplicationLogsRepository = new ApplicationLogRepository(_context, _logger, accessor);

        }

        public IDatabaseTransaction BeginTransaction()
        {
            return new EntityDatabaseTransaction(_context);
        }
        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public int Complete() => _context.SaveChanges();
    }

}
