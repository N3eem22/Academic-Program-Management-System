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
    public class EditTheStudentLevelController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public EditTheStudentLevelController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EditTheStudentLevelDTO>>> GetAllEditTheStudentLevels(int? UniversityId)
        {
            var spec = new EditTheStudentLevelwithUniSpecifications(UniversityId);
            var editTheStudentLevels = await _unitOfWork.Repository<EditTheStudentLevel>().GetAllWithSpecAsync(spec);
            var editTheStudentLevelDTOs = _mapper.Map<IEnumerable<EditTheStudentLevel>, IEnumerable<EditTheStudentLevelDTO>>(editTheStudentLevels);
            return Ok(editTheStudentLevelDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(EditTheStudentLevelDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<EditTheStudentLevelDTO>> GetEditTheStudentLevelById(int id)
        {
            var spec = new EditTheStudentLevelwithUniSpecifications(id);
            var editTheStudentLevel = await _unitOfWork.Repository<EditTheStudentLevel>().GetEntityWithSpecAsync(spec);
            if (editTheStudentLevel == null)
                return NotFound(new ApiResponse(404));
            var editTheStudentLevelDTO = _mapper.Map<EditTheStudentLevel, EditTheStudentLevelDTO>(editTheStudentLevel);
            return Ok(editTheStudentLevelDTO);
        }

        [HttpPost]
        public async Task<ActionResult<EditTheStudentLevelReq>> AddEditTheStudentLevel(EditTheStudentLevelReq editTheStudentLevelReq)
        {
            bool exists = await _unitOfWork.Repository<EditTheStudentLevel>().ExistAsync(
                x => x.editTheStudentLevel.Trim().ToUpper() == editTheStudentLevelReq.editTheStudentLevel.Trim().ToUpper() &&
                     x.UniversityId == editTheStudentLevelReq.UniversityId && !x.IsDeleted);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var editTheStudentLevel = _unitOfWork.Repository<EditTheStudentLevel>().Add(_mapper.Map<EditTheStudentLevelReq, EditTheStudentLevel>(editTheStudentLevelReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<EditTheStudentLevelReq>> UpdateEditTheStudentLevel(int id, string updatedEditTheStudentLevel)
        {
            var editTheStudentLevel = await _unitOfWork.Repository<EditTheStudentLevel>().GetByIdAsync(id);
            if (editTheStudentLevel == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<EditTheStudentLevel>().ExistAsync(
                x => x.editTheStudentLevel.Trim().ToUpper() == updatedEditTheStudentLevel.Trim().ToUpper() &&
                     x.UniversityId == editTheStudentLevel.UniversityId);
            if (!exists)
            {
                editTheStudentLevel.editTheStudentLevel = updatedEditTheStudentLevel;
                _unitOfWork.Repository<EditTheStudentLevel>().Update(editTheStudentLevel);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEditTheStudentLevel(int id)
        {
            var editTheStudentLevel = await _unitOfWork.Repository<EditTheStudentLevel>().GetByIdAsync(id);
            if (editTheStudentLevel == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<EditTheStudentLevel>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
