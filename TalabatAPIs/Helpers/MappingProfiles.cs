using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Lockups_Dto;
using Talabat.APIs.DTO;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Identity;
using Talabat.Core.Entities.Lockups;

namespace Talabat.APIs.Helpers
{
    public class MappingProfiles:Profile
    {
        public MappingProfiles()
        {

          


            #region  Maps For Lockups with UNI
            CreateMap<AllGrades, AllGradesDTO>()
            .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();


            CreateMap<Level, LevelsDTO>()
            .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<Hours, HoursDTO>()
           .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<TypeOfSummerFees, TypeOfSummerFeesDTO>()
        .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<TypeOfStudySection, TypeOfStudySectionDTO>()
       .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<TypeOfProgramFees, TypeOfProgramFeesDTO>()
      .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<TheResultAppears, TheResultAppearsDTO>()
      .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<Semesters, SemestersDTO>()
      .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();


            CreateMap<ReasonForBlockingRegistration, ReasonForBlockingRegistrationDTO>()
      .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();


            CreateMap<ReasonForBlockingAcademicResult, ReasonForBlockingAcademicResultDTO>()
      .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<PreviousQualification, PreviousQualificationDTO>()
      .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();


            CreateMap<Prerequisites, PrerequisitesDTO>()
      .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<AbsenteeEstimateCalculation, AbsenteeEstimateCalculationDTO>()
     .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<CourseRequirement, CourseRequirementDTO>()
     .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<CourseType, CourseTypeDTO>()
    .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<EquivalentGrade, EquivalentGradeDTO>()
    .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();
            #endregion



            #region Maps For Lockups Request

            CreateMap<AllGradesReq, AllGrades>();
            CreateMap<HoursReq, Hours>();
            CreateMap<LevelsReq, Level>();
            CreateMap<TypeOfSummerFeesReq, TypeOfSummerFees>();
            CreateMap<TypeOfStudySectionReq, TypeOfStudySection>();
            CreateMap<TypeOfFeesReq, TypeOfProgramFees>();
            CreateMap<TheResultAppearsReq, TheResultAppears>();
            CreateMap<SemestersReq, Semesters>();
            CreateMap<ReasonForBlockingRegistrationReq, ReasonForBlockingRegistration>();
            CreateMap<ReasonForBlockingAcademicResultReq, ReasonForBlockingAcademicResult>();
            CreateMap<PreviousQualificationReq, PreviousQualification>();
            CreateMap<PrerequisitesReq, Prerequisites>();
            CreateMap<AbsenteeEstimateCalculationReq, AbsenteeEstimateCalculation>();
            CreateMap<CourseRequirementReq, CourseRequirement>();
            CreateMap<CourseTypeReq, CourseType>();
            CreateMap<CourseTypeReq, CourseType>();
            CreateMap<EquivalentGradeReq, EquivalentGrade>();




            #endregion





        }
    }
}
