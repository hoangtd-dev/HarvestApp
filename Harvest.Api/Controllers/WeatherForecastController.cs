using Harvest.Application.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Harvest.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, IMediator mediator)
    {
        _logger = logger;
        _mediator = mediator;
    }

    [HttpGet()]
    public async Task<IEnumerable<WeatherForecastApiModel>> Get()
    {
        return await _mediator.Send(new WeatherForecastQuery());
    }
}
