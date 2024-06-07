using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications;
using Grad.Core.Specifications.Enities_Spec;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Entities;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacultyController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IdentityHelper _IdentityHelper;

        public FacultyController(IMapper mapper, IUnitOfWork unitOfWork, IdentityHelper identityHelper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _IdentityHelper = identityHelper;
        }

        [HttpGet]
        [Authorize(Roles = "Admin,SuperAdmin,User")]
        [ProducesResponseType(typeof(FacultyDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<IEnumerable<FacultyDTO>>> GetAllFaculties(int? UniversityId)
        {
            
            var role = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role)?.Value;



            if (role == "SuperAdmin")
            {

                var specWithUNiID = new FacultywithUniSpecifications(UniversityId);
                var faculty = await _unitOfWork.Repository<Faculty>().GetAllWithSpecAsync(specWithUNiID);
                var facultyDTO = _mapper.Map<IEnumerable<Faculty>, IEnumerable<FacultyDTO>>(faculty);
                return Ok(facultyDTO);
            }
            if (role == "Admin")
            {

                var specWithUNiID = new FacultywithUniSpecifications(UniversityId);
                var faculty = await _unitOfWork.Repository<Faculty>().GetAllWithSpecAsync(specWithUNiID);
                var facultyDTO = _mapper.Map<IEnumerable<Faculty>, IEnumerable<FacultyDTO>>(faculty);
                return Ok(facultyDTO);
            }
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var userFaculties = _IdentityHelper.GetUserFaculties(userId);
            if (!userFaculties.Any())
            {
                return NotFound(new { Message = $"No Faculties found for user ID {userId}." });
            }

            var spec = new FacultywithUniSpecifications(userFaculties);
            var faculties = await _unitOfWork.Repository<Faculty>().GetAllWithSpecAsync(spec);
            var facultyDTOs = _mapper.Map<IEnumerable<Faculty>, IEnumerable<FacultyDTO>>(faculties);

            return Ok(facultyDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(FacultyDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<FacultyDTO>> GetFacultyById(int id)
        {
            var spec = new FacultywithUniSpecifications(id);
            var faculty = await _unitOfWork.Repository<Faculty>().GetEntityWithSpecAsync(spec);
            if (faculty == null)
                return NotFound(new ApiResponse(404));
            var facultyDTO = _mapper.Map<Faculty, FacultyDTO>(faculty);
            return Ok(facultyDTO);
        }

        [HttpPost]
        public async Task<ActionResult<FacultyReq>> AddFaculty(FacultyReq facultyReq)
        {
            bool exists = await _unitOfWork.Repository<Faculty>().ExistAsync(
                x => x.FacultyName.Trim().ToUpper() == facultyReq.FacultyName.Trim().ToUpper() &&
                     x.UniversityId == facultyReq.UniversityId && !x.IsDeleted);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var faculty = _unitOfWork.Repository<Faculty>().Add(_mapper.Map<FacultyReq, Faculty>(facultyReq));
            var result = await _unitOfWork.CompleteAsync(User) > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<FacultyReq>> UpdateFaculty(int id, string updatedFacultyName)
        {
            var faculty = await _unitOfWork.Repository<Faculty>().GetByIdAsync(id);
            if (faculty == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<Faculty>().ExistAsync(
                x => x.FacultyName.Trim().ToUpper() == updatedFacultyName.Trim().ToUpper() &&
                     x.UniversityId == faculty.UniversityId && !x.IsDeleted);
            if (!exists)
            {
                faculty.FacultyName = updatedFacultyName;
                _unitOfWork.Repository<Faculty>().Update(faculty);
                var result = await _unitOfWork.CompleteAsync(User) > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFaculty(int id)
        {
            var faculty = await _unitOfWork.Repository<Faculty>().GetByIdAsync(id);
            if (faculty == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<Faculty>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync(User) > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
