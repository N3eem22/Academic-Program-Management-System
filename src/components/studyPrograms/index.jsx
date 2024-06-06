import React, { Fragment, useState, useEffect, useRef, useReducer } from "react";
import axios from "axios";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import { Renderer } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Joi from "joi";
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
  const universityId = 1;
  const FacultyId =1;
  useEffect(() => {
    const fetchDegree = axios.get(`https://localhost:7095/api/TheAcademicDegree?${1}`).then((res)=>{console.log(res.data); setAcademicDegree(res.data)});
    const fetchSystem = axios.get(`https://localhost:7095/api/SystemType?UniversityId=${universityId}`).then((res)=>{console.log(res.data); setSystemType(res.data)});
    const fetchBurden= axios.get(`https://localhost:7095/api/BurdenCalculation?${1}`).then((res)=>{console.log(res.data);setBurdenCalculation(res.data)});
    const fetchPassing= axios.get(`https://localhost:7095/api/PassingTheElectiveGroupBasedOn?${1}`).then((res)=>{console.log(res.data);setPassingTheElectiveGroupBasedOn(res.data)})  
    const fetchEdits= axios.get(`https://localhost:7095/api/EditTheStudentLevel?${1}`).then((res)=>{console.log(res.data);setEditTheStudentLevel(res.data)});
    const fetchProof= axios.get(`https://localhost:7095/api/BlockingProofOfRegistration?${1}`).then((res)=>{console.log(res.data);setBlockProof(res.data)});
    const fetchFStatement= axios.get(`https://localhost:7095/api/TypeOfFinancialStatementInTheProgram?${1}`).then((res)=>{console.log(res.data);setFinancial(res.data)});
    const fetchProgramF= axios.get(`https://localhost:7095/api/TypeOfProgramFees?${1}`).then((res)=>{console.log(res.data);setProgramFees(res.data)});
    const fetchSummerF= axios.get(`https://localhost:7095/api/TypeOfSummerFees?${1}`).then((res)=>{console.log(res.data);setSummerFees(res.data)});
    const fetchResult= axios.get(`https://localhost:7095/api/TheResultAppears?${1}`).then((res)=>{console.log(res.data);setResultAppears(res.data)});
    const fetchBRegister= axios.get(`https://localhost:7095/api/ReasonForBlockingRegistration?${1}`).then((res)=>{console.log(res.data);setBlockRegister(res.data)});
    const fetchHResult= axios.get(`https://localhost:7095/api/ReasonForBlockingAcademicResult?${1}`).then((res)=>{console.log(res.data);setHidingResult(res.data)});
    const fetchDivision= axios.get(`https://localhost:7095/api/DivisionType?${1}`).then((res)=>{console.log(res.data);setDivisionType(res.data)});
    const fetchGrade= axios.get(`https://localhost:7095/api/AllGrades?UniversityId=${universityId}`).then((res)=>{console.log(res.data);setGrades(res.data)});
    const fetchDetails= axios.get(`https://localhost:7095/api/GradesDetails?UniversityId=${universityId}`).then((res)=>{console.log(res.data);setGDetails(res.data)});
    const fetchFaculty= axios.get(`https://localhost:7095/api/Faculty/${FacultyId}`).then((res)=>{console.log(res.data);setFaculties(res.data)});
    const fetchPre= axios.get(`https://localhost:7095/api/Prerequisites?UniversityId=${universityId}`).then((res)=>{console.log(res.data);setPrerequisites(res.data)});
   
    if (state.status === "Update") {
      console.log(data);
      const updatedAcademicDegree = res.data
        .filter(degree => data.programInfo.includes(degree.academicDegree))
       console.log(updatedAcademicDegree);
        setProgramInfo(prevState => ({
        ...prevState,
        academicDegree: updatedAcademicDegree
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedSystemType = res.data
        .filter(type => data.programInfo.includes(type.systemType))
        .map(type => ({
          typeId: type.id,
        }));
       console.log(updatedSystemType);
        setProgramInfo(prevState => ({
        ...prevState,
        systemType: updatedSystemType
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedBurdenCalculation = res.data
        .filter(burden => data.programInfo.includes(burden.burdenCalculation))
        .map(burden => ({
          burdenId: burden.id,
        }));
       console.log(updatedBurdenCalculation);
        setProgramInfo(prevState => ({
        ...prevState,
        burdenCalculation: updatedBurdenCalculation
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedPassingTheElectiveGroupBasedOn = res.data
        .filter(passing => data.programInfo.includes(passing.passingTheElectiveGroupBasedOn))
        .map(passing => ({
          passingId: passing.id,
        }));
       console.log(updatedPassingTheElectiveGroupBasedOn);
        setProgramInfo(prevState => ({
        ...prevState,
        passingTheElectiveGroupBasedOn: updatedPassingTheElectiveGroupBasedOn
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedEditTheStudentLevel = res.data
        .filter(Slevel => data.programInfo.includes(Slevel.editTheStudentLevel))
        .map(Slevel => ({
          SlevelId: Slevel.id,
        }));
       console.log(updatedEditTheStudentLevel);
        setProgramInfo(prevState => ({
        ...prevState,
        editTheStudentLevel: updatedEditTheStudentLevel
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedBlockProof = res.data
        .filter(block => data.programInfo.includes(block.blockProof))
        .map(block => ({
          blockId: block.id,
        }));
       console.log(updatedBlockProof);
        setProgramInfo(prevState => ({
        ...prevState,
        blockProof: updatedBlockProof
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedFinancial = res.data
        .filter(statement => data.programInfo.includes(statement.financial))
        .map(statement => ({
          statementId: statement.id,
        }));
       console.log(updatedFinancial);
        setProgramInfo(prevState => ({
        ...prevState,
        financial: updatedFinancial
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedProgramFees = res.data
        .filter(programfee => data.programInfo.includes(programfee.programFees))
        .map(programfee => ({
          programfeeId: programfee.id,
        }));
       console.log(updatedProgramFees);
        setProgramInfo(prevState => ({
        ...prevState,
        programFees: updatedProgramFees
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedSummerFees= res.data
        .filter(summerfee => data.programInfo.includes(summerfee.summerFees))
        .map(summerfee => ({
          summerfeeId: summerfee.id,
        }));
       console.log(updatedSummerFees);
        setProgramInfo(prevState => ({
        ...prevState,
        summerFees: updatedSummerFees
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedResultAppears = res.data
        .filter(result => data.programInfo.includes(result.resultAppears))
        .map(result => ({
          resultId: result.id,
        }));
       console.log(updatedResultAppears);
        setProgramInfo(prevState => ({
        ...prevState,
        resultAppears: updatedResultAppears
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedBlockRegister = res.data
        .filter(Bregister => data.programInfo.includes(Bregister.blockRegister))
        .map(Bregister => ({
          BregisterId: Bregister.id,
        }));
       console.log(updatedBlockRegister);
        setProgramInfo(prevState => ({
        ...prevState,
        blockRegister: updatedBlockRegister
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedHidingResult = res.data
        .filter(bresult => data.programInfo.includes(bresult.hidingResult))
        .map(bresult => ({
          bresultId : bresult.id,
        }));
       console.log(updatedHidingResult);
        setProgramInfo(prevState => ({
        ...prevState,
        hidingResult: updatedHidingResult
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedFaculties = res.data
        .filter(faculty => data.programInfo.includes(faculty.faculties))
        .map(faculty => ({
          facultyId: faculty.id,
        }));
       console.log(updatedFaculties);
        setProgramInfo(prevState => ({
        ...prevState,
        faculties: updatedFaculties
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedPrerequisites = res.data
        .filter(prereqs => data.programInfo.includes(prereqs.prerequisites))
        .map(prereqs => ({
          prereqsId: prereqs.id,
        }));
       console.log(updatedPrerequisites);
        setProgramInfo(prevState => ({
        ...prevState,
        prerequisites: updatedPrerequisites
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedDivisionType = res.data
        .filter(typeD => data.programInfo.includes(typeD.divisionType))
        .map(typeD => ({
          typeDId: typeD.id,
        }));
       console.log(updatedDivisionType);
        setProgramInfo(prevState => ({
        ...prevState,
        divisionType: updatedDivisionType
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedGrades = res.data
        .filter(grade => data.programInfo.includes(grade.grades))
        .map(grade => ({
          gradeId: grade.id,
        }));
       console.log(updatedGrades);
        setProgramInfo(prevState => ({
        ...prevState,
        grades: updatedGrades
      }));
    }
    if (state.status === "Update") {
      console.log(data);
      const updatedGDetails = res.data
        .filter(detail => data.programInfo.includes(detail.gDetails))
        .map(detail => ({
          detailId: detail.id,
        }));
       console.log(updatedGDetails);
        setProgramInfo(prevState => ({
        ...prevState,
        gDetails: updatedGDetails
      }));
    }



    }, []);
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
  const handleInputChange = (index, fieldName, value) => {
    const updatedProgramInfo = [...programInfo];
  
    if (fieldToPropertyMap[fieldName]) {
      const propertyKey = fieldToPropertyMap[fieldName];
      const arrayOfObjects = value.map((value) => ({ [propertyKey]: parseInt(value) }));
      console.log(arrayOfObjects);
      updatedProgramInfo[index][fieldName] = arrayOfObjects;
    } else if (Array.isArray(updatedProgramInfo[index][fieldName])) {
      // If the field is an array (multi-valued)
      updatedProgramInfo[index][fieldName] = value; // Assign the selectedValues array directly
    } else {
      updatedProgramInfo[index][fieldName] = value; // Single value
    }
  
    setProgramInfo(updatedProgramInfo);
  };
  useEffect(() => {
    const fetchData =async (programId) =>{
            const res = await axios.get(`https://localhost:7095/api/ProgramInformation/${7}`).then( (resp)=> {
                dispatch({ type: 'Get'});
                setProgramInfo(resp.data);
              console.log(resp.data);
            }).catch((err)=>{
                dispatch({ type: 'Add' }); 
                console.log(err);
            });
            

    }
fetchData(ProgramId);
}, []);
useEffect(() => {
if(state.status === "Update")
    console.log("we are on update"); 
  console.log(state);   
}, [state]);
  const sendDataToApi = async () => {
    try {
        setProgramInfo({...programInfo , programId : 7, FacultyId:1  })
        const dataToSend = { programInfo }; 
        const ProgramReq = programInfo[0]
        if (state.status === "Add") {
          console.log(ProgramReq);
            const res = await axios.post( `https://localhost:7095/api/ProgramInformation` ,{
              "programsId": 7,
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
              "pI_DivisionTypes":ProgramReq.pI_DivisionTypes [
                {
                  "divisionTypeId": 1
                }
              ],
              "pI_AllGradesSummerEstimates":ProgramReq.pI_AllGradesSummerEstimates [
                {
                  "allGradesId": 2
                },
                 {
                  "allGradesId": 3
                }
              ],
              "pI_EstimatesOfCourseFeeExemptions":ProgramReq.pI_EstimatesOfCourseFeeExemptions [
                {
                  "allGradesId": 4
                }
              ],
              "pI_DetailedGradesToBeAnnounced": ProgramReq.pI_DetailedGradesToBeAnnounced[
                {
                  "gradesDetailsId": 4
                }
              ]
              
            } ).then((resp)=> {
              console.log(resp);
              setProgramInfo(resp.data);
            }).catch((err)=>{
              console.log(err);
            });

        }
         else if (state.status === "Update") {
          console.log(ProgramReq);
            const res = await axios.put( `https://localhost:7095/api/ProgramInformation/${3}`, {
              "programsId": 7,
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
              "pI_DivisionTypes":ProgramReq.pI_DivisionTypes [
                {
                  "divisionTypeId": 1
                }
              ],
              "pI_AllGradesSummerEstimates":ProgramReq.pI_AllGradesSummerEstimates [
                {
                  "allGradesId": 2
                },
                 {
                  "allGradesId": 3
                }
              ],
              "pI_EstimatesOfCourseFeeExemptions":ProgramReq.pI_EstimatesOfCourseFeeExemptions [
                {
                  "allGradesId": 4
                }
              ],
              "pI_DetailedGradesToBeAnnounced": ProgramReq.pI_DetailedGradesToBeAnnounced[
                {
                  "gradesDetailsId": 4
                }
              ]
            }).then((resp)=>{
              console.log(resp)
              dispatch({ type: 'Get' }); 

            }).catch((err)=> console.log(err)
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
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Program Info:', programInfo);
  // };

// const handlePlusIconClick = () => {
//     if (selectedValue) {
//         const selectedGrade = grades.find(grade => grade.id === parseInt(selectedValue));
//         if (selectedGrade) {
//             const newSectionId = sections.length + 1;
//             const newSection = {
//                 id: newSectionId,
//                 value: selectedGrade.theGrade,
//             };
//             setSections([...sections, newSection]);

//             setData((prevData) => {
//                 const isFirstAddition = sections.length === 0;

//                 return {
//                     ...prevData,
//                     pI_AllGradesSummerEstimates: isFirstAddition
//                         ? [
//                             {
//                               "allGradesId": 0
//                             }
//                         ]
//                         : [
//                             ...prevData.pI_AllGradesSummerEstimates,
//                             {
//                               "allGradesId": 0
//                             }
//                         ]
//                 };
//             });
//         }
//     }
// };

// const handleRemoveSection = (id) => {
//     const updatedSections = sections.filter((section) => section.id !== id);
//     setSections(updatedSections);

//     const indexToRemove = sections.findIndex((section) => section.id === id);

//     setData((prevData) => ({
//         ...prevData,
//         pI_AllGradesSummerEstimates: prevData.pI_AllGradesSummerEstimates.filter((_, index) => index !== indexToRemove)
//     }));

//     setCustomValues((prevValues) => {
//         const newValues = { ...prevValues };
//         delete newValues[id];
//         return newValues;
//     });
// };

  const addInputField = () => {
    setProgramInfo([...programInfo, {}]);
  }; 

  
    return ( 
      
        <Fragment>
          <div className="col-md-10">
          <div  lang="ar" dir="rtl" className="container py-5 position-relative">
                    <div  lang="ar" dir="rtl" class="accordion" id="accordionExample">
  <div class="accordion-item  ">
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
                      {programInfo.map((info, index) => (
                        <div key={index}>
                          <div className="form-floating mb-3">
                            <input
                            required
                             disabled = {state.status === "Get"}
                              ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.programNameInArabic || ''}
                              onChange={(e) => handleInputChange(index, 'programNameInArabic', e.target.value)}
                            />
                            <label htmlFor="">اسم البرنامج باللغة العربية</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                            required
                             disabled = {state.status === "Get"}
                              ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.programNameInEnglish || ''}
                              onChange={(e) => handleInputChange(index, 'programNameInEnglish', e.target.value)}
                            />
                            <label htmlFor="">اسم البرنامج باللغة الانجليزية</label>
                          </div>  
                          <div className="form-floating mb-3">
                            <input
                            required
                            disabled = {state.status === "Get"}
                              ref={(el) => (inputRefs.current[index + programInfo.length]= el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.majorNameInArabic || ''}
                              onChange={(e) => handleInputChange(index, 'majorNameInArabic', e.target.value)}
                            />
                            <label htmlFor="">اسم التخصص باللغة العربية</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                            required
                              disabled = {state.status === "Get"}
                              ref={(el) => (inputRefs.current[index + programInfo.length]= el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.majorNameInEnglish || ''}
                              onChange={(e) => handleInputChange(index, 'majorNameInEnglish', e.target.value)}
                            />
                            <label htmlFor="">اسم التخصص باللغة الانجليزية</label>
                          </div>    
 <div class="form-floating mb-3">
   <input 
   required
   disabled = {state.status === "Get"}
   ref={(el) => (inputRefs.current[index] = el)} 
   type="text" class="form-control text-end" placeholder=""
   value={info.programCode || ''}
   onChange={(e) => handleInputChange(index, 'programCode', parseInt(e.target.value))}/>
   <label htmlFor="">كود البرنامج</label>
 </div>
 <div className="dropdowns ">
  <label htmlFor="facultyId">المعهد</label>
 <select 
     disabled = {state.status === "Get"}
     ref={(el) => (inputRefs.current[index + programInfo.length * 2] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              // value={info.facultyId || ''}
                              onChange={(e) => handleInputChange(index, 'facultyId', parseInt(e.target.value))}>
  <option>{faculties.facultyName}</option>
 </select>


<div className="dropdown">
<label htmlFor="academicDegreeId">الدرجة العلمية</label>

<select 
    disabled = {state.status === "Get"}

 ref={(el) => (inputRefs.current[index + programInfo.length * 3] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.academicDegreeId || ''}
                              onChange={(e) => handleInputChange(index, 'academicDegreeId', parseInt(e.target.value))} >
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
    ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.nameInCertificate || ''}
                              onChange={(e) => handleInputChange(index, 'nameInCertificate', e.target.value)} />
   <label htmlFor="" >المسمى في الشهادة</label>
 </div>
 <div class="form-floating mb-3">
   <input
   required
   disabled = {state.status === "Get"}
    ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.nameInCertificateInEnglish || ''}
                              onChange={(e) => handleInputChange(index, 'nameInCertificateInEnglish', e.target.value)} />
   <label htmlFor="" >المسمى في الشهادة باللغة الانجليزية</label>
 </div>
 <div class="form-floating mb-3 fw-primary">
   <input 
   required
   disabled = {state.status === "Get"}
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="date"
                              className="form-control text-end"
                              placeholder=""
                              value={info.beginningOfTheProgram || ''}
                              onChange={(e) => handleInputChange(index, 'beginningOfTheProgram', e.target.value)}/>
   <label htmlFor="">بداية تطبيق البرنامج</label>
 </div>
 <div class="form-floating mb-3">
   <input
   required
   disabled = {state.status === "Get"}
    ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="date"
                              className="form-control text-end"
                              placeholder=""
                              value={info.endOfTheProgram || ''}
                              onChange={(e) => handleInputChange(index, 'endOfTheProgram', e.target.value)}/>
   <label htmlFor="" dir="rtl">نهاية تطبيق البرنامج</label>
 </div>
 <div className="dropdown">
  <label htmlFor="systemTypeId"> نوع النظام</label>
 <select
    disabled = {state.status === "Get"}
    ref={(el) => (inputRefs.current[index + programInfo.length * 4] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.systemTypeId || ''}
                              onChange={(e) => handleInputChange(index, 'systemTypeId',parseInt(e.target.value))}>
     {systemType.map((type) => (
  <option key={type.id} value={type.id}>{type.systemName}</option>
))}
 </select>
 </div>
 <div class="form-floating mb-3">
   <input
   required 
   disabled = {state.status === "Get"}
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="number"
                              className="form-control text-end"
                              placeholder=""
                              value={info.institutionCode || ''}
                              onChange={(e) => handleInputChange(index, 'institutionCode',parseInt( e.target.value))}
                              />
   <label htmlFor="">كود المؤسسة</label>
 </div>
 <div class="form-floating mb-3 position-relative ">
   <input
   required
   disabled = {state.status === "Get"}
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="number"
                              className="form-control text-end"
                              placeholder=""
                              value={info.teamCode || ''}
                              onChange={(e) => handleInputChange(index, 'teamCode', parseInt(e.target.value))}/>
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
        {programInfo.map((info, index) => (
                        <div key={index}>
        <div class="form-floating mb-3 ">
  <input 
  required
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.creditHours || ''}
                              onChange={(e) => handleInputChange(index, 'creditHours', parseInt(e.target.value))} />
  <label htmlFor="" class="">الساعات المعتمدة</label>
</div>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
        تقسيم الساعات
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="form-floating mb-3 ">
  <input
  required
  disabled = {state.status === "Get"}
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.mandatory_ProjectHours || ''}
                              onChange={(e) => handleInputChange(index, 'mandatory_ProjectHours', parseInt(e.target.value))} />
  <label htmlFor="" class=""> الاجبارى - المشروع</label>
</div> 
<div class="form-floating mb-3 ">
  <input 
  required
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.optionalHours || ''}
                              onChange={(e) => handleInputChange(index, 'optionalHours', parseInt(e.target.value))} />
  <label htmlFor="" class="">الاختيارى</label>
</div> <div class="form-floating mb-3 ">
  <input
  required
  disabled = {state.status === "Get"}
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.freeHours || ''}
                              onChange={(e) => handleInputChange(index, 'freeHours', parseInt(e.target.value))} />
  <label htmlFor="" class="">الحرة</label>
</div>
      </div>
    </div>
  </div>
  </div>
<div class="form-floating mb-3 ">
  <input 
  required
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.additionalRegistrationHours || ''}
                              onChange={(e) => handleInputChange(index, 'additionalRegistrationHours', parseInt(e.target.value))} />
  <label htmlFor="">ساعات التسجيل الاضافية</label>
</div>   
<div class="form-floating mb-3 ">
  <input 
  required
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.eligibleHoursforProjectRegistration || ''}
                              onChange={(e) => handleInputChange(index, 'eligibleHoursforProjectRegistration', parseInt(e.target.value))} />
  <label htmlFor="">الساعات المؤهلة لتسجيل المشروع</label>
</div>  
<div class="form-floating mb-3 ">
  <input 
  required
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.projectHours|| ''}
                              onChange={(e) => handleInputChange(index, 'projectHours',parseInt( e.target.value))} />
  <label htmlFor="">ساعات المشروع	</label>
</div>  
<div className="dropdown">
  <label htmlFor="burdanCalculationId">حساب العبء</label>
<select 
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length * 5] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.burdanCalculationId || ''}
                              onChange={(e) => handleInputChange(index, 'burdanCalculationId', parseInt(e.target.value))}>
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
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
  checked={info.excludingTheBudgetTermWhenCalculatingTheGPA || false}
  onChange={(e) => handleInputChange(index, 'excludingTheBudgetTermWhenCalculatingTheGPA', e.target.checked)}
/>
  <label class="form-check-label" for="flexCheckDefault">
    استثناء ترم الموازنة عند حساب العبء
  </label>
</div>
<div className="dropdown">
<label htmlFor="passingTheElectiveGroupBasedOnId">اجتياز المجموعه الاختياريه بناءا علي</label>
<select 
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length * 6] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.passingTheElectiveGroupBasedOnId || ''}
                              onChange={(e) => handleInputChange(index, 'passingTheElectiveGroupBasedOnId', parseInt(e.target.value))}>
  {passingTheElectiveGroupBasedOn.map((passing) => (
  <option key={passing.id} value={passing.id} >{passing.passingTheElectiveGroup}</option>
))}
</select>
</div>
<div className="dropdown">
<label htmlFor="prerequisitesProgramsId">المتطلب السابق</label>
<select 
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length * 7] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              // value={info.prerequisitesProgramsId || ''}
                              onChange={(e) => handleInputChange(index, '"prerequisitesProgramsId"', parseInt(e.target.value))}>
  {prerequisites.map((prereqs) => (
  <option key={prereqs.id} value={prereqs.id} >{prereqs.prerequisite}</option>
))}
</select>
</div>
<div className="dropdown">
  <label htmlFor="pI_DivisionTypes">نوع الشعبة</label>
<select  
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length * 8] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              multiple
                              // value={info.pI_DivisionTypes || ''}
                              onChange={(e) => {
                                const selectedOptions = Array.from(e.target.selectedOptions);
                                const selectedValues = selectedOptions.map((option) => option.value);
                                handleInputChange(index, 'pI_DivisionTypes', selectedValues);
                              }}>
  {divisionType.map((typeD) => (
  <option key={typeD.id} value={typeD.id}>{typeD.division_Type}</option>
))}
</select>
</div>
<div className="dropdown">
<label htmlFor="editTheStudentLevelId">تعديل مستوى الطالب</label>
<select 
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length * 9] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.editTheStudentLevelId || ''}
                              onChange={(e) => handleInputChange(index, 'editTheStudentLevelId', parseInt(e.target.value))}>
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
        {programInfo.map((info, index) => (
                        <div key={index}>
        <div class="form-floating mb-3 ">
  <input
  required
  disabled = {state.status === "Get"}
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.failureTimesForWarning|| ''}
                              onChange={(e) => handleInputChange(index, 'failureTimesForWarning', parseInt(e.target.value))} />
  <label htmlFor="" class="">مرات الرسوب للإنذار</label>
</div>
<div class="form-floating mb-3">
  <input 
  required
  disabled = {state.status === "Get"}
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.failureTimesForRe_Enrollment|| ''}
                              onChange={(e) => handleInputChange(index, 'failureTimesForRe_Enrollment',parseInt (e.target.value))} />
  <label htmlFor="">مرات الرسوب لإعادة القيد</label>
</div>
<div className="dropdrown">
  <label htmlFor="blockingProofOfRegistrationId">حجب إثبات القيد</label>
<select 
   disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[index + programInfo.length * 10] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.blockingProofOfRegistrationId || ''}
                              onChange={(e) => handleInputChange(index, 'blockingProofOfRegistrationId', parseInt(e.target.value))}>
  {blockProof.map((block) => (
  <option key={block.id} value={block.id}>{block.reasonsOfBlocking}</option>
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
        {programInfo.map((info, index) => (
                        <div key={index}>
     <div className="dropdown">
      <label htmlFor="typeOfFinancialStatementInTheProgramId"> نوع البيان المالي بالبرنامج</label>
     <select
        disabled = {state.status === "Get"}
        ref={(el) => (inputRefs.current[index + programInfo.length * 11] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.typeOfFinancialStatementInTheProgramId || ''}
                              onChange={(e) => handleInputChange(index, 'typeOfFinancialStatementInTheProgramId', parseInt(e.target.value))}>
  {financial.map((statement) => (
  <option key={statement.id} value={statement.id}>{statement.theType}</option>
))}
</select>
     </div>
<div className="dropdown">
  <label htmlFor="typeOfProgramFeesId">نوع رسوم البرنامج</label>
<select 
   disabled = {state.status === "Get"}
   ref={(el) => (inputRefs.current[index + programInfo.length * 12] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.typeOfProgramFeesId || ''}
                              onChange={(e) => handleInputChange(index, 'typeOfProgramFeesId',parseInt (e.target.value))}>
  {programFees.map((programfee) => (
  <option key={programfee.id} value={programfee.id}>{programfee.typeOfFees}</option>
))}
</select>
</div>
<div className="dropdown">
  <label htmlFor="typeOfSummerFeesId">نوع رسوم الصيفي</label>
<select
        disabled = {state.status === "Get"}
        ref={(el) => (inputRefs.current[index + programInfo.length * 13] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.typeOfSummerFeesId || ''}
                              onChange={(e) => handleInputChange(index, 'typeOfSummerFeesId', parseInt(e.target.value))}>
  {summerFees.map((summerfee) => (
  <option key={summerfee.id} value={summerfee.id}>{summerfee.theTypeOfSummerFees}</option>
))}
</select>
</div>
<div className="dropdown">
  <label htmlFor="pI_EstimatesOfCourseFeeExemptions">تقديرات الاعفاء من رسم المقرر</label>
<select 
        disabled = {state.status === "Get"}
        ref={(el) => (inputRefs.current[index + programInfo.length * 14] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              multiple
                              // value={info.pI_EstimatesOfCourseFeeExemptions || ''}
                              onChange={(e) => {
                                const selectedOptions = Array.from(e.target.selectedOptions);
                                const selectedValues = selectedOptions.map((option) => option.value);
                                handleInputChange(index, 'pI_EstimatesOfCourseFeeExemptions', selectedValues);
                              }}>
  {grades.map((grade) => (
  <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
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
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
  checked={info.calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete || false}
  onChange={(e) => handleInputChange(index, 'calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete', e.target.checked)}
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
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
  checked={info.bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly || false}
  onChange={(e) => handleInputChange(index, 'bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly', e.target.checked)}
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
        {programInfo.map((info, index) => (
                        <div key={index}>

<div class="form-floating mb-3 ">
  <input
  required
  disabled = {state.status === "Get"}
   type="text"
    class=" form-control text-end fs-4" 
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   className="form-control text-end"
   value={info.result|| ''}
   onChange={(e) => handleInputChange(index, 'result',e.target.value)} />
  <label htmlFor="" class="">النتيجة  </label>
</div>
<div className="dropdown">
  <label htmlFor="theResultAppearsId">ظهور النتيجة</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[index + programInfo.length * 15] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.theResultAppearsId || ''}
                              onChange={(e) => handleInputChange(index, 'theResultAppearsId', parseInt (e.target.value))}>
  {resultAppears.map((result) => (
  <option key={result.id} value={result.id}>{result.resultAppears}</option>
))}
</select>
</div>
<div className="dropdown">
  <label htmlFor="theResultToTheGuidId">ظهور النتيجة للمرشد</label>
<select 
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[index + programInfo.length * 16] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.theResultToTheGuidId || ''}
                              onChange={(e) => handleInputChange(index, 'theResultToTheGuidId', parseInt (e.target.value))}>
  {resultAppears.map((result) => (
  <option key={result.id} value={result.id}>{result.resultAppears}</option>
))}
</select>
</div>
<div className="dropdown">
  <label htmlFor="reasonForBlockingRegistrationId">سبب حجب التسجيل</label>
<select
disabled = {state.status === "Get"}
ref={(el) => (inputRefs.current[index + programInfo.length * 17] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.reasonForBlockingRegistrationId || ''}
                              onChange={(e) => handleInputChange(index, 'reasonForBlockingRegistrationId', parseInt(e.target.value))}>
  {blockRegister.map((Bregister) => (
  <option key={Bregister.id} value={Bregister.id}>{Bregister.theReasonForBlockingRegistration}</option>
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
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
  checked={info.linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration || false}
  onChange={(e) => handleInputChange(index, 'linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration', e.target.checked)}
/>
  <label class="form-check-label" for="flexCheckDefault">
  ربط ظهور الوثائق بسبب حجب التسجيل
  </label>
</div>
<div class="form-check py-2">
<input
required
disabled = {state.status === "Get"}
  class="form-check-input"
  type="checkbox"
  id="flexCheckDefault"
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
  checked={info.linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees || false}
  onChange={(e) => handleInputChange(index, 'linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees', e.target.checked)}
/>
  <label class="form-check-label" for="flexCheckDefault">
  ربط ظهور جدول الامتحانات بسداد الرسوم
  </label>
</div>
<div class="form-check py-2">
<input
required
disabled = {state.status === "Get"}
  class="form-check-input"
  type="checkbox"
  id="flexCheckDefault"
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
  checked={info.registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly || false}
  onChange={(e) => handleInputChange(index, 'registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly', e.target.checked)}
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
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   className="form-control text-end"
   value={info.numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects|| ''}
   onChange={(e) => handleInputChange(index, 'numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects', parseInt(e.target.value))} />
  <label htmlFor="" class="">عدد مرات الرسوب لإلزام تسجيل مواد الرسوب الاجباريه</label>
</div>
<div className="dropdown">
  <label htmlFor="theReasonForHiddingTheResultId">سبب حجب النتيجة</label>
<select
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length * 18] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.theReasonForHiddingTheResultId || ''}
                              onChange={(e) => handleInputChange(index, 'theReasonForHiddingTheResultId', parseInt(e.target.value))}>
  {hidingResult.map((bresult) => (
  <option key={bresult.id} value={bresult.id}>{bresult.theReasonForBlockingAcademicResult}</option>
))}
</select>
</div>
<div className="div">

<div class="form-check py-2">
  <input
  required
  disabled = {state.status === "Get"}
   class="form-check-input border border-primary" 
   type="radio" 
   name="theQuestionnaireIsIncluded"
    id="theQuestionnaireIsIncluded"
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   checked={info.theQuestionnaireIsIncluded===true }
   onChange={(e) => handleInputChange(index, 'theQuestionnaireIsIncluded', true)}/>
  <label class="form-check-label" for="exampleRadios1">
  متضمن الاستبيان العام 
  </label>
</div>
<div class="form-check py-2">
  <input
  required
  disabled = {state.status === "Get"}
   class="form-check-input border border-primary" 
   type="radio" 
   name="theQuestionnaireIsIncluded" 
   id="theQuestionnaireIsIncluded"
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   checked={info.theQuestionnaireIsIncluded !== true}
   onChange={(e) => handleInputChange(index, 'theQuestionnaireIsIncluded', false)}/>
  <label class="form-check-label" for="exampleRadios1">
  غير متضمن الاستبيان العام
  </label>
</div>
</div>
<div className="dropdown">
  <label htmlFor="pI_AllGradesSummerEstimates">تقديرات مقررات الصيفي</label>
<select
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length * 19] = el)}
  className="form-select form-select-lg mb-3 py-2"
  aria-label=".form-select-lg example"
  multiple
  // value={info.pI_AllGradesSummerEstimates || []}
  onChange={(e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    handleInputChange(index, 'pI_AllGradesSummerEstimates', selectedValues);
  }}>
  {grades.map((grade) => (
    <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
  ))}
</select>
</div>
{info.theQuestionnaireIsIncluded === true && 
(<div className="">
<div class="form-check py-2">
<input 
required
disabled = {state.status === "Get"}
  class="form-check-input border border-primary" 
  type="radio" 
  name="questionnaire"
   id="questionnaire"
    ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
    checked={info.questionnaire === true}
  onChange={(e) => handleInputChange(index, 'questionnaire', true )}/>
<label class="form-check-label" htmlFor="questionnaire">   
استبيان النظام الداخلى
  </label>
</div>
<div class="form-check py-2">
  <input
  required
  disabled = {state.status === "Get"}
   class="form-check-input border border-primary" 
   type="radio"
    name="questionnaire"
     id="questionnaire" 
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   checked={info.questionnaire !== true}
   onChange={(e) => handleInputChange(index, 'questionnaire', false)}/>
  <label class="form-check-label" htmlFor="questionnaire">
  استبيان الفارابى
  </label>
</div> 
 </div>)}
<div className="dropdown">
  <label htmlFor="pI_DetailedGradesToBeAnnounced">لدرجات التفصلية المراد اعلانها</label>
<select
  disabled = {state.status === "Get"}
  ref={(el) => (inputRefs.current[index + programInfo.length * 20] = el)}
  className="form-select form-select-lg mb-3 py-2"
  aria-label=".form-select-lg example"
  multiple
  // value={info.pI_DetailedGradesToBeAnnounced || []}
  onChange={(e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    handleInputChange(index, 'pI_DetailedGradesToBeAnnounced', selectedValues);
  }}>
  {gDetails.map((detail) => (
    <option key={detail.id} value={detail.id}>{detail.theDetails}</option>
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