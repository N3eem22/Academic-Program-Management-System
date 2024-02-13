using Generic.DataAccess.Repositories;
using Generic.Domian.Constants;
using Generic.Domian.Interfaces;
using Generic.Domian.Models.Permissions;
using Generic.Services.IServices.Seeds;
using Microsoft.AspNetCore.Identity;
using System.Data;

namespace Generic.Services.Services.Seeds
{
    public class DbInitSeedsService : IDbInitSeedsService
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public DbInitSeedsService(IUnitOfWork unitOfWork, RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _unitOfWork = unitOfWork;
        }
        public async Task Initialize()
        {
            if (!await _unitOfWork.UsersRepository.AnyAsync())
            {
                await SeedRollesAsync();
                await SeedSuperAdminUserAsync();
                await SeedAdminUserAsync();
            }
        }

        public async Task SeedRollesAsync()
        {
            if (!_roleManager.Roles.Any())
            {
                await _roleManager.CreateAsync(new IdentityRole() { Name = Roles.SuperAdmin });
                await _roleManager.CreateAsync(new IdentityRole() { Name = Roles.Admin });
                await _roleManager.CreateAsync(new IdentityRole() { Name = Roles.User });
            }
        }
        public async Task SeedSuperAdminUserAsync()
        {
            var password = "Super$123";
            var superAdmin = new ApplicationUser
            {
                FullName = "مدير النظام",
                Email = "SuperAdmin@mail.com",
                UserName = "SuperAdmin",
                EmailConfirmed = true,
                PhoneNumber = "01000000000",
                NormalizedEmail = "SuperAdmin@mail.com",
                NormalizedUserName = "SuperAdmin",
                PhoneNumberConfirmed = true,
            };

            await _userManager.CreateAsync(superAdmin, password);
            await _userManager.AddToRolesAsync(superAdmin, typeof(Roles).GetFields().Select(role => role.Name));
        }
        public async Task SeedAdminUserAsync()
        {
            var password = "adminUser$123";
            var adminUser = new ApplicationUser
            {
                FullName = "مدير الموقع",
                Email = "adminUser@domain.com",
                UserName = "adminUser",
                EmailConfirmed = true,
                PhoneNumber = "01000000001",
                NormalizedEmail = "adminUser@domain.com",
                NormalizedUserName = "adminUser",
                PhoneNumberConfirmed = true,
            };

            await _userManager.CreateAsync(adminUser, password);
            await _userManager.AddToRolesAsync(adminUser, typeof(Roles).GetFields().Where(x => x.Name != Roles.SuperAdmin).Select(role => role.Name));
        }
    }
}
