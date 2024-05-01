using AutoMapper;
using Grad.APIs.DTO.Entities_Dto.ProgramLEvelsDTO;
using Grad.Core.Entities.Academic_regulation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Talabat.APIs.Controllers;
using Talabat.Core;
using Talabat.Repository.Data;
using Talabat.Repository.Data.Talabat.Repository.Data;

namespace Grad.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramLevelsController: APIBaseController
    {
        private readonly GradContext _dbcontext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public ProgramLevelsController(IMapper mapper, IUnitOfWork unitOfWork, GradContext dbcontext)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        // GET: api/ProgramLevels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProgramLevelResponseDto>>> GetProgramLevels()
        {
            var programLevels = await _unitOfWork.Repository<programLevels>().GetAllAsync();
            var programLevelDtos = _mapper.Map<IEnumerable<programLevels>, IEnumerable<ProgramLevelResponseDto>>(programLevels);
            return Ok(programLevelDtos);
        }

        // GET: api/ProgramLevels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProgramLevelResponseDto>> GetProgramLevel(int id)
        {
            var programLevel = await _unitOfWork.Repository<programLevels>().GetByIdAsync(id);
            if (programLevel == null)
            {
                return NotFound();
            }

            var programLevelDto = _mapper.Map<programLevels, ProgramLevelResponseDto>(programLevel);
            return programLevelDto;
        }

        // PUT: api/ProgramLevels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProgramLevel(int id, ProgramLevelRequestDto programLevelDto)
        {
            if (id != programLevelDto.TheLevelId)
            {
                return BadRequest();
            }

            var programLevel = _mapper.Map<ProgramLevelRequestDto, programLevels>(programLevelDto);

            _unitOfWork.Repository<programLevels>().Update(programLevel);

            try
            {
                await _unitOfWork.CompleteAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProgramLevelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProgramLevels
        [HttpPost]
        public async Task<ActionResult<ProgramLevelResponseDto>> PostProgramLevel(ProgramLevelRequestDto programLevelDto)
        {
            var programLevel = _mapper.Map<ProgramLevelRequestDto, programLevels>(programLevelDto);
            _unitOfWork.Repository<programLevels>().Add(programLevel);
            await _unitOfWork.CompleteAsync();

            return CreatedAtAction("GetProgramLevel", new { id = programLevel.Id }, programLevelDto);
        }

        // DELETE: api/ProgramLevels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgramLevel(int id)
        {
            var programLevel = await _unitOfWork.Repository<programLevels>().GetByIdAsync(id);
            if (programLevel == null)
            {
                return NotFound();
            }

            _unitOfWork.Repository<programLevels>().Delete(programLevel);
            await _unitOfWork.CompleteAsync();

            return NoContent();
        }

        private bool ProgramLevelExists(int id)
        {
            return _dbcontext.programLevels.Any(e => e.Id == id);
        }
    }
}
    
 
