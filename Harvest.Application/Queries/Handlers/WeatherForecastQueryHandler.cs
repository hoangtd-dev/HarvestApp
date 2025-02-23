using MediatR;

namespace Harvest.Application.Queries.Handlers
{
    public class WeatherForecastQueryHandler : IRequestHandler<WeatherForecastQuery, IEnumerable<WeatherForecastApiModel>>
    {

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public Task<IEnumerable<WeatherForecastApiModel>> Handle(WeatherForecastQuery request, CancellationToken cancellationToken)
        {
            return Task.FromResult(
                Enumerable.Range(1, 5).Select(index => new WeatherForecastApiModel
                {
                    Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                    TemperatureC = Random.Shared.Next(-20, 55),
                    Summary = Summaries[Random.Shared.Next(Summaries.Length)]
                })
            );
        }
    }
}
