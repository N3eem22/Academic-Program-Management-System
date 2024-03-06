using AutoMapper;
using Grad.APIs.DTO;
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
    public class AbsenteeEstimateCalculationController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public AbsenteeEstimateCalculationController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AbsenteeEstimateCalculationDTO>>> GetAllAbsenteeEstimateCalculations(int? UniversityId)
        {
            var spec = new AbsenteeEstimateCalculationwithUniSpecifications(UniversityId);
            var calculations = await _unitOfWork.Repository<AbsenteeEstimateCalculation>().GetAllWithSpecAsync(spec);

            var calculationDTOs = _mapper.Map<IEnumerable<AbsenteeEstimateCalculation>, IEnumerable<AbsenteeEstimateCalculationDTO>>(calculations);

            return Ok(calculationDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(AbsenteeEstimateCalculationDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<AbsenteeEstimateCalculationDTO>> GetAbsenteeEstimateCalculationById(int id)
        {
            var spec = new AbsenteeEstimateCalculationwithUniSpecifications(id);
            var calculation = await _unitOfWork.Repository<AbsenteeEstimateCalculation>().GetEntityWithSpecAsync(spec);

            if (calculation == null)
                return NotFound(new ApiResponse(404));

            var calculationDTO = _mapper.Map<AbsenteeEstimateCalculation, AbsenteeEstimateCalculationDTO>(calculation);

            return Ok(calculationDTO);
        }

        [HttpPost]
        public async Task<ActionResult<AbsenteeEstimateCalculationReq>> AddAbsenteeEstimateCalculation(AbsenteeEstimateCalculationReq calculationDTO)
        {
            var exists = await _unitOfWork.Repository<AbsenteeEstimateCalculation>().ExistAsync(
                x => x.absenteeEstimateCalculation.Trim().ToUpper() == calculationDTO.absenteeEstimateCalculation.Trim().ToUpper() &&
                     x.UniversityId == calculationDTO.UniversityId);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var calculation = _unitOfWork.Repository<AbsenteeEstimateCalculation>().Add(_mapper.Map<AbsenteeEstimateCalculationReq, AbsenteeEstimateCalculation>(calculationDTO));
            var result = await _unitOfWork.CompleteAsync() > 0;

            var message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        
        [HttpPut("{id}")]
        public async Task<ActionResult<AbsenteeEstimateCalculationReq>> UpdateAbsenteeEstimateCalculation(int id,  string updatedCalculation)
        {
            var calculation = await _unitOfWork.Repository<AbsenteeEstimateCalculation>().GetByIdAsync(id);

            if (calculation == null)
                return NotFound(new ApiResponse(404));

            var exists = await _unitOfWork.Repository<AbsenteeEstimateCalculation>().ExistAsync(
                x => x.absenteeEstimateCalculation.Trim().ToUpper() == updatedCalculation.Trim().ToUpper() &&
                     x.UniversityId == calculation.UniversityId);

            if (!exists)
            {
                calculation.absenteeEstimateCalculation = updatedCalculation;
                _unitOfWork.Repository<AbsenteeEstimateCalculation>().Update(calculation);
                var result = await _unitOfWork.CompleteAsync() > 0;

                var message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAbsenteeEstimateCalculation(int id)
        {
            var calculation = await _unitOfWork.Repository<AbsenteeEstimateCalculation>().GetByIdAsync(id);

            if (calculation == null)
                return NotFound(new ApiResponse(404));

            _unitOfWork.Repository<AbsenteeEstimateCalculation>().Delete(calculation);
            var result = await _unitOfWork.CompleteAsync() > 0;

            var message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
