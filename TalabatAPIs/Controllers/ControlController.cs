using AutoMapper;
using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.DTO.Entities_Dto.Graduation;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Control;
using Grad.Core.Entities.Graduation;
using Grad.Core.Specifications.Enities_Spec;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Academic_regulation;
using Talabat.Core.Entities.Entities;
using Talabat.Core.Entities.Lockups;
using Talabat.Repository.Data;

namespace Grad.APIs.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ControlController : APIBaseController
    {
        private readonly GradContext _dbcontext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public ControlController(GradContext dbcontext, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ControlDTO>>> GetAllControles(int? ProgramId)
        {
            var spec = new ControlSpec(ProgramId);
            var Controls = await _unitOfWork.Repository<Control>().GetAllWithSpecAsync(spec);
            await _dbcontext.Set<FailureEstimatesInTheList>().Include(G => G.grades).LoadAsync();
            await _dbcontext.Set<DetailsOfTheoreticalFailingGrades>().Include(G => G.GradesDetails).LoadAsync();
            await _dbcontext.Set<ACaseOfAbsenceInTheDetailedGrades>().Include(G => G.GradesDetails).LoadAsync();
            await _dbcontext.Set<DetailsOfExceptionalLetters>().Include(G => G.GradesDetails).LoadAsync();
            await _dbcontext.Set<ExceptionalLetterGrades>().Include(G => G.Grades).LoadAsync();
            await _dbcontext.Set<EstimatesNotDefinedInTheList>().Include(G => G.Grades).LoadAsync();
            await _dbcontext.Set<ASuccessRatingDoesNotAddHoursOrAverage>().Include(G => G.Grades).LoadAsync();
            var controlDTOs = _mapper.Map<IEnumerable<Control>, IEnumerable<ControlDTO>>(Controls);
            return Ok(controlDTOs);
        }
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ControlDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<ControlDTO>> GetControlById(int id)
        {

            var spec = new ControlSpec(id);
            var Control = await _unitOfWork.Repository<Control>().GetEntityWithSpecAsync(spec);
            if (Control == null)
                return NotFound(new ApiResponse(404));
            await _dbcontext.Set<FailureEstimatesInTheList>().Include(G => G.grades).ToListAsync();
            await _dbcontext.Set<DetailsOfTheoreticalFailingGrades>().Include(G => G.GradesDetails).ToListAsync();
            await _dbcontext.Set<ACaseOfAbsenceInTheDetailedGrades>().Include(G => G.GradesDetails).ToListAsync();
            await _dbcontext.Set<DetailsOfExceptionalLetters>().Include(G => G.GradesDetails).ToListAsync();
            await _dbcontext.Set<ExceptionalLetterGrades>().Include(G => G.Grades).ToListAsync();
            await _dbcontext.Set<EstimatesNotDefinedInTheList>().Include(G => G.Grades).ToListAsync();
            await _dbcontext.Set<ASuccessRatingDoesNotAddHoursOrAverage>().Include(G => G.Grades).ToListAsync();
            var ControlDTO = _mapper.Map<Control, ControlDTO>(Control);
            return Ok(ControlDTO);
        }
        [HttpPost]
        public async Task<ActionResult<ControlReq>> AddControl(ControlReq controlReq)
        {
            bool exists = await _unitOfWork.Repository<Control>().ExistAsync(
              x => x.ProgramId == controlReq.ProgramId && x.IsDeleted == false);
            if (exists)
            {
                return StatusCode(409, new ApiResponse(409));
            }
            var preValidationResult = await ValidateForeignKeyExistence(controlReq);
            if (preValidationResult != null) return preValidationResult;
            
            try
            {
                
                var Control = _unitOfWork.Repository<Control>().Add(_mapper.Map<ControlReq, Control>(controlReq));
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
        public async Task<ActionResult> UpdateControl(int id, ControlReq controlReq)
        {
            var ControlToUpdate = await _unitOfWork.Repository<Control>()
                .GetByIdAsync(id);

            if (ControlToUpdate == null)
            {
                return NotFound(new ApiResponse(404, $"Control with ID {id} not found."));
            }

            var preValidationResult = await ValidateForeignKeyExistence(controlReq);
            if (preValidationResult != null) return preValidationResult;

            try
            {
                await UpdateRelations(id);
                _mapper.Map(controlReq, ControlToUpdate);
                _unitOfWork.Repository<Control>().Update(ControlToUpdate);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500, message));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiResponse(500, ex.Message));
            }
        }
        private async Task UpdateRelations(int id)
        {
            var aCaseOfAbsenceInTheDetailedGrades = await _unitOfWork.Repository<ACaseOfAbsenceInTheDetailedGrades>()
                                .GetAllAsync();
            var g = aCaseOfAbsenceInTheDetailedGrades.Where(g => g.Id == id);

            foreach (var grade in g)
            {
                _unitOfWork.Repository<ACaseOfAbsenceInTheDetailedGrades>().Delete(grade);
            }
            var aSuccessRatingDoesNotAddHoursOrs = await _unitOfWork.Repository<ASuccessRatingDoesNotAddHoursOrAverage>()
                                .GetAllAsync();
            var s = aSuccessRatingDoesNotAddHoursOrs.Where(g => g.Id == id);

            foreach (var grade in s)
            {
                _unitOfWork.Repository<ASuccessRatingDoesNotAddHoursOrAverage>().Delete(grade);
            }
            var DetailsOfExceptionalLetters = await _unitOfWork.Repository<DetailsOfExceptionalLetters>()
                                .GetAllAsync();
            var L = DetailsOfExceptionalLetters.Where(g => g.Id == id);

            foreach (var Grades in L)
            {
                _unitOfWork.Repository<DetailsOfExceptionalLetters>().Delete(Grades);
            }
            var detailsOfTheoreticalFailingGrades = await _unitOfWork.Repository<DetailsOfTheoreticalFailingGrades>()
                              .GetAllAsync();
            var details = detailsOfTheoreticalFailingGrades.Where(g => g.Id == id);

            foreach (var Grades in details)
            {
                _unitOfWork.Repository<DetailsOfTheoreticalFailingGrades>().Delete(Grades);
            }
            var EstimatesNotDefinedInTheList = await _unitOfWork.Repository<EstimatesNotDefinedInTheList>()
                             .GetAllAsync();
            var estimates = EstimatesNotDefinedInTheList.Where(g => g.Id == id);

            foreach (var Grades in estimates)
            {
                _unitOfWork.Repository<EstimatesNotDefinedInTheList>().Delete(Grades);
            }
            var ExceptionalLetterGrades = await _unitOfWork.Repository<ExceptionalLetterGrades>()
                            .GetAllAsync();
            var exceptionals = ExceptionalLetterGrades.Where(g => g.Id == id);

            foreach (var Grades in exceptionals)
            {
                _unitOfWork.Repository<ExceptionalLetterGrades>().Delete(Grades);
            }
            var FailureEstimatesInTheList = await _unitOfWork.Repository<FailureEstimatesInTheList>()
                           .GetAllAsync();
            var failures = FailureEstimatesInTheList.Where(g => g.Id == id);

            foreach (var Grades in failures)
            {
                _unitOfWork.Repository<FailureEstimatesInTheList>().Delete(Grades);
            }
            await _unitOfWork.CompleteAsync();

        }
        private async Task<ActionResult> ValidateForeignKeyExistence(ControlReq controlReq)
        {
            // Program existence check
            var programExists = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(controlReq.ProgramId) != null;
            if (!programExists)
            {
                return NotFound(new ApiResponse(404, $"Program with ID {controlReq.ProgramId} not found."));
            }
            // Grades existence check
            if (controlReq.FirstReductionEstimatesForFailureTimes.HasValue)
            {
                var GradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(controlReq.FirstReductionEstimatesForFailureTimes.Value) != null;
                if (!GradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade with ID {controlReq.FirstReductionEstimatesForFailureTimes.Value} not found."));
                }
            }
            if (controlReq.SecondReductionEstimatesForFailureTimes.HasValue)
            {
                var GradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(controlReq.SecondReductionEstimatesForFailureTimes.Value) != null;
                if (!GradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade with ID {controlReq.SecondReductionEstimatesForFailureTimes.Value} not found."));
                }
            }
            if (controlReq.ThirdReductionEstimatesForFailureTimes.HasValue)
            {
                var GradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(controlReq.ThirdReductionEstimatesForFailureTimes.Value) != null;
                if (!GradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade with ID {controlReq.ThirdReductionEstimatesForFailureTimes.Value} not found."));
                }
            }
            if (controlReq.EstimatingTheTheoreticalFailure.HasValue)
            {
                var GradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(controlReq.EstimatingTheTheoreticalFailure.Value) != null;
                if (!GradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade with ID {controlReq.EstimatingTheTheoreticalFailure.Value} not found."));
                }
            }
            if (controlReq.EstimateDeprivationBeforeTheExamId.HasValue)
            {
                var GradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(controlReq.EstimateDeprivationBeforeTheExamId.Value) != null;
                if (!GradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade with ID {controlReq.EstimateDeprivationBeforeTheExamId.Value} not found."));
                }
            }
            if (controlReq.EstimateDeprivationAfterTheExamId.HasValue)
            {
                var GradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(controlReq.EstimateDeprivationAfterTheExamId.Value) != null;
                if (!GradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade with ID {controlReq.EstimateDeprivationAfterTheExamId.Value} not found."));
                }
            }
            foreach (var Grade in controlReq.FailureEstimatesInTheLists)
            {   
                    var gradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(Grade.GradeId) != null;
                    if (!gradeExists)
                    {
                        return NotFound(new ApiResponse(404, $"Grade  with ID {Grade.GradeId} not found."));
                    }
            }
            foreach (var Grade in controlReq.DetailsOfTheoreticalFailingGradesNav)
            {
                var gradeExists = await _unitOfWork.Repository<GradesDetails>().GetByIdAsync(Grade.GradeDetailId) != null;
                if (!gradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade  with ID {Grade.GradeDetailId} not found."));
                }
            }
            foreach (var Grade in controlReq.ACaseOfAbsenceInTheDetailedGrades)
            {
                var gradeExists = await _unitOfWork.Repository<GradesDetails>().GetByIdAsync(Grade.GradeGetailId) != null;
                if (!gradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade  with ID {Grade.GradeGetailId} not found."));
                }
            }
            foreach (var Grade in controlReq.DetailsOfExceptionalLetters)
            {
                var gradeExists = await _unitOfWork.Repository<GradesDetails>().GetByIdAsync(Grade.GradeDetailId) != null;
                if (!gradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade  with ID {Grade.GradeDetailId} not found."));
                }
            }
            foreach (var Grade in controlReq.ExceptionalLetterGrades)
            {
                var gradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(Grade.GradeId) != null;
                if (!gradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade  with ID {Grade.GradeId} not found."));
                }
            }
            foreach (var Grade in controlReq.EstimatesNotDefinedInTheLists)
            {
                var gradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(Grade.GradeId) != null;
                if (!gradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade  with ID {Grade.GradeId} not found."));
                }
            }
            foreach (var Grade in controlReq.ASuccessRatingDoesNotAddHours)
            {
                var gradeExists = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(Grade.GradeId) != null;
                if (!gradeExists)
                {
                    return NotFound(new ApiResponse(404, $"Grade  with ID {Grade.GradeId} not found."));
                }
            }
            return null;
        }

    }
}
