using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
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
    public class TypeOfSummerFeesController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public TypeOfSummerFeesController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TypeOfSummerFeesDTO>>> GetAllTypeOfSummerFees(int? UniversityId)
        {
            var spec = new TypeOfSummerFeeswithUniSpecifications(UniversityId);
            var typeOfSummerFees = await _unitOfWork.Repository<TypeOfSummerFees>().GetAllWithSpecAsync(spec);

            var typeOfSummerFeesDTO = _mapper.Map<IEnumerable<TypeOfSummerFees>, IEnumerable<TypeOfSummerFeesDTO>>(typeOfSummerFees);

            return Ok(typeOfSummerFeesDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TypeOfSummerFeesDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<TypeOfSummerFeesDTO>> GetTypeOfSummerFeesById(int id)
        {
            var spec = new TypeOfSummerFeeswithUniSpecifications(id);
            var typeOfSummerFees = await _unitOfWork.Repository<TypeOfSummerFees>().GetEntityWithSpecAsync(spec);

            if (typeOfSummerFees == null)
                return NotFound(new ApiResponse(404));

            var typeOfSummerFeesDTO = _mapper.Map<TypeOfSummerFees, TypeOfSummerFeesDTO>(typeOfSummerFees);

            return Ok(typeOfSummerFeesDTO);
        }

        [HttpPost]
        public async Task<ActionResult<TypeOfSummerFeesReq>> AddTypeOfSummerFees(TypeOfSummerFeesReq typeOfSummerFeesDTO)
        {
            bool exists = await _unitOfWork.Repository<TypeOfSummerFees>().ExistAsync(
                x => x.TheTypeOfSummerFees.Trim().ToUpper() == typeOfSummerFeesDTO.TheTypeOfSummerFees.Trim().ToUpper() &&
                     x.UniversityId == typeOfSummerFeesDTO.UniversityId && !x.IsDeleted);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var typeOfSummerFees = _unitOfWork.Repository<TypeOfSummerFees>().Add(_mapper.Map<TypeOfSummerFeesReq, TypeOfSummerFees>(typeOfSummerFeesDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TypeOfSummerFeesReq>> UpdateTypeOfSummerFees(int id, string updatedTypeOfSummerFees)
        {
            var typeOfSummerFees = await _unitOfWork.Repository<TypeOfSummerFees>().GetByIdAsync(id);

            if (typeOfSummerFees == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<TypeOfSummerFees>().ExistAsync(
                x => x.TheTypeOfSummerFees.Trim().ToUpper() == updatedTypeOfSummerFees.Trim().ToUpper() && x.UniversityId == typeOfSummerFees.UniversityId);

            if (!exists)
            {
                typeOfSummerFees.TheTypeOfSummerFees = updatedTypeOfSummerFees;
                _unitOfWork.Repository<TypeOfSummerFees>().Update(typeOfSummerFees);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTypeOfSummerFees(int id)
        {
            var typeOfSummerFees = await _unitOfWork.Repository<TypeOfSummerFees>().GetByIdAsync(id);

            if (typeOfSummerFees == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<TypeOfSummerFees>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
