using AutoMapper;
using Grad.APIs.DTO.Entities_Dto.ProgramLEvelsDTO;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Specifications.Enities_Spec;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Talabat.APIs.Errors;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;
using Talabat.Core;
using Talabat.Repository.Data.Talabat.Repository.Data;
using Grad.APIs.DTO.Entities_Dto.Program_TheGrade;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Program_TheGradeController : ControllerBase
    {

        private readonly GradContext _dbcontext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public Program_TheGradeController(IMapper mapper, IUnitOfWork unitOfWork, GradContext dbcontext)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }


        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Program_TheGradeDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<Program_TheGradeDTO>> GetProgram_TheGradeById(int id)
        {
            var spec = new Program_TheGradeSpec(id);
            var programTheGrade = await _unitOfWork.Repository<Program_TheGrades>().GetAllWithSpecAsync(spec);
            if (programTheGrade.Count == 0)
                return NotFound(new ApiResponse(404));
            var programTheGradeDto = _mapper.Map<IEnumerable<Program_TheGrades>, IEnumerable<Program_TheGradeDTO>>(programTheGrade);
            return Ok(programTheGradeDto);
        }

        [HttpPost]
        public async Task<ActionResult<Program_TheGradeReqDTO>> AddProgramTheGrade(Program_TheGradeReqDTO programTheGradeRequest)
        {

            var preValidationResult = await ValidateForeignKeyExistence(programTheGradeRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                var programTheGrade = _unitOfWork.Repository<Program_TheGrades>().Add(_mapper.Map<Program_TheGradeReqDTO, Program_TheGrades>(programTheGradeRequest));
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
        public async Task<ActionResult> UpdateProgramTheGrade(int id, Program_TheGradeReqDTO programTheGradeRequest)
        {
            var programTheGradeToUpdate = await _unitOfWork.Repository<Program_TheGrades>().GetByIdAsync(id);

            if (programTheGradeToUpdate == null)
            {
                return NotFound(new ApiResponse(404, $"ProgramTheGrade with ID {id} not found."));
            }
            var preValidationResult = await ValidateForeignKeyExistence(programTheGradeRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                _mapper.Map(programTheGradeRequest, programTheGradeToUpdate);
                _unitOfWork.Repository<Program_TheGrades>().Update(programTheGradeToUpdate);

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
        public async Task<IActionResult> DeleteProgramTheGrade(int id)
        {
            var programTheGrade = await _unitOfWork.Repository<Program_TheGrades>().GetByIdAsync(id);
            if (programTheGrade == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<Program_TheGrades>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }

        private async Task<ActionResult> ValidateForeignKeyExistence(Program_TheGradeReqDTO programTheGradeRequest)
        {

            if (programTheGradeRequest.prog_InfoId != null)
            {
                // prog_Info existence check
                var prog_InfoExists = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(programTheGradeRequest.prog_InfoId);
                if (prog_InfoExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"ProgramInformation with ID {programTheGradeRequest.prog_InfoId} not found."));
                }
            }

            // TheLevel existence check
            if (programTheGradeRequest.TheGradeId != null)
            {
                var TheGradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(programTheGradeRequest.TheGradeId);
                if (TheGradeExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"Grade with ID {programTheGradeRequest.TheGradeId} not found."));
                }
            }

            if (programTheGradeRequest.EquivalentEstimateId != null)
            {
                var TheGradeExists = await _unitOfWork.Repository<EquivalentGrade>().GetByIdAsync(programTheGradeRequest.EquivalentEstimateId);
                if (TheGradeExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"Equivalent Estimate with ID {programTheGradeRequest.EquivalentEstimateId} not found."));
                }
            }
            if (programTheGradeRequest.GraduationEstimateId != null)
            {
                var TheGradeExists = await _unitOfWork.Repository<EquivalentGrade>().GetByIdAsync(programTheGradeRequest.GraduationEstimateId);
                if (TheGradeExists.IsDeleted == true)
                {
                    return NotFound(new ApiResponse(404, $"Graduation Estimate with ID {programTheGradeRequest.GraduationEstimateId} not found."));
                }
            }

            return null;
        }

    
}
}
