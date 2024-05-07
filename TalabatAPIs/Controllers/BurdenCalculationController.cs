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
    public class BurdenCalculationController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public BurdenCalculationController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BurdenCalculationDTO>>> GetAllBurdenCalculations(int? UniversityId)
        {
            var spec = new BurdenCalculationwithUniSpecifications(UniversityId);
            var burdenCalculations = await _unitOfWork.Repository<BurdenCalculation>().GetAllWithSpecAsync(spec);
            var burdenCalculationDTOs = _mapper.Map<IEnumerable<BurdenCalculation>, IEnumerable<BurdenCalculationDTO>>(burdenCalculations);
            return Ok(burdenCalculationDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(BurdenCalculationDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<BurdenCalculationDTO>> GetBurdenCalculationById(int id)
        {
            var spec = new BurdenCalculationwithUniSpecifications(id);
            var burdenCalculation = await _unitOfWork.Repository<BurdenCalculation>().GetEntityWithSpecAsync(spec);
            if (burdenCalculation == null)
                return NotFound(new ApiResponse(404));
            var burdenCalculationDTO = _mapper.Map<BurdenCalculation, BurdenCalculationDTO>(burdenCalculation);
            return Ok(burdenCalculationDTO);
        }

        [HttpPost]
        public async Task<ActionResult<BurdenCalculationReq>> AddBurdenCalculation(BurdenCalculationReq burdenCalculationReq)
        {
            bool exists = await _unitOfWork.Repository<BurdenCalculation>().ExistAsync(
                x => x.BurdenCalculationAS.Trim().ToUpper() == burdenCalculationReq.BurdenCalculationAS.Trim().ToUpper() &&
                     x.UniversityId == burdenCalculationReq.UniversityId && !x.IsDeleted);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var burdenCalculation = _unitOfWork.Repository<BurdenCalculation>().Add(_mapper.Map<BurdenCalculationReq, BurdenCalculation>(burdenCalculationReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<BurdenCalculationReq>> UpdateBurdenCalculation(int id,  string updatedBurdenCalculationAS)
        {
            var burdenCalculation = await _unitOfWork.Repository<BurdenCalculation>().GetByIdAsync(id);
            if (burdenCalculation == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<BurdenCalculation>().ExistAsync(
                x => x.BurdenCalculationAS.Trim().ToUpper() == updatedBurdenCalculationAS.Trim().ToUpper() &&
                     x.UniversityId == burdenCalculation.UniversityId);
            if (!exists)
            {
                burdenCalculation.BurdenCalculationAS = updatedBurdenCalculationAS;
                _unitOfWork.Repository<BurdenCalculation>().Update(burdenCalculation);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBurdenCalculation(int id)
        {
            var burdenCalculation = await _unitOfWork.Repository<BurdenCalculation>().GetByIdAsync(id);
            if (burdenCalculation == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<BurdenCalculation>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
