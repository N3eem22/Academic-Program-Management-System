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
    public class SystemTypeController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public SystemTypeController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SystemTypeDTO>>> GetAllSystemTypes(int? UniversityId)
        {
            var spec = new SystemTypewithUniSpecifications(UniversityId);
            var systemTypes = await _unitOfWork.Repository<SystemType>().GetAllWithSpecAsync(spec);
            var systemTypeDTOs = _mapper.Map<IEnumerable<SystemType>, IEnumerable<SystemTypeDTO>>(systemTypes);
            return Ok(systemTypeDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(SystemTypeDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<SystemTypeDTO>> GetSystemTypeById(int id)
        {
            var spec = new SystemTypewithUniSpecifications(id);
            var systemType = await _unitOfWork.Repository<SystemType>().GetEntityWithSpecAsync(spec);
            if (systemType == null)
                return NotFound(new ApiResponse(404));
            var systemTypeDTO = _mapper.Map<SystemType, SystemTypeDTO>(systemType);
            return Ok(systemTypeDTO);
        }

        [HttpPost]
        public async Task<ActionResult<SystemTypeReq>> AddSystemType(SystemTypeReq systemTypeReq)
        {
            bool exists = await _unitOfWork.Repository<SystemType>().ExistAsync(
                x => x.SystemName.Trim().ToUpper() == systemTypeReq.SystemName.Trim().ToUpper() &&
                     x.UniversityId == systemTypeReq.UniversityId);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var systemType = _unitOfWork.Repository<SystemType>().Add(_mapper.Map<SystemTypeReq, SystemType>(systemTypeReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<SystemTypeReq>> UpdateSystemType(int id, string updatedSystemName)
        {
            var systemType = await _unitOfWork.Repository<SystemType>().GetByIdAsync(id);
            if (systemType == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<SystemType>().ExistAsync(
                x => x.SystemName.Trim().ToUpper() == updatedSystemName.Trim().ToUpper() &&
                     x.UniversityId == systemType.UniversityId);
            if (!exists)
            {
                systemType.SystemName = updatedSystemName;
                _unitOfWork.Repository<SystemType>().Update(systemType);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSystemType(int id)
        {
            var systemType = await _unitOfWork.Repository<SystemType>().GetByIdAsync(id);
            if (systemType == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<SystemType>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
