using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SemestersController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public SemestersController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SemestersDTO>>> GetAllSemesters(int? UniversityId)
        {
            var spec = new SemesterswithUniSpecifications(UniversityId);
            var semesters = await _unitOfWork.Repository<Semesters>().GetAllWithSpecAsync(spec);

            var semestersDTO = _mapper.Map<IEnumerable<Semesters>, IEnumerable<SemestersDTO>>(semesters);

            return Ok(semestersDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(SemestersDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<SemestersDTO>> GetSemesterById(int id)
        {
            var spec = new SemesterswithUniSpecifications(id);
            var semester = await _unitOfWork.Repository<Semesters>().GetEntityWithSpecAsync(spec);

            if (semester == null)
                return NotFound(new ApiResponse(404));

            var semesterDTO = _mapper.Map<Semesters, SemestersDTO>(semester);

            return Ok(semesterDTO);
        }

        [HttpPost]
        public async Task<ActionResult<SemestersReq>> AddSemester(SemestersReq semesterDTO)
        {
            bool exists = await _unitOfWork.Repository<Semesters>().ExistAsync(
                x => x.semesters.Trim().ToUpper() == semesterDTO.semesters.Trim().ToUpper() &&
                     x.UniversityId == semesterDTO.UniversityId);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var semester = _unitOfWork.Repository<Semesters>().Add(_mapper.Map<SemestersReq, Semesters>(semesterDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<SemestersReq>> UpdateSemester(int id, string updatedSemester)
        {
            var semester = await _unitOfWork.Repository<Semesters>().GetByIdAsync(id);

            if (semester == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<Semesters>().ExistAsync(
                x => x.semesters.Trim().ToUpper() == updatedSemester.Trim().ToUpper() && x.UniversityId == semester.UniversityId);

            if (!exists)
            {
                semester.semesters = updatedSemester;
                _unitOfWork.Repository<Semesters>().Update(semester);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSemester(int id)
        {
            var semester = await _unitOfWork.Repository<Semesters>().GetByIdAsync(id);

            if (semester == null)
                return NotFound(new ApiResponse(404));

            _unitOfWork.Repository<Semesters>().Delete(semester);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
