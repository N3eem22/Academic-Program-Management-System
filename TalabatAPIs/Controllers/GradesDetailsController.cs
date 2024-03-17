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
    public class GradesDetailsController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public GradesDetailsController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GradesDetailsDTO>>> GetAllGradesDetails(int? UniversityId)
        {
            var spec = new GradesDetailswithUniSpecifications(UniversityId);
            var gradesDetails = await _unitOfWork.Repository<GradesDetails>().GetAllWithSpecAsync(spec);
            var gradesDetailsDTOs = _mapper.Map<IEnumerable<GradesDetails>, IEnumerable<GradesDetailsDTO>>(gradesDetails);
            return Ok(gradesDetailsDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(GradesDetailsDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<GradesDetailsDTO>> GetGradesDetailsById(int id)
        {
            var spec = new GradesDetailswithUniSpecifications(id);
            var gradesDetails = await _unitOfWork.Repository<GradesDetails>().GetEntityWithSpecAsync(spec);
            if (gradesDetails == null)
                return NotFound(new ApiResponse(404));
            var gradesDetailsDTO = _mapper.Map<GradesDetails, GradesDetailsDTO>(gradesDetails);
            return Ok(gradesDetailsDTO);
        }

        [HttpPost]
        public async Task<ActionResult<GradesDetailsReq>> AddGradesDetails(GradesDetailsReq gradesDetailsReq)
        {
            bool exists = await _unitOfWork.Repository<GradesDetails>().ExistAsync(
                x => x.TheDetails.Trim().ToUpper() == gradesDetailsReq.TheDetails.Trim().ToUpper() &&
                     x.UniversityId == gradesDetailsReq.UniversityId);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var gradesDetails = _unitOfWork.Repository<GradesDetails>().Add(_mapper.Map<GradesDetailsReq, GradesDetails>(gradesDetailsReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<GradesDetailsReq>> UpdateGradesDetails(int id, string updatedTheDetails)
        {
            var gradesDetails = await _unitOfWork.Repository<GradesDetails>().GetByIdAsync(id);
            if (gradesDetails == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<GradesDetails>().ExistAsync(
                x => x.TheDetails.Trim().ToUpper() == updatedTheDetails.Trim().ToUpper() &&
                     x.UniversityId == gradesDetails.UniversityId);
            if (!exists)
            {
                gradesDetails.TheDetails = updatedTheDetails;
                _unitOfWork.Repository<GradesDetails>().Update(gradesDetails);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGradesDetails(int id)
        {
            var gradesDetails = await _unitOfWork.Repository<GradesDetails>().GetByIdAsync(id);
            if (gradesDetails == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<GradesDetails>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
