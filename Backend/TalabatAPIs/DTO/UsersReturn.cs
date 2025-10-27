using System.ComponentModel.DataAnnotations;

namespace Grad.APIs.DTO
{
    public class UsersReturn
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string DisplayName { get; set; }
        public string PhoneNumber { get; set; }
     //   public string Password { get; set; }
        public string Role { get; set; }

        public List<string> Faculties { get; set; }

        public List<string> Universities { get; set; }
    }
}
