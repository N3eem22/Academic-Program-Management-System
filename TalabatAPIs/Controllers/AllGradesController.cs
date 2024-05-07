using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Security.Policy;
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
        private readonly IdentityHelper _IdentityHelper;

        public AllGradesController(IMapper mapper,
            IUnitOfWork unitOfWork , IdentityHelper identityHelper )
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _IdentityHelper = identityHelper;

        }


        [HttpGet]

        public async Task<ActionResult<IEnumerable<AllGradesDTO>>> GetAllGrades(int? Universityid)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

          //  var HasAcsess = await  _IdentityHelper.CheckUserUniversityAccessAsync(userId, Universityid); 
            
           // if (HasAcsess)
           // {
                var spec = new GradeswithUniSpecifications(Universityid);
                var grades = await _unitOfWork.Repository<AllGrades>().GetAllWithSpecAsync(spec);


                var gradesDTO = _mapper.Map<IEnumerable<AllGrades>, IEnumerable<AllGradesDTO>>(grades);

                return Ok(gradesDTO);
          //  }
        //    return Unauthorized(new ApiResponse(401));
            
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
               return  NotFound(new ApiResponse(404));
            }

            var gradeDTO = _mapper.Map<AllGrades, AllGradesDTO>(grade);

            return Ok(gradeDTO);
        }

        [HttpPost]
        public async Task<ActionResult<AllGradesReq>> AddGrade(AllGradesReq gradeDTO)
        {
          
            bool exists = false;
            exists = await _unitOfWork.Repository<AllGrades>().ExistAsync(
         x => x.TheGrade.Trim().ToUpper() == gradeDTO.TheGrade.Trim().ToUpper(),
         x => x.UniversityId == gradeDTO.UniversityId && !x.IsDeleted);
            if (exists)
            {

                return StatusCode(409, new ApiResponse(409));



            }


            var gradee = _unitOfWork.Repository<AllGrades>().Add(_mapper.Map<AllGradesReq, AllGrades>(gradeDTO));

            bool result = await _unitOfWork.CompleteAsync() > 0;

            string Done = AppMessage.Done;

            string Err = AppMessage.Error;


            return result ? Ok(new { Message = Done }) : BadRequest(new ApiResponse(500));


        }


        [HttpPut("{id}")]
        public async Task<ActionResult<AllGradesReq>> UpdateGrade( int id, string Updatedgrade)
        {

            var grade = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(id);


            if (grade == null)
            {
                string resultMsg = AppMessage.CannotBeFound;

                return NotFound(new ApiResponse(404));
              
            }

            bool exists = false;
            exists = await _unitOfWork.Repository<AllGrades>().ExistAsync(x => x.TheGrade.Trim().ToUpper() == Updatedgrade.Trim().ToUpper() && x.UniversityId == grade.UniversityId && !x.IsDeleted);

            string err = AppMessage.Error;
            string Update = AppMessage.Updated;


            if (exists)
                return StatusCode(409, new ApiResponse(409));


            grade.TheGrade = Updatedgrade;
            _unitOfWork.Repository<AllGrades>().Update(grade);

            bool result = await _unitOfWork.CompleteAsync() > 0;

            return result ? Ok(new { Message = Update }) : BadRequest(new ApiResponse(500));

         


        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGrade(int id)
        {
            var grade = await _unitOfWork.Repository<AllGrades>().GetByIdAsync(id);
            if (grade == null)   
                return NotFound(new ApiResponse(400));
         await _unitOfWork.Repository<AllGrades>().softDelete(id);
            bool result = await _unitOfWork.CompleteAsync() > 0;
         return result ? Ok(new { message = AppMessage.Deleted }) : StatusCode(500, new { error = AppMessage.Error });


        }


    }
}
