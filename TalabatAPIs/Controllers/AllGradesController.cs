using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications.AllGrades_spec;
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
    public class AllGradesController : APIBaseController

    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;


        public AllGradesController(IMapper mapper,
            IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AllGradesDTO>>> GetAllGrades(int? Universityid)
        {
            var spec = new GradeswithUniSpecifications(Universityid);
            var grades = await _unitOfWork.Repository<AllGrades>().GetAllWithSpecAsync(spec);


            var gradesDTO = _mapper.Map<IEnumerable<AllGrades>, IEnumerable<AllGradesDTO>>(grades);

            return Ok(gradesDTO);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(AllGradesDTO), 200)]
        [ProducesResponseType(typeof(ApiResponse), 404)]
        public async Task<ActionResult<AllGradesDTO>> GetGradeById(int id)
        {
            var spec = new GradeswithUniSpecifications(id);
            var grade = await _unitOfWork.Repository<AllGrades>().GetEntityWithSpecAsync(spec);

            if (grade == null)
            {
                NotFound(new ApiResponse(404));
            }

            var gradeDTO = _mapper.Map<AllGrades, AllGradesDTO>(grade);

            return Ok(gradeDTO);
        }

        [HttpPost]
        public async Task<ResponeWithData<AllGradesReq>> AddGrade(AllGradesReq gradeDTO)
        {
          
            bool exists = false;
            exists = await _unitOfWork.Repository<AllGrades>().ExistAsync(
         x => x.TheGrade.Trim().ToUpper() == gradeDTO.TheGrade.Trim().ToUpper(),
         x => x.UniversityId == gradeDTO.UniversityId);
            if (exists)
            {
                string resultMsg = AppMessage.IsExist;

                return new ResponeWithData<AllGradesReq>()
                {
                    IsExists = true,
                    Errors = new string[] { resultMsg },
                    Message = resultMsg
                };

            }


            var gradee = _unitOfWork.Repository<AllGrades>().Add(_mapper.Map<AllGradesReq, AllGrades>(gradeDTO));

            bool result = await _unitOfWork.CompleteAsync() > 0;

            string err = AppMessage.Error;


            return new ResponeWithData<AllGradesReq>()
            {
                IsSuccess = result,
                IdOfAddedObject = gradee.Id,
                Data = gradeDTO,
                Errors = new string[] { },
                Message = result ? AppMessage.Done : err
            };

        }


        [HttpPut]
        public async Task<ResponeWithData<AllGradesReq>> UpdateGrade(int GradeID , AllGradesReq gradeDTO)
        {

            var grade = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(GradeID);


            if (grade == null || gradeDTO.Id != GradeID)
            {
                string resultMsg = AppMessage.CannotBeFound;

                return new ResponeWithData<AllGradesReq>()
                {
                    IsNotFound = true,
                    Data = gradeDTO,
                    Errors = new string[] { resultMsg },
                    Message = resultMsg
                };
            }

            bool exists = false;
            exists = await _unitOfWork.Repository<AllGrades>().ExistAsync(x => x.TheGrade.Trim().ToUpper() == gradeDTO.TheGrade.Trim().ToUpper() && x.Id != GradeID && x.UniversityId == gradeDTO.UniversityId);

            string err = AppMessage.Error;

            if (!exists)
            {

                _mapper.Map(gradeDTO, grade);
                 _unitOfWork.Repository<AllGrades>().Update(grade);

                bool result = await _unitOfWork.CompleteAsync() > 0;

                return new ResponeWithData<AllGradesReq>()
                {
                    IsSuccess = result,
                    Data = gradeDTO,
                    Errors = new string[] { },
                    Message = result ? AppMessage.Done : err
                };

            }

            string msg = AppMessage.IsExist;
            return new ResponeWithData<AllGradesReq>()
            {
                IsExists = true,
                Errors = new string[] { msg },
                Message = msg
            };
        }

        [HttpDelete("{GradeID}")]
        public async Task<IActionResult> DeleteGrade(int GradeID)
        {
            var grade = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(GradeID);

            if (grade == null)
            {
                
                return NotFound(new ApiResponse(400));
            }

            _unitOfWork.Repository<AllGrades>().Delete(grade);
            bool result = await _unitOfWork.CompleteAsync() > 0;

            if (result)
            {
                return Ok(new {  message = AppMessage.Deleted });
            }
            else
            {
                
                return StatusCode(500, new { error = AppMessage.Error });
            }
        }


    }
}
