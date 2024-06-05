import React, { Fragment, useState, useEffect, useRef, useReducer } from "react";
import axios from "axios";
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
  const [programInfo, setProgramInfo] = useState([{}]);
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
  const [divisionType, setDivisionType] = useState([{}]);
  const [grades, setGrades] = useState([{}]);
  const [gDetails, setGDetails] = useState([{}]);
  const universityId = 1;
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
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Program Info:', programInfo);
  };

const handlePlusIconClick = () => {
    if (selectedValue) {
        const selectedGrade = grades.find(grade => grade.id === parseInt(selectedValue));
        if (selectedGrade) {
            const newSectionId = sections.length + 1;
            const newSection = {
                id: newSectionId,
                value: selectedGrade.theGrade,
            };
            setSections([...sections, newSection]);

            setData((prevData) => {
                const isFirstAddition = sections.length === 0;

                return {
                    ...prevData,
                    pI_AllGradesSummerEstimates: isFirstAddition
                        ? [
                            {
                              "allGradesId": 0
                            }
                        ]
                        : [
                            ...prevData.pI_AllGradesSummerEstimates,
                            {
                              "allGradesId": 0
                            }
                        ]
                };
            });
        }
    }
};

const handleRemoveSection = (id) => {
    const updatedSections = sections.filter((section) => section.id !== id);
    setSections(updatedSections);

    const indexToRemove = sections.findIndex((section) => section.id === id);

    setData((prevData) => ({
        ...prevData,
        pI_AllGradesSummerEstimates: prevData.pI_AllGradesSummerEstimates.filter((_, index) => index !== indexToRemove)
    }));

    setCustomValues((prevValues) => {
        const newValues = { ...prevValues };
        delete newValues[id];
        return newValues;
    });
};

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
                    <form className="inputs mb-3 py-3 fs-5" onSubmit={handleFormSubmit}>
                      {programInfo.map((info, index) => (
                        <div key={index}>
                           <div className="form-floating mb-3">
                            <input
                              ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.programsId || ''}
                              onChange={(e) => handleInputChange(index, 'programsId', e.target.value)}
                            />
                            <label htmlFor=""> ID </label>
                          </div> 
                          <div className="form-floating mb-3">
                            <input
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
   ref={(el) => (inputRefs.current[index] = el)} 
   type="text" class="form-control text-end" placeholder="" name="programCode" id="" 
   value={info.programCode || ''}
   onChange={(e) => handleInputChange(index, 'programCode', e.target.value)}/>
   <label htmlFor="">كود البرنامج</label>
 </div>
 <div className="dropdowns ">
 <select ref={(el) => (inputRefs.current[index + programInfo.length * 2] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.facultyId || ''}
                              onChange={(e) => handleInputChange(index, 'facultyId', e.target.value)}>
   <option> المعهد</option>
   <option>One</option>
   <option>Two</option>
   <option>Three</option> 
 </select>
 <select  ref={(el) => (inputRefs.current[index + programInfo.length * 3] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.academicDegreeId || ''}
                              onChange={(e) => handleInputChange(index, 'academicDegreeId', e.target.value)} >
   <option >الدرجة العلمية</option>
   {academicDegree.map((degree) => (
  <option key={degree.id}>{degree.academicDegreeName}</option>
 ))}
 </select>

 </div>
 <div class="form-floating mb-3">
   <input  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.nameInCertificate || ''}
                              onChange={(e) => handleInputChange(index, 'nameInCertificate', e.target.value)} />
   <label htmlFor="" >المسمى في الشهادة</label>
 </div>
 <div class="form-floating mb-3">
   <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.nameInCertificateInEnglish || ''}
                              onChange={(e) => handleInputChange(index, 'nameInCertificateInEnglish', e.target.value)} />
   <label htmlFor="" >المسمى في الشهادة باللغة الانجليزية</label>
 </div>
 <div class="form-floating mb-3 fw-primary">
   <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="number"
                              className="form-control text-end"
                              placeholder=""
                              value={info.beginningOfTheProgram || ''}
                              onChange={(e) => handleInputChange(index, 'beginningOfTheProgram', e.target.value)}/>
   <label htmlFor="">بداية تطبيق البرنامج</label>
 </div>
 <div class="form-floating mb-3">
   <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.endOfTheProgram || ''}
                              onChange={(e) => handleInputChange(index, 'endOfTheProgram', e.target.value)}/>
   <label htmlFor="" dir="rtl">نهاية تطبيق البرنامج</label>
 </div>
 <select ref={(el) => (inputRefs.current[index + programInfo.length * 4] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.systemTypeId || ''}
                              onChange={(e) => handleInputChange(index, 'systemTypeId',parseInt(e.target.value))}>
   <option defaultValue >نوع النظام</option>
     {systemType.map((type) => (
  <option key={type.id} value={type.id}>{type.systemName}</option>
))}
 </select>
 <div class="form-floating mb-3">
   <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="number"
                              className="form-control text-end"
                              placeholder=""
                              value={info.institutionCode || ''}
                              onChange={(e) => handleInputChange(index, 'institutionCode', e.target.value)}
                              />
   <label htmlFor="">كود المؤسسة</label>
 </div>
 <div class="form-floating mb-3 position-relative ">
   <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="number"
                              className="form-control text-end"
                              placeholder=""
                              value={info.teamCode || ''}
                              onChange={(e) => handleInputChange(index, 'teamCode', e.target.value)}/>
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
        <form className="inputs mb-3 py-3 fs-5 " onSubmit={handleFormSubmit}>
        {programInfo.map((info, index) => (
                        <div key={index}>
        <div class="form-floating mb-3 ">
  <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.creditHours || ''}
                              onChange={(e) => handleInputChange(index, 'creditHours', e.target.value)} />
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
  <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.mandatory_ProjectHours || ''}
                              onChange={(e) => handleInputChange(index, 'mandatory_ProjectHours', e.target.value)} />
  <label htmlFor="" class=""> الاجبارى - المشروع</label>
</div> <div class="form-floating mb-3 ">
  <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.optionalHours || ''}
                              onChange={(e) => handleInputChange(index, 'optionalHours', e.target.value)} />
  <label htmlFor="" class="">الاختيارى</label>
</div> <div class="form-floating mb-3 ">
  <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.freeHours || ''}
                              onChange={(e) => handleInputChange(index, 'freeHours', e.target.value)} />
  <label htmlFor="" class="">الحرة</label>
</div>
      </div>
    </div>
  </div>
  </div>
<div class="form-floating mb-3 ">
  <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.additionalRegistrationHours || ''}
                              onChange={(e) => handleInputChange(index, 'additionalRegistrationHours', e.target.value)} />
  <label htmlFor="">ساعات التسجيل الاضافية</label>
</div>   
<div class="form-floating mb-3 ">
  <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.eligibleHoursforProjectRegistration || ''}
                              onChange={(e) => handleInputChange(index, 'eligibleHoursforProjectRegistration', e.target.value)} />
  <label htmlFor="">الساعات المؤهلة لتسجيل المشروع</label>
</div>  
<div class="form-floating mb-3 ">
  <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.projectHours|| ''}
                              onChange={(e) => handleInputChange(index, 'projectHours', e.target.value)} />
  <label htmlFor="">ساعات المشروع	</label>
</div>  
<select  ref={(el) => (inputRefs.current[index + programInfo.length * 5] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.burdanCalculationId || ''}
                              onChange={(e) => handleInputChange(index, 'burdanCalculationId', parseInt(e.target.value))}>
  <option defaultValue>حساب العبء</option>
  {burdenCalculation.map((BurdenCalculation) => (
  <option key={BurdenCalculation.id} value={BurdenCalculation.id}>{BurdenCalculation.burdenCalculationAS}</option>
))}
</select>
<div class="form-check py-3">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault"
    ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
    value={info.excludingTheBudgetTermWhenCalculatingTheGPA|| ''}
    onChange={(e) => handleInputChange(index, 'excludingTheBudgetTermWhenCalculatingTheGPA', e.target.value)}
  />
  <label class="form-check-label" for="flexCheckDefault">
    استثناء ترم الموازنة عند حساب العبء
  </label>
</div>
<select  ref={(el) => (inputRefs.current[index + programInfo.length * 6] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.passingTheElectiveGroupBasedOnId || ''}
                              onChange={(e) => handleInputChange(index, 'passingTheElectiveGroupBasedOnId', parseInt(e.target.value))}>
  <option defaultValue>اجتياز المجموعه الاختياريه بناءا علي</option>
  {passingTheElectiveGroupBasedOn.map((passing) => (
  <option key={passing.id} value={passing.id} >{passing.passingTheElectiveGroup}</option>
))}
</select>
<select  ref={(el) => (inputRefs.current[index + programInfo.length * 7] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.pre_Requisite || ''}
                              onChange={(e) => handleInputChange(index, 'pre_Requisite', e.target.value)}>
  <option defaultValue>المتطلب السابق</option>
  
</select>
<select  ref={(el) => (inputRefs.current[index + programInfo.length * 8] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              multiple
                              // value={info.pI_DivisionTypes || ''}
                              onChange={(e) => {
                                const selectedOptions = Array.from(e.target.selectedOptions);
                                const selectedValues = selectedOptions.map((option) => option.value);
                                handleInputChange(index, 'pI_DivisionTypes', selectedValues);
                              }}>
  <option defaultValue>نوع الشعبة</option>
  {divisionType.map((typeD) => (
  <option key={typeD.id} value={typeD.id}>{typeD.division_Type}</option>
))}
</select>
<select ref={(el) => (inputRefs.current[index + programInfo.length * 9] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.editTheStudentLevelId || ''}
                              onChange={(e) => handleInputChange(index, 'editTheStudentLevelId', parseInt(e.target.value))}>
  <option defaultValue>	تعديل مستوى الطالب</option>
  {editTheStudentLevel.map((Slevel) => (
  <option key={Slevel.id} value={Slevel.id}>{Slevel.editTheStudentLevel}</option>
))}
</select>
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
        <form className="inputs mb-3 py-3 fs-5 "onSubmit={handleFormSubmit}>
        {programInfo.map((info, index) => (
                        <div key={index}>
        <div class="form-floating mb-3 ">
  <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.failureTimesForWarning|| ''}
                              onChange={(e) => handleInputChange(index, 'failureTimesForWarning', e.target.value)} />
  <label htmlFor="" class="">مرات الرسوب للإنذار</label>
</div>
<div class="form-floating mb-3">
  <input ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
                              type="text"
                              className="form-control text-end"
                              placeholder=""
                              value={info.failureTimesForRe_Enrollment|| ''}
                              onChange={(e) => handleInputChange(index, 'failureTimesForRe_Enrollment', e.target.value)} />
  <label htmlFor="">مرات الرسوب لإعادة القيد</label>
</div>
<select ref={(el) => (inputRefs.current[index + programInfo.length * 10] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.blockingProofOfRegistrationId || ''}
                              onChange={(e) => handleInputChange(index, 'blockingProofOfRegistrationId', parseInt(e.target.value))}>
  <option defaultValue>حجب إثبات القيد</option>
  {blockProof.map((block) => (
  <option key={block.id} value={block.id}>{block.reasonsOfBlocking}</option>
))}
</select>
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
        <form className="inputs mb-3 py-3 fs-5 "onSubmit={handleFormSubmit}>
        {programInfo.map((info, index) => (
                        <div key={index}>
        <select ref={(el) => (inputRefs.current[index + programInfo.length * 11] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.typeOfFinancialStatementInTheProgramId || ''}
                              onChange={(e) => handleInputChange(index, 'typeOfFinancialStatementInTheProgramId', parseInt(e.target.value))}>
  <option defaultValue>نوع البيان المالى بالبرنامج</option>
  {financial.map((statement) => (
  <option key={statement.id} value={statement.id}>{statement.theType}</option>
))}
</select>
<select ref={(el) => (inputRefs.current[index + programInfo.length * 12] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.typeOfProgramFeesId || ''}
                              onChange={(e) => handleInputChange(index, 'typeOfProgramFeesId',parseInt (e.target.value))}>
  <option defaultValue>نوع رسوم البرنامج</option>
  {programFees.map((programfee) => (
  <option key={programfee.id} value={programfee.id}>{programfee.typeOfFees}</option>
))}
</select>
<select ref={(el) => (inputRefs.current[index + programInfo.length * 13] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.typeOfSummerFeesId || ''}
                              onChange={(e) => handleInputChange(index, 'typeOfSummerFeesId', parseInt(e.target.value))}>
  <option defaultValue>نوع رسوم الصيفى</option>
  {summerFees.map((summerfee) => (
  <option key={summerfee.id} value={summerfee.id}>{summerfee.theTypeOfSummerFees}</option>
))}
</select>
<select ref={(el) => (inputRefs.current[index + programInfo.length * 14] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              multiple
                              // value={info.pI_EstimatesOfCourseFeeExemptions || ''}
                              onChange={(e) => {
                                const selectedOptions = Array.from(e.target.selectedOptions);
                                const selectedValues = selectedOptions.map((option) => option.value);
                                handleInputChange(index, 'pI_EstimatesOfCourseFeeExemptions', selectedValues);
                              }}>
  <option defaultValue>تقديرات الاعفاء من رسم المقرر</option>
  {grades.map((grade) => (
  <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
))}
</select>
<div class="form-check py-2">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault"
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   value={info.calculatingaSpecialRegistrationFeeForaCourseIfaPreviousAssessmentOfTheCourseIsIncomplete|| ''}
  onChange={(e) => handleInputChange(index, 'registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly', e.target.checked)} />
  <label class="form-check-label" for="flexCheckDefault">
  إحتساب رسوم تسجيل خاصه للمقرر فى حالة تقدير سابق للمقرر غير مكتمل
  </label>
</div>
<div class="form-check py-2">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault"
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
  value={info.bookFeeIsCalculatedForTheFirstTimeOfRegistrationOnly|| ''}
  onChange={(e) => handleInputChange(index, 'registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly', e.target.checked)}
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
        <form className="inputs mb-3 py-3 fs-5 " onSubmit={handleFormSubmit}>
        {programInfo.map((info, index) => (
                        <div key={index}>

<select ref={(el) => (inputRefs.current[index + programInfo.length * 15] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.result || ''}
                              onChange={(e) => handleInputChange(index, 'result', parseInt (e.target.value))}>
  <option defaultValue>النتيجة</option>
  {resultAppears.map((result) => (
  <option key={result.id} value={result.id}>{result.resultAppears}</option>
))}
</select>
<select ref={(el) => (inputRefs.current[index + programInfo.length * 16] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.theResultToTheGuidId || ''}
                              onChange={(e) => handleInputChange(index, 'theResultToTheGuidId', parseInt (e.target.value))}>
  <option defaultValue>ظهور النتيجة للمرشد</option>
  {resultAppears.map((result) => (
  <option key={result.id} value={result.id}>{result.resultAppears}</option>
))}
</select>
<select ref={(el) => (inputRefs.current[index + programInfo.length * 17] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.theReasonForHiddingTheResultId || ''}
                              onChange={(e) => handleInputChange(index, 'theReasonForHiddingTheResultId', parseInt(e.target.value))}>
  <option defaultValue>سبب حجب التسجيل</option>
  {blockRegister.map((Bregister) => (
  <option key={Bregister.id} value={Bregister.id}>{Bregister.theReasonForBlockingRegistration}</option>
))}
</select>
<div class="form-check py-2">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault"
  ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
  value={info.linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration|| ''}
  onChange={(e) => handleInputChange(index, 'linkingTheAppearanceOfDocumentsToTheReasonForWithholdingRegistration', e.target.checked)}/>
  <label class="form-check-label" for="flexCheckDefault">
  ربط ظهور الوثائق بسبب حجب التسجيل
  </label>
</div>
<div class="form-check py-2">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault"
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   value={info.linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees|| ''}
     onChange={(e) => handleInputChange(index, 'linkingTheAppearanceOfTheExaminationScheduleToThePaymentOfFees', e.target.checked)}/>
  <label class="form-check-label" for="flexCheckDefault">
  ربط ظهور جدول الامتحانات بسداد الرسوم
  </label>
</div>
<div class="form-check py-2">
  <input class="form-check-input" type="checkbox"
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   value={info.registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly|| ''}
  onChange={(e) => handleInputChange(index, 'registrationOfCoursesOfferedToStudentsFromTheSameCurrentSemesterOnlyThroughTheStudentPortalOnly', e.target.checked)}  />
 <label class="form-check-label" htmlFor="flexCheckDefault">
  تسجيل المقررات المطروحة للطالب من نفس الفصل الحالى فقط بمدخل الطالب فقط
  </label>
</div>
<div class="form-floating mb-3 ">
  <input type="number" class=" form-control text-end fs-4" placeholder=""
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   className="form-control text-end"
   value={info.numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects|| ''}
   onChange={(e) => handleInputChange(index, 'numberOfFailureTimesToRequireRegistrationOfCompulsoryFailureSubjects', e.target.value)} />
  <label htmlFor="" class="">عدد مرات الرسوب لإلزام تسجيل مواد الرسوب الاجباريه</label>
</div>
<select ref={(el) => (inputRefs.current[index + programInfo.length * 18] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              value={info.theReasonForHiddingTheResultId || ''}
                              onChange={(e) => handleInputChange(index, 'theReasonForHiddingTheResultId', parseInt(e.target.value))}>
  <option defaultValue>سبب حجب النتيجة</option>
  {hidingResult.map((bresult) => (
  <option key={bresult.id} value={bresult.id}>{bresult.theReasonForBlockingAcademicResult}</option>
))}
</select>
<div className="div">
</div>
<div class="form-check py-2">
  <input class="form-check-input border border-primary" type="radio" name="theQuestionnaireIsIncluded"  id="theQuestionnaireIsIncluded"
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   value={true}
   onChange={(e) => handleInputChange(index, 'theQuestionnaireIsIncluded', true)}/>
  <label class="form-check-label" for="exampleRadios1">
  متضمن الاستبيان العام 
  </label>
</div>
<div class="form-check py-2">
  <input class="form-check-input border border-primary" type="radio" name="theQuestionnaireIsIncluded" id="theQuestionnaireIsIncluded"
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   value={false}
   onChange={(e) => handleInputChange(index, 'theQuestionnaireIsIncluded', false)}/>
  <label class="form-check-label" for="exampleRadios1">
  غير متضمن الاستبيان العام
  </label>
</div>

<select ref={(el) => (inputRefs.current[index + programInfo.length * 19] = el)}
                              className="form-select form-select-lg mb-3 py-2"
                              aria-label=".form-select-lg example"
                              multiple
                              // value={info.pI_AllGradesSummerEstimates || ''}
                              onChange={(e) => {
                                const selectedOptions = Array.from(e.target.selectedOptions);
                                const selectedValues = selectedOptions.map((option) => option.value);
                                handleInputChange(index, 'pI_AllGradesSummerEstimates', selectedValues);
                              }}>
  <option defaultValue>تقديرات مقررات الصيفى</option>
  {grades.map((grade) => (
  <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
))}
</select>
{programInfo.theQuestionnaireIsIncluded === true && 
(<div className="">
<div class="form-check py-2">
<input 
  class="form-check-input border border-primary" type="radio" name="questionnaire" id="questionnaire"
    ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
  value={true}
  onChange={(e) => handleInputChange(index, 'questionnaire', true )}/>
<label class="form-check-label" htmlFor="questionnaire">   
استبيان النظام الداخلى
  </label>
</div>
<div class="form-check py-2">
  <input class="form-check-input border border-primary" type="radio" name="questionnaire" id="questionnaire" 
   ref={(el) => (inputRefs.current[index + programInfo.length] = el)}
   value={false}
   onChange={(e) => handleInputChange(index, 'questionnaire', false)}/>
  <label class="form-check-label" htmlFor="questionnaire">
  استبيان الفارابى
  </label>
</div> 
 </div>)}
 <select
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
  <option >الدرجات التفصلية المراد اعلانها</option>
  {gDetails.map((detail) => (
    <option key={detail.id} value={detail.id}>{detail.theDetails}</option>
  ))}
</select>
</div>
))}
<button type="submit" className="btn btn-primary">Submit</button>

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