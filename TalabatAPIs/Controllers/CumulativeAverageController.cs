using AutoMapper;
using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.DTO.Entities_Dto.Cumulative_Average;
using Grad.APIs.DTO.Entities_Dto.Graduation;
using Grad.APIs.Helpers;
using Grad.Core.Entities.CumulativeAverage;
using Grad.Core.Entities.Graduation;
using Grad.Core.Specifications.Enities_Spec;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Lockups;
using Talabat.Repository.Data;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CumulativeAverageController : APIBaseController
    {
        private readonly GradContext _dbcontext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public CumulativeAverageController(IMapper mapper, IUnitOfWork unitOfWork , GradContext dbcontext)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CumulativeAverageDTO>>> GetAllCumulative(int? CumulativeId)
        {
            var spec = new CumulativeAverageSpec(CumulativeId);
            var cumulativeAverages = await _unitOfWork.Repository<CumulativeAverage>().GetAllWithSpecAsync(spec);
            await _dbcontext.Set<GadesOfEstimatesThatDoesNotCount>().Include(G => G.Grades).ToListAsync();
            var CumulativeAverageDTOs = _mapper.Map<IEnumerable<CumulativeAverage>,IEnumerable<CumulativeAverageDTO>>(cumulativeAverages);
            return Ok(CumulativeAverageDTOs);
        }
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CumulativeAverageDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<CumulativeAverageDTO>> GetCUmulativeAverageById(int id)
        {
            await _dbcontext.Set<GadesOfEstimatesThatDoesNotCount>().Include(G => G.Grades).ToListAsync();
            var spec = new CumulativeAverageSpec(id);
            var cumulativeAverage = await _unitOfWork.Repository<CumulativeAverage>().GetEntityWithSpecAsync(spec);
            if (cumulativeAverage == null)
                return NotFound(new ApiResponse(404));
            await _dbcontext.Set<GadesOfEstimatesThatDoesNotCount>().Include(G => G.Grades).ToListAsync();

            var cumulativeAverageDTO = _mapper.Map<CumulativeAverage, CumulativeAverageDTO>(cumulativeAverage);
            return Ok(cumulativeAverageDTO);
        }
        [HttpPost]       
        public async Task<ActionResult<CumulativeAverageReq>> AddCumulativeAverage(CumulativeAverageReq cumulativeAverageRequest)
        {
            bool exists = await _unitOfWork.Repository<CumulativeAverage>().ExistAsync(
                x => x.ProgramId == cumulativeAverageRequest.ProgramId && x.IsDeleted == false);
            if (exists)
            {
                return StatusCode(409, new ApiResponse(409));
            }
            var preValidationResult = await ValidateForeignKeyExistence(cumulativeAverageRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                var cumulativeAverage  = _unitOfWork.Repository<CumulativeAverage>().Add(_mapper.Map<CumulativeAverageReq, CumulativeAverage>(cumulativeAverageRequest));
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Done : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500 , message));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiResponse(500, ex.Message));
            }
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCumulativeAverage(int id, CumulativeAverageReq cumulativeAverageRequest)
        {
           
            var cumulativeAverageToUpdate = await _unitOfWork.Repository<CumulativeAverage>()
                .GetByIdAsync(id);
            if (cumulativeAverageToUpdate == null)
            {
                return NotFound(new ApiResponse(404, $"CumulativeAverage with ID {id} not found."));
            }
            var preValidationResult = await ValidateForeignKeyExistence(cumulativeAverageRequest);
            if (preValidationResult != null) return preValidationResult;

            try
            {
                await UpdateGadesOfEstimates(id);
                _mapper.Map(cumulativeAverageRequest, cumulativeAverageToUpdate);
                _unitOfWork.Repository<CumulativeAverage>().Update(cumulativeAverageToUpdate);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500, message));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiResponse(500, ex.Message));
            }
        }

        private async Task UpdateGadesOfEstimates(int id)
        {
            var gradesToDelete = await _unitOfWork.Repository<GadesOfEstimatesThatDoesNotCount>()
                                .GetAllAsync();
            var g = gradesToDelete.Where(g => g.CumulativeAverageId == id);

            foreach (var grade in g)
            {
                _unitOfWork.Repository<GadesOfEstimatesThatDoesNotCount>().Delete(grade);
            }

            await _unitOfWork.CompleteAsync();

        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCmulativeAverage(int id)
        {
            var cumulativeAverage = await _unitOfWork.Repository<CumulativeAverage>().GetByIdAsync(id);
            if (cumulativeAverage == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<CumulativeAverage>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }

        private async Task<ActionResult> ValidateForeignKeyExistence(CumulativeAverageReq cumulativeAverageRequest)
        {
            // Program existence check
            var programExists = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(cumulativeAverageRequest.ProgramId) != null;
            if (!programExists)
            {
                return NotFound(new ApiResponse(404, $"Program with ID {cumulativeAverageRequest.ProgramId} not found."));
            }
            // Grades existence check
            var GradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(cumulativeAverageRequest.UtmostGrade) != null;
            if (!GradeExists)
            {
                return NotFound(new ApiResponse(404, $"Grade with ID {cumulativeAverageRequest.UtmostGrade} not found."));
            }
            foreach (var gradeDetail in cumulativeAverageRequest.GadesOfEstimatesThatDoesNotCount)

            {

                if (gradeDetail.GradeId.HasValue) // Check if GradeId is not null
                {
                    var gradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(gradeDetail.GradeId.Value) != null; 
                    if (!gradeExists)
                    {
                        return NotFound(new ApiResponse(404, $"Grade  with ID {gradeDetail.GradeId} not found."));
                    }
                }

            }
            return null;
        }
    }
}
