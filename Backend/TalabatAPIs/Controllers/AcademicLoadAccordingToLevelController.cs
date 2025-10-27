using AutoMapper;
using Grad.APIs.DTO.Entities_Dto.AcademicLoadAccordingToLevel;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Specifications.Enities_Spec;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;
using Talabat.Repository.Data.Talabat.Repository.Data;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AcademicLoadAccordingToLevelController : APIBaseController
    {

        private readonly GradContext _dbcontext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public AcademicLoadAccordingToLevelController(IMapper mapper, IUnitOfWork unitOfWork, GradContext dbcontext)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(AcademicLoadAccordingToLevelDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<AcademicLoadAccordingToLevelDTO>> GetProgramAcademicLoadById(int id)
        {
            var spec = new AcademicLoadAccordingToLevelSpec(id);
            var programAcademicLoad = await _unitOfWork.Repository<AcademicLoadAccordingToLevel>().GetAllWithSpecAsync(spec);
            if (programAcademicLoad.Count == 0)
                return NotFound(new ApiResponse(404));
            var programAcademicLoadDto = _mapper.Map<IEnumerable<AcademicLoadAccordingToLevel>, IEnumerable<AcademicLoadAccordingToLevelDTO>>(programAcademicLoad);
            return Ok(programAcademicLoadDto);
        }

        [HttpPost]
        public async Task<ActionResult<AcademicLoadAccordingToLevelReqDTO>> AddProgramAcademicLoad(AcademicLoadAccordingToLevelReqDTO programAcademicLoadRequest)
        {

            var preValidationResult = await ValidateForeignKeyExistence(programAcademicLoadRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                var programAcademicLoad = _unitOfWork.Repository<AcademicLoadAccordingToLevel>().Add(_mapper.Map<AcademicLoadAccordingToLevelReqDTO, AcademicLoadAccordingToLevel>(programAcademicLoadRequest));
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
        public async Task<ActionResult> UpdateProgramAcademicLoad(int id, AcademicLoadAccordingToLevelReqDTO programAcademicLoadRequest)
        {
            var programAcademicLoadToUpdate = await _unitOfWork.Repository<AcademicLoadAccordingToLevel>().GetByIdAsync(id);

            if (programAcademicLoadToUpdate == null)
            {
                return NotFound(new ApiResponse(404, $"ProgramLevel with ID {id} not found."));
            }
            var preValidationResult = await ValidateForeignKeyExistence(programAcademicLoadRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                _mapper.Map(programAcademicLoadRequest, programAcademicLoadToUpdate);
                _unitOfWork.Repository<AcademicLoadAccordingToLevel>().Update(programAcademicLoadToUpdate);

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
        public async Task<IActionResult> DeleteProgramAcademicLoad(int id)
        {
            var programAcademicLoad = await _unitOfWork.Repository<AcademicLoadAccordingToLevel>().GetByIdAsync(id);
            if (programAcademicLoad == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<AcademicLoadAccordingToLevel>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }

        private async Task<ActionResult> ValidateForeignKeyExistence(AcademicLoadAccordingToLevelReqDTO programAcademicLoadRequest)
        {

            if (programAcademicLoadRequest.Prog_InfoId != null)
            {
                // prog_Info existence check
                var prog_InfoExists = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(programAcademicLoadRequest.Prog_InfoId);
                if (prog_InfoExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"ProgramInformation with ID {programAcademicLoadRequest.Prog_InfoId} not found."));
                }
            }

            // The Semister existence check
            if (programAcademicLoadRequest.SemestersId != null)
            {
                var TheSemistersExists = await _unitOfWork.Repository<Semesters>().GetByIdAsync(programAcademicLoadRequest.SemestersId);
                if (TheSemistersExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"Semister with ID {programAcademicLoadRequest.SemestersId} not found."));
                }
            }

            if (programAcademicLoadRequest.LevelId != null)
            {
                var TheLevelExists = await _unitOfWork.Repository<Level>().GetByIdAsync(programAcademicLoadRequest.LevelId);
                if (TheLevelExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"Level with ID {programAcademicLoadRequest.LevelId} not found."));
                }
            }
            return null;
        }
    }
}
