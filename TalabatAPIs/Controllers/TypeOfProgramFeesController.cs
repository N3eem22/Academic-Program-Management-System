 using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeOfProgramFeesController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public TypeOfProgramFeesController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TypeOfProgramFeesDTO>>> GetAllTypeOfProgramFees(int? UniversityId)
        {
            var spec = new TypeOfProgramFeeswithUniSpecifications(UniversityId);
            var typeOfProgramFees = await _unitOfWork.Repository<TypeOfProgramFees>().GetAllWithSpecAsync(spec);

            var typeOfProgramFeesDTO = _mapper.Map<IEnumerable<TypeOfProgramFees>, IEnumerable<TypeOfProgramFeesDTO>>(typeOfProgramFees);

            return Ok(typeOfProgramFeesDTO);    
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TypeOfProgramFeesDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<TypeOfProgramFeesDTO>> GetTypeOfProgramFeesById(int id)
        {
            var spec = new TypeOfProgramFeeswithUniSpecifications(id);
            var typeOfProgramFees = await _unitOfWork.Repository<TypeOfProgramFees>().GetEntityWithSpecAsync(spec);

            if (typeOfProgramFees == null)
                return NotFound(new ApiResponse(404));

            var typeOfProgramFeesDTO = _mapper.Map<TypeOfProgramFees, TypeOfProgramFeesDTO>(typeOfProgramFees);

            return Ok(typeOfProgramFeesDTO);
        }

        [HttpPost]
        public async Task<ActionResult<TypeOfFeesReq>> AddTypeOfProgramFees(TypeOfFeesReq typeOfFeesReq)
        {
            bool exists = await _unitOfWork.Repository<TypeOfProgramFees>().ExistAsync(
                x => x.TypeOfFees.Trim().ToUpper() == typeOfFeesReq.TypeOfFees.Trim().ToUpper() &&
                     x.UniversityId == typeOfFeesReq.UniversityId && !x.IsDeleted);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var typeOfProgramFees = _unitOfWork.Repository<TypeOfProgramFees>().Add(_mapper.Map<TypeOfFeesReq, TypeOfProgramFees>(typeOfFeesReq));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TypeOfFeesReq>> UpdateTypeOfProgramFees(int id, string updatedTypeOfFeesName)
        {
            var typeOfProgramFees = await _unitOfWork.Repository<TypeOfProgramFees>().GetByIdAsync(id);

            if (typeOfProgramFees == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<TypeOfProgramFees>().ExistAsync(
                x => x.TypeOfFees.Trim().ToUpper() == updatedTypeOfFeesName.Trim().ToUpper() && x.UniversityId == typeOfProgramFees.UniversityId);

            if (!exists)
            {
                typeOfProgramFees.TypeOfFees = updatedTypeOfFeesName;
                _unitOfWork.Repository<TypeOfProgramFees>().Update(typeOfProgramFees);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTypeOfProgramFees(int id)
        {
            var typeOfProgramFees = await _unitOfWork.Repository<TypeOfProgramFees>().GetByIdAsync(id);

            if (typeOfProgramFees == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<TypeOfProgramFees>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
