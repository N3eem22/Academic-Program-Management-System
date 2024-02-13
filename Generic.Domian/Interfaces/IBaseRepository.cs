using Generic.Domian.Dtos.Responses;
using Generic.Domian.Models;
using System.Linq.Expressions;


namespace Generic.Domian.Interfaces
{
    public interface IBaseRepository<T> where T : class
    {
        Task<T> GetByIdAsync(int id);

        Task<IEnumerable<SelectListResponse>> ListOfEntityAsync(Expression<Func<T, bool>> filter = null, string NameObject = null);

        Task<IEnumerable<T>> overrideGetList();

        Task<IEnumerable<TType>> GetSpecificSelectAsync<TType>(
            Expression<Func<T, bool>> filter,
            Expression<Func<T, TType>> select,
            bool ignoreQueryFilters = false,
            string includeProperties = null,
            int? skip = null,
            int? take = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null
            ) where TType : class;
        Task<TType> GetSpecificSelectObjectAsync<TType>(
         Expression<Func<T, bool>> filter,
         Expression<Func<T, TType>> select,
         bool ignoreQueryFilters = false,
         string includeProperties = null
         ) where TType : class;

        Task<IEnumerable<T>> GetAllAsync(Expression<Func<T, bool>> filter = null, Expression<Func<T, IQueryable<T>>> select = null,
          Expression<Func<T, T>> selector = null,
          Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, Expression<Func<T, bool>> includeFilter = null,
          string includeProperties = null, bool ignoreQueryFilters = false,
          int? skip = null,
          int? take = null);


        public IEnumerable<T> GetAll(
            Expression<Func<T, bool>> filter = null,
            Expression<Func<T, IQueryable<T>>> select = null,
            Expression<Func<T, T>> selector = null,
            Func<IQueryable<T>,
            IOrderedQueryable<T>> orderBy = null,
            Expression<Func<T, bool>> includeFilter = null,
            string includeProperties = null
            , bool ignoreQueryFilters = false,
            int? skip = null,
            int? take = null);


        Task<bool> ExistAsync(int id);
        Task<bool> ExistAsync(Expression<Func<T, bool>> filter = null, string includeProperties = null, bool ignoreQueryFilters = false);
        Task<T> GetFirstOrDefaultAsync(
            Expression<Func<T, bool>> filter = null,
            string includeProperties = null, bool ignoreQueryFilters = false,
              Func<IQueryable<T>,
            IOrderedQueryable<T>> orderBy = null
        );
        T GetFirstOrDefault(
            Expression<Func<T, bool>> filter = null,
            string includeProperties = null, bool ignoreQueryFilters = false,
              Func<IQueryable<T>,
            IOrderedQueryable<T>> orderBy = null
        );
        Task<T> AddAsync(T entity);
        Task<T> AddOrUpdate(T entity);
        IEnumerable<T> AddRange(IEnumerable<T> entities);
        Task<IEnumerable<T>> AddRangeAsync(IEnumerable<T> entities);
        Task<T> Remove(T entity);
        T HardRemove(T entity);
        //Task<bool> RemoveAsync(int id);

        T Update(T entity);
        void Attach(T entity);
        Task<int> CountAsync(Expression<Func<T, bool>> filter = null, bool ignoreQueryFilters = false, string includeProperties = null);
        int Count(Expression<Func<T, bool>> filter = null, bool ignoreQueryFilters = false, string includeProperties = null);
        Task<bool> AnyAsync(Expression<Func<T, bool>> filter = null, bool ignoreQueryFilters = false);
        void RemoveRange(IEnumerable<T> entities);
        void HardRemoveRange(IEnumerable<T> entities);
        void UpdateRange(IEnumerable<T> entities);
        void AttachRange(IEnumerable<T> entities);
        void UpdateRange2(IEnumerable<T> entities);
    }
}

