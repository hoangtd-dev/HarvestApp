using MediatR;

namespace Harvest.Application.Interfaces
{
    public interface ICustomRequest<TResponse> : IRequest<TResponse> { }
}
