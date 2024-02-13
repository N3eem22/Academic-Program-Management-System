
using Generic.Domian.Dtos.Requests.Auth;
using Generic.Domian.Dtos.Responses.Auth;

namespace Generic.Services.IServices.Permissions
{
    public interface IAuthService
    {
        Task<AuthResponse> LoginAsync(GetTokenRequest model);
    }
}
