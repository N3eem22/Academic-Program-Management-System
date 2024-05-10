using AutoMapper;
using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.DTO.Entities_Dto.Program_TheGrade;
using Grad.APIs.DTO.ProgrmInformation;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Entities;
using Grad.Core.Specifications.Enities_Spec;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Entities;
using Talabat.Core.Entities.Lockups;
using Talabat.Repository.Data;
using Talabat.Repository.Data.Talabat.Repository.Data;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramsController : APIBaseController
    {
        private readonly GradContext _dbcontext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public ProgramsController(IMapper mapper, IUnitOfWork unitOfWork, GradContext dbcontext)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<ProgramDTO>>> GetAllPrograms(int? FacultyId)
        //{
        //    var spec = new ProgramSpec(FacultyId);
        //    var programs = await _unitOfWork.Repository<Programs>().GetAllWithSpecAsync(spec);
        //    var programDTOs = _mapper.Map<IEnumerable<Programs>, IEnumerable<ProgramDTO>>(programs);
        //    return Ok(programDTOs);
        //}

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ProgramDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<ProgramDTO>> GetProgramById(int id)
        {
            var spec = new ProgramSpec(id);
            var program = await _unitOfWork.Repository<Programs>().GetAllWithSpecAsync(spec);
            if (program.Count == 0)
                return NotFound(new ApiResponse(404));
            var programDto = _mapper.Map<IEnumerable<Programs>, IEnumerable<ProgramDTO>>(program);
            return Ok(programDto);
        }


        [HttpPost]
        public async Task<ActionResult<ProgramReqDTO>> AddProgram(ProgramReqDTO programRequest)
        {
            var preValidationResult = await ValidateForeignKeyExistence(programRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                var program = _unitOfWork.Repository<Programs>().Add(_mapper.Map<ProgramReqDTO, Programs>(programRequest));
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Done : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500, message));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiResponse(500, ex.Message));
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateProgram(int id, ProgramReqDTO programRequest)
        {
            var programToUpdate = await _unitOfWork.Repository<Programs>().GetByIdAsync(id);

            if (programToUpdate == null)
            {
                return NotFound(new ApiResponse(404, $"Program with ID {id} not found."));
            }

            try
            {
                _mapper.Map(programRequest, programToUpdate);
                _unitOfWork.Repository<Programs>().Update(programToUpdate);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500, message));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiResponse(500, ex.Message));
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgram(int id)
        {
            var program = await _unitOfWork.Repository<Programs>().GetByIdAsync(id);
            if (program == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<Programs>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }

        private async Task<ActionResult> ValidateForeignKeyExistence(ProgramReqDTO programRequest)
        {
            // Faculty existence check
            if (programRequest.FacultyId != null)
            {
                var FacultyExists = await _unitOfWork.Repository<Faculty>().GetByIdAsync(programRequest.FacultyId);
                if (FacultyExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"Faculty with ID {programRequest.FacultyId} not found."));
                }
            }
            return null;
        }
    }
}