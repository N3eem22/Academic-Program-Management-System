import React, { useEffect, useState, Fragment, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";
import axios from "axios";
import { useGlobalState } from "./index";
import Context from "../../../../components/dropdowmitems/Context";

function reducer(state, action) {
  switch (action.type) {
    case "Get":
      return { ...state, status: "Get" };
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

const AddGraduation = ({ data }) => {
  const initialState = {
    status: '',
  };

  const { globalState, setGlobalState } = useGlobalState();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [levels, setLevels] = useState([]);
  const [grades, setGrades] = useState([]);
  const [Sems, setSemss] = useState([]);
  const [graduation, setgraduation] = useState({
    programId: 48,
    studyYears: null,
    value: null,
    rate: false,
    ratio: false,
    compulsoryCourses: null,
    summerTraining: null,
    verifyPaymentOfFees: true,
    makeSureToPassTheOptionalGroups: 0,
    passingMilitaryEducation: null,
    successInEveryCourse: null,
    determineTheRankBasedOn: null,
    rateBase: null,
    comparingCumulativeAverageForEachYear: false,
    theMinimumGradeForTheCourseId: null,
    levelsTobePassed: [],
    semestersTobePssed: [],
    averageValues: [{ value: 0, yearValue: 0, graduationId: 0, equivalentGradeId: 1, allGradesId: 3 }]
  });



  const handleChange = (event) => {
    const { name, selectedOptions } = event.target;
    const options = Array.from(selectedOptions);
    let selectedValues;
    console.log(options);
    if (name === "semestersTobePssed" || name === "levelsTobePassed") {
      selectedValues = options.map(option => ({
        [`${name === "semestersTobePssed" ? "semesterId" : "levelId"}`]: parseInt(option.value),
        graduationId: 0 } ));
  } else {
    selectedValues = options.map(option => option.value);
}

setgraduation(prevState => ({
  ...prevState,
  [name]: selectedValues,
}));
  };
useEffect(() => {
  console.log('Updated selectedValues:', graduation);
  console.log(data);
}, [graduation]);
useEffect(() => {
 
  if (globalState.State === "Update") {
    setgraduation(prevGraduation => ({
      ...prevGraduation,
      ProgramId: data.programId,
      rate: data.rate,
      ratio: data.ratio,
      value: data.value,
      levelsTobePassed: data.graduationLevels,
      semestersTobePssed: data.graduationSemesters ,
      compulsoryCourses: data.compulsoryCourses,
      summerTraining: data.summerTraining,
      verifyPaymentOfFees: data.verifyPaymentOfFees,
      makeSureToPassTheOptionalGroups: data.makeSureToPassTheOptionalGroups,
      passingMilitaryEducation: data.passingMilitaryEducation,
      successInEveryCourse: data.successInEveryCourse,
      determineTheRankBasedOn: data.determineTheRankBasedOn,
      rateBase: data.rateBase,
      comparingCumulativeAverageForEachYear: data.comparingCumulativeAverageForEachYear,
      theMinimumGradeForTheCourseId: data.theMinimumGradeForTheCourse,
      averageValues: [{ value: 0, yearValue: 0, graduationId: 0, equivalentGradeId: 1, allGradesId: 3 }]
    }));
  }
console.log(data);
}, [data]);
useEffect(() => {
  const selectedGrade = grades.find(grade => graduation.theMinimumGradeForTheCourseId === grade.theGrade);
  if (selectedGrade) {
    setgraduation(prevGraduation => ({
      ...prevGraduation,
      theMinimumGradeForTheCourseId: parseInt(selectedGrade.id)
    }));
  }
}, [graduation.theMinimumGradeForTheCourseId, grades]);


useEffect(() => {

  const fetchGrades = axios.get(`https://localhost:7095/api/AllGrades?UniversityId=${1}`).then((res)=>{console.log(res.data); setGrades(res.data)});
    const fetchLevels = axios.get('https://localhost:7095/api/Level?UniversityId=1')
    .then((res) => {
      console.log(res.data);
      setLevels(res.data);

      // Transform levelsTobePassed based on fetched levels
      if (globalState.State === "Update") {
        console.log(data);
        const updatedLevelsTobePassed = res.data
          .filter(level => data.graduationLevels.includes(level.levels))
          .map(level => ({
            levelId: level.id,
            graduationId: 0
          }));
        console.log(updatedLevelsTobePassed);
        setgraduation(prevState => ({
          ...prevState,
          levelsTobePassed: updatedLevelsTobePassed
        }));
      }
    });

  const fetchSemesters = axios.get('https://localhost:7095/api/Semesters?UniversityId=1')
    .then((res) => {
      console.log(res.data);
      setSemss(res.data);

      // Transform semestersTobePassed based on fetched semesters
      if (globalState.State === "Update") {
        const updatedSemestersTobePassed = res.data
          .filter(semester => data.graduationSemesters.includes(semester.semesters))
          .map(semester => ({
            semesterId: semester.id,
            graduationId: 0
          }));

        setgraduation(prevState => ({
          ...prevState,
          semestersTobePssed: updatedSemestersTobePassed
        }));
      }
    });
  Promise.all([fetchGrades, fetchLevels, fetchSemesters])
    .catch(err => console.error(err));
  console.log(globalState);
}, [globalState,]);
useEffect(() => {
  console.log(graduation);

}, [graduation]);
async function sendDataToApi() {

  const dataToSend = { graduationReq: graduation };
  console.log("Sending request with payload:", dataToSend);
  await axios.post(`https://localhost:7095/api/Graduation`,{
    ProgramId : graduation.programId,
    rate : graduation.rate,
    ratio : graduation.ratio,
    value : graduation.value,
    levelsTobePassed : graduation.levelsTobePassed,
    semestersTobePssed : graduation.semestersTobePssed,
    compulsoryCourses: graduation.compulsoryCourses,
    summerTraining: graduation.summerTraining,
    verifyPaymentOfFees: graduation.verifyPaymentOfFees,
    makeSureToPassTheOptionalGroups: graduation.makeSureToPassTheOptionalGroups,
    passingMilitaryEducation: graduation.passingMilitaryEducation,
    successInEveryCourse: graduation.successInEveryCourse,
    determineTheRankBasedOn: graduation.determineTheRankBasedOn,
    rateBase: graduation.rateBase,
    comparingCumulativeAverageForEachYear: graduation.comparingCumulativeAverageForEachYear,
    theMinimumGradeForTheCourseId: graduation.theMinimumGradeForTheCourseId,
    averageValues: [{ value: 0, yearValue: 0, graduationId: 0, equivalentGradeId: 1, allGradesId: 3 }]
      } ).then((res) => {
      console.log(res)
      setGlobalState({ ...globalState, State: "Get" });
    }).catch((err) => console.log(err.response.data));    
  }
async function UpdateAPI() {

  const dataToSend = { graduationReq: graduation };
  console.log("Sending request with payload:", dataToSend);
  await axios.put(`https://localhost:7095/api/Graduation/${49}`,{
    ProgramId : graduation.programId,
    rate : graduation.rate,
    ratio : graduation.ratio,
    value : graduation.value,
    studyYears : graduation.studyYears,
    levelsTobePassed : graduation.levelsTobePassed,
    semestersTobePssed : graduation.semestersTobePssed,
    compulsoryCourses: graduation.compulsoryCourses,
    summerTraining: graduation.summerTraining,
    verifyPaymentOfFees: graduation.verifyPaymentOfFees,
    makeSureToPassTheOptionalGroups: graduation.makeSureToPassTheOptionalGroups,
    passingMilitaryEducation: graduation.passingMilitaryEducation,
    successInEveryCourse: graduation.successInEveryCourse,
    determineTheRankBasedOn: graduation.determineTheRankBasedOn,
    rateBase: graduation.rateBase,
    comparingCumulativeAverageForEachYear: graduation.comparingCumulativeAverageForEachYear,
    theMinimumGradeForTheCourseId: graduation.theMinimumGradeForTheCourseId,
    averageValues: [{ value: 0, yearValue: 0, graduationId: 0, equivalentGradeId: 1, allGradesId: 3 }]
    } ).then((res) => {
      console.log(res)
      setGlobalState({ ...globalState, State: "Get" });
    }).catch((err) => console.log(err.response.data));    
}
function submit(e) {
  e.preventDefault();
  if (globalState.State === "Update") {
    UpdateAPI();
  }
  else {
    sendDataToApi();
  }
}


return (
  <Fragment>
    <div className="container " dir="rtl">
      <div className="row mt-3">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <h2 style={{ color: "red" }}>
          برنامج :  التربيه الفنيه
          </h2>
          <div className="inputs-card  ">
            <div className="card-body">
              <div className="form-validation">
                <form
                  className="form-valide"
                  action=""
                  method="post"
                  onSubmit={submit}
                >
                  <div className="row">
                    <div className="col-lg-6 ">
                      <div className="form-group d-flex">
                        <div className="my-3 ">
                          <input
                            onChange={(e) => setgraduation({ ...graduation, ratio: e.target.checked, rate: !e.target.checked })}
                            className="form-check-input ms-3 mt-2 "
                            type="radio"
                            name="value"
                            id="ratio"
                            value="نسبه"
                            checked={graduation.ratio === true}
                          />
                          <label
                            className="form-check-label fw-semibold fs-6 "
                            htmlFor="value"
                          >
                            نسبه{" "}
                          </label>

                          <input
                            onChange={(e) => setgraduation({ ...graduation, rate: e.target.checked, ratio: !e.target.checked })}
                            className="form-check-input  mx-3 me-5  mt-2"
                            type="radio"
                            name="value"
                            id="rate"
                            value="معدل"
                            checked={graduation.rate === true}

                          />
                          <label
                            className="form-check-label fw-semibold fs-6  "
                            htmlFor="value"
                          >
                            معدل{" "}
                          </label>

                          <label
                            className="form-check-label   fw-semibold fs-5 me-4 "
                            htmlFor="value"
                          >
                            التخرج
                          </label>
                        </div>

                        <div className="col-md-2 mx-4 my-3 me-5  pe-3">
                          <input
                            onChange={(e) => { setgraduation({ ...graduation, value: parseInt(e.target.value) }) }}
                            type="number"
                            className="form-control"
                            id="value"
                            name="value"
                            value={graduation.value}
                            placeholder={graduation.value}

                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group  mt-4 d-flex ">
                      <div className="col-md-3">
                        <label
                          className="form-check-label   fw-semibold fs-5 "
                          htmlFor="compulsoryCourses"
                        >
                          المقررات الاجبارية{" "}
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input
                          className="form-check-input ms-3  "
                          type="radio"
                          name="compulsoryCourses"
                          id="compulsoryCourses"
                          value={false}
                          onChange={(e) => { setgraduation({ ...graduation, compulsoryCourses: false }) }}
                          checked={graduation.compulsoryCourses === false}

                        />
                        <label
                          className="form-check-label fw-semibold fs-6 "
                          htmlFor="compulsoryCourses"
                        >
                          عدم التاكد من النجاح
                        </label>

                        <input
                          onChange={(e) => { setgraduation({ ...graduation, compulsoryCourses: true }) }}
                          checked={graduation.compulsoryCourses === true}

                          className="form-check-input  mx-3 me-5 "
                          type="radio"
                          name="compulsoryCourses"
                          id="compulsoryCourses"
                          value={true}
                        //checked={graduation.compulsoryCourses === true  }
                        />
                        <label
                          className="form-check-label fw-semibold fs-6  "
                          htmlFor="compulsoryCourses"
                        >
                          التاكد من النجاح
                        </label>
                      </div>
                    </div>

                    <div className="form-group  mt-4 d-flex ">
                      <div className="col-md-3">
                        <h5></h5>
                        <label
                          className="form-check-label   fw-semibold fs-5 "
                          htmlFor="successInEveryCourse"
                        >
                          النجاح فى جميع المقررات التى درسها{" "}
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input
                          onChange={(e) => { setgraduation({ ...graduation, successInEveryCourse: false }) }}
                          className="form-check-input ms-3  "
                          type="radio"
                          name="successInEveryCourse"
                          id="successInEveryCourse"
                          value={false}
                          checked={graduation.successInEveryCourse === false}
                        />
                        <label
                          className="form-check-label fw-semibold fs-6 "
                          htmlFor="successInEveryCourse"
                        >
                          عدم التاكد من النجاح
                        </label>

                        <input
                          onChange={(e) => { setgraduation({ ...graduation, successInEveryCourse: true }) }}
                          className="form-check-input  mx-3 me-5 "
                          type="radio"
                          name="successInEveryCourse"
                          id="successInEveryCourse"
                          value={true}
                          checked={graduation.successInEveryCourse === true}
                        />
                        <label
                          className="form-check-label fw-semibold fs-6  "
                          htmlFor="successInEveryCourse"
                        >
                          التاكد من النجاح
                        </label>
                      </div>
                    </div>

                    <div className="form-group  mt-4 d-flex ">
                      <div className="col-md-3">
                        <label
                          className="form-check-label   fw-semibold fs-5 "
                          htmlFor="passingMilitaryEducation"
                        >
                          اجتياز التربية العسكرية{" "}
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          onChange={(e) => { setgraduation({ ...graduation, passingMilitaryEducation: true }) }}
                          className="form-check-input ms-3  "
                          type="radio"
                          name="passingMilitaryEducation"
                          id="passingMilitaryEducation"
                          value={true}
                          checked={graduation.passingMilitaryEducation === true}
                        />
                        <label
                          className="form-check-label fw-semibold fs-6 "
                          htmlFor="anyDetails"
                        >
                          عدم التأكد من اجتياز التربية العسكرية
                        </label>

                        <input
                          onChange={(e) => { setgraduation({ ...graduation, passingMilitaryEducation: false }) }}
                          className="form-check-input  mx-3 me-5 "
                          type="radio"
                          name="passingMilitaryEducation"
                          id="passingMilitaryEducation"
                          value={false}
                          checked={graduation.passingMilitaryEducation === false}
                        />
                        <label
                          className="form-check-label fw-semibold fs-6  "
                          htmlFor="passingMilitaryEducation"
                        >
                          التأكد من اجتياز التربية العسكرية{" "}
                        </label>
                      </div>
                    </div>

                    <div className="form-group  mt-4 d-flex ">
                      <div className="col-md-3">
                        <label
                          className="form-check-label   fw-semibold fs-5 "
                          htmlFor="summerTraining"
                        >
                          التدريب الصيفي{" "}
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          onChange={(e) => { setgraduation({ ...graduation, summerTraining: false }) }}
                          className="form-check-input ms-3  "
                          type="radio"
                          name="summerTraining"
                          id="summerTraining"
                          value={false}
                          checked={graduation.summerTraining === false}
                        />
                        <label
                          className="form-check-label fw-semibold fs-6 "
                          htmlFor="summerTraining"
                        >
                          عدم التأكد من إجتياز التدريب الصيفي{" "}
                        </label>

                        <input
                          onChange={(e) => { setgraduation({ ...graduation, summerTraining: true }) }}
                          className="form-check-input  xmx-3 me-5 "
                          type="radio"
                          name="summerTraining"
                          id="summerTraining"
                          value={true}
                          checked={graduation.summerTraining === false}
                        />
                        <label
                          className="form-check-label fw-semibold fs-6  "
                          htmlFor="summerTraining"
                        >
                          التأكد من إجتياز التدريب الصيفي
                        </label>
                      </div>
                    </div>

                    <div className="form-group  mt-4 d-flex  ">
                      <div className="col-md-3 form-group   fw-semibold fs-5  ">
                        <label
                          className="col-form-label"
                          htmlFor="verifyPaymentOfFees"
                        >
                          التاكد من سداد الرسوم
                        </label>
                      </div>
                      <div className="col-md-3">
                        <div className="input-group mb-3 ">
                          <select
                            className="form-select"
                            id="verifyPaymentOfFees"
                            name="verifyPaymentOfFees"
                            onChange={(e) => { setgraduation({ ...graduation, verifyPaymentOfFees: parseInt(e.target.value) === 0 ? true : false }) }}
                          //value={graduation.verifyPaymentOfFees}
                          >
                            <option value={0} selected={data.verifyPaymentOfFees === true} >
                              ضرورة سداد الرسوم قبل التخرج
                            </option>
                            <option value={1} selected={data.verifyPaymentOfFees === false}>
                              عدم ضرورة سداد الرسوم قبل التخرج
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group  mt-2 d-flex  ">
                      <div className="col-md-3 form-group   fw-semibold fs-5  ">
                        <label
                          className="col-form-label"
                          htmlFor="makeSureToPassTheOptionalGroups"
                        >
                          التاكد من اجتياز المجموعات الاختياريه{" "}
                        </label>
                      </div>
                      <div className="col-md-3">
                        <div className="input-group mb-3 ">
                          <select
                            className="form-select"
                            id="makeSureToPassTheOptionalGroups"
                            name="makeSureToPassTheOptionalGroups"
                            onChange={(e) => { setgraduation({ ...graduation, makeSureToPassTheOptionalGroups: parseInt(e.target.value) }) }}
                            value={graduation.makeSureToPassTheOptionalGroups}
                          >
                            <option value={0} selected={data.makeSureToPassTheOptionalGroups === 0}>
                              المجموعات التي درس منها الطالب{" "}
                            </option>
                            <option value={1} selected={data.makeSureToPassTheOptionalGroups === 1}>
                              كل المجموعات الاختياريه{" "}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <h3 style={{ color: "red" }}>مرتبه الشرف </h3>

                    <div className="form-group  mt-4 d-flex ">
                      <div className="col-md-3 fw-semibold fs-5">
                        <label
                          className="col-form-label"
                          htmlFor="determineTheRankBasedOn"
                        >
                          تحدد المرتبة بناءا علي
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input
                          className="form-check-input ms-3  "
                          type="radio"
                          name="determineTheRankBasedOn"
                          id="determineTheRankBasedOn"
                          value={0}
                          onChange={(e) => { setgraduation({ ...graduation, determineTheRankBasedOn: parseInt(e.target.value) }) }}
                          checked={graduation.determineTheRankBasedOn === 0}
                        />
                        <label
                          className="form-check-label fw-semibold fs-6 "
                          htmlFor="determineTheRankBasedOn"
                        >
                          المعدل{" "}
                        </label>

                        <input
                          className="form-check-input  mx-3 me-5 "
                          type="radio"
                          name="determineTheRankBasedOn"
                          id="determineTheRankBasedOn"
                          value={1}
                          onChange={(e) => { setgraduation({ ...graduation, determineTheRankBasedOn: parseInt(e.target.value) }) }}
                          checked={graduation.determineTheRankBasedOn === 1}

                        />
                        <label
                          className="form-check-label fw-semibold fs-6  "
                          htmlFor="determineTheRankBasedOn"
                        >
                          النسبه{" "}
                        </label>
                      </div>
                    </div>
                    <div className="form-group  mt-4 d-flex ">
                      <div className="col-md-3">
                        <h5>معدل/نسبة المرتبة </h5>
                      </div>
                      <div className="col-md-4">
                        <input
                          className="form-check-input ms-3  "
                          type="radio"
                          name="rateBase"
                          id="rateBase"
                          value={0}
                          onChange={(e) => { setgraduation({ ...graduation, rateBase: parseInt(e.target.value) }) }}
                          checked={graduation.rateBase === 0}

                        />
                        <label
                          className="form-check-label fw-semibold fs-6 "
                          htmlFor="rateBase"
                        >
                          الفصلى
                        </label>

                        <input
                          className="form-check-input  mx-3 me-5 "
                          type="radio"
                          name="rateBase"
                          id="rateBase"
                          value={1}
                          onChange={(e) => { setgraduation({ ...graduation, rateBase: parseInt(e.target.value) }) }}
                          checked={graduation.rateBase === 1}

                        />
                        <label
                          className="form-check-label fw-semibold fs-6  "
                          htmlFor="rateBase"
                        >
                          التراكمى
                        </label>
                      </div>
                    </div>

                    <div className="form-group  mt-2 d-flex  ">
                      <table>
                        <tr className="col-md-6 form-group   fw-semibold fs-5  ">
                          <td>
                            <label
                              className="col-form-label"
                              htmlFor="val-number"
                            >
                              قيمة المعدل/النسبه للمرتبة
                            </label>
                          </td>
                          <div className="input-group mb-3 ">
                            <Context />
                          </div>

                        </tr>
                      </table>
                    </div>





                    <div className="form-group  mt-2 d-flex ">
                      <input
                        className="form-check-input ms-2  mt-2 fw-bold fs-5  track-order-change label-to-bold-if-checked"
                        type="checkbox"
                        name="comparingCumulativeAverageForEachYear"
                        value={true}
                        id="comparingCumulativeAverageForEachYear"
                        onChange={(e) => {
                          setgraduation({ ...graduation, comparingCumulativeAverageForEachYear: e.target.checked })
                        }}
                        checked={graduation.comparingCumulativeAverageForEachYear === true}

                      />

                      <div className="form-check">
                        <label
                          className="form-check-label   fw-semibold fs-5 "
                          htmlFor="comparingCumulativeAverageForEachYear"
                        >
                          مقارنة المعدل التراكمى/النسبه التراكميه للعام
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-6 ">
                      <div className="form-group d-flex mt-2">
                        <div className="col-md-7 form-group   fw-semibold fs-5  ">
                          <label
                            className="col-form-label"
                            htmlFor="studyYears"
                          >
                            عدد سنوات الدراسه للحصول علي المرتبه
                          </label>
                        </div>

                        <div className="col-md-2  my-2 ">
                          <input
                            onChange={(e) => { setgraduation({ ...graduation, studyYears: parseInt(e.target.value) }) }}
                            placeholder={graduation.studyYears}
                            type="number"
                            className="form-control "
                            name="studyYears"
                            id="studyYears"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group  mt-4 d-flex ">
                      <div className="col-md-3  fw-semibold fs-5  ">
                        <label
                          className="col-form-label"
                          htmlFor="levelsTobePassed"
                        >
                          النجاح فى جميع المقررات التى درسها
                        </label>
                      </div>

                      <div className="col-md-4 mt-3">
                        <input
                          onChange={(e) => { setgraduation({ ...graduation, successInEveryCourse: false }) }}
                          checked={graduation.successInEveryCourse === false}
                          className="form-check-input ms-3  "
                          type="radio"
                          name="successInEveryCourse"
                          id="successInEveryCourse"
                          value={false}
                        />
                        <label
                          className="form-check-label fw-semibold fs-6 "
                          htmlFor="successInEveryCourse"
                        >
                          عدم التاكد من النجاح
                        </label>

                        <input
                          onChange={(e) => { setgraduation({ ...graduation, successInEveryCourse: true }) }}
                          checked={graduation.successInEveryCourse === true}
                          className="form-check-input  mx-3 me-5 "
                          type="radio"
                          name="successInEveryCourse"
                          id="successInEveryCourse"
                          value={true}
                        />
                        <label
                          className="form-check-label fw-semibold fs-6  "
                          htmlFor="successInEveryCourse"
                        >
                          التاكد من النجاح
                        </label>
                      </div>
                    </div>

                    <div className="form-group  mt-4 d-flex ">
                      <div className="col-md-3 mt-4  fw-semibold fs-5">
                        <label
                          className="col-form-label"
                          htmlFor="levelsTobePassed"
                        >
                          المستويات التى يتم استثناءها{" "}
                        </label>
                      </div>
                      <div className="col-md-2 ">
                        <select
                          id="levelsTobePassed"
                          name="levelsTobePassed"
                          class="form-select"
                          onChange={handleChange}
                          multiple
                          aria-label="Multiple select example"
                        //value={graduation.levelsTobePassed}
                        >
                          {globalState.State !=="Add" && levels && levels.map((level, index) => (
                            <option key={index} 
                            value={level.id} 
                            selected={data.graduationLevels.includes(level.levels)}> {level.levels}</option>
                          ))}
                          {globalState.State ==="Add" && levels && levels.map((level, index) => (
                            <option key={index} 
                            value={level.id} 
                            > {level.levels}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group  mt-4 d-flex ">
                      <div className="col-md-3 mt-4  fw-semibold fs-5">
                        <label
                          className="col-form-label"
                          htmlFor="semestersTobePssed"
                        >
                          الفصول التى يتم استثناءها{" "}
                        </label>
                      </div>
                      <div className="col-md-2 ">
                        <select
                          id="semestersTobePssed"
                          name="semestersTobePssed"
                          onChange={handleChange}
                          className="form-select"
                          multiple
                          aria-label="Multiple select example"
                        // value={graduation.semestersTobePssed}
                        >

                          {globalState.State !=="Add" && Sems && Sems.map((sem, index) => (
                            <option
                              key={index}
                              value={sem.id}
                              selected={data.graduationSemesters.includes(sem.semesters)}
                            >
                              {sem.semesters}
                            </option>
                          ))}
   {globalState.State ==="Add" && Sems && Sems.map((sem, index) => (
                            <option
                              key={index}
                              value={sem.id}
                            >
                              {sem.semesters}
                            </option>
                          ))}
                        </select>

                      </div>
                    </div>

                    <div className="form-group  mt-4 d-flex  ">
                      <div className="col-md-3 form-group   fw-semibold fs-5  ">
                        <label
                          className="col-form-label"
                          htmlFor="theMinimumGradeForTheCourseId"
                        >
                          الحد الأدنى للتقدير المقرر
                        </label>
                      </div>
                      <div className="col-md-1">
                        <div className="input-group mb-3 ">
                          <select
                            //onChange={getGraduationData}
                            className="form-select"
                            id="theMinimumGradeForTheCourseId"
                            name="theMinimumGradeForTheCourseId"
                            onChange={(e) => { setgraduation({ ...graduation, theMinimumGradeForTheCourseId: parseInt(e.target.value) }) }}
                            value={graduation.theMinimumGradeForTheCourseId}
                            required
                          >
                            <option disabled></option>
                            {grades && grades.map((grade, index) => (
                              <option key={index} value={grade.id} selected={graduation.theMinimumGradeForTheCourseId === grade.id}>
                                {grade.theGrade}
                                {/* {graduation.theMinimumGradeForTheCourseId === grade.id ? setgraduation({...graduation ,theMinimumGradeForTheCourseId : grade.id }) :''} */}
                              </option>
                            ))}

                          </select>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btns  d-flex justify-content-center align-items-center  mx-5 py-3">
                    {(state.status !== "Get") && <button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}` } type="submit">
                    <i className="fa-regular fa-bookmark"></i> حفظ
                  </button>}
                  {(state.status !== "Get") && <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={() => { dispatch({ type: "Get" }) }}>
                  <i className="fa-solid fa-lock"></i> غلق
                </button>}

                <button className={`tn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={() => {
                  dispatch({ type: "Update" });

                  setGlobalState({ ...globalState, State: "Update" });
                }}>
                <i className="fa-solid fa-lock-open"></i> تعديل
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
        </div >
      </div >
    </Fragment >
  );
};

AddGraduation.displayName = "AddGraduation";

AddGraduation.propTypes = {};

export { AddGraduation };