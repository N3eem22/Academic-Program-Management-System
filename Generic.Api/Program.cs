using Generic.Api;
using Generic.DataAccess;
using Generic.DataAccess.DataContexts;
using Generic.Services;
using Microsoft.EntityFrameworkCore;
using Serilog;

var configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .Build();

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(configuration)
    .CreateLogger();

try
{
    Log.Information("Application Starting");
    var builder = WebApplication.CreateBuilder(args);
    builder.Host.UseSerilog();
    builder.Services.DataAccessLayerConfigurations(builder.Configuration); //  mohamed Nasr
    builder.Services.ApiLayerConfigurations(builder.Configuration);
    builder.Services.ServicesLayerConfigurations();

    var app = builder.Build();
    app.ApiLayerAppConfigurations();
    #region Update - Datebase

    using var Scope = app.Services.CreateScope();
    // Group of servies lifetime scope 


    var Services = Scope.ServiceProvider;
    // service its self 





    var LoggerFactory = Services.GetRequiredService<ILoggerFactory>();

    try
    {
        var _dbContext = Services.GetRequiredService<GenericDbContext>();
        // Asc Clr for creating object from GenericDbContext
        await _dbContext.Database.MigrateAsync();
    }
    catch (Exception ex)
    {
        var Logger = LoggerFactory.CreateLogger<Program>();
        Logger.LogError(ex, "An error has been occuerd during apply migrations .");
    }

    #endregion

    app.Run();
}
catch (Exception ex) when (ex is not HostAbortedException)
{
    Log.Fatal(ex, "Application start-up failed");
}
finally
{
    Log.CloseAndFlush();
}

