using AutoMapper;
using Grad.APIs.DTO.ProgrmInformation;
using Grad.APIs.Helpers;
using Grad.Core.Specifications.Enities_Spec;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Repository.Data;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramInformationController : APIBaseController
    {
        private readonly GradContext _dbcontext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public ProgramInformationController(IMapper mapper, IUnitOfWork unitOfWork, GradContext dbcontext)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProgramInformationDTO>>> GetAllProgramInformation(int? programInformationId)
        {
            var spec = new ProgramInformationSpec(programInformationId);
            var programInformations = await _unitOfWork.Repository<ProgramInformation>().GetAllWithSpecAsync(spec);
            var programInformationDTOs = _mapper.Map<IEnumerable<ProgramInformation>, IEnumerable<ProgramInformationDTO>>(programInformations);
            return Ok(programInformationDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ProgramInformationDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<ProgramInformationDTO>> GetProgramInformationById(int id)
        {
            var spec = new ProgramInformationSpec(id);
            var programInformation = await _unitOfWork.Repository<ProgramInformation>().GetEntityWithSpecAsync(spec);
            if (programInformation == null)
                return NotFound(new ApiResponse(404));
            var programInformationDTO = _mapper.Map<ProgramInformation, ProgramInformationDTO>(programInformation);
            return Ok(programInformationDTO);
        }

        [HttpPost]
        public async Task<ActionResult<ProgramInformationReqDTO>> AddProgramInformation(ProgramInformationReqDTO programInformationRequest)
        {
            var preValidationResult = await ValidateForeignKeyExistence(programInformationRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                var programInformation = _unitOfWork.Repository<ProgramInformation>().Add(_mapper.Map<ProgramInformationReqDTO, ProgramInformation>(programInformationRequest));
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
        public async Task<ActionResult> UpdateProgramInformation(int id, ProgramInformationReqDTO programInformationRequest)
        {
            var programInformationToUpdate = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(id);

            if (programInformationToUpdate == null)
            {
                return NotFound(new ApiResponse(404, $"ProgramInformation with ID {id} not found."));
            }

            try
            {
                _mapper.Map(programInformationRequest, programInformationToUpdate);
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
        public async Task<IActionResult> DeleteProgramInformation(int id)
        {
            var programInformation = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(id);
            if (programInformation == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<ProgramInformation>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }

        private async Task<ActionResult> ValidateForeignKeyExistence(ProgramInformationReqDTO programInformationRequest)
        {
            // Program existence check
            var programExists = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(programInformationRequest.ProgramId) != null;
            if (!programExists)
            {
                return NotFound(new ApiResponse(404, $"Program with ID {programInformationRequest.ProgramId} not found."));
            }

            return null;
        }
    }
}