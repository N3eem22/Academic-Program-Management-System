using AutoMapper;
using Grad.APIs.DTO.Entities_Dto.ProgramLEvelsDTO;
using Grad.APIs.DTO.ProgrmInformation;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Entities;
using Grad.Core.Specifications.Enities_Spec;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;
using Talabat.Repository.Data;
using Talabat.Repository.Data.Talabat.Repository.Data;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramLevelsController : APIBaseController
    {
        private readonly GradContext _dbcontext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public ProgramLevelsController(IMapper mapper, IUnitOfWork unitOfWork, GradContext dbcontext)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<ProgramLevelResponseDto>>> GetAllProgramLevels(int? prog_InfoId)
        //{
        //    var spec = new ProgramLevelsSpec(prog_InfoId);
        //    var programLevels = await _unitOfWork.Repository<programLevels>().GetAllWithSpecAsync(spec);
        //    var programLevelDtos = _mapper.Map<IEnumerable<programLevels>, IEnumerable<ProgramLevelResponseDto>>(programLevels);
        //    return Ok(programLevelDtos);
        //}


        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ProgramLevelResponseDto), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<ProgramLevelResponseDto>> GetProgramLevelById(int id)
        {
            var spec = new ProgramLevelsSpec(id);
            var programLevel = await _unitOfWork.Repository<programLevels>().GetAllWithSpecAsync(spec);
            if (programLevel.Count == 0)
                return NotFound(new ApiResponse(404));
            var programLevelDto = _mapper.Map<IEnumerable<programLevels>,IEnumerable<ProgramLevelResponseDto>>(programLevel);
            return Ok(programLevelDto);
        }

        [HttpPost]
        public async Task<ActionResult<ProgramLevelRequestDto>> AddProgramLevel(ProgramLevelRequestDto programLevelRequest)
        {
           
            var preValidationResult = await ValidateForeignKeyExistence(programLevelRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                var programLevel = _unitOfWork.Repository<programLevels>().Add(_mapper.Map<ProgramLevelRequestDto, programLevels>(programLevelRequest));
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
        public async Task<ActionResult> UpdateProgramLevel(int id, ProgramLevelRequestDto programLevelRequest)
        {
            var programLevelToUpdate = await _unitOfWork.Repository<programLevels>().GetByIdAsync(id);

            if (programLevelToUpdate == null)
            {
                return NotFound(new ApiResponse(404, $"ProgramLevel with ID {id} not found."));
            }
            var preValidationResult = await ValidateForeignKeyExistence(programLevelRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                _mapper.Map(programLevelRequest, programLevelToUpdate);
                _unitOfWork.Repository<programLevels>().Update(programLevelToUpdate);

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
        public async Task<IActionResult> DeleteProgramLevel(int id)
        {
            var programLevel = await _unitOfWork.Repository<programLevels>().GetByIdAsync(id);
            if (programLevel == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<programLevels>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }

        private async Task<ActionResult> ValidateForeignKeyExistence(ProgramLevelRequestDto programLevelRequest)
        {

            if (programLevelRequest.prog_InfoId != null)
            {
                // prog_Info existence check
                var prog_InfoExists = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(programLevelRequest.prog_InfoId);
                if (prog_InfoExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"ProgramInformation with ID {programLevelRequest.prog_InfoId} not found."));
                }
            }

            // TheLevel existence check
            if (programLevelRequest.TheLevelId != null)
            {
                var TheLevelExists = await _unitOfWork.Repository<Level>().GetByIdAsync(programLevelRequest.TheLevelId);
                if (TheLevelExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"Level with ID {programLevelRequest.TheLevelId} not found."));
                }
            }
            return null;
        }

    }
}