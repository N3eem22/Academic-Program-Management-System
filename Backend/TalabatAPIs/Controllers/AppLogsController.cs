using AutoMapper;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.Core.Specifications.LockUps_spec;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;
using Talabat.APIs.Controllers;
using Talabat.Core;
using Talabat.Core.Entities.Lockups;
using Talabat.Core.Entities.Logs;

namespace Grad.APIs.Controllers
{
    public class AppLogsController : APIBaseController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public AppLogsController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApplicationLog>>> GetAllBlockingProofOfRegistrations()
        {
            
            var applicationLogs = await _unitOfWork.Repository<ApplicationLog>().GetAllAsync();
            foreach (var applicationLog in applicationLogs)
            {
                applicationLog.Changes = FormatChangesToReadableText(applicationLog.Changes);
            }
            return Ok(applicationLogs);
        }
        private string FormatChangesToReadableText(string changes)
        {
            // Splitting the input string into lines based on new line characters
            var lines = changes.Split(new[] { "\n" }, StringSplitOptions.RemoveEmptyEntries);
            var result = new StringBuilder();

            foreach (var line in lines)
            {
                // Splitting each line into key and value based on the first occurrence of ":"
                var parts = line.Split(new[] { ':' }, 2);
                if (parts.Length == 2)
                {
                    var key = parts[0].Trim();
                    var value = parts[1].Trim();
                    // Formatting each line to a more readable format, adding it to the result
                    result.AppendLine($"{key}: {value}");
                }
            }

            return result.ToString().TrimEnd();
        }


    }
}
    

