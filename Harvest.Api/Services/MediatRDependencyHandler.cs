using Harvest.Application.Interfaces;

namespace Harvest.Api.Services
{
    public static class MediatRDependencyHandler
    {
        public static IServiceCollection RegisterRequestHandlers(
            this IServiceCollection services)
        {
            return services
                .AddMediatR(cf => cf.RegisterServicesFromAssembly(typeof(ICustomRequest<>).Assembly));
        }
    }
}
