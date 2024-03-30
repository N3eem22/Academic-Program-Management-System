using AutoMapper;
using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.APIs.Helpers;
using Grad.Core.Entities.CoursesInfo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Talabat.APIs.Controllers;
using Talabat.APIs.Errors;
using Talabat.Core;
using Talabat.Core.Entities.Lockups;

namespace Grad.APIs.Controllers
{
    public class CoursesInformationsController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public CoursesInformationsController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        [HttpPost]
        public async Task<ActionResult<CourseInfoDTO>> AddCourseInfo(CourseInfoDTO CourseInfoDTO)
        {
            var CourseInfo = _unitOfWork.Repository<CourseInformation>().Add(_mapper.Map<CourseInfoDTO, CourseInformation>(CourseInfoDTO));
            var result = await _unitOfWork.CompleteAsync() > 0;
            var message = result ? AppMessage.Done : AppMessage.Error;
            return result ? Ok(new { Message = message }) : BadRequest(new ApiResponse(500));
        }
    }
}
