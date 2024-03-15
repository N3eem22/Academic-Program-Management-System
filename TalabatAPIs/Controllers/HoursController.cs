using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoursController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public HoursController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<HoursDTO>>> GetAllHours(int? UniversityId)
        {
            var spec = new HourswithUniSpecifications(UniversityId);
            var hours = await _unitOfWork.Repository<Hours>().GetAllWithSpecAsync(spec);

            var hoursDTO = _mapper.Map<IEnumerable<Hours>, IEnumerable<HoursDTO>>(hours);

            return Ok(hoursDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(HoursDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<HoursDTO>> GetHourById(int id)
        {
            var spec = new HourswithUniSpecifications(id);
            var hour = await _unitOfWork.Repository<Hours>().GetEntityWithSpecAsync(spec);

            if (hour == null)
                return NotFound(new ApiResponse(404));

            var hourDTO = _mapper.Map<Hours, HoursDTO>(hour);

            return Ok(hourDTO);
        }

        [HttpPost]
        public async Task<ActionResult<HoursReq>> AddHour(HoursReq hourDTO)
        {
            bool exists = await _unitOfWork.Repository<Hours>().ExistAsync(
                x => x.HoursName.Trim().ToUpper() == hourDTO.HoursName.Trim().ToUpper() &&
                     x.UniversityId == hourDTO.UniversityId);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var hour = _unitOfWork.Repository<Hours>().Add(_mapper.Map<HoursReq, Hours>(hourDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<HoursReq>> UpdateHour(int id, string updatedHour)
        {
            var hour = await _unitOfWork.Repository<Hours>().GetByIdAsync(id);

            if (hour == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<Hours>().ExistAsync(
                x => x.HoursName.Trim().ToUpper() == updatedHour.Trim().ToUpper() &&  x.UniversityId == hour.UniversityId);

            if (!exists)
            {
                hour.HoursName = updatedHour;
                _unitOfWork.Repository<Hours>().Update(hour);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHour(int id)
        {
            var hour = await _unitOfWork.Repository<Hours>().GetByIdAsync(id);

            if (hour == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<Hours>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
