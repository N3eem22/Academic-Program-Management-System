using Generic.Api;
using Generic.DataAccess;
using Generic.Services;
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
    builder.Services.DataAccessLayerConfigurations(builder.Configuration);
    builder.Services.ApiLayerConfigurations(builder.Configuration);
    builder.Services.ServicesLayerConfigurations();

    var app = builder.Build();
    app.ApiLayerAppConfigurations();

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

