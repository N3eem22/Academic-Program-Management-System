

using Grad.Core.Entities;
using Grad.Core.Entities.Lockups;

namespace Talabat.Core.Entities.Entities
{
    [Table("University")]
    public class University : BaseEntity
    {
        [MaxLength(70)]
        public string Name { get; set; }
        [MaxLength(250)]
        public string Location { get; set; }

        public ICollection<SystemType> SystemTypes{ get; set; } = new HashSet<SystemType>();
        public ICollection<AllGrades> AllGrades { get; set; } = new HashSet<AllGrades>();
        public ICollection<BlockingProofOfRegistration> BlockingProofOfRegistrations { get; set; } = new HashSet<BlockingProofOfRegistration>();
        public ICollection<BurdenCalculation> BurdenCalculation { get; set;} = new HashSet<BurdenCalculation>();
        public ICollection<CourseType> CourseTypes { get; set;} = new HashSet<CourseType>();
        public ICollection<EquivalentGrade> EquivalentGrades { get;set; } = new HashSet<EquivalentGrade>();
        public ICollection<GradesDetails> GradesDetails { get; set;} = new HashSet<GradesDetails>();
        public ICollection<Hours> Hours { get; set; } = new HashSet<Hours>();
        public ICollection<Level> Levels { get; set; } = new HashSet<Level>();
        public ICollection<PassingTheElectiveGroupBasedOn> passingTheElectiveGroupBasedOns { get; set; } = new HashSet<PassingTheElectiveGroupBasedOn>();
        public ICollection<PreviousQualification> PreviousQualifications { get; set;} = new HashSet<PreviousQualification>();
        public ICollection<ReasonForBlockingAcademicResult> ReasonForBlockingAcademicResults { get; set; } = new HashSet<ReasonForBlockingAcademicResult>();
        public ICollection<ReasonForBlockingRegistration> ReasonForBlockingRegistration { get; set; } = new HashSet<ReasonForBlockingRegistration>();
        public ICollection<TheAcademicDegree> TheAcademicDegrees { get; set; } = new HashSet<TheAcademicDegree>();
        public ICollection<TypeOfFinancialStatementInTheProgram> TypeOfFinancialStatements { get; set; } = new HashSet<TypeOfFinancialStatementInTheProgram>();
        public ICollection<TypeOfProgramFees> TypeOfProgramFees { get; set; } = new HashSet<TypeOfProgramFees>();
        public ICollection<TypeOfStudySection> TypeOfStudySections { get; set;} = new HashSet<TypeOfStudySection>();
        public ICollection<TypeOfSummerFees> TypeOfSummerFees { get;set; } = new HashSet<TypeOfSummerFees>();
        public ICollection<EditTheStudentLevel> EditTheStudentLevel { get; set;} = new HashSet<EditTheStudentLevel>();
        public ICollection<TheResultAppears> TheResultAppears { get; set; } = new HashSet<TheResultAppears>();
        public ICollection<Semesters> Semesters { get; set; } = new HashSet<Semesters>();
        public ICollection<CourseRequirement> CourseRequirements { get; set;} = new HashSet<CourseRequirement>();
        public ICollection<AbsenteeEstimateCalculation> AbsenteeEstimateCalculation { get; set; } = new HashSet<AbsenteeEstimateCalculation>();
        public ICollection<Faculty> Faculties { get; set; } = new HashSet<Faculty>();
        public ICollection<DivisionType> divisionTypes { get; set; } = new HashSet<DivisionType>();


    }
}
