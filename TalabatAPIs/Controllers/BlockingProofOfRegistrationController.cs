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
    public class BlockingProofOfRegistrationController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public BlockingProofOfRegistrationController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlockingProofOfRegistrationDTO>>> GetAllBlockingProofOfRegistrations(int? UniversityId)
        {
            var spec = new BlockingProofOfRegistrationwithUniSpecifications(UniversityId);
            var blockingProofOfRegistrations = await _unitOfWork.Repository<BlockingProofOfRegistration>().GetAllWithSpecAsync(spec);
            var blockingProofOfRegistrationDTOs = _mapper.Map<IEnumerable<BlockingProofOfRegistration>, IEnumerable<BlockingProofOfRegistrationDTO>>(blockingProofOfRegistrations);
            return Ok(blockingProofOfRegistrationDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(BlockingProofOfRegistrationDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<BlockingProofOfRegistrationDTO>> GetBlockingProofOfRegistrationById(int id)
        {
            var spec = new BlockingProofOfRegistrationwithUniSpecifications(id);
            var blockingProofOfRegistration = await _unitOfWork.Repository<BlockingProofOfRegistration>().GetEntityWithSpecAsync(spec);
            if (blockingProofOfRegistration == null)
                return NotFound(new ApiResponse(404));
            var blockingProofOfRegistrationDTO = _mapper.Map<BlockingProofOfRegistration, BlockingProofOfRegistrationDTO>(blockingProofOfRegistration);
            return Ok(blockingProofOfRegistrationDTO);
        }

        [HttpPost]
        public async Task<ActionResult<BlockingProofOfRegistrationReq>> AddBlockingProofOfRegistration(BlockingProofOfRegistrationReq blockingProofOfRegistrationReq)
        {
            bool exists = await _unitOfWork.Repository<BlockingProofOfRegistration>().ExistAsync(
                x => x.ReasonsOfBlocking.Trim().ToUpper() == blockingProofOfRegistrationReq.ReasonsOfBlocking.Trim().ToUpper() &&
                     x.UniversityId == blockingProofOfRegistrationReq.UniversityId);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var blockingProofOfRegistration = _unitOfWork.Repository<BlockingProofOfRegistration>().Add(_mapper.Map<BlockingProofOfRegistrationReq, BlockingProofOfRegistration>(blockingProofOfRegistrationReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<BlockingProofOfRegistrationReq>> UpdateBlockingProofOfRegistration(int id,  string updatedReasonsOfBlocking)
        {
            var blockingProofOfRegistration = await _unitOfWork.Repository<BlockingProofOfRegistration>().GetByIdAsync(id);
            if (blockingProofOfRegistration == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<BlockingProofOfRegistration>().ExistAsync(
                x => x.ReasonsOfBlocking.Trim().ToUpper() == updatedReasonsOfBlocking.Trim().ToUpper() &&
                     x.UniversityId == blockingProofOfRegistration.UniversityId);
            if (!exists)
            {
                blockingProofOfRegistration.ReasonsOfBlocking = updatedReasonsOfBlocking;
                _unitOfWork.Repository<BlockingProofOfRegistration>().Update(blockingProofOfRegistration);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlockingProofOfRegistration(int id)
        {
            var blockingProofOfRegistration = await _unitOfWork.Repository<BlockingProofOfRegistration>().GetByIdAsync(id);
            if (blockingProofOfRegistration == null)
                return NotFound(new ApiResponse(404));
            _unitOfWork.Repository<BlockingProofOfRegistration>().Delete(blockingProofOfRegistration);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
