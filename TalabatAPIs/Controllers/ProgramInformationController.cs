using AutoMapper;
using Grad.APIs.DTO.ProgrmInformation;
using Grad.APIs.Helpers;
using Grad.Core.Entities.Academic_regulation;
using Grad.Core.Entities.Control;
using Grad.Core.Entities.CoursesInfo;
using Grad.Core.Entities.CumulativeAverage;
using Grad.Core.Entities.Entities;
using Grad.Core.Entities.Graduation;
using Grad.Core.Entities.Lockups;
using Grad.Core.Specifications.Enities_Spec;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
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

        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<ProgramInformationDTO>>> GetAllProgramInformation(int? programInformationId)
        //{
        //    var spec = new ProgramInformationSpec(programInformationId);
        //    var programInformations = await _unitOfWork.Repository<ProgramInformation>().GetAllWithSpecAsync(spec);
        //    var programInformationDTOs = _mapper.Map<IEnumerable<ProgramInformation>, IEnumerable<ProgramInformationDTO>>(programInformations);
        //    return Ok(programInformationDTOs);
        //}

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ProgramInformationDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<ProgramInformationDTO>> GetProgramInformationById(int id)
        {

            var spec = new ProgramInformationSpec(id);
            var programInformation = await _unitOfWork.Repository<ProgramInformation>().GetAllWithSpecAsync(spec);
            if(programInformation.Count == 0)
            {
                return NotFound(new ApiResponse(404, $"Program not found."));

            }
            await _dbcontext.Set<PI_DivisionType>().Include(p=>p.DivisionType).ToListAsync();
            await _dbcontext.Set<PI_EstimatesOfCourseFeeExemption>().Include(p=>p.AllGrades).ToListAsync();
            await _dbcontext.Set<PI_DetailedGradesToBeAnnounced>().Include(p => p.GradesDetails).ToListAsync();
            await _dbcontext.Set<PI_AllGradesSummerEstimate>().Include(p=>p.AllGrades).ToListAsync();
            var programInformationDTO = _mapper.Map<IEnumerable<ProgramInformation>,IEnumerable<ProgramInformationDTO>>(programInformation);
            return Ok(programInformationDTO);
        }

        [HttpPost]
        public async Task<ActionResult<ProgramInformationReqDTO>> AddProgramInformation(ProgramInformationReqDTO programInformationRequest)
        {
            bool exists = await _unitOfWork.Repository<ProgramInformation>().ExistAsync(
               x => x.ProgramsId == programInformationRequest.ProgramsId && x.IsDeleted == false);
            if (exists)
            {
                return StatusCode(409, new ApiResponse(409));
            }

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
            var preValidationResult = await ValidateForeignKeyExistence(programInformationRequest);
            if (preValidationResult != null) return preValidationResult;
            try
            {
                
                await UpdatePI_DivisionType(id);
                await UpdatePI_EstimatesOfCourseFeeExemption(id);
                await UpdatePI_DetailedGradesToBeAnnounced(id);
                await UpdatePI_AllGradesSummerEstimate(id);
                _mapper.Map(programInformationRequest, programInformationToUpdate);
                _unitOfWork.Repository<ProgramInformation>().Update(programInformationToUpdate);

                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500, message));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiResponse(500, ex.Message));
            }
        }

        #region UpdateManytoMany
        private async Task UpdatePI_DivisionType(int id)
        {
            var DivisionTypeToDelete = await _unitOfWork.Repository<PI_DivisionType>()
                                .GetAllAsync();
            var d = DivisionTypeToDelete.Where(d => d.ProgramInformationId == id);

            foreach (var DivisionType in d)
            {
                _unitOfWork.Repository<PI_DivisionType>().Delete(DivisionType);
            }

            await _unitOfWork.CompleteAsync();

        }
        private async Task UpdatePI_EstimatesOfCourseFeeExemption(int id)
        {
            var EstimaterToDelete = await _unitOfWork.Repository<PI_EstimatesOfCourseFeeExemption>()
                                .GetAllAsync();
            var E = EstimaterToDelete.Where(E => E.ProgramInformationId == id);

            foreach (var AllGrades in E)
            {
                _unitOfWork.Repository<PI_EstimatesOfCourseFeeExemption>().Delete(AllGrades);
            }

            await _unitOfWork.CompleteAsync();

        }
        private async Task UpdatePI_DetailedGradesToBeAnnounced(int id)
        {
            var DetailedToDelete = await _unitOfWork.Repository<PI_DetailedGradesToBeAnnounced>()
                                .GetAllAsync();
            var d = DetailedToDelete.Where(d => d.ProgramInformationId == id);

            foreach (var GradesDetails in d)
            {
                _unitOfWork.Repository<PI_DetailedGradesToBeAnnounced>().Delete(GradesDetails);
            }

            await _unitOfWork.CompleteAsync();

        }
        private async Task UpdatePI_AllGradesSummerEstimate(int id)
        {
            var AllGradesToDelete = await _unitOfWork.Repository<PI_AllGradesSummerEstimate>()
                                .GetAllAsync();
            var A = AllGradesToDelete.Where(A => A.ProgramInformationId == id);

            foreach (var AllGrades in A)
            {
                _unitOfWork.Repository<PI_AllGradesSummerEstimate>().Delete(AllGrades);
            }

            await _unitOfWork.CompleteAsync();

        }

        #endregion

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgramInformation(int id)
        {
            var programInformation = await _unitOfWork.Repository<ProgramInformation>().GetByIdAsync(id);
            if (programInformation == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<ProgramInformation>().softDelete(id);
            await DeleteRelatedData(id); // Call the function to delete related data
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }

        #region ValidateForeignKeyy
        private async Task<ActionResult> ValidateForeignKeyExistence(ProgramInformationReqDTO programInformationRequest)
        {
            if (programInformationRequest.ProgramsId != null)
            {
                var programExists = await _unitOfWork.Repository<Programs>().GetByIdAsync(programInformationRequest.ProgramsId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"Program with ID {programInformationRequest.ProgramsId} not found."));
                    }
                }
            }
            if (programInformationRequest.AcademicDegreeId != null)
            {
                var programExists = await _unitOfWork.Repository<TheAcademicDegree>().GetByIdAsync(programInformationRequest.AcademicDegreeId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"AcademicDegree with ID {programInformationRequest.AcademicDegreeId} not found."));
                    }
                }
            }

            if (programInformationRequest.BlockingProofOfRegistrationId != null)
            {
                var programExists = await _unitOfWork.Repository<BlockingProofOfRegistration>().GetByIdAsync(programInformationRequest.BlockingProofOfRegistrationId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"BlockingProofOfRegistration with ID {programInformationRequest.BlockingProofOfRegistrationId} not found."));
                    }
                }
            }

            if (programInformationRequest.BurdanCalculationId != null)
            {
                var programExists = await _unitOfWork.Repository<BurdenCalculation>().GetByIdAsync(programInformationRequest.BurdanCalculationId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"BurdanCalculation with ID {programInformationRequest.BurdanCalculationId} not found."));
                    }
                }
               
            }
            if (programInformationRequest.EditTheStudentLevelId != null)
            {
                var programExists = await _unitOfWork.Repository<EditTheStudentLevel>().GetByIdAsync(programInformationRequest.EditTheStudentLevelId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"EditTheStudentLevel with ID {programInformationRequest.EditTheStudentLevelId} not found."));
                    }
                }
            }
            if (programInformationRequest.FacultyId != null)
            {
                var programExists = await _unitOfWork.Repository<Faculty>().GetByIdAsync(programInformationRequest.FacultyId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"Faculty with ID {programInformationRequest.FacultyId} not found."));
                    }
                }
            }
            if (programInformationRequest.PassingTheElectiveGroupBasedOnId != null)
            {
                var programExists = await _unitOfWork.Repository<PassingTheElectiveGroupBasedOn>().GetByIdAsync(programInformationRequest.PassingTheElectiveGroupBasedOnId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"PassingTheElectiveGroupBasedOn with ID {programInformationRequest.PassingTheElectiveGroupBasedOnId} not found."));
                    }
                }
            }
            if (programInformationRequest.ReasonForBlockingRegistrationId != null)
            {
                var programExists = await _unitOfWork.Repository<ReasonForBlockingRegistration>().GetByIdAsync(programInformationRequest.ReasonForBlockingRegistrationId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"ReasonForBlockingRegistration with ID {programInformationRequest.ReasonForBlockingRegistrationId} not found."));
                    }
                }
            }
            if (programInformationRequest.SystemTypeId != null)
            {
                var programExists = await _unitOfWork.Repository<SystemType>().GetByIdAsync(programInformationRequest.SystemTypeId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"SystemType with ID {programInformationRequest.SystemTypeId} not found."));
                    }
                }
            }
            if (programInformationRequest.TheReasonForHiddingTheResultId != null)
            {
                var programExists = await _unitOfWork.Repository<ReasonForBlockingAcademicResult>().GetByIdAsync(programInformationRequest.TheReasonForHiddingTheResultId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"TheReasonForHiddingTheResult with ID {programInformationRequest.TheReasonForHiddingTheResultId} not found."));
                    }
                }
            }
            if (programInformationRequest.TheResultAppearsId != null)
            {
                var programExists = await _unitOfWork.Repository<TheResultAppears>().GetByIdAsync(programInformationRequest.TheResultAppearsId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"TheResultAppears with ID {programInformationRequest.TheResultAppearsId} not found."));
                    }
                }
            }
            if (programInformationRequest.TheResultToTheGuidId != null)
            {
                var programExists = await _unitOfWork.Repository<TheResultAppears>().GetByIdAsync(programInformationRequest.TheResultToTheGuidId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"TheResultToTheGuid with ID {programInformationRequest.TheResultToTheGuidId} not found."));
                    }
                }
            }
            if (programInformationRequest.TypeOfFinancialStatementInTheProgramId != null)
            {
                var programExists = await _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().GetByIdAsync(programInformationRequest.TypeOfFinancialStatementInTheProgramId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"TypeOfFinancialStatementInTheProgram with ID {programInformationRequest.TypeOfFinancialStatementInTheProgramId} not found."));
                    }
                }
            }
            if (programInformationRequest.TypeOfProgramFeesId != null)
            {
                var programExists = await _unitOfWork.Repository<TypeOfProgramFees>().GetByIdAsync(programInformationRequest.TypeOfProgramFeesId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"TypeOfProgramFees with ID {programInformationRequest.TypeOfProgramFeesId} not found."));
                    }
                }
            }
            if (programInformationRequest.TypeOfSummerFeesId != null)
            {
                var programExists = await _unitOfWork.Repository<TypeOfSummerFees>().GetByIdAsync(programInformationRequest.TypeOfSummerFeesId);
                if (programExists != null)
                {
                    if (programExists.IsDeleted == true)
                    {
                        return NotFound(new ApiResponse(404, $"TypeOfSummerFees with ID {programInformationRequest.TypeOfSummerFeesId} not found."));
                    }
                }
            }

            foreach (var DevisionType in programInformationRequest.pI_DivisionTypes)
            {
                if (DevisionType.DivisionTypeId != null) 
                {
                    var DivisionExists = await _unitOfWork.Repository<DivisionType>().GetByIdAsync(DevisionType.DivisionTypeId) ;
                    if (DivisionExists != null)
                    {
                        if (DivisionExists.IsDeleted == true)
                        {
                            return NotFound(new ApiResponse(404, $"Division  with ID {DevisionType.DivisionTypeId} not found."));
                        }
                    }
                }
            }
            foreach (var EstimateOdCourse in programInformationRequest.PI_EstimatesOfCourseFeeExemptions)
            {
                if (EstimateOdCourse.AllGradesId != null)
                {
                    var estimateOdCourse = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(EstimateOdCourse.AllGradesId);
                    if (estimateOdCourse != null)
                    {
                        if (estimateOdCourse.IsDeleted == true)
                        {
                            return NotFound(new ApiResponse(404, $"EstimatesOfCourseFeeExemptions  with ID {EstimateOdCourse.AllGradesId} not found."));
                        }
                    }
                }
            }
            foreach (var SummerEstimates in programInformationRequest.pI_AllGradesSummerEstimates)
            {
                if (SummerEstimates.AllGradesId != null)
                {
                    var summerEstimates = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(SummerEstimates.AllGradesId);
                    if (summerEstimates != null)
                    {
                        if (summerEstimates.IsDeleted == true)
                        {
                            return NotFound(new ApiResponse(404, $"AllGradesSummerEstimates  with ID {SummerEstimates.AllGradesId} not found."));
                        }
                    }
                }
            }
            foreach (var DetailedGrades in programInformationRequest.pI_DetailedGradesToBeAnnounced)
            {
                if (DetailedGrades.GradesDetailsId != null)
                {
                    var detailedGrades = await _unitOfWork.Repository<GradesDetails>().GetByIdAsync(DetailedGrades.GradesDetailsId);
                    if (detailedGrades != null)
                    {
                        if (detailedGrades.IsDeleted == true)
                        {
                            return NotFound(new ApiResponse(404, $"DetailedGradesToBeAnnounced  with ID {DetailedGrades.GradesDetailsId} not found."));
                        }
                    }
                }
            }

            return null;
        }
        #endregion


        private async Task DeleteRelatedData(int programInformationId)
        {
            // Get the DbContext from the UnitOfWork
            var dbContext = _unitOfWork.GetDbContext();

            // Delete related data in many-to-many tables

            var programTheGrades = dbContext.Set<Program_TheGrades>().Where(x => x.prog_InfoId == programInformationId);
            dbContext.RemoveRange(programTheGrades);

            var programLevels = dbContext.Set<programLevels>().Where(x => x.prog_InfoId == programInformationId);
            dbContext.RemoveRange(programLevels);

            var academicLoadAccordingToLevels = dbContext.Set<AcademicLoadAccordingToLevel>().Where(x => x.Prog_InfoId == programInformationId);
            dbContext.RemoveRange(academicLoadAccordingToLevels);

            var courseInformations = dbContext.Set<CourseInformation>().Where(x => x.ProgramId == programInformationId);
            dbContext.RemoveRange(courseInformations);

            var cumulativeAverages = dbContext.Set<CumulativeAverage>().Where(x => x.ProgramId == programInformationId);
            dbContext.RemoveRange(cumulativeAverages);

            var graduations = dbContext.Set<Graduation>().Where(x => x.ProgramId == programInformationId);
            dbContext.RemoveRange(graduations);

            var controls = dbContext.Set<Control>().Where(x => x.ProgramId == programInformationId);
            dbContext.RemoveRange(controls);

            await dbContext.SaveChangesAsync();
        }



    }
}