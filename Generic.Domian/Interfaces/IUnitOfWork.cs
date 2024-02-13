using Generic.Domian.Interfaces.Logs;
using Generic.Domian.Interfaces.Permissions;
using Generic.Domian.Interfaces.Shared;
using Generic.Domian.Interfaces.Stocks;
using Generic.Domian.Models.HR;
using Generic.Domian.Models.Permissions;
using Generic.Domian.Models.Shared;
using Generic.Domian.Models.Stocks;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Domian.Interfaces
{

    public interface IUnitOfWork : IDisposable
    {

        IDatabaseTransaction BeginTransaction();

        //HR
        IBaseRepository<Department> DepartmentsRepository { get; }
        IBaseRepository<Employee> EmployeesRepository { get; }

        //Stocks
        ICategoryRepository CategoriesRepository { get; }


        //Permissions
        IUserRepository UsersRepository { get; }

        //Shared
        ISharCurrencyRepository SharCurrenciesRepository { get; }

        //Logs
        IApplicationLogRepository ApplicationLogsRepository { get; }


        Task<int> CompleteAsync();
        int Complete();
    }

}
