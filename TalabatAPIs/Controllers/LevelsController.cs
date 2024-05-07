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
    public class LevelController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public LevelController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LevelsDTO>>> GetAllLevels(int? UniversityId)
        {
            var spec = new LevelswithUniSpecifications(UniversityId);
            var levels = await _unitOfWork.Repository<Level>().GetAllWithSpecAsync(spec);

            var levelsDTO = _mapper.Map<IEnumerable<Level>, IEnumerable<LevelsDTO>>(levels);

            return Ok(levelsDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(LevelsDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<LevelsDTO>> GetLevelById(int id)
        {
            var spec = new LevelswithUniSpecifications(id);
            var level = await _unitOfWork.Repository<Level>().GetEntityWithSpecAsync(spec);

            if (level == null)
                return NotFound(new ApiResponse(404));

            var levelDTO = _mapper.Map<Level, LevelsDTO>(level);

            return Ok(levelDTO);
        }

        [HttpPost]
        public async Task<ActionResult<LevelsReq>> AddLevel(LevelsReq levelDTO)
        {
            bool exists = await _unitOfWork.Repository<Level>().ExistAsync(
                x => x.levels.Trim().ToUpper() == levelDTO.levels.Trim().ToUpper() &&
                     x.UniversityId == levelDTO.UniversityId && !x.IsDeleted);

            if (exists)
                return StatusCode(409, new ApiResponse(409));

            var level = _unitOfWork.Repository<Level>().Add(_mapper.Map<LevelsReq, Level>(levelDTO));
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Done : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<LevelsReq>> UpdateLevel(int id, string updatedLevel)
        {
            var level = await _unitOfWork.Repository<Level>().GetByIdAsync(id);

            if (level == null)
                return NotFound(new ApiResponse(404));

            bool exists = await _unitOfWork.Repository<Level>().ExistAsync(
                x => x.levels.Trim().ToUpper() == updatedLevel.Trim().ToUpper() && x.UniversityId == level.UniversityId);

            if (exists)
            {
                return StatusCode(409, new ApiResponse(409));
            }
            level.levels = updatedLevel;
            _unitOfWork.Repository<Level>().Update(level);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Updated : AppMessage.Error;

            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));

            
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLevel(int id)
        {
            var level = await _unitOfWork.Repository<Level>().GetByIdAsync(id);

            if (level == null)
                return NotFound(new ApiResponse(404));

            await _unitOfWork.Repository<Level>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            string message = result ? AppMessage.Deleted : AppMessage.Error;

            return result ? Ok(new { Message = message }) : StatusCode(500, new { error = AppMessage.Error });
        }
    }
}
