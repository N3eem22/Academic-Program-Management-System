using Generic.Domian.Models.Shared;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System.Linq.Expressions;

namespace Generic.Domian.Extensions
{
    public static class ModelBuilderExtensions
    {
        public static DateTime StaticDate = new DateTime(2024, 1, 1);
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SharCurrency>()
            .HasData(
                new SharCurrency() { Id = 1, Name = "دولار أمريكي", InsertDate = StaticDate, UpdateDate = StaticDate },
                new SharCurrency() { Id = 2, Name = "دينار عراقي", InsertDate = StaticDate, UpdateDate = StaticDate },
                new SharCurrency() { Id = 3, Name = "يوان صيني", InsertDate = StaticDate, UpdateDate = StaticDate }
            );
        }

        public static void AddQueryFilterToAllEntitiesAssignableFrom<T>(this ModelBuilder modelBuilder, Expression<Func<T, bool>> expression)
        {
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                if (!typeof(T).IsAssignableFrom(entityType.ClrType))
                    continue;

                var parameterType = Expression.Parameter(entityType.ClrType);
                var expressionFilter = ReplacingExpressionVisitor.Replace(
                    expression.Parameters.Single(), parameterType, expression.Body);

                var currentQueryFilter = entityType.GetQueryFilter();
                if (currentQueryFilter != null)
                {
                    var currentExpressionFilter = ReplacingExpressionVisitor.Replace(
                        currentQueryFilter.Parameters.Single(), parameterType, currentQueryFilter.Body);
                    expressionFilter = Expression.AndAlso(currentExpressionFilter, expressionFilter);
                }

                var lambdaExpression = Expression.Lambda(expressionFilter, parameterType);
                entityType.SetQueryFilter(lambdaExpression);
            }
        }
    }
}
