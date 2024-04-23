using Grad.Core.Entities.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Entities;
using Talabat.Core.Entities.Lockups;
using Talabat.Core.Repositories;
using Talabat.Core.Specifications;
using Talabat.Repository.Data;

namespace Talabat.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly GradContext _dbcontext;

        public GenericRepository(GradContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<T?> GetByIdAsync(int id) 
        {
            return await _dbcontext.Set<T>().FindAsync(id);
        }


        public async Task<IEnumerable<T>> GetAllAsync() 
        {
           // if(typeof(T) == typeof(AllGrades))
              //  return (IEnumerable<T>) await _dbcontext.Set<AllGrades>().Include(G =>G.University ).ToListAsync();
            return await _dbcontext.Set<T>().ToListAsync();
        }
        public async Task<IReadOnlyList<T>> GetAllWithSpecAsync(ISpecifications<T> specifications)
        {
            return await ApplySpec(specifications).ToListAsync();
        }
        public async Task<T> GetEntityWithSpecAsync(ISpecifications<T> specifications)
        {
            return await ApplySpec(specifications).FirstOrDefaultAsync();
        }
        private IQueryable<T> ApplySpec(ISpecifications<T> specifications)
        {
            return  SpecificationsEvaluator<T>.GetQuery(_dbcontext.Set<T>(), specifications);
        }

        public async Task<int> GetCountWithSpecAsync(ISpecifications<T> specifications)
        {
            return await ApplySpec(specifications).CountAsync();
        }

        public async Task Add(T item)
        {
            await _dbcontext.Set<T>().AddAsync(item);
        }


        public void Delete(T item)
        {
            _dbcontext.Set<T>().Remove(item);
        }

        public void Update(T item)
        {
            _dbcontext.Set<T>().Update(item);
        }

        

        public async Task<bool> ExistAsync(Expression<Func<T, bool>> filter = null, Expression<Func<T, bool>> universityFilter = null, string includeProperties = null, bool ignoreQueryFilters = false)
        {
            IQueryable<T> query = _dbcontext.Set<T>().AsNoTracking();
            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }
            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (universityFilter != null)
            {
                query = query.Where(universityFilter);
            }

            if (includeProperties != null)
            {
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' },
                    StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty);
                }
            }

            var result = await query.FirstOrDefaultAsync() is not null;
            return result;
        }

        public async Task softDelete(int id)
        {
           var getEntity = await GetByIdAsync(id);
            if (getEntity != null)
             getEntity.IsDeleted = true;    

        }
    }
}
