using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Identity;
using Grad.Core.Specifications;
using Grad.Core.Specifications.Enities_Spec;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Entities;
using Talabat.Core.Entities.Lockups;
namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UniversityController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IdentityHelper _IdentityHelper;

        public UniversityController(IMapper mapper, IUnitOfWork unitOfWork , IdentityHelper identityHelper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _IdentityHelper = identityHelper;
        }

        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<UniversityDTO>>> GetAllUniversities()
        //{
        //    var universities = await _unitOfWork.Repository<University>().GetAllAsync();
        //    universities = universities.Where(u => !u.IsDeleted);

        //    var universityDTOs = _mapper.Map<IEnumerable<University>, IEnumerable<UniversityDTO>>(universities);
        //    return Ok(universityDTOs);
        //}

        [HttpGet]
        [Authorize(Roles = "Admin,SuperAdmin,User")]
        [ProducesResponseType(typeof(UniversityDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<IEnumerable<UniversityDTO>>> UserUniversities()
        {
            var role = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role)?.Value;

            if (role == "SuperAdmin")
            {
                var universities = await _unitOfWork.Repository<University>().GetAllAsync();
                universities = universities.Where(u => !u.IsDeleted);

                var universityDTOs = _mapper.Map<IEnumerable<University>, IEnumerable<UniversityDTO>>(universities);
                return Ok(universityDTOs);
            }
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                var userUniversities = _IdentityHelper.GetUserUniversities(userId);
               
            if (!userUniversities.Any())
                {

                    return NotFound(new { Message = $"No universities found for user ID {userId}." });
                }
         
                var spec = new UniwithUsersSpecifications(userUniversities);
                var Unis = await _unitOfWork.Repository<University>().GetAllWithSpecAsync(spec);
                     await Console.Out.WriteLineAsync("sddsdsdsd      "+ Unis.Count);
            var UniDTO = _mapper.Map<IEnumerable<University>, IEnumerable<UniversityDTO>>(Unis);

                return Ok(UniDTO);
            
           
        }
        //[HttpGet("{id}")]
        //[ProducesResponseType(typeof(UniversityDTO), 200)]
        //[ProducesResponseType(typeof(ApiResponse), 404)]
        //public async Task<ActionResult<UniversityDTO>> GetUniversityById(int id)
        //{
        //    var university = await _unitOfWork.Repository<University>().GetByIdAsync(id);
        //    if (university == null || university.IsDeleted)
        //        return NotFound(new ApiResponse(404));
            
        //    var universityDTO = _mapper.Map<University, UniversityDTO>(university);
        //    return Ok(universityDTO);
        //}

        [HttpPost]
        public async Task<ActionResult<UniversityReq>> AddUniversity(UniversityReq universityReq)
        {
            bool exists = await _unitOfWork.Repository<University>().ExistAsync(
                x => x.Name.Trim().ToUpper() == universityReq.Name.Trim().ToUpper() && !x.IsDeleted);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var university = _mapper.Map<UniversityReq, University>(universityReq);
            await _unitOfWork.Repository<University>().Add(university);
            var result = await _unitOfWork.CompleteAsync(User) > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<UniversityReq>> UpdateUniversity(int id, UniversityReq universityReq)
        {
            var university = await _unitOfWork.Repository<University>().GetByIdAsync(id);
            if (university == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<University>().ExistAsync(
                x => x.Name.Trim().ToUpper() == universityReq.Name.Trim().ToUpper() && x.Id != id && !x.IsDeleted);
            if (exists)
                return StatusCode(409, new ApiResponse(409));

            university.Name = universityReq.Name;
            university.Location = universityReq.Location;


            _unitOfWork.Repository<University>().Update(university);
            var result = await _unitOfWork.CompleteAsync(User) > 0;
            var message = result ? AppMessage.Updated : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUniversity(int id)
        {
            var university = await _unitOfWork.Repository<University>().GetByIdAsync(id);
            if (university == null)
                return NotFound(new ApiResponse(404));
          await  _unitOfWork.Repository<University>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync(User) > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
