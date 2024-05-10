using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core;
using Talabat.Core.Entities;
using Talabat.Core.Repositories;
using Talabat.Repository.Data;
using System.Security.AccessControl;
using Talabat.Core.Entities.Logs;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Talabat.Repository.Data.Talabat.Repository.Data;

namespace Talabat.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private Hashtable _repositories;
        private readonly GradContext _context;

        public UnitOfWork(GradContext context)
        {
            _context = context;
            _repositories = new Hashtable();
        }

        public async Task<int> CompleteAsync(ClaimsPrincipal? userPrincipal = null)
        {
            // Default or fallback email if ClaimsPrincipal is not provided or user is not authenticated
            string userEmail = "UnknownUser";
            if (userPrincipal != null && userPrincipal.Identity?.IsAuthenticated == true)
            {
                userEmail = userPrincipal.FindFirstValue(ClaimTypes.Email) ?? userEmail;
            }

            var modifiedEntities = _context.ChangeTracker.Entries()
                .Where(e => e.State == EntityState.Added  || e.State == EntityState.Modified || e.State == EntityState.Deleted)
                .ToList();

            foreach (var modifiedEntity in modifiedEntities)
            {
                string actionDescription = GetActionDescription(modifiedEntity.State);
                var auditLog = new ApplicationLog
                {
                    UserEmail = userEmail,
                    EntityName = modifiedEntity.Entity.GetType().Name,
                    Action = actionDescription,
                    Timestamp = DateTime.UtcNow,
                    Changes = GetChanges(modifiedEntity)
                };
                var entityEntry = await _context.Set<ApplicationLog>().AddAsync(auditLog);
            }

            return await _context.SaveChangesAsync();
        }


        public async ValueTask DisposeAsync()
        {
            await _context.DisposeAsync();
        }

        public IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity
        {
            var type = typeof(TEntity).Name;
            if (!_repositories.Contains(type))
            {
                var Repository = new GenericRepository<TEntity>(_context);
                _repositories.Add(type, Repository);
            }
            return _repositories[type] as IGenericRepository<TEntity>;
          
        }
        private static string GetChanges(EntityEntry entity)
        {
            var changes = new StringBuilder();
            switch (entity.State)
            {
                case EntityState.Modified:
                    foreach (var property in entity.OriginalValues.Properties)
                    {
                        var originalValue = entity.OriginalValues[property]?.ToString();
                        var currentValue = entity.CurrentValues[property]?.ToString();
                        if (originalValue != currentValue)
                        {
                            changes.AppendLine($"{property.Name}: From '{originalValue}' to '{currentValue}'");
                        }
                    }
                    break;
                case EntityState.Added:
                    foreach (var property in entity.CurrentValues.Properties)
                    {
                        var currentValue = entity.CurrentValues[property]?.ToString();
                        changes.AppendLine($"{property.Name}: Set to '{currentValue}'");
                    }
                    break;
                case EntityState.Deleted:
                    foreach (var property in entity.OriginalValues.Properties)
                    {
                        var originalValue = entity.OriginalValues[property]?.ToString();
                        changes.AppendLine($"{property.Name}: Deleted value '{originalValue}'");
                    }
                    break;
            }
            return changes.ToString();
        }
        private string GetActionDescription(EntityState state)
        {
            switch (state)
            {
                case EntityState.Added:
                    return "اضافة";
                case EntityState.Modified:
                    return "تعديل";
                case EntityState.Deleted:
                    return "حذف";
                default:
                    return "غير محدد";
            }
        }
        public DbContext GetDbContext()
        {
            return _context;
        }


    }

}
