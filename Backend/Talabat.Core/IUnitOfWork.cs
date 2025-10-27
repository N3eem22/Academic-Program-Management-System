using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Talabat.Core.Entities;
using Talabat.Core.Repositories;

namespace Talabat.Core
{
    public interface IUnitOfWork:IAsyncDisposable 
    {
        IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;
        Task<int> CompleteAsync(ClaimsPrincipal? userPrincipal = null);

        DbContext GetDbContext();

    }
}
