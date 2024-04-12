using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;
using Talabat.Core.Specifications;

namespace Talabat.Core.Repositories
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
       
        Task<IReadOnlyList<T>> GetAllWithSpecAsync(ISpecifications<T> specifications );
        Task<T> GetEntityWithSpecAsync(ISpecifications<T> specifications);

        Task<int> GetCountWithSpecAsync(ISpecifications<T> specifications);

        Task<T?> GetByIdAsync(int id);
        Task<IEnumerable<T>> GetAllAsync();
        Task Add(T item);
        void Delete(T item);

        Task softDelete (int id);
        void Update(T item);

        Task<bool> ExistAsync(Expression<Func<T, bool>> filter = null, Expression<Func<T, bool>> universityFilter = null, string includeProperties = null, bool ignoreQueryFilters = false);


    }
}
