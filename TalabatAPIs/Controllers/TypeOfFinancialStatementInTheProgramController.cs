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
    public class TypeOfFinancialStatementInTheProgramController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public TypeOfFinancialStatementInTheProgramController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TypeOfFinancialStatementInTheProgramDTO>>> GetAllTypeOfFinancialStatements(int? UniversityId)
        {
            var spec = new TypeOfFinancialStatementInTheProgramwithUniSpecifications(UniversityId);
            var financialStatements = await _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().GetAllWithSpecAsync(spec);
            var financialStatementDTOs = _mapper.Map<IEnumerable<TypeOfFinancialStatementInTheProgram>, IEnumerable<TypeOfFinancialStatementInTheProgramDTO>>(financialStatements);
            return Ok(financialStatementDTOs);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TypeOfFinancialStatementInTheProgramDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<TypeOfFinancialStatementInTheProgramDTO>> GetTypeOfFinancialStatementById(int id)
        {
            var spec = new TypeOfFinancialStatementInTheProgramwithUniSpecifications(id);
            var financialStatement = await _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().GetEntityWithSpecAsync(spec);
            if (financialStatement == null)
                return NotFound(new ApiResponse(404));
            var financialStatementDTO = _mapper.Map<TypeOfFinancialStatementInTheProgram, TypeOfFinancialStatementInTheProgramDTO>(financialStatement);
            return Ok(financialStatementDTO);
        }

        [HttpPost]
        public async Task<ActionResult<TypeOfFinancialStatementInTheProgramReq>> AddTypeOfFinancialStatement(TypeOfFinancialStatementInTheProgramReq financialStatementReq)
        {
            bool exists = await _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().ExistAsync(
                x => x.TheType.Trim().ToUpper() == financialStatementReq.TheType.Trim().ToUpper() &&
                     x.UniversityId == financialStatementReq.UniversityId && !x.IsDeleted);
            if (exists)
                return StatusCode(409, new ApiResponse(409));
            var financialStatement = _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().Add(_mapper.Map<TypeOfFinancialStatementInTheProgramReq, TypeOfFinancialStatementInTheProgram>(financialStatementReq));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TypeOfFinancialStatementInTheProgramReq>> UpdateTypeOfFinancialStatement(int id, string updatedFinancialStatementType)
        {
            var financialStatement = await _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().GetByIdAsync(id);
            if (financialStatement == null)
                return NotFound(new ApiResponse(404));
            var exists = await _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().ExistAsync(
                x => x.TheType.Trim().ToUpper() == updatedFinancialStatementType.Trim().ToUpper() &&
                     x.UniversityId == financialStatement.UniversityId && !x.IsDeleted);
            if (!exists)
            {
                financialStatement.TheType = updatedFinancialStatementType;
                _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().Update(financialStatement);
                var result = await _unitOfWork.CompleteAsync() > 0;
                var message = result ? AppMessage.Updated : AppMessage.Error;
                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }
            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTypeOfFinancialStatement(int id)
        {
            var financialStatement = await _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().GetByIdAsync(id);
            if (financialStatement == null)
                return NotFound(new ApiResponse(404));
            await _unitOfWork.Repository<TypeOfFinancialStatementInTheProgram>().softDelete(id);
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Deleted : AppMessage.Error;
            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
