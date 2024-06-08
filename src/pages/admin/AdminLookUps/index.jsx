// import React, { Fragment, useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import axios from 'axios'

// // import { useSelector , useDispatch } from "react-redux";
// // import { getsummerFees } from "../../../redux/lookupsslice";
// // import { store } from "../../../redux/store";

// const ManageLookUps = () => {
// //  const {summerFees}=  useSelector((state)=> state.summerfee);
// //   let dispatch = useDispatch();
// const[sems, setSems] = useState([]);
// const[summerfees, setSummerFees] = useState([]);
// const[ BurdenCalculations, setBurdenCalculations] = useState([]);
// const[hours, setHours] = useState([]);
// const[academicDegree, setAcademicDegree] = useState([]);
// const[systemType, setSystemType] = useState([]);
// const[devisionType, setDevisionType] = useState([]);
// const[courseType, setCourseType] = useState([]);
// const[levels, setLevels] = useState([]);
// const[Blockingregistiration, setBlockingRegistration] = useState([]);
// const[FinancialStatement, setSFinancialStatement] = useState([]);
// const[programFees, setProgramFees] = useState([]);
// const[results, setResults] = useState([]);
// const[BlockingAcademicResult, setBlockingAcademicResult] = useState([]);
// const[prerequisites, setPrerequisites] = useState([]);
// const[PassingTheElectiveGroup, setPassingTheElectiveGroup] = useState([]);
// const[BlockingProof, setBlockingProof] = useState([]);
// const[allgrades, setAllGrades] = useState([]);
// const[PreviousQualification, setPreviousQualification] = useState([]);
// const[GradesDetails, setGradesDetails] = useState([]);
// const[EquivalentGrade, setEquivalentGrade] = useState([]);

//   useEffect(()=>{

// axios.get('https://localhost:7095/api/TypeOfSummerFees?UniversityId=')
//   //   .then(Response => setSummerFees(Response.data))
//   //   .catch(err => console.log(err));
//   //   axios.get('https://localhost:7095/api/BurdenCalculation?UniversityId')
//   //   .then(Response => setBurdenCalculations(Response.data))
//   //   .catch(err => console.log(err));
//   // //  dispatch(getsummerFees());
//   // axios.get('https://localhost:7095/api/Hours?UniversityId')
//   // .then(Response => setHours(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/TheAcademicDegree?UniversityId')
//   // .then(Response => setAcademicDegree(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/SystemType?UniversityId')
//   // .then(Response => setSystemType(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/DivisionType?UniversityId')
//   // .then(Response => setDevisionType(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/CourseType?UniversityId')
//   // .then(Response => setCourseType(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/Level?UniversityId')
//   // .then(Response => setLevels(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/ReasonForBlockingRegistration?UniversityId')
//   // .then(Response => setBlockingRegistration(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/TypeOfFinancialStatementInTheProgram?UniversityId')
//   // .then(Response => setSFinancialStatement(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/TypeOfProgramFees?UniversityId')
//   // .then(Response => setProgramFees(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/TheResultAppears?UniversityId')
//   // .then(Response => setResults(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/ReasonForBlockingAcademicResult?UniversityId')
//   // .then(Response => setBlockingAcademicResult(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/Prerequisites?UniversityId')
//   // .then(Response => setPrerequisites(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/PassingTheElectiveGroupBasedOn?UniversityId')
//   // .then(Response => setPassingTheElectiveGroup(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/BlockingProofOfRegistration?UniversityId')
//   // .then(Response => setBlockingProof(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/AllGrades?UniversityId')
//   // .then(Response => setAllGrades(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/PreviousQualification?UniversityId')
//   // .then(Response => setPreviousQualification(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/EquivalentGrade')
//   // .then(Response => setEquivalentGrade(Response.data))
//   // .catch(err => console.log(err));
//   // axios.get('https://localhost:7095/api/GradesDetails')
//   // .then(Response => setGradesDetails(Response.data))
//   // .catch(err => console.log(err));

//   }, [])

//   const handleDeleteSummerFees = (id) => {
//     axios.delete(`https://localhost:7095/api/TypeOfSummerFees/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteProgramFees = (id) => {
//     axios.delete(`https://localhost:7095/api/TypeOfProgramFees/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteFinancialStatement = (id) => {
//     axios.delete(`https://localhost:7095/api/TypeOfFinancialStatementInTheProgram/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteResultAppears = (id) => {
//     axios.delete(`https://localhost:7095/api/TheResultAppears//${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteAcademicDegree = (id) => {
//     axios.delete(`https://localhost:7095/api/TheAcademicDegree/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteSystemType = (id) => {
//     axios.delete(`https://localhost:7095/api/SystemType/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteSemesters = (id) => {
//     axios.delete(`https://localhost:7095/api/Semesters/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteReasonForBlockingRegistration = (id) => {
//     axios.delete(`https://localhost:7095/api/ReasonForBlockingRegistration/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeletePreviousQualification = (id) => {
//     axios.delete(`https://localhost:7095/api/PreviousQualification/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeletePrerequisites = (id) => {
//     axios.delete(`https://localhost:7095/api/Prerequisites/${id}`)
//       .then(() => {
//         console.log({message});
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeletePassingTheElectiveGroupBasedOn = (id) => {
//     axios.delete(`https://localhost:7095/api/PassingTheElectiveGroupBasedOn/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteLevel = (id) => {
//     axios.delete(`https://localhost:7095/api/Level${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteHours = (id) => {
//     axios.delete(`https://localhost:7095/api/Hours/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteDivisionType = (id) => {
//     axios.delete(`https://localhost:7095/api/DivisionType/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteCourseType = (id) => {
//     axios.delete(`https://localhost:7095/api/courseType/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteAllGrades= (id) => {
//     axios.delete(`https://localhost:7095/api/AllGrades/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteBlockingProofOfRegistration = (id) => {
//     axios.delete(`https://localhost:7095/api/BlockingProofOfRegistration/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteBurdenCalculation = (id) => {
//     axios.delete(`https://localhost:7095/api/BurdenCalculation/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };
//   const handleDeleteReasonForBlockingAcademicResult = (id) => {
//     axios.delete(`https://localhost:7095/api/ReasonForBlockingAcademicResult/${id}`)
//       .then(() => {
//         console.log('okay');
//       })
//       .catch((error) => {
//         console.log('Error occurred during deletion:', error);
//       });
//   };

// return (

//     <Fragment>
//       <div dir="rtl"></div>
//         <div className="col-md-10">
//         <div  lang="ar" dir="rtl" className="container py-5 position-relative">
//             <div className="-flex justify-content-end m-auto">
//  <div className="position-relative">
//  <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//  <option >الدرجة العلمية</option>
//  {academicDegree.map((degree) => (
//   <option key={degree.id}>{degree.academicDegreeName}</option>
// ))}
//  </select>
// <button className="btn btn-danger m-5"  onClick={() => handleDeleteAcademicDegree(1)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
// <button  className="btn btn-primary m-5">اضافة</button>
//  </div>
//  <div>
//  <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//    <option  >نوع النظام</option>
//    {systemType.map((type) => (
//   <option key={type.id}>{type.systemName}</option>
// ))}
//  </select>
//  <button className="btn btn-danger m-5"  onClick={() => handleDeleteSystemType(id)}>حذف</button>
//  <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
//  </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//    <option  >ظهور النتيجة</option>
//    {results.map((result) => (
//   <option key={result.id}>{result.resultAppears}</option>
// ))}
// </select>
// <button className="btn btn-danger m-5"  onClick={() => handleDeleteResultAppears(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option>الفصل الدراسي</option>
//   {sems.map((sem) => {
//       return <option key={sem.id}>{sem.semesters}</option>;
//   })}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeleteSemesters(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//    <option  >نوع البيان المالى بالبرنامج</option>
//    {FinancialStatement.map((statement) => (
//   <option key={statement.id}>{statement.theType}</option>
// ))}
//  </select>
//  <button  className="btn btn-danger m-5" onClick={() => handleDeleteFinancialStatement(id)}>حذف</button>
//  <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >نوع الشعبة</option>
//   {devisionType.map((type) => (
//   <option key={type.id}>{type.division_Type}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeleteDivisionType(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >حساب العبء</option>
//   {BurdenCalculations.map((BurdenCalculation) => (
//   <option key={BurdenCalculation.id}>{BurdenCalculation.burdenCalculationAS}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeleteBurdenCalculation(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >اجتياز المجموعه الاختياريه بناءا علي</option>
//   {PassingTheElectiveGroup.map((passing) => (
//   <option key={passing.id}>{passing.passingTheElectiveGroup}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeletePassingTheElectiveGroupBasedOn(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>

// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >المتطلب السابق</option>
//   {prerequisites.map((Prerequisite) => (
//   <option key={Prerequisite.id}>{Prerequisite.prerequisite}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeletePrerequisites(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option > التقديرات العامة</option>
//   {allgrades.map((grade) => (
//   <option key={grade.id}>{grade.TheGrade}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeleteAllGrades(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >الدرجات التفصلية المراد اعلانها</option>
//   {GradesDetails.map((grade) => (
//   <option key={grade.id}>{grade.theDetail}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeleteAllGrades(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >المستوي الدراسي</option>
//   {levels.map((level) => (
//   <option key={level.id}>{level.levels}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeleteLevel(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	 التقدير المكافئ</option>
//   {EquivalentGrade.map((Egrade) => (
//   <option key={Egrade.id}>{Egrade.equivalentGrade}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeleteLevel(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	 المؤهل السابق </option>
//   {PreviousQualification.map((qualification) => (
//   <option key={qualification.id}>{qualification.previousQualification}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeletePreviousQualification(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	 نوع المقرر </option>
//   {courseType.map((type) => (
//   <option key={type.id}>{type.courseType}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeleteCourseType(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	 نوع رسوم البرنامج </option>
//   {programFees.map((programfee) => (
//   <option key={programfee.id}>{programfee.typeOfFees}</option>
// ))}
// </select>
// <button  className="btn btn-danger m-5" onClick={() => handleDeleteProgramFees(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	 نوع رسوم الصيفى </option>
//   {summerfees.map((summerfee) => (
//   <option key={summerfee.id}>{summerfee.theTypeOfSummerFees}</option>
// ))}
// </select>
// <button className="btn btn-danger m-5"  onClick={() => handleDeleteSummerFees(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	 حجب إثبات القيد </option>
//   {BlockingProof.map((blocke) => (
//   <option key={blocke.id}>{blocke.ReasonsOfBlocking}</option>
// ))}
// </select>
// <button className="btn btn-danger m-5"  onClick={() => handleDeleteBlockingProofOfRegistration(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	 سبب حجب التسجيل </option>
//   {Blockingregistiration.map((Bregister) => (
//   <option key={Bregister.id}>{Bregister.TheReasonForBlockingRegistration}</option>
// ))}
// </select>
// <button className="btn btn-danger m-5"  onClick={() => handleDeleteReasonForBlockingRegistration(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	سبب حجب النتيجة </option>
//   {BlockingAcademicResult.map((bresult) => (
//   <option key={bresult.id}>{bresult.theReasonForBlockingAcademicResult}</option>
// ))}
// </select>
// <button className="btn btn-danger m-5"  onClick={() => handleDeleteReasonForBlockingAcademicResult(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
//  <button  className="btn btn-primary m-5">اضافة</button>
// </div>
// <div>
// <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	 الساعات </option>
//   {hours.map((hour) => (
//   <option key={hour.id}>{hour.hoursName}</option>
// ))}
// </select>
// <button className="btn btn-danger m-5"  onClick={() => handleDeleteHours(id)}>حذف</button>
// <button  className="btn btn-primary m-5">تعديل</button>
// <button  className="btn btn-primary m-5">اضافة</button>

// </div>

// {/* <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option>تعديل مستوى الطالب</option>
//   {BurdenCalculations.map((BurdenCalculation) => (
//   <option key={BurdenCalculation.id}>{BurdenCalculation.burdenCalculationAS}</option>
// ))}
// </select> */}
// {/* <select className="form-select form-select-lg mb-3 py-2 w-50 m-auto" aria-label=".form-select-lg example">
//   <option >	 المتطلب </option>
//   {systemType.map((type) => (
//   <option key={type.id}>{type.systemName}</option>
// ))}
// </select> */}
// </div>

// <div className="buttons position-relative " >
// <div className="position-absolute top-100 start-50 translate-middle mt-3">
// <button type="submit" className="btn btn-primary m-5">حفظ</button>
// <button  className="btn btn-primary m-5">تعديل</button>
// <button  className="btn btn-danger m-5">حذف</button>
// </div>
// </div>
//       </div>

//         </div>

//     </Fragment>
//     );
// };

// ManageLookUps.displayName = "ManageLookUps";

// ManageLookUps.propTypes = {};

// export { ManageLookUps };

import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AdminLookUpsPage = () => {
  return (
    <Fragment>
      <div className="container" dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10 row">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/degree"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      الدرجة العلمية{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/semesters"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      الفصل الدراسي{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/gradesdetails"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      الدرجات التفصيلية
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/burden"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      مقررات الكليه{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/equivalent"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      التقدير المكافئ
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/studentlevel"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      تعديل مستوي الطالب
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/faculty"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      المعهد
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/grades"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      الدرجات{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/blockresult"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      سبب حجب النتيجة
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/blockproof"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      سبب حجب اثبات القيد{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/blockregister"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      سبب حجب التسجيل{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/coursetype"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      نوع المقرر
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/divisiontype"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      نوع الشعبة
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/financialstatement"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      نوع البيان المالي للبرنامج
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/hours"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      الساعات
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/levels"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      المستويات
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/passingelective"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      اجتياز المجموعة الاختيارية بناءا علي
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/prerequisites"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      المتطلب
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/prevqual"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      المؤهل السابق
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/programfees"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      نوع الرسوم البرنامج
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/bloresultappearckproof"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      {" "}
                      ظهور النتيجة
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/summer"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      رسوم المقرر الصيفي
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/systemtype"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      نوع النظام
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="widget-stat card m-3 p-3 "
                style={{ borderRadius: "50px" }}
              >
                <div className="card-body p-4   m-auto">
                  <p>
                    <a
                      href="/burden"
                      class="link-underline link-underline-opacity-0 fw-bold text-black fs-5"
                    >
                      حساب العبء{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AdminLookUpsPage.displayName = "AdminLookUpsPage";

AdminLookUpsPage.propTypes = {};

export { AdminLookUpsPage };
