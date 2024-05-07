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
    public class EquivalentGradeController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public EquivalentGradeController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EquivalentGradeDTO>>> GetAllEquivalentGrades(int? UniversityId)
        {
            var spec = new EquivalentGradewithUniSpecifications(UniversityId);
            var equivalentGrades = await _unitOfWork.Repository<EquivalentGrade>().GetAllWithSpecAsync(spec);
            var equivalentGradeDTOs = _mapper.Map<IEnumerable<EquivalentGrade>, IEnumerable<EquivalentGradeDTO>>(equivalentGrades);
            return Ok(equivalentGradeDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(EquivalentGradeDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<EquivalentGradeDTO>> GetEquivalentGradeById(int id)
        {
            var spec = new EquivalentGradewithUniSpecifications(id);
            var equivalentGrade = await _unitOfWork.Repository<EquivalentGrade>().GetEntityWithSpecAsync(spec);
            if (equivalentGrade == null)
                return NotFound(new ApiResponse(404));
            var equivalentGradeDTO = _mapper.Map<EquivalentGrade, EquivalentGradeDTO>(equivalentGrade);
            return Ok(equivalentGradeDTO);
        }

        [HttpPost]
        public async Task<ActionResult<EquivalentGradeReq>> AddEquivalentGrade(EquivalentGradeReq equivalentGradeReq)
        {
            bool exists = await _unitOfWork.Repository<EquivalentGrade>().ExistAsync(
                x => x.equivalentGrade.Trim().ToUpper() == equivalentGradeReq.equivalentGrade.Trim().ToUpper() &&
                     x.UniversityId == equivalentGradeReq.UniversityId && !x.IsDeleted);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var equivalentGrade = _unitOfWork.Repository<EquivalentGrade>().Add(_mapper.Map<EquivalentGradeReq, EquivalentGrade>(equivalentGradeReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<EquivalentGradeReq>> UpdateEquivalentGrade(int id, string updatedEquivalentGrade)
        {
            var equivalentGrade = await _unitOfWork.Repository<EquivalentGrade>().GetByIdAsync(id);
            if (equivalentGrade == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<EquivalentGrade>().ExistAsync(
                x => x.equivalentGrade.Trim().ToUpper() == updatedEquivalentGrade.Trim().ToUpper() &&
                     x.UniversityId == equivalentGrade.UniversityId);
            if (!exists)
            {
                equivalentGrade.equivalentGrade = updatedEquivalentGrade;
                _unitOfWork.Repository<EquivalentGrade>().Update(equivalentGrade);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEquivalentGrade(int id)
        {
            var equivalentGrade = await _unitOfWork.Repository<EquivalentGrade>().GetByIdAsync(id);
            if (equivalentGrade == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<EquivalentGrade>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
