using AutoMapper;
using Grad.APIs.DTO;
using Grad.APIs.DTO.Entities_Dto;
using Grad.APIs.DTO.Lockups_Dto;
using Grad.Core.Entities.Lockups;
using Talabat.APIs.DTO;
using Talabat.Core.Entities;
using Talabat.Core.Entities.Entities;
using Talabat.Core.Entities.Identity;
using Talabat.Core.Entities.Lockups;

namespace Talabat.APIs.Helpers
{
    public class MappingProfiles:Profile
    {
        public MappingProfiles()
        {


            CreateMap<CollegeCourses, CollegeCoursesDTO>()
          .ForMember(D => D.Faculty, O => O.MapFrom(s => s.Faculty.FacultyName)).ReverseMap();

            CreateMap<CollegeCoursesReq, CollegeCourses>();

            CreateMap<University,UniversityDTO>();
            CreateMap<UniversityReq, University>();


            #region  Maps For Lockups with UNI

            CreateMap<Faculty, FacultyDTO>()
             .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();


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

            CreateMap<BlockingProofOfRegistration, BlockingProofOfRegistrationDTO>()
             .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<BurdenCalculation, BurdenCalculationDTO>()
             .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<DivisionType, DivisionTypeDTO>()
             .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();


            CreateMap<EditTheStudentLevel, EditTheStudentLevelDTO>()
             .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<GradesDetails, GradesDetailsDTO>()
              .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<PassingTheElectiveGroupBasedOn, PassingTheElectiveGroupBasedOnDTO>()
               .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<SystemType, SystemTypeDTO>()
             .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<TheAcademicDegree, TheAcademicDegreeDTO>()
            .ForMember(D => D.University, O => O.MapFrom(s => s.University.Name)).ReverseMap();

            CreateMap<TypeOfFinancialStatementInTheProgram, TypeOfFinancialStatementInTheProgramDTO>()
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
            CreateMap<BlockingProofOfRegistrationReq, BlockingProofOfRegistration>();
            CreateMap<BurdenCalculationReq, BurdenCalculation > ();
            CreateMap<DivisionTypeReq, DivisionType>();
            CreateMap<EditTheStudentLevelReq, EditTheStudentLevel>();
            CreateMap<GradesDetailsReq, GradesDetails>();
            CreateMap<PassingTheElectiveGroupBasedOnReq, PassingTheElectiveGroupBasedOn>();
            CreateMap<SystemTypeReq,SystemType>();
            CreateMap<TheAcademicDegreeReq, TheAcademicDegree>();
            CreateMap<TypeOfFinancialStatementInTheProgramReq, TypeOfFinancialStatementInTheProgram>();

            CreateMap<FacultyReq, Faculty>();














            #endregion





        }
    }
}
