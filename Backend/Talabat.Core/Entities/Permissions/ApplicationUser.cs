using Microsoft.AspNetCore.Identity;
namespace Talabat.Core.Entities.Permissions
{
    [Table("Perm_ApplicationUser")]
    public class ApplicationUser : IdentityUser
    { 

        [MaxLength(100)]
        public string FullName { get; set; } 

    }
}
