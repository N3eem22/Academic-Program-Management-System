using AutoMapper;
using System.ComponentModel.DataAnnotations.Schema;
using Talabat.Core.Entities.Entities;

namespace Grad.APIs.DTO.Lockups_Dto
{
    public class AllGradesDTO
    {
        public int Id { get; set; }

        public string TheGrade { get; set; }    
        public int? UniversityId { get; set; }
       
       
        public string University { get; set; } 
    }
}
