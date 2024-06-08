using Grad.Core.Entities.Identity;
using Microsoft.EntityFrameworkCore;
using Talabat.Core.Entities.Entities;
using Talabat.Repository.Data;
using Talabat.Repository.Data.Talabat.Repository.Data;

namespace Grad.APIs.Helpers
{
    public class IdentityHelper
    {
            private readonly GradContext _dbContext;

        public IdentityHelper(GradContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void AssignUserToFaculties(string userId, List<int> facultyIds)
        {
            foreach (var facultyId in facultyIds)
            {
                var appUserFaculty = new AppUserFaculty
                {
                    AppUserId = userId,
                    FacultyId = facultyId
                };

                _dbContext.Set<AppUserFaculty>().Add(appUserFaculty);
            }

            _dbContext.SaveChanges();
        }


        public void AssignUserToUniversities(string userId, List<int> universityIds)
        {
            foreach (var universityId in universityIds)
            {
                var appUserUniversity = new AppUserUni
                {
                    AppUserId = userId,
                    UniversityId = universityId
                };

                _dbContext.Set<AppUserUni>().Add(appUserUniversity);
            }

            _dbContext.SaveChanges();
        }

        public List<int> GetUserFaculties(string userId)
        {
            var userFaculties = _dbContext.Set<AppUserFaculty>()
                                        .Where(uf => uf.AppUserId == userId)
                                        .Select(uf => uf.FacultyId)
                                        .ToList();

            return userFaculties;
        }

        public List<string> GetUserFacultiesName(string userId)
        {
            var userFaculties = (from uf in _dbContext.Set<AppUserFaculty>()
                                 join f in _dbContext.Set<Faculty>() on uf.FacultyId equals f.Id
                                 where uf.AppUserId == userId
                                 select f.FacultyName)
                                .ToList();

            return userFaculties;
        }


        public List<string> GetUserUniversitiesName(string userId)
        {
            var userUniversities = (from uu in _dbContext.Set<AppUserUni>()
                                    join u in _dbContext.Set<University>() on uu.UniversityId equals u.Id
                                    where uu.AppUserId == userId
                                    select u.Name)
                                   .ToList();

            return userUniversities;
        }


        public List<int> GetUserUniversities(string userId)
        {
            var userUniversities = _dbContext.Set<AppUserUni>()
                                            .Where(uu => uu.AppUserId == userId)
                                            .Select(uu => uu.UniversityId)
                                            .ToList();

            return userUniversities;
        }



        public async Task UpdateUserFacultiesAsync(string userId, List<int> newFacultyIds)
        {
            var userFacultiesToRemove = await _dbContext.Set<AppUserFaculty>()
                                                        .Where(uf => uf.AppUserId == userId)
                                                        .ToListAsync();
            _dbContext.Set<AppUserFaculty>().RemoveRange(userFacultiesToRemove);

            foreach (var facultyId in newFacultyIds)
            {
                var appUserFaculty = new AppUserFaculty
                {
                    AppUserId = userId,
                    FacultyId = facultyId
                };

                _dbContext.Set<AppUserFaculty>().Add(appUserFaculty);
            }

            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateUserUniversitiesAsync(string userId, List<int> newUniversityIds)
        {
            var userUniversitiesToRemove = await _dbContext.Set<AppUserUni>()
                                                          .Where(uu => uu.AppUserId == userId)
                                                          .ToListAsync();
            _dbContext.Set<AppUserUni>().RemoveRange(userUniversitiesToRemove);

            foreach (var universityId in newUniversityIds)
            {
                var appUserUniversity = new AppUserUni
                {
                    AppUserId = userId,
                    UniversityId = universityId
                };

                _dbContext.Set<AppUserUni>().Add(appUserUniversity);
            }

            await _dbContext.SaveChangesAsync();
        }




        public async Task<bool> CheckUserFacultyAccessAsync(string userId, int? facultyId)
        {
            var hasAccess = await _dbContext.Set<AppUserFaculty>()
                                            .AnyAsync(uf => uf.AppUserId == userId && uf.FacultyId == facultyId);
            return hasAccess;
        }

        public async Task<bool> CheckUserUniversityAccessAsync(string userId, int? universityId)
        {
            var hasAccess = await _dbContext.Set<AppUserUni>()
                                            .AnyAsync(uu => uu.AppUserId == userId && uu.UniversityId == universityId);
            return hasAccess;
        }


        public async Task<int?> GetUniversityIdByProgramIdAsync(int programId)
        {
            var program = await _dbContext.Programs
                                           .Include(p => p.Faculty)
                                           .ThenInclude(f => f.University)
                                           .FirstOrDefaultAsync(p => p.Id == programId);

            return program?.Faculty?.UniversityId;
        }


        public async Task<int?> GetFacultyIdByProgramIdAsync(int programId)
        {
            var program = await _dbContext.Programs
                                           .Include(p => p.Faculty)
                                           .FirstOrDefaultAsync(p => p.Id == programId);

            return program?.FacultyId;
        }


        public async Task<int?> GetUniversityIdByFacultyIdAsync(int facultyId)
        {
            var faculty = await _dbContext.Faculties
                                           .FirstOrDefaultAsync(f => f.Id == facultyId);

            return faculty?.UniversityId;
        }




    }
}
    

