using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TheAcademicDegreeController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public TheAcademicDegreeController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TheAcademicDegreeDTO>>> GetAllTheAcademicDegrees(int? UniversityId)
        {
            var spec = new TheAcademicDegreewithUniSpecifications(UniversityId);
            var academicDegrees = await _unitOfWork.Repository<TheAcademicDegree>().GetAllWithSpecAsync(spec);
            var academicDegreeDTOs = _mapper.Map<IEnumerable<TheAcademicDegree>, IEnumerable<TheAcademicDegreeDTO>>(academicDegrees);
            return Ok(academicDegreeDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TheAcademicDegreeDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<TheAcademicDegreeDTO>> GetTheAcademicDegreeById(int id)
        {
            var spec = new TheAcademicDegreewithUniSpecifications(id);
            var academicDegree = await _unitOfWork.Repository<TheAcademicDegree>().GetEntityWithSpecAsync(spec);
            if (academicDegree == null)
                return NotFound(new ApiResponse(404));
            var academicDegreeDTO = _mapper.Map<TheAcademicDegree, TheAcademicDegreeDTO>(academicDegree);
            return Ok(academicDegreeDTO);
        }

        [HttpPost]
        public async Task<ActionResult<TheAcademicDegreeReq>> AddTheAcademicDegree(TheAcademicDegreeReq academicDegreeReq)
        {
            bool exists = await _unitOfWork.Repository<TheAcademicDegree>().ExistAsync(
                x => x.AcademicDegreeName.Trim().ToUpper() == academicDegreeReq.AcademicDegreeName.Trim().ToUpper() &&
                     x.UniversityId == academicDegreeReq.UniversityId);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var academicDegree = _unitOfWork.Repository<TheAcademicDegree>().Add(_mapper.Map<TheAcademicDegreeReq, TheAcademicDegree>(academicDegreeReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TheAcademicDegreeReq>> UpdateTheAcademicDegree(int id, string updatedAcademicDegreeName)
        {
            var academicDegree = await _unitOfWork.Repository<TheAcademicDegree>().GetByIdAsync(id);
            if (academicDegree == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<TheAcademicDegree>().ExistAsync(
                x => x.AcademicDegreeName.Trim().ToUpper() == updatedAcademicDegreeName.Trim().ToUpper() &&
                     x.UniversityId == academicDegree.UniversityId);
            if (!exists)
            {
                academicDegree.AcademicDegreeName = updatedAcademicDegreeName;
                _unitOfWork.Repository<TheAcademicDegree>().Update(academicDegree);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTheAcademicDegree(int id)
        {
            var academicDegree = await _unitOfWork.Repository<TheAcademicDegree>().GetByIdAsync(id);
            if (academicDegree == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<TheAcademicDegree>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
