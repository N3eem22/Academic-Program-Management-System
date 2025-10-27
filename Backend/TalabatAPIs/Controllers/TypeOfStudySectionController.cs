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
    public class TypeOfStudySectionController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public TypeOfStudySectionController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TypeOfStudySectionDTO>>> GetAllTypeOfStudySections(int? UniversityId)
        {
            var spec = new TypeOfStudySectionwithUniSpecifications(UniversityId);
            var typeOfStudySections = await _unitOfWork.Repository<TypeOfStudySection>().GetAllWithSpecAsync(spec);

            var typeOfStudySectionsDTO = _mapper.Map<IEnumerable<TypeOfStudySection>, IEnumerable<TypeOfStudySectionDTO>>(typeOfStudySections);

            return Ok(typeOfStudySectionsDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TypeOfStudySectionDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<TypeOfStudySectionDTO>> GetTypeOfStudySectionById(int id)
        {
            var spec = new TypeOfStudySectionwithUniSpecifications(id);
            var typeOfStudySection = await _unitOfWork.Repository<TypeOfStudySection>().GetEntityWithSpecAsync(spec);

            if (typeOfStudySection == null)
                return NotFound(new ApiResponse(404));

            var typeOfStudySectionDTO = _mapper.Map<TypeOfStudySection, TypeOfStudySectionDTO>(typeOfStudySection);

            return Ok(typeOfStudySectionDTO);
        }

        [HttpPost]
        public async Task<ActionResult<TypeOfStudySectionReq>> AddTypeOfStudySection(TypeOfStudySectionReq typeOfStudySectionDTO)
        {
            bool exists = await _unitOfWork.Repository<TypeOfStudySection>().ExistAsync(
                x => x.TheTypeOfStudySectio.Trim().ToUpper() == typeOfStudySectionDTO.TheTypeOfStudySectio.Trim().ToUpper() &&
                     x.UniversityId == typeOfStudySectionDTO.UniversityId && !x.IsDeleted);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var typeOfStudySection = _unitOfWork.Repository<TypeOfStudySection>().Add(_mapper.Map<TypeOfStudySectionReq, TypeOfStudySection>(typeOfStudySectionDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TypeOfStudySectionReq>> UpdateTypeOfStudySection(int id, string updatedTypeOfStudySectionName)
        {
            var typeOfStudySection = await _unitOfWork.Repository<TypeOfStudySection>().GetByIdAsync(id);

            if (typeOfStudySection == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<TypeOfStudySection>().ExistAsync(
                x => x.TheTypeOfStudySectio.Trim().ToUpper() == updatedTypeOfStudySectionName.Trim().ToUpper() && x.UniversityId == typeOfStudySection.UniversityId && !x.IsDeleted);

            if (!exists)
            {
                typeOfStudySection.TheTypeOfStudySectio = updatedTypeOfStudySectionName;
                _unitOfWork.Repository<TypeOfStudySection>().Update(typeOfStudySection);
                bool result = await _unitOfWork.CompleteAsync() > 0;

                string message = result ? AppMessage.Updated : AppMessage.Error;

                return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
            }

            return StatusCode(409, new ApiResponse(409));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTypeOfStudySection(int id)
        {
            var typeOfStudySection = await _unitOfWork.Repository<TypeOfStudySection>().GetByIdAsync(id);

            if (typeOfStudySection == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<TypeOfStudySection>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
