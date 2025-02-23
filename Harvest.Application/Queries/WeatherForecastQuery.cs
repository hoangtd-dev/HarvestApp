using Harvest.Application.Interfaces;

namespace Harvest.Application.Queries
{
    public class WeatherForecastQuery : ICustomRequest<IEnumerable<WeatherForecastApiModel>>
    {
    }
}
