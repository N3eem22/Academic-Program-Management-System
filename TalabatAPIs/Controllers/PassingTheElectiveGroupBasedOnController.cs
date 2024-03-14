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
    public class PassingTheElectiveGroupBasedOnController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public PassingTheElectiveGroupBasedOnController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassingTheElectiveGroupBasedOnDTO>>> GetAllPassingTheElectiveGroupsBasedOn(int? UniversityId)
        {
            var spec = new PassingTheElectiveGroupBasedOnwithUniSpecifications(UniversityId);
            var passingTheElectiveGroupsBasedOn = await _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().GetAllWithSpecAsync(spec);
            var passingTheElectiveGroupBasedOnDTOs = _mapper.Map<IEnumerable<PassingTheElectiveGroupBasedOn>, IEnumerable<PassingTheElectiveGroupBasedOnDTO>>(passingTheElectiveGroupsBasedOn);
            return Ok(passingTheElectiveGroupBasedOnDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(PassingTheElectiveGroupBasedOnDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<PassingTheElectiveGroupBasedOnDTO>> GetPassingTheElectiveGroupBasedOnById(int id)
        {
            var spec = new PassingTheElectiveGroupBasedOnwithUniSpecifications(id);
            var passingTheElectiveGroupBasedOn = await _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().GetEntityWithSpecAsync(spec);
            if (passingTheElectiveGroupBasedOn == null)
                return NotFound(new ApiResponse(404));
            var passingTheElectiveGroupBasedOnDTO = _mapper.Map<PassingTheElectiveGroupBasedOn, PassingTheElectiveGroupBasedOnDTO>(passingTheElectiveGroupBasedOn);
            return Ok(passingTheElectiveGroupBasedOnDTO);
        }

        [HttpPost]
        public async Task<ActionResult<PassingTheElectiveGroupBasedOnReq>> AddPassingTheElectiveGroupBasedOn(PassingTheElectiveGroupBasedOnReq passingTheElectiveGroupBasedOnReq)
        {
            bool exists = await _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().ExistAsync(
                x => x.PassingTheElectiveGroup.Trim().ToUpper() == passingTheElectiveGroupBasedOnReq.PassingTheElectiveGroup.Trim().ToUpper() &&
                     x.UniversityId == passingTheElectiveGroupBasedOnReq.UniversityId);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var passingTheElectiveGroupBasedOn = _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().Add(_mapper.Map<PassingTheElectiveGroupBasedOnReq, PassingTheElectiveGroupBasedOn>(passingTheElectiveGroupBasedOnReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PassingTheElectiveGroupBasedOnReq>> UpdatePassingTheElectiveGroupBasedOn(int id, string updatedPassingTheElectiveGroup)
        {
            var passingTheElectiveGroupBasedOn = await _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().GetByIdAsync(id);
            if (passingTheElectiveGroupBasedOn == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().ExistAsync(
                x => x.PassingTheElectiveGroup.Trim().ToUpper() == updatedPassingTheElectiveGroup.Trim().ToUpper() &&
                     x.UniversityId == passingTheElectiveGroupBasedOn.UniversityId);
            if (!exists)
            {
                passingTheElectiveGroupBasedOn.PassingTheElectiveGroup = updatedPassingTheElectiveGroup;
                _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().Update(passingTheElectiveGroupBasedOn);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassingTheElectiveGroupBasedOn(int id)
        {
            var passingTheElectiveGroupBasedOn = await _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().GetByIdAsync(id);
            if (passingTheElectiveGroupBasedOn == null)
                return NotFound(new ApiResponse(404));
            _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().Delete(passingTheElectiveGroupBasedOn);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
