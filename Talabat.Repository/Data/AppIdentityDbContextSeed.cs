using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talabat.Core;
using Talabat.Core.Entities.Identity;
using Talabat.Core.Entities.Permissions;

namespace Grad.Repository.Data
{

    public static class AppIdentityDbContextSeed
    {
        public static async Task SeedUseAsync(UserManager<AppUser> manager)
        {

            if (!manager.Users.Any())
            {
                var User = new AppUser()
                {
                    DisplayName = "Mohamed Nasr",
                    Email = "MohammedNasr74@gmil.com",
                    UserName = "MohamedNasr7411",
                    PhoneNumber = "01157527644",
                    Role = "SuperAdmin"

                };

                await manager.CreateAsync(User, "Pa$$w0rd1");

                await manager.AddToRoleAsync(User, "SuperAdmin");
            }

        }

        public static async Task SeedRolesAsync(RoleManager<IdentityRole> Role)
        {
            var Roles = new[] { "SuperAdmin", "Admin", "User" };

            foreach (var role in Roles)
            {
                if (!await Role.RoleExistsAsync(role))
                {


                    await Role.CreateAsync(new IdentityRole(role));
                }
            }


        }
    }
}
