using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Lockups;
using Grad.Core.Specifications;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DivisionTypeController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public DivisionTypeController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DivisionTypeDTO>>> GetAllDivisionTypes(int? UniversityId)
        {
            var spec = new DivisionTypewithUniSpecifications(UniversityId);
            var divisionTypes = await _unitOfWork.Repository<DivisionType>().GetAllWithSpecAsync(spec);
            var divisionTypeDTOs = _mapper.Map<IEnumerable<DivisionType>, IEnumerable<DivisionTypeDTO>>(divisionTypes);
            return Ok(divisionTypeDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(DivisionTypeDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<DivisionTypeDTO>> GetDivisionTypeById(int id)
        {
            var spec = new DivisionTypewithUniSpecifications(id);
            var divisionType = await _unitOfWork.Repository<DivisionType>().GetEntityWithSpecAsync(spec);
            if (divisionType == null)
                return NotFound(new ApiResponse(404));
            var divisionTypeDTO = _mapper.Map<DivisionType, DivisionTypeDTO>(divisionType);
            return Ok(divisionTypeDTO);
        }

        [HttpPost]
        public async Task<ActionResult<DivisionTypeReq>> AddDivisionType(DivisionTypeReq divisionTypeReq)
        {
            bool exists = await _unitOfWork.Repository<DivisionType>().ExistAsync(
                x => x.Division_Type.Trim().ToUpper() == divisionTypeReq.Division_Type.Trim().ToUpper() &&
                     x.UniversityId == divisionTypeReq.UniversityId && !x.IsDeleted);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var divisionType = _unitOfWork.Repository<DivisionType>().Add(_mapper.Map<DivisionTypeReq, DivisionType>(divisionTypeReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<DivisionTypeReq>> UpdateDivisionType(int id, string updatedDivisionType)
        {
            var divisionType = await _unitOfWork.Repository<DivisionType>().GetByIdAsync(id);
            if (divisionType == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<DivisionType>().ExistAsync(
                x => x.Division_Type.Trim().ToUpper() == updatedDivisionType.Trim().ToUpper() &&
                     x.UniversityId == divisionType.UniversityId && !x.IsDeleted);
            if (!exists)
            {
                divisionType.Division_Type = updatedDivisionType;
                _unitOfWork.Repository<DivisionType>().Update(divisionType);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDivisionType(int id)
        {
            var divisionType = await _unitOfWork.Repository<DivisionType>().GetByIdAsync(id);
            if (divisionType == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<DivisionType>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
