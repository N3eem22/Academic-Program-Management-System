using Generic.Domian.Dtos.Responses;
using Generic.Domian.Interfaces;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Linq.Expressions;
using System.Reflection;
using Generic.DataAccess.DataContexts;
using Generic.Domian.Dtos;

namespace Generic.DataAccess.Repositories
{

    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        protected GenericDbContext _context;
        internal DbSet<T> dbSet;
        public readonly ILogger _logger;
        private IConfiguration config;
        private IHttpContextAccessor _accessor;

        public BaseRepository(GenericDbContext context, ILogger logger, IHttpContextAccessor accessor)
        {
            _context = context;
            _logger = logger;
            this.dbSet = context.Set<T>();
            _accessor = accessor;
        }

        public BaseRepository(GenericDbContext context, ILogger logger, IConfiguration config, IHttpContextAccessor accessor) : this(context, logger, accessor)
        {
            this.config = config;
        }

        public async Task<IEnumerable<SelectListResponse>> ListOfEntityAsync(Expression<Func<T, bool>> filter = null, string NameObject = null)
        {
            IQueryable<T> query = dbSet.AsNoTracking();
            var PropsData = new GenaricSelectProps();

            if (filter != null)
                query = query.Where(filter);
            if (NameObject == null)
                PropsData = await query.Select(x => new GenaricSelectProps() { Id = x.GetType().GetProperty("Id"), Name = x.GetType().GetProperty("Name") }).FirstOrDefaultAsync();
            else
            {
                PropsData = await query.Select(x => new GenaricSelectProps() { Id = x.GetType().GetProperty("Id"), Name = x.GetType().GetProperty(NameObject) }).FirstOrDefaultAsync();
            }


            return await query.Select(obj => new SelectListResponse()
            {
                Id = (int)PropsData.Id.GetValue(obj, null),
                Name = (string)PropsData.Name.GetValue(obj, null)
            }).ToListAsync();

        }

        //sunmmery
        //GetByIdAsync method use tracking to get object (to update ,insert)
        public async Task<T> GetByIdAsync(int id)
        {
            return await dbSet.FindAsync(id);
        }

        public virtual async Task<IEnumerable<T>> overrideGetList()
        {
            IQueryable<T> query = dbSet.AsNoTracking();
            return await query.ToListAsync();
        }

        public async Task<IEnumerable<TType>> GetSpecificSelectAsync<TType>(
            Expression<Func<T, bool>> filter,
            Expression<Func<T, TType>> select,
            bool ignoreQueryFilters = false,
            string includeProperties = null,
            int? skip = null,
            int? take = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null

            ) where TType : class
        {

            IQueryable<T> query = dbSet.AsNoTracking();
            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }
            if (includeProperties != null)
            {
                query.AsSplitQuery();
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' },
                    StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty).IgnoreQueryFilters();
                }
            }

            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (orderBy != null)
                query = orderBy(query);

            if (skip.HasValue)
            {
                query = query.Skip(skip.Value);
            }
            if (take.HasValue)
            {
                query = query.Take(take.Value);
            }

            var x = await query.Select(select).ToListAsync();
            return x;
        }

        public async Task<TType> GetSpecificSelectObjectAsync<TType>(
          Expression<Func<T, bool>> filter,
          Expression<Func<T, TType>> select,
          bool ignoreQueryFilters = false,
          string includeProperties = null
          ) where TType : class
        {

            IQueryable<T> query = dbSet.AsNoTracking();
            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }
            if (includeProperties != null)
            {
                query.AsSplitQuery();
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' },
                    StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty).IgnoreQueryFilters();
                }
            }

            if (filter != null)
            {
                query = query.Where(filter);
            }

            return await query.Select(select).FirstOrDefaultAsync();
        }
        public async Task<IEnumerable<T>> GetAllAsync(
            Expression<Func<T, bool>> filter = null,
            Expression<Func<T, IQueryable<T>>> select = null,
            Expression<Func<T, T>> selector = null,
            Func<IQueryable<T>,
            IOrderedQueryable<T>> orderBy = null,
            Expression<Func<T, bool>> includeFilter = null,
            string includeProperties = null
            , bool ignoreQueryFilters = false,
            int? skip = null,
            int? take = null )
        {
            IQueryable<T> query = dbSet.AsNoTracking();

            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }
            if (includeFilter is not null)
            {
                query = query.Include(includeFilter);
            }

            if (select != null)
            {
                query = (IQueryable<T>)query.Select(select);
            }
            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (includeProperties != null)
            {
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' },
                    StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty).AsNoTracking();
                }
            }

            if (skip.HasValue)
            {
                query = query.Skip(skip.Value);
            }

            if (take.HasValue)
            {
                query = query.Take(take.Value);
            }

            if (orderBy != null)
            {

                return await orderBy(query).ToListAsync();
            }

            return await query.ToListAsync();
        }

        public IEnumerable<T> GetAll(
            Expression<Func<T, bool>> filter = null,
            Expression<Func<T, IQueryable<T>>> select = null,
            Expression<Func<T, T>> selector = null,
            Func<IQueryable<T>,
            IOrderedQueryable<T>> orderBy = null,
            Expression<Func<T, bool>> includeFilter = null,
            string includeProperties = null,
            bool ignoreQueryFilters = false,
            int? skip = null,
            int? take = null )
        {
            IQueryable<T> query = dbSet.AsNoTracking();

            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }
            if (includeFilter is not null)
            {
                query = query.Include(includeFilter);
            }

            if (select != null)
            {
                query = (IQueryable<T>)query.Select(select);
            }
            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (includeProperties != null)
            {
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' },
                    StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty)/*.IgnoreQueryFilters()*/;
                }
            }

            if (skip.HasValue)
            {
                query = query.Skip(skip.Value);
            }

            if (take.HasValue)
            {
                query = query.Take(take.Value);
            }

            if (orderBy != null)
            {

                return orderBy(query).ToList();
            }

            return query.ToList();
        }





        public async Task<bool> ExistAsync(int id)
        {
            var entity = await dbSet.FindAsync(id);
            return entity is not null;
        }

        public async Task<bool> ExistAsync(Expression<Func<T, bool>> filter = null, string includeProperties = null, bool ignoreQueryFilters = false
          )
        {
            IQueryable<T> query = dbSet.AsNoTracking();
            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }
            if (filter != null)
            {
                query = query.Where(filter);
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

        public async Task<T> GetFirstOrDefaultAsync(Expression<Func<T, bool>> filter = null,
            string includeProperties = null, bool ignoreQueryFilters = false
              , Func<IQueryable<T>,
            IOrderedQueryable<T>> orderBy = null
            )
        {
            IQueryable<T> query = dbSet.AsNoTracking();
            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (includeProperties != null)
            {
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' },
                    StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty);
                }
            }
            if (orderBy != null)
            {

                return await orderBy(query).FirstOrDefaultAsync();
            }
            return await query.FirstOrDefaultAsync();
        }

        public async Task<T> AddAsync(T entity)
        {
            await dbSet.AddAsync(entity);
            return entity;
        }
        public async Task<T> AddOrUpdate(T entity)
        {
            if (_context.Entry(entity).State == EntityState.Detached)
                await dbSet.AddAsync(entity);
            return entity;
        }
        public async Task<IEnumerable<T>> AddRangeAsync(IEnumerable<T> entities)
        {
            await dbSet.AddRangeAsync(entities);
            return entities;
        }


        public async Task<T> Remove(T entity)
        {
            //dbSet.Remove(entity);

            string userId = _accessor!.HttpContext == null ? "" : _accessor!.HttpContext!.User.GetUserId();

            var obj = entity.GetType();
            PropertyInfo DeleteDateProp = obj.GetProperty("DeleteDate")!;
            PropertyInfo DeleteByProp = obj.GetProperty("DeleteBy")!;
            PropertyInfo IsDeletedProp = obj.GetProperty("IsDeleted")!;

            DeleteDateProp.SetValue(entity, new DateTime().Now(), null);
            DeleteByProp.SetValue(entity, userId, null);
            IsDeletedProp.SetValue(entity, true, null);

            dbSet.Update(entity);

            return entity;
        }

        public T Update(T entity)
        {
            dbSet.Update(entity);
            return entity;
        }


        public async Task<int> CountAsync(Expression<Func<T, bool>> filter = null, bool ignoreQueryFilters = false, string includeProperties = null)
        {
            IQueryable<T> query = dbSet.AsNoTracking();
            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }
            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (includeProperties != null)
            {
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' },
                    StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty);
                }
            }

            return await query.CountAsync();
        }
        public int Count(Expression<Func<T, bool>> filter = null, bool ignoreQueryFilters = false, string includeProperties = null)
        {
            IQueryable<T> query = dbSet.AsNoTracking();
            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }
            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (includeProperties != null)
            {
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' },
                    StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty);
                }
            }
            return query.Count();
        }
        public async Task<bool> AnyAsync(Expression<Func<T, bool>> filter = null, bool ignoreQueryFilters = false)
        {
            IQueryable<T> query = dbSet.AsNoTracking();
            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }
            if (filter != null)
            {
                query = query.Where(filter);
            }
            return await query.AnyAsync();
        }
        public void Attach(T entity)
        {

            dbSet.Attach(entity);
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
            string userId = _accessor!.HttpContext == null ? "" : _accessor!.HttpContext!.User.GetUserId();

            foreach (var entity in entities)
            {

                var obj = entity.GetType();
                PropertyInfo DeleteDateProp = obj.GetProperty("DeleteDate")!;
                PropertyInfo DeleteByProp = obj.GetProperty("DeleteBy")!;
                PropertyInfo IsDeletedProp = obj.GetProperty("IsDeleted")!;

                DeleteDateProp.SetValue(entity, new DateTime().Now(), null);
                DeleteByProp.SetValue(entity, userId, null);
                IsDeletedProp.SetValue(entity, true, null);
            }

            dbSet.UpdateRange(entities);

        }


        public void UpdateRange(IEnumerable<T> entities) =>
            dbSet.UpdateRange(entities);

        public T GetFirstOrDefault(Expression<Func<T, bool>> filter = null, string includeProperties = null, bool ignoreQueryFilters = false, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null)
        {
            IQueryable<T> query = dbSet.AsNoTracking();
            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (includeProperties != null)
            {
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' },
                    StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty);
                }
            }
            if (orderBy != null)
            {

                return orderBy(query).FirstOrDefault();
            }
            return query.FirstOrDefault();
        }

        public IEnumerable<T> AddRange(IEnumerable<T> entities)
        {
            dbSet.AddRange(entities);
            return entities;
        }
        public EntityEntry<T> Attached(T entity) =>
            dbSet.Attach(entity);

        public void AttachRange(IEnumerable<T> entities) =>
            dbSet.AttachRange(entities);
        public void UpdateRange2(IEnumerable<T> entities)
        {
            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
            dbSet.UpdateRange(entities);
            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
        public T HardRemove(T entity)
        {
            var res = dbSet.Remove(entity);
            return entity;
        }

        public void HardRemoveRange(IEnumerable<T> entities)
        {
            dbSet.RemoveRange(entities);
        }
    }

}
