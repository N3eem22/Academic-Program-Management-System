import React, { Fragment, useState, useEffect, useRef, useReducer } from "react";
import axios from "axios";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import { Renderer } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
function reducer(state, action) {
  switch (action.type) {
      case "Get":
          return { ...state, status: "Get"};
      case "Update":
          return { ...state, status: "Update" };
      case "Open":
          return { ...state, status: "Open" };
      case "Close":
          return { ...state, status: "Close" };
      case "Add":
          return { ...state, status: "Add" };
      default:
          return state;
  }
}

// const programReducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_PROGRAM_INFO':
//       return {...state, programInfo: action.programInfo };
//     case 'ADD_PROGRAM_INFO':
//       return {...state, programInfo: [...state.programInfo, action.programInfo] };
//     default:
//       return state;
//   }
// };

// const initialState = {
//   programInfo: [{ SummerCourseGpa: [] }],
// };
const ProgramsComp = () => {
  const initialState = {
    status: '',
};
  const [state , dispatch] = useReducer(reducer,initialState);
  const [programInfo, setProgramInfo] = useState([{}]);
  const ProgramId = 7;
  const inputRefs = useRef([]);
  const [academicDegree, setAcademicDegree] = useState([]);
  const [systemType, setSystemType] = useState([]);
  const [burdenCalculation, setBurdenCalculation] = useState([]);
  const [passingTheElectiveGroupBasedOn, setPassingTheElectiveGroupBasedOn] = useState([]);
  const [editTheStudentLevel, setEditTheStudentLevel] = useState([]);
  const [blockProof, setBlockProof] = useState([]);
  const [financial, setFinancial] = useState([]);
  const [programFees, setProgramFees] = useState([]);
  const [summerFees, setSummerFees] = useState([]);
  const [resultAppears, setResultAppears] = useState([]);
  const [blockRegister, setBlockRegister] = useState([]);
  const [hidingResult, setHidingResult] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [divisionType, setDivisionType] = useState([{}]);
  const [grades, setGrades] = useState([{}]);
  const [gDetails, setGDetails] = useState([{}]);
  const [pr,setPr] = useState("");
  const universityId = 1;
  const FacultyId =1;
  useEffect(() => {
   
    const fetchDegree = axios.get(`https://localhost:7095/api/TheAcademicDegree?${1}`).then((res)=>{ setAcademicDegree(res.data)
    }
  );
    const fetchSystem = axios.get(`https://localhost:7095/api/SystemType?UniversityId=${universityId}`).then((res)=>{ setSystemType(res.data)});
    const fetchBurden= axios.get(`https://localhost:7095/api/BurdenCalculation?${1}`).then((res)=>{setBurdenCalculation(res.data)});
    const fetchPassing= axios.get(`https://localhost:7095/api/PassingTheElectiveGroupBasedOn?${1}`).then((res)=>{setPassingTheElectiveGroupBasedOn(res.data)})  
    const fetchEdits= axios.get(`https://localhost:7095/api/EditTheStudentLevel?${1}`).then((res)=>{setEditTheStudentLevel(res.data)});
    const fetchProof= axios.get(`https://localhost:7095/api/BlockingProofOfRegistration?${1}`).then((res)=>{setBlockProof(res.data)});
    const fetchFStatement= axios.get(`https://localhost:7095/api/TypeOfFinancialStatementInTheProgram?${1}`).then((res)=>{setFinancial(res.data)});
    const fetchProgramF= axios.get(`https://localhost:7095/api/TypeOfProgramFees?${1}`).then((res)=>{setProgramFees(res.data)});
    const fetchSummerF= axios.get(`https://localhost:7095/api/TypeOfSummerFees?${1}`).then((res)=>{setSummerFees(res.data)});
    const fetchResult= axios.get(`https://localhost:7095/api/TheResultAppears?${1}`).then((res)=>{setResultAppears(res.data)});
    const fetchBRegister= axios.get(`https://localhost:7095/api/ReasonForBlockingRegistration?${1}`).then((res)=>{setBlockRegister(res.data)});
    const fetchHResult= axios.get(`https://localhost:7095/api/ReasonForBlockingAcademicResult?${1}`).then((res)=>{setHidingResult(res.data)});
    const fetchDivision= axios.get(`https://localhost:7095/api/DivisionType?UniversityId=${1}`).then((res)=>{setDivisionType(res.data)
      
    });
    const fetchGrade= axios.get(`https://localhost:7095/api/AllGrades?UniversityId=${universityId}`).then((res)=>{console.log(res.data);setGrades(res.data)
      
    });
    const fetchDetails= axios.get(`https://localhost:7095/api/GradesDetails?UniversityId=${universityId}`).then((res)=>{console.log(res.data);setGDetails(res.data)

      
      
    });
    const fetchFaculty= axios.get(`https://localhost:7095/api/Faculty/${FacultyId}`).then((res)=>{console.log(res.data);setFaculties(res.data)});
    const fetchPre= axios.get(`https://localhost:7095/api/Prerequisites?UniversityId=${universityId}`).then((res)=>{console.log(res.data);setPrerequisites(res.data)});
   
   
    }, []);
  let i = 0;
    useEffect(()=>{
      console.log(state.status);
        if (state.status === "Get") {
          const fetchData =async (programId) =>{
        
            const res = await axios.get(`https://localhost:7095/api/ProgramInformation/${3}`,
            ).then( (resp)=> { 
              setProgramInfo([resp.data][0]);
            }).catch((err)=>{
                console.log(err);
            });

    }
       fetchData(ProgramId);
        }
        if (state.status === "Update") {
          const fetchDivision= axios.get(`https://localhost:7095/api/DivisionType?UniversityId=${1}`).then((res)=>{setDivisionType(res.data)
            if (state.status === "Update") {
              console.log(programInfo);
              const updatedDivisionType = res.data
                
                .filter(typeD => programInfo[0].pI_DivisionTypes.includes(typeD.division_Type))
                .map(typeD => ({
                  typeDId: typeD.id,
                }));
               setProgramInfo(prevProgramInfo => {
                if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                const updatedProgramInfo = [...prevProgramInfo];
                updatedProgramInfo[0] = {
                    ...updatedProgramInfo[0],
                    pI_DivisionTypes: updatedDivisionType,
                };
                return updatedProgramInfo;
            });
            }
          
          });
          const fetchGrade= axios.get(`https://localhost:7095/api/AllGrades?UniversityId=${universityId}`).then((res)=>{console.log(res.data);setGrades(res.data)
            if (state.status === "Update") {
              const updatedGrades = res.data
                .filter(grade => programInfo[0].pI_EstimatesOfCourseFeeExemptions.includes(grade.theGrade))
                .map(grade => ({
                  allGradesId: parseInt(grade.id),
                }));
               setProgramInfo(prevProgramInfo => {
                if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                const updatedProgramInfo = [...prevProgramInfo];
                updatedProgramInfo[0] = {
                    ...updatedProgramInfo[0],
                    pI_EstimatesOfCourseFeeExemptions: updatedGrades,
                };
                return updatedProgramInfo;
            });
            const updateGrades = res.data
            .filter(grade => programInfo[0].pI_AllGradesSummerEstimates.includes(grade.theGrade))
            .map(grade => ({
              allGradesId: parseInt(grade.id),
            }));
           setProgramInfo(prevProgramInfo => {
            if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
            const updatedProgramInfo = [...prevProgramInfo];
            updatedProgramInfo[0] = {
                ...updatedProgramInfo[0],
                pI_AllGradesSummerEstimates: updateGrades,
            };
            return updatedProgramInfo;
        });
            }
          
          });
          const fetchDetails= axios.get(`https://localhost:7095/api/GradesDetails?UniversityId=${universityId}`).then((res)=>{console.log(res.data);setGDetails(res.data)
  
            if (state.status === "Update") {
              console.log(programInfo[0].pI_DetailedGradesToBeAnnounced);
              const updatedGDetails = res.data
                .filter(detail => programInfo[0].pI_DetailedGradesToBeAnnounced.includes(detail.theDetails))
                .map(detail => ({
                  detailId: detail.id,
                }));
               console.log(updatedGDetails);
                setProgramInfo(prevProgramInfo => {
                if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                const updatedProgramInfo = [...prevProgramInfo];
                updatedProgramInfo[0] = {
                    ...updatedProgramInfo[0],
                    pI_DetailedGradesToBeAnnounced: updatedGDetails,
                };
                return updatedProgramInfo;
            });
            }
          });
          const updatedAcademicDegree = academicDegree.find(degree => degree.academicDegreeName === programInfo[0]?.academicDegreeId); 
          if (updatedAcademicDegree) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      academicDegreeId: parseInt(updatedAcademicDegree.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedSystemType = systemType.find(type => type.systemName === programInfo[0]?.systemTypeId);
          if (updatedSystemType) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      systemTypeId: updatedSystemType.id
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedPassingTheElectiveGroupBasedOn = passingTheElectiveGroupBasedOn.find(passing => passing.passingTheElectiveGroup === programInfo[0]?.PassingTheElectiveGroupBasedOnId);
          if (updatedPassingTheElectiveGroupBasedOn) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      PassingTheElectiveGroupBasedOnId: parseInt(updatedPassingTheElectiveGroupBasedOn.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedEditTheStudentLevel = editTheStudentLevel.find(Slevel => Slevel.editTheStudentLevel === programInfo[0]?.editTheStudentLevelId);
          if (updatedEditTheStudentLevel) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      editTheStudentLevelId: parseInt(updatedEditTheStudentLevel.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedBlockProof = blockProof.find(blockP => blockP.reasonsOfBlocking === programInfo[0]?.blockingProofOfRegistrationId);
          if (updatedBlockProof) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      blockingProofOfRegistrationId: parseInt(updatedBlockProof.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedFinancial = financial.find(statement => statement.theType === programInfo[0]?.typeOfFinancialStatementInTheProgramId);
          if (updatedFinancial) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      typeOfFinancialStatementInTheProgramId: parseInt(updatedFinancial.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedProgramFees = programFees.find(programfee => programfee.typeOfFees === programInfo[0]?.typeOfProgramFeesId);
          if (updatedProgramFees) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      typeOfProgramFeesId: parseInt(updatedProgramFees.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedSummerFees = summerFees.find(summerfee => summerfee.theTypeOfSummerFees === programInfo[0]?.typeOfSummerFeesId);
          if (updatedSummerFees) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      typeOfSummerFeesId: parseInt(updatedSummerFees.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedResultAppears = resultAppears.find(resultA => resultA.resultAppears === programInfo[0]?.theResultAppearsId);
          if (updatedResultAppears) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      theResultAppearsId: parseInt(updatedResultAppears.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedBlockRegister = blockRegister.find(Bregister => Bregister.theReasonForBlockingRegistration === programInfo[0]?.reasonForBlockingRegistrationId);
          if (updatedBlockRegister) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      reasonForBlockingRegistrationId: parseInt(updatedBlockRegister.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedHidingResult = hidingResult.find(bresult => bresult.theReasonForBlockingAcademicResult === programInfo[0]?.theReasonForHiddingTheResultId);
          if (updatedHidingResult) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      theReasonForHiddingTheResultId: parseInt(updatedHidingResult.id),
                  };
                  return updatedProgramInfo;
              });
          }
      
          const updatedFaculties = faculties.facultyName === programInfo.faculties;
          if (updatedFaculties) {
              setProgramInfo(prevProgramInfo => {
                  return {
                      ...prevProgramInfo,
                      faculties: faculties.facultyName
                  };
              });
          }
      
          const updatedPrerequisites = prerequisites.find(prereqs => prereqs.prerequisite === programInfo.prerequisites);
          if (updatedPrerequisites) {
              setProgramInfo(prevProgramInfo => {
                  return {
                      ...prevProgramInfo,
                      prerequisites: updatedPrerequisites
                  };
              });
          }
          const updatedtheResultToTheGuidId = resultAppears.find(resultA => resultA.resultAppears === programInfo[0]?.theResultToTheGuidId);
          if (updatedResultAppears) {
              setProgramInfo(prevProgramInfo => {
                  if (!Array.isArray(prevProgramInfo)) return prevProgramInfo;
                  const updatedProgramInfo = [...prevProgramInfo];
                  updatedProgramInfo[0] = {
                      ...updatedProgramInfo[0],
                      theResultToTheGuidId: parseInt(updatedtheResultToTheGuidId.id),
                  };
                  return updatedProgramInfo;
              });
          }
      }
    },[ state]);

    // useEffect(() => {
    //   console.log(programInfo)
    // }, [programInfo]);
  // const handleInputChange = (index, fieldName, value) => {
  //   const updatedProgramInfo = [...programInfo];
    // if (Array.isArray(updatedProgramInfo[index][fieldName])) {
    //   // If the field is an array (multi-valued)
    //   updatedProgramInfo[index][fieldName] = value.split(","); // Split the value into an array
    // } else {
  //     updatedProgramInfo[index][fieldName] = value; // Single value
  
  //   setProgramInfo(updatedProgramInfo);
  // };
  const fieldToPropertyMap = {
    "pI_DivisionTypes": "divisionTypeId",
    "pI_AllGradesSummerEstimates": "allGradesId",
    "pI_EstimatesOfCourseFeeExemptions": "allGradesId",
    "pI_DetailedGradesToBeAnnounced": "gradesDetailsId",
  };
  
  // const handleInputChange = (index, fieldName, value) => {
  //   const updatedProgramInfo = [...programInfo];
  
  //   if (fieldToPropertyMap[fieldName]) {
  //     const propertyKey = fieldToPropertyMap[fieldName];
  //     const arrayOfObjects = Array.isArray(value)
  //      ? value.map((value) => ({ [propertyKey]: value }))
  //       : [{ [propertyKey]: value }]; // If value is a single value, create an array with a single object
  //     updatedProgramInfo[index][fieldName] = arrayOfObjects;
  //   } else if (Array.isArray(updatedProgramInfo[index][fieldName])) {
  //     // If the field is an array (multi-valued)
  //     updatedProgramInfo[index][fieldName] = value.split(",").map(Number); // Split the value into an array and convert strings to numbers
  //   } else {
  //     updatedProgramInfo[index][fieldName] = value; // Single value
  //   }
  
  //   setProgramInfo(updatedProgramInfo);
  // };
  const handleInputChange = (key, fieldName, value) => {
    const updatedProgramInfo = {...programInfo};
  
    if (fieldToPropertyMap[fieldName]) {
      const propertyKey = fieldToPropertyMap[fieldName];
      const arrayOfObjects = value.map((value) => ({ [propertyKey]: parseInt(value) }));
      console.log(arrayOfObjects);
      updatedProgramInfo[key][fieldName] = arrayOfObjects;
    } else if (Array.isArray(updatedProgramInfo[key][fieldName])) {
      // If the field is an array (multi-valued)
      updatedProgramInfo[key][fieldName] = value; // Assign the selectedValues array directly
    } else {
      updatedProgramInfo[key][fieldName] = value; // Single value
    }
  
    setProgramInfo(updatedProgramInfo);
  };
  const handleDelete = (id) => {
    axios.delete(`https://localhost:7095/api/ProgramInformation/48`)
      .then(() => {
        console.log('Deletion successful');
        setProgramInfo(programInfo.filter(programInfo => programInfo.id !== id));
      })
      .catch(error => console.error('Error deleting item:', error));
      setProgramInfo({
        "programsId": '',
              "programNameInArabic": '',
              "programNameInEnglish": '',
              "majorNameInArabic": '',
              "majorNameInEnglish": '',
              "programCode": '',
              "facultyId": '',
              "academicDegreeId": '',
              "nameInCertificate": '',
              "nameInCertificateInEnglish": '',
              "beginningOfTheProgram": '',
              "endOfTheProgram":'',
              "systemTypeId": '',
              "institutionCode":  '',
              "teamCode": '',
              "specialProgram": '',
              "creditHours":  '',
              "mandatory_ProjectHours":  '',
              "optionalHours": '',
              "freeHours": '',
              "additionalRegistrationHours":'',
              "eligibleHoursforProjectRegistration": '',
              "projectHours":  '',
              "burdanCalculationId": '',
              "excludingTheBudgetTermWhenCalculatingTheGPA": '',
              "passingTheElectiveGroupBasedOnId":'',
              "prerequisitesProgramsId": '',
              "editTheStudentLevelId": '',
              "allowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear": '',
              "failureTimesForWarning": '' ,
              "failureTimesForRe_Enrollment":  '',
              "blockingProofOfRegistrationId":'',
              "typeOfFinancialStatementInTheProgramId": '',
              "typeOfProgramFeesId": '',
              "typeOfSummerFeesId":  '',
              "calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete": '',
              "bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly":'',
              "result":  '',
              "theResultAppearsId": '',
              "theResultToTheGuidId": '',
              "reasonForBlockingRegistrationId": '',
              "linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration": '',
              "linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees": '',
              "registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly": '',
              "numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects": '',
              "theReasonForHiddingTheResultId": '',
              "questionnaire": '',
              "theQuestionnaireIsIncluded": '',
              "pI_DivisionTypes":'' ,
              "pI_AllGradesSummerEstimates":'' ,
              "pI_EstimatesOfCourseFeeExemptions":'',
              "pI_DetailedGradesToBeAnnounced": '',
      })
       };
  useEffect(() => { 
    const fetchData =async (programId) =>{
            const res = await axios.get(`https://localhost:7095/api/ProgramInformation/${3}`).then( (resp)=> {
              setProgramInfo(resp.data);
                dispatch({ type: 'Get'});
              console.log(resp.data);
            }).catch((err)=>{
                dispatch({ type: 'Add' }); 
                console.log(err);
            });
            

    }
fetchData(ProgramId);
}, [ ]);
// useEffect(() => { 
// console.log(programInfo);
// }, [programInfo]);



  const sendDataToApi = async () => {
    try {
        setProgramInfo({...programInfo , programId : 7, FacultyId:1  })
        const dataToSend = { programInfo }; 
        const ProgramReq = programInfo[0]
        if (state.status === "Add") {
          console.log(ProgramReq);
            const res = await axios.post( `https://localhost:7095/api/ProgramInformation` ,{
              "programsId": 3,
              "programNameInArabic": ProgramReq.programNameInArabic,
              "programNameInEnglish": ProgramReq.programNameInEnglish,
              "majorNameInArabic":  ProgramReq.majorNameInArabic,
              "majorNameInEnglish": ProgramReq.majorNameInEnglish,
              "programCode": ProgramReq.programCode,
              "facultyId": 1,
              "academicDegreeId": ProgramReq.academicDegreeId,
              "nameInCertificate": ProgramReq.nameInCertificate,
              "nameInCertificateInEnglish": ProgramReq.nameInCertificateInEnglish,
              "beginningOfTheProgram": ProgramReq.beginningOfTheProgram,
              "endOfTheProgram":ProgramReq.endOfTheProgram,
              "systemTypeId": ProgramReq.systemTypeId,
              "institutionCode":  ProgramReq.institutionCode,
              "teamCode": ProgramReq.teamCode,
              "specialProgram":  ProgramReq.specialProgram,
              "creditHours":  ProgramReq.creditHours,
              "mandatory_ProjectHours":  ProgramReq.mandatory_ProjectHours,
              "optionalHours":  ProgramReq.optionalHours,
              "freeHours": ProgramReq.freeHours,
              "additionalRegistrationHours": ProgramReq.additionalRegistrationHours,
              "eligibleHoursforProjectRegistration": ProgramReq.eligibleHoursforProjectRegistration,
              "projectHours":  ProgramReq.projectHours,
              "burdanCalculationId": ProgramReq.burdanCalculationId,
              "excludingTheBudgetTermWhenCalculatingTheGPA": ProgramReq.excludingTheBudgetTermWhenCalculatingTheGPA,
              "passingTheElectiveGroupBasedOnId": ProgramReq.passingTheElectiveGroupBasedOnId,
              "prerequisitesProgramsId":  ProgramReq.prerequisitesProgramsId,
              "editTheStudentLevelId": ProgramReq.editTheStudentLevelId,
              "allowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear":  ProgramReq.allowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear,
              "failureTimesForWarning":  ProgramReq.failureTimesForWarning,
              "failureTimesForRe_Enrollment":  ProgramReq.failureTimesForRe_Enrollment,
              "blockingProofOfRegistrationId":  ProgramReq.blockingProofOfRegistrationId,
              "typeOfFinancialStatementInTheProgramId": ProgramReq.typeOfFinancialStatementInTheProgramId,
              "typeOfProgramFeesId": ProgramReq.typeOfProgramFeesId,
              "typeOfSummerFeesId":  ProgramReq.typeOfSummerFeesId,
              "calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete":  ProgramReq.calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete,
              "bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly": ProgramReq.bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly,
              "result":  ProgramReq.result,
              "theResultAppearsId": ProgramReq.theResultAppearsId,
              "theResultToTheGuidId": ProgramReq.theResultToTheGuidId,
              "reasonForBlockingRegistrationId": ProgramReq.reasonForBlockingRegistrationId,
              "linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration": ProgramReq.linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration,
              "linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees": ProgramReq.linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees,
              "registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly": ProgramReq.registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly,
              "numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects": ProgramReq.numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects,
              "theReasonForHiddingTheResultId": ProgramReq.theReasonForHiddingTheResultId,
              "questionnaire": ProgramReq.questionnaire,
              "theQuestionnaireIsIncluded": ProgramReq.theQuestionnaireIsIncluded,
              "pI_DivisionTypes":ProgramReq.pI_DivisionTypes ,
              "pI_AllGradesSummerEstimates":ProgramReq.pI_AllGradesSummerEstimates ,
              "pI_EstimatesOfCourseFeeExemptions":ProgramReq.pI_EstimatesOfCourseFeeExemptions,
              "pI_DetailedGradesToBeAnnounced": ProgramReq.pI_DetailedGradesToBeAnnounce,
            } ).then((resp)=> {
              console.log(resp);
              setProgramInfo(resp.data[0]);
            }).catch((err)=>{
              console.log(err);
            });

        }
         else if (state.status === "Update") {
          console.log(programInfo);
            const res = await axios.put( `https://localhost:7095/api/ProgramInformation/${48}`, {
              "programsId": 3,
              "programNameInArabic": programInfo[0].programNameInArabic,
              "programNameInEnglish": programInfo[0].programNameInEnglish,
              "majorNameInArabic":  programInfo[0].majorNameInArabic,
              "majorNameInEnglish": programInfo[0].majorNameInEnglish,
              "programCode": programInfo[0].programCode,
              "facultyId": 1,
              "academicDegreeId": programInfo[0].academicDegreeId,
              "nameInCertificate": programInfo[0].nameInCertificate,
              "nameInCertificateInEnglish": programInfo[0].nameInCertificateInEnglish,
              "beginningOfTheProgram": programInfo[0].beginningOfTheProgram,
              "endOfTheProgram":programInfo[0].endOfTheProgram,
              "systemTypeId": programInfo[0].systemTypeId,
              "institutionCode":  programInfo[0].institutionCode,
              "teamCode": programInfo[0].teamCode,
              "specialProgram":  programInfo[0].specialProgram,
              "creditHours":  programInfo[0].creditHours,
              "mandatory_ProjectHours":  programInfo[0].mandatory_ProjectHours,
              "optionalHours":  programInfo[0].optionalHours,
              "freeHours": programInfo[0].freeHours,
              "additionalRegistrationHours": programInfo[0].additionalRegistrationHours,
              "eligibleHoursforProjectRegistration": programInfo[0].eligibleHoursforProjectRegistration,
              "projectHours":  programInfo[0].projectHours,
              "burdanCalculationId": 1,
              "excludingTheBudgetTermWhenCalculatingTheGPA": programInfo[0].excludingTheBudgetTermWhenCalculatingTheGPA,
              "passingTheElectiveGroupBasedOnId": 1,
              "prerequisitesProgramsId":  programInfo[0].prerequisitesProgramsId,
              "editTheStudentLevelId": programInfo[0].editTheStudentLevelId,
              "allowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear":  programInfo[0].allowingTheRegistrationOfaSpecificNumberOfElectiveCoursesDuringTheYear,
              "failureTimesForWarning":  programInfo[0].failureTimesForWarning,
              "failureTimesForRe_Enrollment":  programInfo[0].failureTimesForRe_Enrollment,
              "blockingProofOfRegistrationId":  programInfo[0].blockingProofOfRegistrationId,
              "typeOfFinancialStatementInTheProgramId": programInfo[0].typeOfFinancialStatementInTheProgramId,
              "typeOfProgramFeesId": programInfo[0].typeOfProgramFeesId,
              "typeOfSummerFeesId":  programInfo[0].typeOfSummerFeesId,
              "calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete":  programInfo[0].calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete,
              "bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly": programInfo[0].bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly,
              "result":  programInfo[0].result,
              "theResultAppearsId": programInfo[0].theResultAppearsId,
              "theResultToTheGuidId": programInfo[0].theResultToTheGuidId,
              "reasonForBlockingRegistrationId": programInfo[0].reasonForBlockingRegistrationId,
              "linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration": programInfo[0].linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration,
              "linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees": programInfo[0].linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees,
              "registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly": programInfo[0].registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly,
              "numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects": programInfo[0].numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects,
              "theReasonForHiddingTheResultId": programInfo[0].theReasonForHiddingTheResultId,
              "questionnaire": programInfo[0].questionnaire,
              "theQuestionnaireIsIncluded": programInfo[0].theQuestionnaireIsIncluded,
              "pI_DivisionTypes":programInfo[0].pI_DivisionTypes,
              "pI_AllGradesSummerEstimates":programInfo[0].pI_AllGradesSummerEstimates,
              "pI_EstimatesOfCourseFeeExemptions":programInfo[0].pI_EstimatesOfCourseFeeExemptions ,
              "pI_DetailedGradesToBeAnnounced": programInfo[0].pI_DetailedGradesToBeAnnounced ,
            }).then((resp)=>{
              console.log(resp)
              dispatch({ type: 'Get' }); 

            }).catch((err)=> {console.log(err)} 
            );
            
            }

        //  Logging the response data for debugging
        console.log(dataToSend);
       console.log('Response:', res.data);
        if (res.status === 200) {
             dispatch({ type: 'Get' }); 
             console.log(state);
         }
     } catch (err) {
        //  Error handling: Log the error response programInfo
        console.log('Error programInfo:', err.response.programInfo); 
        return err; // You can handle the error based on your application needs
    }
}

function submit(e) {
    console.log('Program Info:', programInfo);
  e.preventDefault();
    sendDataToApi();
  }
 


  
    return ( 
      
      <Fragment>
      <div className="col-md-10">
      <div  lang="ar" dir="rtl" className="container py-5 position-relative">
                <div  lang="ar" dir="rtl" class="accordion" id="accordionExample">
<div  class="accordion-item">
<h2  class="accordion-header " id="headingOne">
  <button class="accordion-button fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    بيانات البرنامج
  </button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
  <div class="accordion-body">
  <div className="programsInfo">
                <div className="accordion"></div>
                <form className="inputs mb-3 py-3 fs-5" onSubmit={submit}>
                {Object.keys(programInfo).map((key, index) => (
                    <div key={index}>   
                      <div className="form-floating mb-3">
                        <input
                        required
                         disabled = {state.status === "Get"}
                         ref={(el) => (inputRefs.current[key] = el)}
                         type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].programNameInArabic || ''}
                          onChange={(e) => handleInputChange(key, 'programNameInArabic', e.target.value)}
                        />
                        <label htmlFor="">اسم البرنامج باللغة العربية</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                        required
                         disabled = {state.status === "Get"}
                         ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].programNameInEnglish || ''}
                          onChange={(e) => handleInputChange(key, 'programNameInEnglish', e.target.value)}
                        />
                        <label htmlFor="">اسم البرنامج باللغة الانجليزية</label>
                      </div>  
                      <div className="form-floating mb-3">
                        <input
                        required
                        disabled = {state.status === "Get"}
                        ref={(el) => (inputRefs.current[key] = el)}
                        type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].majorNameInArabic || ''}
                          onChange={(e) => handleInputChange(key, 'majorNameInArabic', e.target.value)}
                        />
                        <label htmlFor="">اسم التخصص باللغة العربية</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                        required
                          disabled = {state.status === "Get"}
                          ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].majorNameInEnglish || ''}
                          onChange={(e) => handleInputChange(key, 'majorNameInEnglish', e.target.value)}
                        />
                        <label htmlFor="">اسم التخصص باللغة الانجليزية</label>
                      </div>    
<div class="form-floating mb-3">
<input 
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
type="text" class="form-control text-end" placeholder=""
value={programInfo[key].programCode || ''}
onChange={(e) => handleInputChange(key, 'programCode', parseInt(e.target.value))}/>
<label htmlFor="">كود البرنامج</label>
</div>
<div className="dropdowns ">
<label htmlFor="facultyId">المعهد</label>
<select 
 disabled = {state.status === "Get"}
 ref={(el) => (inputRefs.current[key] = el)}
 className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].facultyId || ''}
                          onChange={(e) => handleInputChange(key, 'facultyId', parseInt(e.target.value))}>
<option>{faculties.facultyName}</option>
</select>


<div className="dropdown">
<label htmlFor="academicDegreeId">الدرجة العلمية</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].academicDegreeId || ''}
                          onChange={(e) => handleInputChange(key, 'academicDegreeId', parseInt(e.target.value))} >
{academicDegree.map((degree) => (
<option key={degree.id} value={degree.id}>{degree.academicDegreeName}</option>
))}
</select>

</div>
</div>
<div class="form-floating mb-3">
<input 
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
           type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].nameInCertificate || ''}
                          onChange={(e) => handleInputChange(key, 'nameInCertificate', e.target.value)} />
<label htmlFor="" >المسمى في الشهادة</label>
</div>
<div class="form-floating mb-3">
<input
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].nameInCertificateInEnglish || ''}
                          onChange={(e) => handleInputChange(key, 'nameInCertificateInEnglish', e.target.value)} />
<label htmlFor="" >المسمى في الشهادة باللغة الانجليزية</label>
</div>
<div class="form-floating mb-3 fw-primary">
<input 
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="date"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].beginningOfTheProgram || ''}
                          onChange={(e) => handleInputChange(key, 'beginningOfTheProgram', e.target.value)}/>
<label htmlFor="">بداية تطبيق البرنامج</label>
</div>
<div class="form-floating mb-3">
<input
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="date"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].endOfTheProgram || ''}
                          onChange={(e) => handleInputChange(key, 'endOfTheProgram', e.target.value)}/>
<label htmlFor="" dir="rtl">نهاية تطبيق البرنامج</label>
</div>
<div className="dropdown">
<label htmlFor="systemTypeId"> نوع النظام</label>
<select
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].systemTypeId || ''}
                          onChange={(e) => handleInputChange(key,'systemTypeId',parseInt(e.target.value))}>
 {systemType.map((type) => (
<option key={type.id} value={type.id}>{type.systemName}</option>
))}
</select>
</div>
<div class="form-floating mb-3">
<input
required 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="number"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].institutionCode || ''}
                          onChange={(e) => handleInputChange(key,'institutionCode',parseInt( e.target.value))}
                          />
<label htmlFor="">كود المؤسسة</label>
</div>
<div class="form-floating mb-3 position-relative ">
<input
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="number"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].teamCode || ''}
                          onChange={(e) => handleInputChange(key, 'teamCode', parseInt(e.target.value))}/>
<label htmlFor="" class="position-absolute ms-100% " >كود الفرقة</label>
</div>
</div>
))}
</form>
   </div>
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwo">
  <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
  ساعات البرنامج/نوع العبء
  </button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <div className="ProgramFees">
    <form className="inputs mb-3 py-3 fs-5 " onSubmit={submit}>
    {Object.keys(programInfo).map((key, index) => (
        <div key={index}>
    <div class="form-floating mb-3 ">
<input 
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].creditHours || ''}
                          onChange={(e) => handleInputChange(key, 'creditHours', parseInt(e.target.value))} />
<label htmlFor="" class="">الساعات المعتمدة</label>
</div>
<div className=" mb-3">
<h4 className="fw-5">تقسيم الساعات </h4>
</div>
<div class="form-floating mb-3 ">
  <label htmlFor="mandatory_ProjectHours" > الاجبارى - المشروع</label>

<input
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].mandatory_ProjectHours || ''}
                          onChange={(e) => handleInputChange(key, 'mandatory_ProjectHours', parseInt(e.target.value))} />
</div> 
<div class="form-floating mb-3 ">
<label htmlFor="optionalHours">الاختيارى</label>
<input 
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].optionalHours || ''}
                          onChange={(e) => handleInputChange(key, 'optionalHours', parseInt(e.target.value))} />
<label htmlFor="" class="">الاختيارى</label>
</div> 
<div class="form-floating mb-3 ">
<label htmlFor="freeHours">الحرة</label>

<input
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].freeHours || ''}
                          onChange={(e) => handleInputChange(key, 'freeHours', parseInt(e.target.value))} />
</div>
<div class="form-floating mb-3 ">
<input 
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].additionalRegistrationHours || ''}
                          onChange={(e) => handleInputChange(key,'additionalRegistrationHours', parseInt(e.target.value))} />
<label htmlFor="">ساعات التسجيل الاضافية</label>
</div>   
<div class="form-floating mb-3 ">
<input 
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].eligibleHoursforProjectRegistration || ''}
                          onChange={(e) => handleInputChange(key, 'eligibleHoursforProjectRegistration', parseInt(e.target.value))} />
<label htmlFor="">الساعات المؤهلة لتسجيل المشروع</label>
</div>  
<div class="form-floating mb-3 ">
<input 
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].projectHours|| ''}
                          onChange={(e) => handleInputChange(key, 'projectHours' ,parseInt( e.target.value))} />
<label htmlFor="">ساعات المشروع	</label>
</div>  
<div className="dropdown">
<label htmlFor="burdanCalculationId">حساب العبء</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].burdanCalculationId || ''}
                          onChange={(e) => handleInputChange(key, 'burdanCalculationId', parseInt(e.target.value))}>
{burdenCalculation.map((burden) => (
<option key={burden.id} value={burden.id}>{burden.burdenCalculationAS}</option>
))}
</select>
</div>
<div class="form-check py-3">
<input
required
disabled = {state.status === "Get"}
class="form-check-input"
type="checkbox"
id="flexCheckDefault"
ref={(el) => (inputRefs.current[key] = el)}
checked={programInfo[key].excludingTheBudgetTermWhenCalculatingTheGPA || false}
onChange={(e) => handleInputChange(key, 'excludingTheBudgetTermWhenCalculatingTheGPA', e.target.checked)}
/>
<label class="form-check-label" for="flexCheckDefault">
استثناء ترم الموازنة عند حساب العبء
</label>
</div>
<div className="dropdown">
<label htmlFor="passingTheElectiveGroupBasedOnId">اجتياز المجموعه الاختياريه بناءا علي</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].passingTheElectiveGroupBasedOnId || ''}
                          onChange={(e) => handleInputChange(key, 'passingTheElectiveGroupBasedOnId', parseInt(e.target.value))}>
{passingTheElectiveGroupBasedOn.map((passing) => (
<option key={passing.id} value={passing.id} >{passing.passingTheElectiveGroup}</option>
))}
</select>
</div>
<div className="dropdown">
<label htmlFor="prerequisitesProgramsId">المتطلب السابق</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          // value={programInfo[key].prerequisitesProgramsId || ''}
                          onChange={(e) => handleInputChange(key, "prerequisitesProgramsId", parseInt(e.target.value))}>
{prerequisites.map((prereqs) => (
<option key={prereqs.id} value={prereqs.id} >{prereqs.prerequisite}</option>
))}
</select>
</div>
<div className="dropdown">
<label htmlFor="pI_DivisionTypes">نوع الشعبة</label>
<select  
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          multiple
                          // value={programInfo[key].pI_DivisionTypes || ''}
                          onChange={(e) => {
                            const selectedOptions = Array.from(e.target.selectedOptions);
                            const selectedValues = selectedOptions.map((option) => option.value);
                            handleInputChange(key, 'pI_DivisionTypes', selectedValues);
                          }}>
{divisionType && divisionType.map((typeD) => (
<option key={typeD.id} value={typeD.id}
// selected={programInfo.pI_DivisionTypes.includes(typeD.division_Type)}
>{typeD.division_Type}

</option>
))}
</select>
</div>
<div className="dropdown">
<label htmlFor="editTheStudentLevelId">تعديل مستوى الطالب</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].editTheStudentLevelId || ''}
                          onChange={(e) => handleInputChange(key, 'editTheStudentLevelId', parseInt(e.target.value))}>
{editTheStudentLevel.map((Slevel) => (
<option key={Slevel.id} value={Slevel.id}>{Slevel.editTheStudentLevel}</option>
))}
</select>
</div>
</div>
))}
</form>

    </div>
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingThree">
  <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    شروط اعادة القيد/الانذار بالبرنامج
  </button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <div className="condotions">
    <form className="inputs mb-3 py-3 fs-5 " onSubmit={submit}>
    {Object.keys(programInfo).map((key, index) => (
        <div key={index}>
    <div class="form-floating mb-3 ">
<input
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].failureTimesForWarning|| ''}
                          onChange={(e) => handleInputChange(key, 'failureTimesForWarning', parseInt(e.target.value))} />
<label htmlFor="" class="">مرات الرسوب للإنذار</label>
</div>
<div class="form-floating mb-3">
<input 
required
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          type="text"
                          className="form-control text-end"
                          placeholder=""
                          value={programInfo[key].failureTimesForRe_Enrollment|| ''}
                          onChange={(e) => handleInputChange(key, 'failureTimesForRe_Enrollment',parseInt (e.target.value))} />
<label htmlFor="">مرات الرسوب لإعادة القيد</label>
</div>
<div className="dropdrown">
<label htmlFor="blockingProofOfRegistrationId">حجب إثبات القيد</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          // value={programInfo[key].blockingProofOfRegistrationId || ''}
                          onChange={(e) => handleInputChange(key, 'blockingProofOfRegistrationId', parseInt(e.target.value))}>
{blockProof.map((blockP) => (
<option key={blockP.id} value={blockP.id}>{blockP.reasonsOfBlocking}</option>
))}
</select>
</div>
</div>
))}
</form>
    </div>
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingFour">
  <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    رسوم البرنامج
  </button>
</h2>
<div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <div className="ProgramFees">
    <form className="inputs mb-3 py-3 fs-5 "onSubmit={submit}>
    {Object.keys(programInfo).map((key, index) => (
        <div key={index}>
 <div className="dropdown">
  <label htmlFor="typeOfFinancialStatementInTheProgramId"> نوع البيان المالي بالبرنامج</label>
 <select
    disabled = {state.status === "Get"}
    ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].typeOfFinancialStatementInTheProgramId || ''}
                          onChange={(e) => handleInputChange(key, 'typeOfFinancialStatementInTheProgramId', parseInt(e.target.value))}>
{financial.map((statement) => (
<option key={statement.id} value={statement.id}>{statement.theType}</option>
))}
</select>
 </div>
<div className="dropdown">
<label htmlFor="typeOfProgramFeesId">نوع رسوم البرنامج</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].typeOfProgramFeesId || ''}
                          onChange={(e) => handleInputChange(key, 'typeOfProgramFeesId',parseInt (e.target.value))}>
{programFees.map((programfee) => (
<option key={programfee.id} value={programfee.id}>{programfee.typeOfFees}</option>
))}
</select>
</div>
<div className="dropdown">
<label htmlFor="typeOfSummerFeesId">نوع رسوم الصيفي</label>
<select
    disabled = {state.status === "Get"}
    ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].typeOfSummerFeesId || ''}
                          onChange={(e) => handleInputChange(key, 'typeOfSummerFeesId', parseInt(e.target.value))}>
{summerFees.map((summerfee) => (
<option key={summerfee.id} value={summerfee.id}>{summerfee.theTypeOfSummerFees}</option>
))}
</select>
</div>
<div className="dropdown">
<label htmlFor="pI_EstimatesOfCourseFeeExemptions">تقديرات الاعفاء من رسم المقرر</label>
<select 
    disabled = {state.status === "Get"}
    ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          multiple
                          // value={programInfo[key].pI_EstimatesOfCourseFeeExemptions || ''}
                          onChange={(e) => {
                            const selectedOptions = Array.from(e.target.selectedOptions);
                            const selectedValues = selectedOptions.map((option) => option.value);
                            handleInputChange(key, 'pI_EstimatesOfCourseFeeExemptions', selectedValues);
                          }}>
{grades && grades.map((grade) => (
<option key={grade.id} 
value={grade.id}
// selected={programInfo[key].pI_EstimatesOfCourseFeeExemptions.includes(grade.theGrade)}
>
{grade.theGrade}
</option>
))}
</select>
</div>
<div class="form-check py-2">
<input
required
disabled = {state.status === "Get"}
class="form-check-input"
type="checkbox"
id="flexCheckDefault"
ref={(el) => (inputRefs.current[key] = el)}
checked={programInfo[key].calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete || false}
onChange={(e) => handleInputChange(key, 'calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete', e.target.checked)}
/>
<label class="form-check-label" for="flexCheckDefault">
إحتساب رسوم تسجيل خاصه للمقرر فى حالة تقدير سابق للمقرر غير مكتمل
</label>
</div>
<div class="form-check py-2">
<input
required
disabled = {state.status === "Get"}
class="form-check-input"
type="checkbox"
id="flexCheckDefault"
ref={(el) => (inputRefs.current[key] = el)}
checked={programInfo[key].bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly || false}
onChange={(e) => handleInputChange(key, 'bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly', e.target.checked)}
/>
<label class="form-check-label" for="flexCheckDefault">
إحتساب رسم الكتاب للمقرر في اول مرة تسجيل فقط
</label>
</div>
</div>
))}
</form>

    </div>
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingFive">
  <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
  التسجيل/الاستبيان/النتيجة و الحجب بالبرنامج
  </button>
</h2>
<div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <div className="programHours">
    <form className="inputs mb-3 py-3 fs-5 " onSubmit={submit}>
    {Object.keys(programInfo).map((key, index) => (
<div key={index}>
<div class="form-floating mb-3 ">
<label htmlFor="result" >النتيجة  </label>
<input
required
disabled = {state.status === "Get"}
type="text"
class=" form-control text-end fs-4" 
ref={(el) => (inputRefs.current[key] = el)}
className="form-control text-end"
value={programInfo[key].result|| ''}
onChange={(e) => handleInputChange(key, 'result',e.target.value)} />
</div>
<div className="dropdown">
<label htmlFor="theResultAppearsId">ظهور النتيجة</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].theResultAppearsId || ''}
                          onChange={(e) => handleInputChange(key, 'theResultAppearsId', parseInt (e.target.value))}>
{resultAppears.map((resultA) => (
<option key={resultA.id} value={resultA.id}>{resultA.resultAppears}</option>
))}
</select>
</div>
<div className="dropdown">
<label htmlFor="theResultToTheGuidId">ظهور النتيجة للمرشد</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].theResultToTheGuidId || ''}
                          onChange={(e) => handleInputChange(key, 'theResultToTheGuidId', parseInt (e.target.value))}>
{resultAppears.map((result) => (
<option key={result.id} value={result.id}>{result.resultAppears}</option>
))}
</select>
</div>
<div className="dropdown">
<label htmlFor="reasonForBlockingRegistrationId">سبب حجب التسجيل</label>
<select
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].reasonForBlockingRegistrationId || ''}
                          onChange={(e) => handleInputChange(key, 'reasonForBlockingRegistrationId', parseInt(e.target.value))}>
{blockRegister.map((Bregister) => (
<option key={Bregister.id} value={Bregister.id}>{Bregister.theReasonForBlockingRegistration}</option>
))}
</select>
</div>
<div class="form-check py-2">
<input
disabled = {state.status === "Get"}
class="form-check-input"
type="checkbox"
id="flexCheckDefault"
ref={(el) => (inputRefs.current[key] = el)}
checked={programInfo[key].linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration || false}
onChange={(e) => handleInputChange(key, 'linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration', e.target.checked)}
/>
<label class="form-check-label" for="flexCheckDefault">
ربط ظهور الوثائق بسبب حجب التسجيل
</label>
</div>
<div class="form-check py-2">
<input

disabled = {state.status === "Get"}
class="form-check-input"
type="checkbox"
id="flexCheckDefault"
ref={(el) => (inputRefs.current[key] = el)}
checked={programInfo[key].linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees || false}
onChange={(e) => handleInputChange(key, 'linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees', e.target.checked)}
/>
<label class="form-check-label" for="flexCheckDefault">
ربط ظهور جدول الامتحانات بسداد الرسوم
</label>
</div>
<div class="form-check py-2">
<input

disabled = {state.status === "Get"}
class="form-check-input"
type="checkbox"
id="flexCheckDefault"
ref={(el) => (inputRefs.current[key] = el)}
checked={programInfo[key].registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly || false}
onChange={(e) => handleInputChange(key, 'registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly', e.target.checked)}
/>
<label class="form-check-label" htmlFor="flexCheckDefault">
تسجيل المقررات المطروحة للطالب من نفس الفصل الحالى فقط بمدخل الطالب فقط
</label>
</div>
<div class="form-floating mb-3 ">
<input 
required
disabled = {state.status === "Get"}
type="number"
class=" form-control text-end fs-4" 
ref={(el) => (inputRefs.current[key] = el)}
className="form-control text-end"
value={programInfo[key].numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects|| ''}
onChange={(e) => handleInputChange(key, 'numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects', parseInt(e.target.value))} />
<label htmlFor="" class="">عدد مرات الرسوب لإلزام تسجيل مواد الرسوب الاجباريه</label>
</div>
<div className="dropdown">
<label htmlFor="theReasonForHiddingTheResultId">سبب حجب النتيجة</label>
<select
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
                          className="form-select form-select-lg mb-3 py-2"
                          aria-label=".form-select-lg example"
                          value={programInfo[key].theReasonForHiddingTheResultId || ''}
                          onChange={(e) => handleInputChange(key, 'theReasonForHiddingTheResultId', parseInt(e.target.value))}>
{hidingResult.map((bresult) => (
<option key={bresult.id} value={bresult.id}>{bresult.theReasonForBlockingAcademicResult}</option>
))}
</select>
</div>
<div className="div">

<div class="form-check py-2">
<input

disabled = {state.status === "Get"}
class="form-check-input border border-primary" 
type="radio" 
name="theQuestionnaireIsIncluded"
id="theQuestionnaireIsIncluded"
ref={(el) => (inputRefs.current[key] = el)}
checked={programInfo[key].theQuestionnaireIsIncluded===true }
onChange={(e) => handleInputChange(key, 'theQuestionnaireIsIncluded', true)}/>
<label class="form-check-label" for="exampleRadios1">
متضمن الاستبيان العام 
</label>
</div>
<div class="form-check py-2">
<input
disabled = {state.status === "Get"}
class="form-check-input border border-primary" 
type="radio" 
name="theQuestionnaireIsIncluded" 
id="theQuestionnaireIsIncluded"
ref={(el) => (inputRefs.current[key] = el)}
checked={programInfo[key].theQuestionnaireIsIncluded !== true}
onChange={(e) => handleInputChange(key, 'theQuestionnaireIsIncluded', false)}/>
<label class="form-check-label" for="exampleRadios1">
غير متضمن الاستبيان العام
</label>
</div>
</div>
<div className="dropdown">
<label htmlFor="pI_AllGradesSummerEstimates">تقديرات مقررات الصيفي</label>
<select
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
className="form-select form-select-lg mb-3 py-2"
aria-label=".form-select-lg example"
multiple
// value={programInfo[key].pI_AllGradesSummerEstimates || []}
onChange={(e) => {
const selectedOptions = Array.from(e.target.selectedOptions);
const selectedValues = selectedOptions.map((option) => option.value);
handleInputChange(key, 'pI_AllGradesSummerEstimates', selectedValues);
}}>
{grades && grades.map((grade) => (
<option key={grade.id}
 value={grade.id}
//  selected={programInfo[key].pI_AllGradesSummerEstimates.includes(grade.theGrade)}
 >{grade.theGrade}</option>
))}
</select>
</div>
{programInfo[key].theQuestionnaireIsIncluded === true && 
(<div className="">
<div class="form-check py-2">
<input 
disabled = {state.status === "Get"}
class="form-check-input border border-primary" 
type="radio" 
name="questionnaire"
id="questionnaire"
ref={(el) => (inputRefs.current[key] = el)}
checked={programInfo[key].questionnaire === true}
onChange={(e) => handleInputChange(key, 'questionnaire', true )}/>
<label class="form-check-label" htmlFor="questionnaire">   
استبيان النظام الداخلى
</label>
</div>
<div class="form-check py-2">
<input
disabled = {state.status === "Get"}
class="form-check-input border border-primary" 
type="radio"
name="questionnaire"
 id="questionnaire" 
 ref={(el) => (inputRefs.current[key] = el)}
 checked={programInfo[key].questionnaire !== true}
onChange={(e) => handleInputChange(key, 'questionnaire', false)}/>
<label class="form-check-label" htmlFor="questionnaire">
استبيان الفارابى
</label>
</div> 
</div>)}
<div className="dropdown">
<label htmlFor="pI_DetailedGradesToBeAnnounced">الدرجات التفصلية المراد اعلانها</label>
<select
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[key] = el)}
className="form-select form-select-lg mb-3 py-2"
aria-label=".form-select-lg example"
multiple
// value={programInfo[key].pI_DetailedGradesToBeAnnounced || []}
onChange={(e) => {
const selectedOptions = Array.from(e.target.selectedOptions);
const selectedValues = selectedOptions.map((option) => option.value);
handleInputChange(key, 'pI_DetailedGradesToBeAnnounced', selectedValues);
}}>
{gDetails && gDetails.map((detail) => (
<option key={detail.id} value={detail.id} 
//  selected={programInfo[key].pI_DetailedGradesToBeAnnounced.includes(detail.theDetails)} 
> {detail.theDetails}
</option>
))}
</select>
</div>
</div>
))}
{/* <button type="submit" className="btn btn-primary">Submit</button> */}

<div className="col-md-12">
{(state.status!== "Get") && 
<button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}`} type="submit">
  <i className="fa-regular fa-bookmark"></i> حفظ
</button>
}
{(state.status!== "Get") &&  <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={() => dispatch({ type: "Get" })}>
  <i className="fa-solid fa-lock"></i> غلق
</button>
}
{(state.status!== "Add" && state.status === "Get" )&&
<button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={() => dispatch({ type: "Update" })}>
  <i className="fa-solid fa-lock-open"></i> تعديل
</button>
}
<button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={() => handleDelete(programInfo.id)}>
<i className="fa fa-trash"></i>
حذف
</button>
</div>
                            
</form>
    </div>
  </div>
</div>
</div> 


</div>
    
</div>
      </div>
      
    </Fragment>
     );
}
 

 
ProgramsComp.displayName = "ProgramsComp";

ProgramsComp.propTypes = {};

export { ProgramsComp };