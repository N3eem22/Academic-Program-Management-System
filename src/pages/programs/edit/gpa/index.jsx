import React, { Fragment, useState ,useEffect , useReducer} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";
import { GetGPA, AddGPA } from '../gpa/GpaAPIs';
import axios from "axios";


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
   
const GpaPage = () => {
    
    const ProgramId = 45;
    const [showCheckbox1, setShowCheckbox1] = useState(false);
    const [showCheckbox2, setShowCheckbox2] = useState(false);
    const initialState = {
        status: '',
    };
    const [state , dispatch] = useReducer(reducer,initialState);
  
    
    const[data, setData] = useState({
        
            programId: 45,
            improvingCourses:null ,
            keepFailing: false,
            maintainingStudentSuccess: false,
            utmostGrade: 0,
            changingCourses: null,
            someOfGrades: null,
            howToCalculateTheRatio: null,
            multiplyingTheHoursByTheStudentsGrades: 0,
            calculateTheTermOfTheEquationInTheRate: true,
            calculatingTheSemesterEquationInHourseEarned: true,
            rateApproximation: true,
            theNnumberOfDigitsRroundingTheRate: null,
            reducingTheRateUponImprovement: null,
            maximumNumberOfAdditionsToFailedCoursesWithoutSuccess: null,
            deleteFailedCoursesAfterSuccess: 0,
            maximumCumulativeGPA: null,
            calculateTheCumulativeEstimate: 0,
            howToCalculateTheRate: 0,
            theNumberOfDigitsRoundinPoints: 0,
            numberOfDigitsRoundingTheRatio: 0,
            summerIsNotExcludedInCalculatingTheAnnualAverage: false,
            theCumulativeAverageDoesNotAppearInTheStudentGradesPortal: false,
            theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades: false,
            calculatingFailingGradePoints: false,
            calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage: false, 
            showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal : false,
            howToCalculateTheSemesterAverage: 0,
            "gadesOfEstimatesThatDoesNotCount": [
              {
                "gradeId": 0,
                "cumulativeAverageId": 0
              }
            ]
          
    });
    const handleRadioChange = (event) => {
        if (event.target.value === "الاعلى") {
            setShowCheckbox1(true);
            setShowCheckbox2(false);
            setData(prevData => ({
                ...prevData,
                improvingCourses: 0  
            }));
        } else if (event.target.value === "الاخير") {
            setShowCheckbox1(false);
            setShowCheckbox2(true);
            setData(prevData => ({
                ...prevData,
                improvingCourses: 1  
            }));
        }
    };
    // useEffect(() => {
    //     // console.log(data.improvingCourses);
    //     // console.log(data.changingCourses);  
    //     // console.log(typeof data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess);
    //     console.log(data);
    //     }, [data]);

    useEffect(() => {
        const fetchData =async (programId) =>{
                const res = await axios.get(`https://localhost:7095/api/CumulativeAverage/${programId}`).then( (resp)=> {
                    dispatch({ type: 'Get'});
                    setData({...data , utmostGrade: resp.data.utmostGrade,
                        changingCourses: resp.data.changingCourses,
                        improvingCourses: resp.data.improvingCourses,
                        keepFailing: resp.data.keepFailing,
                        maintainingStudentSuccess: resp.data.maintainingStudentSuccess,
                        someOfGrades: resp.data.someOfGrades,
                        howToCalculateTheRatio: resp.data.howToCalculateTheRatio,
                        multiplyingTheHoursByTheStudentsGrades: resp.data.multiplyingTheHoursByTheStudentsGrades,
                        calculateTheTermOfTheEquationInTheRate: resp.data.calculateTheTermOfTheEquationInTheRate,
                        calculatingTheSemesterEquationInHourseEarned: resp.data.calculatingTheSemesterEquationInHourseEarned,
                        rateApproximation: resp.data.rateApproximation,
                        theNnumberOfDigitsRroundingTheRate: resp.data.theNumberOfDigitsRroundingTheRate,
                        reducingTheRateUponImprovement: resp.data.reducingTheRateUponImprovement,
                        maximumNumberOfAdditionsToFailedCoursesWithoutSuccess: resp.data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess,
                        deleteFailedCoursesAfterSuccess: resp.data.deleteFailedCoursesAfterSuccess,
                        maximumCumulativeGPA: resp.data.maximumCumulativeGPA,
                        calculateTheCumulativeEstimate: resp.data.calculateTheCumulativeEstimate,
                        howToCalculateTheRate: resp.data.howToCalculateTheRate,
                        theNumberOfDigitsRoundinPoints: resp.data.theNumberOfDigitsRoundinPoints,
                        numberOfDigitsRoundingTheRatio: resp.data.numberOfDigitsRoundingTheRatio,
                        summerIsNotExcludedInCalculatingTheAnnualAverage: resp.data.summerIsNotExcludedInCalculatingTheAnnualAverage,
                        theCumulativeAverageDoesNotAppearInTheStudentGradesPortal: resp.data.theCumulativeAverageDoesNotAppearInTheStudentGradesPortal,
                        theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades: resp.data.theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades,
                        calculatingFailingGradePoints: resp.data.calculatingFailingGradePoints,
                        calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage: resp.data.calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage,
                        showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal: resp.data.showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal,
                        howToCalculateTheSemesterAverage: resp.data.howToCalculateTheSemesterAverage,
                        gadesOfEstimatesThatDoesNotCount: resp.data.gadesOfEstimatesThatDoesNotCount || prevData.gadesOfEstimatesThatDoesNotCount });
                    
                }).catch((err)=>{
                    dispatch({ type: 'Add' }); 
                    console.log(err);
                });
    
        }
    fetchData(ProgramId);
    }, []);

    // useEffect(() => {
    //     console.log(state);
    // }, [state]);
    const sendDataToApi = async () => {
        try {
            setData({...data , programId : 45 })
            const dataToSend = { cumulativeAverageRequest: data }; 
            //console.log('Sending data:', dataToSend); // Log the data being sent

            // Make the API call and store the response
                const res = await axios.post('https://localhost:7095/api/CumulativeAverage', {
                    "programId":45,
                    "improvingCourses": data.improvingCourses,
                    "keepFailing": data.keepFailing,
                    "maintainingStudentSuccess": true,
                    "utmostGrade": 3,
                    "changingCourses": true,
                    "someOfGrades": 0,
                    "howToCalculateTheRatio": 0,
                    "multiplyingTheHoursByTheStudentsGrades": 0,
                    "calculateTheTermOfTheEquationInTheRate": true,
                    "calculatingTheSemesterEquationInHourseEarned": true,
                    "rateApproximation": true,
                    "theNnumberOfDigitsRroundingTheRate": 0,
                    "reducingTheRateUponImprovement": true,
                    "maximumNumberOfAdditionsToFailedCoursesWithoutSuccess": 0,
                    "deleteFailedCoursesAfterSuccess": 0,
                    "maximumCumulativeGPA": 0,
                    "calculateTheCumulativeEstimate": 0,
                    "howToCalculateTheRate": 0,
                    "theNumberOfDigitsRoundinPoints": 0,
                    "numberOfDigitsRoundingTheRatio": 0,
                    "summerIsNotExcludedInCalculatingTheAnnualAverage": true,
                    "theCumulativeAverageDoesNotAppearInTheStudentGradesPortal": true,
                    "theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades": true,
                    "calculatingFailingGradePoints": true,
                    "calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage": true,
                    "howToCalculateTheSemesterAverage": 0,
                    "gadesOfEstimatesThatDoesNotCount": [
                      {
                        "gradeId": 3,
                        "cumulativeAverageId": 0
                      }
                    ]
                  } );
    
            // Logging the response data for debugging
            console.log(dataToSend);
            console.log('Response:', res.data);
            if (res.status === 200) {
                dispatch({ type: 'Get' }); 
                console.log(state);
            }
        } catch (err) {
            // Error handling: Log the error response data
            console.log('Error data:', err.response.data); 
            return err; // You can handle the error based on your application needs
        }
    }
    function submit(e) {
        console.log(data);
        e.preventDefault();
        sendDataToApi();
      }
    return (
        <Fragment>
            <div className="container " dir="rtl">
                <div className="row mt-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <h2 style={{ color: "red" }}>برنامج : التثقيف بالفن</h2>
                        <br />
                        <div className="inputs-card  ">

                            <div className="card-body">

                                <div className="form-validation">
                                    <form className="form-valide" method="post" onSubmit={submit}>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="improveCourses">
                                                        تحسين المقررات
                                                    </label>
                                                    <div className="col-lg-5">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-3">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="improveCourses" id="higher" value="الاعلى" onChange={handleRadioChange} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="higher">الاعلي </label>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="improveCourses" id="lower" value="الاخير" onChange={handleRadioChange} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="lower">الاخير</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {showCheckbox1 && (
                                                        <div className="col-3">
                                                            <div className="form-check form-check-inline d-flex">
                                                                <input className="form-check-input mt-2 fs-5" type="checkbox" id="KeepFailing" value="تسجيل المقرر في الترم الصيفى" />
                                                                <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="KeepFailing">مع الابقاء علي الرسوب</label>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {showCheckbox2 && (
                                                        <div className="col-3">
                                                            <div className="form-check form-check-inline d-flex">
                                                                <input className="form-check-input mt-2 fs-5" type="checkbox" id="keepSuccess" value="تسجيل المقرر في الترم الصيفى" />
                                                                <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="keepSuccess">مع الحفاظ علي نجاح الطالب</label>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="utmostGrade">
                                                        بتقدير اقصي
                                                    </label>
                                                  
                                                    <div className="col-lg-2">
                                                       {(state.status !== "Get")&& <select className="form-select custom-select-start" id="utmostGrade">
                                                            <option selected disabled>  </option>
                                                            <option value="option1">أ </option>
                                                            <option value="option2">ب</option>
                                                        </select>}
                                                        { ((state.status === "Get")) &&
                                                            <input     className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="utmostGrade" id="utmostGrade" placeholder={data.utmostGrade} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="try">
                                                        تقديرات المحاولات التي لا تحتسب
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select custom-select-start fs-5" aria-label="Select options" id="try" multiple>
                                                            <option value="option1">أ</option>
                                                            <option value="option2">ب</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="changingCourses">
                                                        استبدال المقررات
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get")&&<select className="form-select fs-5 custom-select-start" id="changingCourses" required onChange={(e) => setData({...data,changingCourses: e.target.value === "true" ? true : false })}
>
                                                            <option selected disabled>  </option>
                                                            <option value={true}>نعم </option>
                                                            <option value={false}>لا</option>
                                                        </select>}
                                                        { ((state.status === "Get")) &&
                                                            <input     className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="utmostGrade" id="utmostGrade" placeholder={data.changingCourses === true ? "نعم" : "لا"} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="someOfGrades">
                                                        مجموع الدرجات
                                                    </label>
                                                    <div className="col-lg-2">
                                                       { (state.status !== "Get")&& <select className="form-select fs-5 custom-select-start" id="someOfGrades" required onChange={(e)=>{
                                                            setData({...data , someOfGrades :e.target.value === "تقريب" ? 0 : 1})
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value="تقريب">تقريب </option>
                                                            <option value="جبر">جبر</option>
                                                        </select>}
                                                        { ((state.status === "Get")) &&
                                                            <input     className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="utmostGrade" id="utmostGrade" placeholder={data.someOfGrades === 0 ? "تقريب" : "جبر"} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="howToCalculateTheRatio">
                                                        كيفية حساب النسبة
                                                    </label>
                                                    <div className="col-lg-4">
                                                        {(state.status !== "Get")&& <select className="form-select fs-5 custom-select-start" id="howToCalculateTheRatio" onChange={(e)=>{
                                                          setData({...data , howToCalculateTheRatio : parseInt(e.target.value) })
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0}>الدرجة المكتسبة مقسومة علي اجمالي عدد الدرجات * 100</option>
                                                            <option value={1}>الدرجة المكتسبة مقسومه علي اجمالي عدد الدرجات</option>
                                                            <option value={2}>المعدل التراكمي المكتسب مقسوم علي الاجمالي</option>
                                                            <option value={3}>معادلة خاصه علوم</option>
                                                            <option value={4}>معادلة خاصه (اكاديميه طيبه)</option>
                                                            <option value={5}>حساب النسبة مقربة</option>
                                                            <option value={6}>الدرجة الفعلية مقسومة علي اجمالي الدرجات الفعلية * 100</option>
                                                            <option value={7}>الدرجة الفعلية مقسومة علي اجمالي الساعات الفعلية</option>
                                                            <option value={8}>حساب النسبة بناء علي التقديرات العامة</option>
                                                        </select>}
                                                        { ((state.status === "Get")) &&
                                                            <input  style={{ width: '130%' }}   className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="utmostGrade" id="utmostGrade" placeholder={data.howToCalculateTheRatio === 0 ? "الدرجة المكتسبة مقسومة علي اجمالي عدد الدرجات * 100" : "جبر"} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="multiplyingTheHoursByTheStudentsGrades">
                                                        ضرب الساعات في درجات الطالب
                                                    </label>
                                                    <div className="col-lg-4">
                                                        <select className="form-select fs-5 custom-select-start" id="multiplyingTheHoursByTheStudentsGrades"onChange={(e)=>{
                                                           setData({...data , multiplyingTheHoursByTheStudentsGrades : parseInt(e.target.value)})
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0}>الجمع بدون ضرب الدرجة بساعات المقرر</option>
                                                            <option value={1}>الجمع بضرب الدرجة بساعات المقرر</option>
                                                            <option value={2}> القسمه علي الساعات بدون ضرب</option>
                                                            <option value={3}>الجمع بضرب نسبه الطالب في المقرر بساعات المقرر</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateTheTermOfTheEquationInTheRate">
                                                        حساب ترم المعادلة في المعدل
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="calculateTheTermOfTheEquationInTheRate" id="calculateTheTermOfTheEquationInTheRate" value={false} onChange={(e)=> {
                                                                    setData({...data , calculateTheTermOfTheEquationInTheRate : false})
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="calculateTheTermOfTheEquationInTheRate">عدم الدخول فى الحساب  </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="calculateTheTermOfTheEquationInTheRate" id="calculateTheTermOfTheEquationInTheRate" value={true} onChange={(e)=> {
                                                                    setData({...data , calculateTheTermOfTheEquationInTheRate : true})
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="calculateTheTermOfTheEquationInTheRate"> دخول فى الحساب</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateTermHours">
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="calculateTermHours" id="calculatingTheSemesterEquationInHourseEarned" value={false} onChange={(e)=> {
                                                                    setData({...data , calculatingTheSemesterEquationInHourseEarned : false})
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="enterHours">عدم الدخول فى الحساب  </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="calculateTermHours" id="calculatingTheSemesterEquationInHourseEarned" value={true} onChange={(e)=> {
                                                                    setData({...data , calculatingTheSemesterEquationInHourseEarned : true})
                                                                }}  />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="enterHours" > دخول فى الحساب</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="rateRounding">
                                                        تقريب المعدل
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="rateRounding" id="rateApproximation" value={false}onChange={(e)=> {
                                                                    setData({...data , rateApproximation : false})
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="rateApproximation">عدم تقريب المعدل    </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="rateRounding" id="rateApproximation" value={true}  onChange={(e)=> {
                                                                    setData({...data , rateApproximation : true})
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="rate"> تقريب المعدل  </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <span >
                                                    <div className="form-group  row">
                                                        <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="numberRate">
                                                            عدد ارقام تقريب المعدل
                                                        </label>
                                                        <div class="col-lg-2 ">
                                                            <div class="input-group">
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="numberRate"
                                                                    name="numberRate"
                                                                    onChange={(e)=> {
                                                                        setData({...data , theNnumberOfDigitsRroundingTheRate :parseInt( e.target.value)})
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="rateReduction">
                                                        تخفيض المعدل عند التحسين
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="rateReduction" id="reduction" value={false} onChange={(e)=> {
                                                                    setData({...data , reducingTheRateUponImprovement : false})
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="reduction">عدم تخفيض المعدل</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="rateReduction" id="reduction" value={true} onChange={(e)=> {
                                                                    setData({...data , reducingTheRateUponImprovement : true})
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="reduction">تخفيض المعدل</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="maximumNumberOfAdditionsToFailedCoursesWithoutSuccess">
                                                        أقصى عدد لإضافة للمقررات الرسوب(بدون نجاح)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="maximumNumberOfAdditionsToFailedCoursesWithoutSuccess" onChange={(e)=> {
                                                            setData({...data , maximumNumberOfAdditionsToFailedCoursesWithoutSuccess : parseInt(e.target.value)})
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0}>اضافه الجميع </option>
                                                            <option value={1}>عدم اضافه مقررات</option>
                                                            <option value={2}> اضافه مقرر</option>
                                                            <option value={3}> اضافه مقرران</option>
                                                            <option value={4}> اضافه 3 مقررات</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="deleteFailedCoursesAfterSuccess">
                                                        حذف مقررات الرسوب (بعد نجاح)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="deleteFailedCoursesAfterSuccess" required onChange={(e)=> {
                                                            setData({...data , deleteFailedCoursesAfterSuccess : parseInt(e.target.value)})
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option  value={0}>حذف مقرر واحد من المقام </option>
                                                            <option  value={1}>حذف جميع المقررات</option>
                                                            <option  value={2}> عدم حذف المقررات </option>
                                                            <option  value={3}>حساب مقرر في المقام</option>
                                                            <option  value={4}> حساب مقرران في المقام</option>
                                                            <option  value={5}> حساب 3 مقررات في المقام</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="maximumCumulativeGPA">
                                                        حد الأقصى للمعدل التراكمى
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" required id="maximumCumulativeGPA" onChange={(e)=> {
                                                            setData({...data , maximumCumulativeGPA : parseInt(e.target.value)})
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0}>GPA 3.5</option>
                                                            <option value={1}>GPA 4</option>
                                                            <option value={2}>GPA 5</option>
                                                            <option value={3}>GPA 6</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateTheCumulativeEstimate">
                                                        حساب التقدير التراكمى
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="calculateTheCumulativeEstimate" onChange={(e)=> {
                                                            setData({...data , calculateTheCumulativeEstimate : parseInt(e.target.value)})
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0}>بناء علي المعدل</option>
                                                            <option value={1}>بناء علي النسبة</option>
                                                            <option value={2}>بناء علي المعدل وفقا للتقديرات العامة</option>
                                                            <option value={3}>بناء علي النسبة وفقا للتقديرات العامة</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="howToCalculateTheRate.">
                                                        كيفية حساب المعدل
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="howToCalculateTheRate" onChange={(e)=> {
                                                            setData({...data , howToCalculateTheRate : parseInt(e.target.value)})
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0}>بالقسمة علي الساعات الفعلية  </option>
                                                            <option value={1}>بالقسمه علي الساعات المكتسبة  </option>
                                                            <option value={2}>قسمة مجموع الدرجات المكتسبة علي اجمالي المجموع الفعلي مضروبا * 0.25</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <span >
                                                    <div className="form-group  row">
                                                        <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="theNumberOfDigitsRoundinPoints">
                                                            عدد ارقام تقريب النقاط
                                                        </label>
                                                        <div class="col-lg-2 ">
                                                            <div class="input-group">
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="theNumberOfDigitsRoundinPoints"
                                                                    name="theNumberOfDigitsRoundinPoints"
                                                                    onChange={(e)=> {
                                                                        setData({...data , theNumberOfDigitsRoundinPoints :parseInt(e.target.value) })
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-md-12">
                                                <span >
                                                    <div className="form-group  row">
                                                        <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="numberOfDigitsRoundingTheRatio">
                                                            عدد ارقام تقريب النسبة
                                                        </label>
                                                        <div class="col-lg-2 ">
                                                            <div class="input-group">
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="numberOfDigitsRoundingTheRatio"
                                                                    name="numberOfDigitsRoundingTheRatio"
                                                                    onChange={(e)=> {
                                                                        setData({...data , numberOfDigitsRoundingTheRatio :parseInt(e.target.value) })
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="annualRate" value={true}  onChange={(e)=> {
                                                                        setData({...data , summerIsNotExcludedInCalculatingTheAnnualAverage : e.target.checked})
                                                                    }} />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="annualRate">عدم استثناء الصيفى فى حساب المعدل السنوى</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="rateAppear" value={true}  onChange={(e)=> {
                                                                        setData({...data , theCumulativeAverageDoesNotAppearInTheStudentGradesPortal : e.target.checked})
                                                                    }}  />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="rateAppear">عدم ظهور المعدل التراكمى فى بورتال طالب تقديرات المواد</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal" value={true}  onChange={(e)=> {
                                                                        setData({...data , theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades : e.target.checked})
                                                                    }} />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal">ظهور النسبه الفصليه و التراكمية فى بورتال الطالب تقديرات المواد</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="quarterlyGrade" value={true}  onChange={(e)=> {
                                                                        setData({...data , showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal : e.target.checked})
                                                                    }}  />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="quarterlyGrade">اظهار التقدير الفصلى والتراكمى فى بورتال الطالب تقديرات المواد</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculateFail" value={true}  onChange={(e)=> {
                                                                        setData({...data ,  calculatingFailingGradePoints : e.target.checked})
                                                                    }}  />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="calculateFail">حساب نقاط تقديرات الرسوب</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <p className="text-decoration-underline fs-5 fw-bolder" >المعدل الفصلي :</p>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage"  value={true}  onChange={(e)=> {
                                                                        setData({...data , calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage : e.target.checked})
                                                                    }} />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage">حساب مرات الرسوب بعد المره الاولي في المعدل الفصلي</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-11">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-5 fw-semibold fs-5 col-form-label" htmlFor="calculateTermRate">
                                                        كيفية حساب المعدل الفصلي
                                                    </label>
                                                        <div className="col-lg-3">
                                                            <select className="form-select fs-5 custom-select-start" id="calculateTermRate" onChange={(e)=>{
                                                                setData({...data , howToCalculateTheSemesterAverage : parseInt(e.target.checked)})
                                                            }}>
                                                                <option selected disabled>  </option>
                                                                <option value={0}>بالقسمة علي الساعات الفعلية  </option>
                                                                <option value={1}>بالقسمه علي الساعات المكتسبة  </option>
                                                                <option value={2}>قسمة مجموع الدرجات المكتسبة علي اجمالي المجموع الفعلي مضروبا * 0.25</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>


                                            <div className="row justify-content-center text-center">

                                                
                                                <div className="col-md-12">
                                                  {  (state.status !== "Get")&&  <button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}`} type="submit">
                                                        <i className="fa-regular fa-bookmark"></i> حفظ
                                                    </button>}
                                                    { state.status !== "Get" && <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={()=> {dispatch({type : "Close"})}}>
                                                        <i className="fa-solid fa-lock"></i> غلق
                                                    </button>}
                                                    {
                                                        state.status !=="Add" &&
                                                        <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={()=>{dispatch({type : "Update"})}}>
                                                        <i className="fa-solid fa-lock-open"></i> تعديل
                                                         </button>
                                                    }
                                                   

                                                </div>
                                


                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </Fragment>
    );
};

GpaPage.displayName = "GpaPage";

GpaPage.propTypes = {};

export { GpaPage };
