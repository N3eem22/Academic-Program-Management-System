import React, { Fragment, useState, useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";
import axios from "axios";


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

const GpaPage = () => {

    const ProgramId = 45;
    const [showCheckbox1, setShowCheckbox1] = useState(false);
    const [showCheckbox2, setShowCheckbox2] = useState(false);
    const initialState = {
        status: '',
        err: [],
        validationErrors: {}
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const [grades, setGrades] = useState([]);
    const [GetData, setGetData] = useState({
        programId: 48,
        improvingCourses: "",
        keepFailing: "",
        maintainingStudentSuccess: "",
        utmostGrade: "",
        changingCourses: "",
        someOfGrades: "",
        howToCalculateTheRatio: "",
        multiplyingTheHoursByTheStudentsGrades: "",
        calculateTheTermOfTheEquationInTheRate: "",
        calculatingTheSemesterEquationInHourseEarned: "",
        rateApproximation: "",
        theNnumberOfDigitsRroundingTheRate: "",
        reducingTheRateUponImprovement: "",
        maximumNumberOfAdditionsToFailedCoursesWithoutSuccess: "",
        deleteFailedCoursesAfterSuccess: "",
        maximumCumulativeGPA: "",
        calculateTheCumulativeEstimate: "",
        howToCalculateTheRate: "",
        theNumberOfDigitsRoundinPoints: "",
        numberOfDigitsRoundingTheRatio: "",
        summerIsNotExcludedInCalculatingTheAnnualAverage: "",
        theCumulativeAverageDoesNotAppearInTheStudentGradesPortal: "",
        theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades: "",
        calculatingFailingGradePoints: "",
        calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage: "",
        showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal: "",
        howToCalculateTheSemesterAverage: "",
        "gadesOfEstimatesThatDoesNotCount": ""
    });

    var Options = {
        howToCalculateTheRatio: ["الدرجة المكتسبة مقسومة علي اجمالي عدد الدرجات * 100", "الدرجة المكتسبة مقسومه علي اجمالي عدد الدرجات", "المعدل التراكمي المكتسب مقسوم علي الاجمالي", "معادلة خاصه علوم", "معادلة خاصه (اكاديميه طيبه)", "حساب النسبة مقربة", "الدرجة الفعلية مقسومة علي اجمالي الدرجات الفعلية * 100", "الدرجة الفعلية مقسومة علي اجمالي الساعات الفعلية", "حساب النسبة بناء علي التقديرات العامة"]
        ,
        multiplyingTheHoursByTheStudentsGrades: ["الجمع بدون ضرب الدرجة بساعات المقرر", "الجمع بضرب الدرجة بساعات المقرر", "القسمه علي الساعات بدون ضرب", "الجمع بضرب نسبه الطالب في المقرر بساعات المقرر"]
        ,
        maximumNumberOfAdditionsToFailedCoursesWithoutSuccess: ["اضافه الجميع", "عدم اضافه مقررات", "اضافه مقرر", " اضافه مقرران", "اضافه 3 مقررات"]
        ,
        deleteFailedCoursesAfterSuccess: ["حذف مقرر واحد من المقام ", "حذف جميع المقررات", "عدم حذف المقررات ", "حساب مقرر في المقام", "حساب مقرران في المقام", "حساب 3 مقررات في المقام"]
        ,
        maximumCumulativeGPA: ["GPA 3.5", "GPA 4", "GPA 5", "GPA 6"]
        ,
        calculateTheCumulativeEstimate: ["بناء علي المعدل", "بناء علي النسبة", "بناء علي المعدل وفقا للتقديرات العامة", "بناء علي النسبة وفقا للتقديرات العامة"]
        ,
        howToCalculateTheRate: ["بالقسمة علي الساعات الفعلية", "بالقسمه علي الساعات المكتسبة", "قسمة مجموع الدرجات المكتسبة علي اجمالي المجموع الفعلي مضروبا * 0.25"]
    }
    const handleChange = (event) => {
        const { name, selectedOptions } = event.target;
        const options = Array.from(selectedOptions);
        let selectedValues;
        console.log(options);
        if (name === "gadesOfEstimatesThatDoesNotCount" || name === "levelsTobePassed") {
            selectedValues = options.map(option => ({
                [`${name === "gadesOfEstimatesThatDoesNotCount" ? "gradeId" : "levelId"}`]: parseInt(option.value),
                cumulativeAverageId: 0
            }));
        } else {
            selectedValues = options.map(option => option.value);
        }

        setData(prevState => ({
            ...prevState,
            [name]: selectedValues,
        }));
    };
    const [data, setData] = useState({

        programId: 48,
        improvingCourses: "",
        keepFailing: "",
        maintainingStudentSuccess: "",
        utmostGrade: "",
        changingCourses: "",
        someOfGrades: "",
        howToCalculateTheRatio: "",
        multiplyingTheHoursByTheStudentsGrades: "",
        calculateTheTermOfTheEquationInTheRate: "",
        calculatingTheSemesterEquationInHourseEarned: "",
        rateApproximation: "",
        theNnumberOfDigitsRroundingTheRate: "",
        reducingTheRateUponImprovement: "",
        maximumNumberOfAdditionsToFailedCoursesWithoutSuccess: "",
        deleteFailedCoursesAfterSuccess: "",
        maximumCumulativeGPA: "",
        calculateTheCumulativeEstimate: "",
        howToCalculateTheRate: "",
        theNumberOfDigitsRoundinPoints: "",
        numberOfDigitsRoundingTheRatio: "",
        summerIsNotExcludedInCalculatingTheAnnualAverage: "",
        theCumulativeAverageDoesNotAppearInTheStudentGradesPortal: "",
        theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades: "",
        calculatingFailingGradePoints: "",
        calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage: "",
        showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal: "",
        howToCalculateTheSemesterAverage: "",
        "gadesOfEstimatesThatDoesNotCount": "",
        err: [],
        validationErrors: {}

    });
    const handleRadioChange = (event) => {
        if (event.target.value === "الاعلى") {
            setShowCheckbox1(true);
            setShowCheckbox2(false);
            setData(prevData => ({
                ...prevData,
                improvingCourses: parseInt(0)
            }));
        } else if (event.target.value === "الاخير") {
            setShowCheckbox1(false);
            setShowCheckbox2(true);
            setData(prevData => ({
                ...prevData,
                improvingCourses: parseInt(1)
            }));
        }
    };
    useEffect(() => {
 
        console.log(data);
    }, [data]);

    useEffect(() => {
        const fetchData = async (programId) => {
            const res = await axios.get(`https://localhost:7095/api/CumulativeAverage/${48}`).then((resp) => {
                dispatch({ type: 'Get' });
                setData({
                    ...data,
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
                    theNnumberOfDigitsRroundingTheRate: resp.data.theNnumberOfDigitsRroundingTheRate,
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
                    gadesOfEstimatesThatDoesNotCount: resp.data.gadesOfEstimatesThatDoesNotCount ,
                    utmostGrade : resp.data.utmostGrade
                });
                setGetData(resp.data);
                console.log(resp.data);
            }).catch((err) => {
                dispatch({ type: 'Add' });
                console.log(err);
              
            });


        }
        fetchData(ProgramId);
    }, []);
    useEffect(() => {
        if (state.status === "Get") {
            const fetchData = async (programId) => {
                const res = await axios.get(`https://localhost:7095/api/CumulativeAverage/${48}`).then((resp) => {
                    setData({
                        ...data,
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
                        theNnumberOfDigitsRroundingTheRate: resp.data.theNnumberOfDigitsRroundingTheRate,
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
                        gadesOfEstimatesThatDoesNotCount: resp.data.gadesOfEstimatesThatDoesNotCount
                    });
                    setGetData(resp.data);
                    console.log(resp.data);
                }).catch((err) => {
                    console.log(err);
                    setData({
                        ...data,
                        err: [{ message: err.response?.data?.message || err.message }],
                    });
                });


            }
            fetchData(ProgramId);
        }
        const fetchGrades = axios.get(`https://localhost:7095/api/AllGrades?UniversityId=${1}`).then((res) => {
            console.log(res.data);
            setGrades(res.data);
            if (state.status === "Update") {
                //console.log(data);
                const updatedGrades = res.data
                    .filter(grade => data.gadesOfEstimatesThatDoesNotCount.includes(grade.theGrade))
                    .map(grade => ({
                        gradeId: grade.id,
                        cumulativeAverageId: 0
                    }));
                console.log(updatedGrades);
                setData(prevState => ({
                    ...prevState,
                    gadesOfEstimatesThatDoesNotCount: updatedGrades
                }));
            }

        });
    }, [state])

    // useEffect(() => {
    //     console.log(state);
    // }, [state]);
    const sendDataToApi = async () => {
        try {
            setData({ ...data, programId: 45 })
            const dataToSend = { cumulativeAverageRequest: data };
            if (state.status === "Add") {
                const res = await axios.post(`https://localhost:7095/api/CumulativeAverage`, {
                    "programId": 48,
                    "improvingCourses": data.improvingCourses,
                    "keepFailing": true,
                    "maintainingStudentSuccess": false,
                    "utmostGrade": data.utmostGrade,
                    "changingCourses": data.changingCourses,
                    "someOfGrades": data.someOfGrades,
                    "howToCalculateTheRatio": data.howToCalculateTheRatio,
                    "multiplyingTheHoursByTheStudentsGrades": data.multiplyingTheHoursByTheStudentsGrades,
                    "calculateTheTermOfTheEquationInTheRate": data.calculateTheTermOfTheEquationInTheRate,
                    "calculatingTheSemesterEquationInHourseEarned": data.calculatingTheSemesterEquationInHourseEarned,
                    "rateApproximation": data.rateApproximation,
                    "theNnumberOfDigitsRroundingTheRate": data.theNnumberOfDigitsRroundingTheRate,
                    "reducingTheRateUponImprovement": data.reducingTheRateUponImprovement,
                    "maximumNumberOfAdditionsToFailedCoursesWithoutSuccess": data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess,
                    "deleteFailedCoursesAfterSuccess": data.deleteFailedCoursesAfterSuccess,
                    "maximumCumulativeGPA": data.maximumCumulativeGPA,
                    "showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal": data.showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal,
                    "calculateTheCumulativeEstimate": data.calculateTheCumulativeEstimate,
                    "howToCalculateTheRate": data.howToCalculateTheRate,
                    "theNumberOfDigitsRoundinPoints": data.theNumberOfDigitsRoundinPoints,
                    "numberOfDigitsRoundingTheRatio": data.numberOfDigitsRoundingTheRatio,
                    "summerIsNotExcludedInCalculatingTheAnnualAverage": data.summerIsNotExcludedInCalculatingTheAnnualAverage,
                    "theCumulativeAverageDoesNotAppearInTheStudentGradesPortal": data.theCumulativeAverageDoesNotAppearInTheStudentGradesPortal,
                    "theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades": data.theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades,
                    "calculatingFailingGradePoints": data.calculatingFailingGradePoints,
                    "calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage": data.calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage,
                    "howToCalculateTheSemesterAverage": data.howToCalculateTheSemesterAverage,
                    "gadesOfEstimatesThatDoesNotCount": [
                        {
                            "gradeId": 3,
                            "cumulativeAverageId": 0
                        }
                    ]
                });
            }
            else if (state.status === "Update") {
                const res = await axios.put(`https://localhost:7095/api/CumulativeAverage/${17}`, {
                    "programId": 48,
                    "improvingCourses": data.improvingCourses,
                    "keepFailing": true,
                    "maintainingStudentSuccess": false,
                    "utmostGrade": data.utmostGrade,
                    "changingCourses": data.changingCourses,
                    "someOfGrades": data.someOfGrades,
                    "howToCalculateTheRatio": data.howToCalculateTheRatio,
                    "multiplyingTheHoursByTheStudentsGrades": data.multiplyingTheHoursByTheStudentsGrades,
                    "calculateTheTermOfTheEquationInTheRate": data.calculateTheTermOfTheEquationInTheRate,
                    "calculatingTheSemesterEquationInHourseEarned": data.calculatingTheSemesterEquationInHourseEarned,
                    "rateApproximation": data.rateApproximation,
                    "theNnumberOfDigitsRroundingTheRate": data.theNnumberOfDigitsRroundingTheRate,
                    "reducingTheRateUponImprovement": data.reducingTheRateUponImprovement,
                    "maximumNumberOfAdditionsToFailedCoursesWithoutSuccess": data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess,
                    "deleteFailedCoursesAfterSuccess": data.deleteFailedCoursesAfterSuccess,
                    "maximumCumulativeGPA": data.maximumCumulativeGPA,
                    "showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal": data.showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal,
                    "calculateTheCumulativeEstimate": data.calculateTheCumulativeEstimate,
                    "howToCalculateTheRate": data.howToCalculateTheRate,
                    "theNumberOfDigitsRoundinPoints": data.theNumberOfDigitsRoundinPoints,
                    "numberOfDigitsRoundingTheRatio": data.numberOfDigitsRoundingTheRatio,
                    "summerIsNotExcludedInCalculatingTheAnnualAverage": data.summerIsNotExcludedInCalculatingTheAnnualAverage,
                    "theCumulativeAverageDoesNotAppearInTheStudentGradesPortal": data.theCumulativeAverageDoesNotAppearInTheStudentGradesPortal,
                    "theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades": data.theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades,
                    "calculatingFailingGradePoints": data.calculatingFailingGradePoints,
                    "calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage": data.calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage,
                    "howToCalculateTheSemesterAverage": data.howToCalculateTheSemesterAverage,
                    "gadesOfEstimatesThatDoesNotCount": data.gadesOfEstimatesThatDoesNotCount,
                }).then((resp)=>{      dispatch({ type: 'Get' }); console.log(resp);}).catch((err)=>console.log(err));
          
            }

           
        } catch (err) {
            setData({
                ...data,
                err: [{ message: err.response?.data?.message || err.message }],
            }); // You can handle the error based on your application needs
        }
    }
    // const validateInputs = () => {
    //     const errors = {};
    //     if (!data.utmostGrade) errors.utmostGrade = "يجب عليك ادخال هذه القيمه";
    //     if (!data.changingCourses) errors.changingCourses = "يجب عليك ادخال هذه القيمه";
    //     if (!data.someOfGrades) errors.someOfGrades = "يجب عليك ادخال هذه القيمه";
    //     if (!data.howToCalculateTheRatio) errors.howToCalculateTheRatio = "يجب عليك ادخال هذه القيمه";
    //     if (!data.theNnumberOfDigitsRroundingTheRate) errors.theNnumberOfDigitsRroundingTheRate = "يجب عليك ادخال هذه القيمه";
    //     if (!data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess) errors.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess = "يجب عليك ادخال هذه القيمه";
    //     if (!data.deleteFailedCoursesAfterSuccess) errors.deleteFailedCoursesAfterSuccess = "يجب عليك ادخال هذه القيمه";
    //     if (!data.calculateTheCumulativeEstimate) errors.calculateTheCumulativeEstimate = "يجب عليك ادخال هذه القيمه";
    //     if (!data.maximumCumulativeGPA) errors.maximumCumulativeGPA = "يجب عليك ادخال هذه القيمه";
    //     if (!data.howToCalculateTheRate) errors.howToCalculateTheRate = "يجب عليك ادخال هذه القيمه";
    //     if (!data.numberOfDigitsRoundingTheRatio) errors.numberOfDigitsRoundingTheRatio = "يجب عليك ادخال هذه القيمه";
    //     if (!data.theNnumberOfDigitsRroundingTheRate) errors.theNnumberOfDigitsRroundingTheRate = "يجب عليك ادخال هذه القيمه";
    //     if (!data.calculateTermRate) errors.calculateTermRate = "يجب عليك ادخال هذه القيمه";
    //     if (!data.theNumberOfDigitsRoundinPoints) errors.theNumberOfDigitsRoundinPoints = "يجب عليك ادخال هذه القيمه";
        
    //     return errors;
    // }
    function submit(e) {
        console.log(data);
        e.preventDefault();
      //  const validationErrors = validateInputs();
        // if (Object.keys(validationErrors).length > 0) {
        //     setData((prevState) => ({ ...prevState, validationErrors }));
        //     return;
        // }
        sendDataToApi();
    }



    function handleClose() {
        dispatch({ type: 'Get' });
        setData((prevState) => ({ ...prevState, err: [], validationErrors: {} })); // Clear errors on close
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
                        <br />
                        {data.err && data.err.length > 0 && (
                            <div className="col-md-12 mb-3 w-25 m-auto alert alert-danger">
                                <ul
                                    className="fw-semibold fs-5 text-center"
                                    style={{ listStyleType: "none", padding: 0, margin: 0 }}
                                >
                                    {data.err.map((error, index) => (
                                        <li key={index}>{error.message}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
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
                                                        {(state.status !== "Get") && <div className="form-group mb-3 row">
                                                            <div className="col-lg-3">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="improveCourses" id="higher" value="الاعلى" onChange={handleRadioChange} checked = {data.improvingCourses === 0} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="higher">الاعلي </label>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="improveCourses" id="lower" value="الاخير" onChange={handleRadioChange} checked = {data.improvingCourses === 1} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="lower">الاخير</label>
                                                            </div>
                                                        </div>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="utmostGrade" id="utmostGrade" placeholder={data.improvingCourses === 0 ? "الاعلي" : "الاخير"} />
                                                        }
                                                    </div>
                                                    {(state.status !== "Get") &&showCheckbox1 && (
                                                        <div className="col-3">
                                                            <div className="form-check form-check-inline d-flex">
                                                                <input className="form-check-input mt-2 fs-5" type="checkbox" id="KeepFailing" value="تسجيل المقرر في الترم الصيفى" />
                                                                <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="KeepFailing">مع الابقاء علي الرسوب</label>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(state.status !== "Get")&&showCheckbox2 && (
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
                                                        {(state.status !== "Get") && <select className="form-select custom-select-start" id="utmostGrade"
                                                            onChange={(e) => {
                                                                setData({ ...data, utmostGrade: parseInt(e.target.value) })
                                                                setData(prevState => ({
                                                                    ...prevState,
                                                                    validationErrors: { ...prevState.validationErrors, utmostGrade: '' }
                                                                }));
                                                            }}
                                                            value={data.utmostGrade}

                                                        >
                                                            <option disabled></option>
                                                            {grades && grades.map((grade, index) => (
                                                                <option key={index} value={grade.id} selected={data.utmostGrade === grade.id}>
                                                                    {grade.theGrade} {data.utmostGrade === grade.theGrade ? setData({...data , utmostGrade :parseInt(grade.id)  }) : ""}
                                                            
                                                                </option>
                                                            ))}
                                                        </select>
                                                        }
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="utmostGrade" id="utmostGrade" placeholder={GetData.utmostGrade} />
                                                        }
                                                        {data.validationErrors.utmostGrade && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.utmostGrade}
                                                            </div>
                                                        )}

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="try">
                                                        تقديرات المحاولات التي لا تحتسب
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select custom-select-start fs-5" aria-label="Select options"
                                                            name="gadesOfEstimatesThatDoesNotCount"
                                                            id="gadesOfEstimatesThatDoesNotCount"
                                                            multiple
                                                            onChange={handleChange}

                                                        >

                                                            {grades && grades.map((grade, index) => (
                                                                <option
                                                                    key={index}
                                                                    value={grade.id}
                                                                    selected={GetData.gadesOfEstimatesThatDoesNotCount.includes(grade.theGrade)}
                                                                >
                                                                    {grade.theGrade}
                                                                </option>
                                                            ))}

                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="utmostGrade" id="utmostGrade" placeholder={GetData.gadesOfEstimatesThatDoesNotCount} />
                                                        }

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="changingCourses">
                                                        استبدال المقررات
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="changingCourses"
                                                            onChange={(e) => {
                                                                setData({ ...data, changingCourses: e.target.value === "true" ? true : false })
                                                                setData(prevState => ({
                                                                    ...prevState,
                                                                    validationErrors: { ...prevState.validationErrors, changingCourses: '' }
                                                                }));
                                                            }}
                                                        >
                                                            <option selected disabled>  </option>
                                                            <option value={true} selected={data.changingCourses === true}>نعم </option>
                                                            <option value={false} selected={data.changingCourses === false}>لا</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="utmostGrade" id="utmostGrade" placeholder={data.changingCourses === true ? "نعم" : "لا"} />
                                                        }
                                                        {data.validationErrors.changingCourses && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.changingCourses}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="someOfGrades">
                                                        مجموع الدرجات
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="someOfGrades"
                                                            onChange={(e) => {
                                                                setData({ ...data, someOfGrades: e.target.value === "تقريب" ? 0 : 1 })
                                                                setData(prevState => ({
                                                                    ...prevState,
                                                                    validationErrors: { ...prevState.validationErrors, someOfGrades: '' }
                                                                }));
                                                            }}
                                                        >
                                                            <option selected disabled>  </option>
                                                            <option value="تقريب" selected={data.someOfGrades === 0}>تقريب </option>
                                                            <option value="جبر" selected={data.someOfGrades === 1}>جبر</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="someOfGrades" id="someOfGrades" placeholder={data.someOfGrades === 0 ? "تقريب" : "جبر"} />
                                                        }
                                                        {data.validationErrors.someOfGrades && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.someOfGrades}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="howToCalculateTheRatio">
                                                        كيفية حساب النسبة
                                                    </label>
                                                    <div className="col-lg-4">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" value={data.howToCalculateTheRatio} id="howToCalculateTheRatio"
                                                            onChange={(e) => {
                                                                setData({ ...data, howToCalculateTheRatio: parseInt(e.target.value) })
                                                                setData(prevState => ({
                                                                    ...prevState,
                                                                    validationErrors: { ...prevState.validationErrors, howToCalculateTheRatio: '' }
                                                                }));
                                                            }}
                                                        >
                                                            <option selected disabled>  </option>
                                                            <option value={0} selected={data.someOfGrades === 0}>الدرجة المكتسبة مقسومة علي اجمالي عدد الدرجات * 100</option>
                                                            <option value={1} selected={data.someOfGrades === 1}>الدرجة المكتسبة مقسومه علي اجمالي عدد الدرجات</option>
                                                            <option value={2} selected={data.someOfGrades === 2}>المعدل التراكمي المكتسب مقسوم علي الاجمالي</option>
                                                            <option value={3} selected={data.someOfGrades === 3}>معادلة خاصه علوم</option>
                                                            <option value={4} selected={data.someOfGrades === 4}>معادلة خاصه (اكاديميه طيبه)</option>
                                                            <option value={5} selected={data.someOfGrades === 5}>حساب النسبة مقربة</option>
                                                            <option value={6} selected={data.someOfGrades === 6}>الدرجة الفعلية مقسومة علي اجمالي الدرجات الفعلية * 100</option>
                                                            <option value={7} selected={data.someOfGrades === 7}>الدرجة الفعلية مقسومة علي اجمالي الساعات الفعلية</option>
                                                            <option value={8} selected={data.someOfGrades === 8}>حساب النسبة بناء علي التقديرات العامة</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input style={{ width: '130%' }} className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="howToCalculateTheRatio" id="howToCalculateTheRatio" placeholder={Options.howToCalculateTheRatio[data.howToCalculateTheRatio]} />
                                                        }
                                                        {data.validationErrors.howToCalculateTheRatio && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.howToCalculateTheRatio}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="multiplyingTheHoursByTheStudentsGrades">
                                                        ضرب الساعات في درجات الطالب
                                                    </label>
                                                    <div className="col-lg-4">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="multiplyingTheHoursByTheStudentsGrades" onChange={(e) => {
                                                            setData({ ...data, multiplyingTheHoursByTheStudentsGrades: parseInt(e.target.value) })

                                                        }}
                                                        >
                                                            <option selected disabled>  </option>
                                                            <option value={0} selected={data.someOfGrades === 0}>الجمع بدون ضرب الدرجة بساعات المقرر</option>
                                                            <option value={1} selected={data.someOfGrades === 1}>الجمع بضرب الدرجة بساعات المقرر</option>
                                                            <option value={2} selected={data.someOfGrades === 2}> القسمه علي الساعات بدون ضرب</option>
                                                            <option value={3} selected={data.someOfGrades === 3}>الجمع بضرب نسبه الطالب في المقرر بساعات المقرر</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input style={{ width: '130%' }} className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="multiplyingTheHoursByTheStudentsGrades" id="multiplyingTheHoursByTheStudentsGrades" placeholder={Options.multiplyingTheHoursByTheStudentsGrades[data.multiplyingTheHoursByTheStudentsGrades]} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateTheTermOfTheEquationInTheRate">
                                                        حساب ترم المعادلة في المعدل
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        {(state.status !== "Get") && <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="calculateTheTermOfTheEquationInTheRate" id="calculateTheTermOfTheEquationInTheRate" value={false} checked={data.calculateTheTermOfTheEquationInTheRate === false} onChange={(e) => {
                                                                    setData({ ...data, calculateTheTermOfTheEquationInTheRate: false })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="calculateTheTermOfTheEquationInTheRate">عدم الدخول فى الحساب  </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="calculateTheTermOfTheEquationInTheRate" id="calculateTheTermOfTheEquationInTheRate" checked={data.calculateTheTermOfTheEquationInTheRate === true} value={true} onChange={(e) => {
                                                                    setData({ ...data, calculateTheTermOfTheEquationInTheRate: true })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="calculateTheTermOfTheEquationInTheRate"> دخول فى الحساب</label>
                                                            </div>
                                                        </div>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="calculateTheTermOfTheEquationInTheRate" id="calculateTheTermOfTheEquationInTheRate" placeholder={data.calculateTheTermOfTheEquationInTheRate === true ? "دخول فى الحساب" : "عدم الدخول فى الحساب"} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateTermHours">
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        {(state.status !== "Get") && <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="calculateTermHours" id="calculatingTheSemesterEquationInHourseEarned" checked={data.calculatingTheSemesterEquationInHourseEarned === false} value={false} onChange={(e) => {
                                                                    setData({ ...data, calculatingTheSemesterEquationInHourseEarned: false })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="enterHours">عدم الدخول فى الحساب  </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="calculateTermHours" id="calculatingTheSemesterEquationInHourseEarned" checked={data.calculatingTheSemesterEquationInHourseEarned === true} value={true} onChange={(e) => {
                                                                    setData({ ...data, calculatingTheSemesterEquationInHourseEarned: true })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="enterHours" > دخول فى الحساب</label>
                                                            </div>
                                                        </div>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="calculatingTheSemesterEquationInHourseEarned" id="calculatingTheSemesterEquationInHourseEarned" placeholder={data.calculatingTheSemesterEquationInHourseEarned === true ? "دخول فى الحساب" : "عدم الدخول فى الحساب"} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="rateRounding">
                                                        تقريب المعدل
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        {(state.status !== "Get") && <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="rateRounding" id="rateApproximation" checked={data.rateApproximation === false} value={false} onChange={(e) => {
                                                                    setData({ ...data, rateApproximation: false })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="rateApproximation">عدم تقريب المعدل    </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="rateRounding" id="rateApproximation" checked={data.rateApproximation === true} value={true} onChange={(e) => {
                                                                    setData({ ...data, rateApproximation: true })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="rate"> تقريب المعدل  </label>
                                                            </div>
                                                        </div>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="rateApproximation" id="rateApproximation" placeholder={data.rateApproximation === true ? "تقريب المعدل " : "عدم تقريب المعدل"} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <span >
                                                    <div className="form-group  row">
                                                        <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="theNnumberOfDigitsRroundingTheRate">
                                                            عدد ارقام تقريب المعدل
                                                        </label>
                                                        <div class="col-lg-2 ">
                                                            {(state.status !== "Get") && <div class="input-group">
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="theNnumberOfDigitsRroundingTheRate"
                                                                    name="theNnumberOfDigitsRroundingTheRate"
                                                                    onChange={(e) => {
                                                                        setData({ ...data, theNnumberOfDigitsRroundingTheRate: parseInt(e.target.value) })
                                                                        setData(prevState => ({
                                                                            ...prevState,
                                                                            validationErrors: { ...prevState.validationErrors, theNnumberOfDigitsRroundingTheRate: '' }
                                                                        }));
                                                                    }}
                                                                    value={data.theNnumberOfDigitsRroundingTheRate}
                                                                />
                                                            </div>}

                                                            {((state.status === "Get")) &&
                                                                <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="theNnumberOfDigitsRroundingTheRate" id="theNnumberOfDigitsRroundingTheRate" placeholder={data.theNnumberOfDigitsRroundingTheRate} />
                                                            }
                                                            {data.validationErrors.theNnumberOfDigitsRroundingTheRate && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.theNnumberOfDigitsRroundingTheRate}
                                                            </div>
                                                        )}
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="reducingTheRateUponImprovement">
                                                        تخفيض المعدل عند التحسين
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        {(state.status !== "Get") && <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="reducingTheRateUponImprovement" id="reduction" checked={data.reducingTheRateUponImprovement === false} value={false} onChange={(e) => {
                                                                    setData({ ...data, reducingTheRateUponImprovement: false })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="reduction">عدم تخفيض المعدل</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="reducingTheRateUponImprovement" id="reduction" checked={data.reducingTheRateUponImprovement === true} value={true} onChange={(e) => {
                                                                    setData({ ...data, reducingTheRateUponImprovement: true })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="reduction">تخفيض المعدل</label>
                                                            </div>
                                                        </div>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="reducingTheRateUponImprovement" id="reducingTheRateUponImprovement" placeholder={data.reducingTheRateUponImprovement === true ? "تخفيض المعدل" : "عدم تخفيض المعدل"} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="maximumNumberOfAdditionsToFailedCoursesWithoutSuccess">
                                                        أقصى عدد لإضافة للمقررات الرسوب(بدون نجاح)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="maximumNumberOfAdditionsToFailedCoursesWithoutSuccess" onChange={(e) => {
                                                            setData({ ...data, maximumNumberOfAdditionsToFailedCoursesWithoutSuccess: parseInt(e.target.value) })
                                                            setData(prevState => ({
                                                                ...prevState,
                                                                validationErrors: { ...prevState.validationErrors, maximumNumberOfAdditionsToFailedCoursesWithoutSuccess: '' }
                                                            }));
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0} selected={data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess === 0}>اضافه الجميع </option>
                                                            <option value={1} selected={data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess === 1}>عدم اضافه مقررات</option>
                                                            <option value={2} selected={data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess === 2}> اضافه مقرر</option>
                                                            <option value={3} selected={data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess === 3}> اضافه مقرران</option>
                                                            <option value={4} selected={data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess === 4}> اضافه 3 مقررات</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="maximumNumberOfAdditionsToFailedCoursesWithoutSuccess" id="maximumNumberOfAdditionsToFailedCoursesWithoutSuccess" placeholder={Options.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess[data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess]} />
                                                        }
                                                        {data.validationErrors.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="deleteFailedCoursesAfterSuccess">
                                                        حذف مقررات الرسوب (بعد نجاح)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="deleteFailedCoursesAfterSuccess" onChange={(e) => {
                                                            setData({ ...data, deleteFailedCoursesAfterSuccess: parseInt(e.target.value) })
                                                            setData(prevState => ({
                                                                ...prevState,
                                                                validationErrors: { ...prevState.validationErrors, deleteFailedCoursesAfterSuccess: '' }
                                                            }));
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0} selected={data.deleteFailedCoursesAfterSuccess === 0}>حذف مقرر واحد من المقام </option>
                                                            <option value={1} selected={data.deleteFailedCoursesAfterSuccess === 1}>حذف جميع المقررات</option>
                                                            <option value={2} selected={data.deleteFailedCoursesAfterSuccess === 2}> عدم حذف المقررات </option>
                                                            <option value={3} selected={data.deleteFailedCoursesAfterSuccess === 3}>حساب مقرر في المقام</option>
                                                            <option value={4} selected={data.deleteFailedCoursesAfterSuccess === 4}> حساب مقرران في المقام</option>
                                                            <option value={5} selected={data.deleteFailedCoursesAfterSuccess === 5}> حساب 3 مقررات في المقام</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="deleteFailedCoursesAfterSuccess" id="deleteFailedCoursesAfterSuccess" placeholder={Options.deleteFailedCoursesAfterSuccess[data.deleteFailedCoursesAfterSuccess]} />
                                                        }
                                                        {data.validationErrors.deleteFailedCoursesAfterSuccess && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.deleteFailedCoursesAfterSuccess}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="maximumCumulativeGPA">
                                                        حد الأقصى للمعدل التراكمى
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="maximumCumulativeGPA" onChange={(e) => {
                                                            setData({ ...data, maximumCumulativeGPA: parseInt(e.target.value) })
                                                            setData(prevState => ({
                                                                ...prevState,
                                                                validationErrors: { ...prevState.validationErrors, maximumCumulativeGPA: '' }
                                                            }));
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0} selected={data.maximumCumulativeGPA === 0}>GPA 3.5</option>
                                                            <option value={1} selected={data.maximumCumulativeGPA === 1}>GPA 4</option>
                                                            <option value={2} selected={data.maximumCumulativeGPA === 2}>GPA 5</option>
                                                            <option value={3} selected={data.maximumCumulativeGPA === 3}>GPA 6</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="maximumCumulativeGPA" id="maximumCumulativeGPA" placeholder={Options.maximumCumulativeGPA[data.maximumCumulativeGPA]} />
                                                        }
                                                        {data.validationErrors.maximumCumulativeGPA && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.maximumCumulativeGPA}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateTheCumulativeEstimate">
                                                        حساب التقدير التراكمى
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="calculateTheCumulativeEstimate" onChange={(e) => {
                                                            setData({ ...data, calculateTheCumulativeEstimate: parseInt(e.target.value) })
                                                            setData(prevState => ({
                                                                ...prevState,
                                                                validationErrors: { ...prevState.validationErrors, calculateTheCumulativeEstimate: '' }
                                                            }));
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0} selected={data.calculateTheCumulativeEstimate === 0}>بناء علي المعدل</option>
                                                            <option value={1} selected={data.calculateTheCumulativeEstimate === 1}>بناء علي النسبة</option>
                                                            <option value={2} selected={data.calculateTheCumulativeEstimate === 2}>بناء علي المعدل وفقا للتقديرات العامة</option>
                                                            <option value={3} selected={data.calculateTheCumulativeEstimate === 3}>بناء علي النسبة وفقا للتقديرات العامة</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="calculateTheCumulativeEstimate" id="maximumNumberOfAdditionsToFailedCoursesWithoutSuccess" placeholder={Options.calculateTheCumulativeEstimate[data.calculateTheCumulativeEstimate]} />
                                                        }
                                                        {data.validationErrors.calculateTheCumulativeEstimate && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.calculateTheCumulativeEstimate}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="howToCalculateTheRate.">
                                                        كيفية حساب المعدل
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="howToCalculateTheRate" onChange={(e) => {
                                                            setData({ ...data, howToCalculateTheRate: parseInt(e.target.value) })
                                                            setData(prevState => ({
                                                                ...prevState,
                                                                validationErrors: { ...prevState.validationErrors, howToCalculateTheRate: '' }
                                                            }));
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0} selected={data.howToCalculateTheRate === 0}>بالقسمة علي الساعات الفعلية  </option>
                                                            <option value={1} selected={data.howToCalculateTheRate === 1}>بالقسمه علي الساعات المكتسبة  </option>
                                                            <option value={2} selected={data.howToCalculateTheRate === 2}>قسمة مجموع الدرجات المكتسبة علي اجمالي المجموع الفعلي مضروبا * 0.25</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input style={{ width: '300%' }} className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="howToCalculateTheRate" id="howToCalculateTheRate" placeholder={Options.howToCalculateTheRate[data.howToCalculateTheRate]} />
                                                        }
                                                        {data.validationErrors.howToCalculateTheRate && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.howToCalculateTheRate}
                                                            </div>
                                                        )}
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
                                                            {(state.status !== "Get") && <div class="input-group">
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="theNumberOfDigitsRoundinPoints"
                                                                    name="theNumberOfDigitsRoundinPoints"
                                                                    onChange={(e) => {
                                                                        setData({ ...data, theNumberOfDigitsRoundinPoints: parseInt(e.target.value) })
                                                                        setData(prevState => ({
                                                                            ...prevState,
                                                                            validationErrors: { ...prevState.validationErrors, theNumberOfDigitsRoundinPoints: '' }
                                                                        }));
                                                                    }}
                                                                    value={data.theNumberOfDigitsRoundinPoints}
                                                                />
                                                            </div>}
                                                            {((state.status === "Get")) &&
                                                                <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="theNumberOfDigitsRoundinPoints" id="theNumberOfDigitsRoundinPoints" placeholder={data.theNumberOfDigitsRoundinPoints} />
                                                            }
                                                            {data.validationErrors.theNumberOfDigitsRoundinPoints && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.theNumberOfDigitsRoundinPoints}
                                                            </div>
                                                        )}
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
                                                            {(state.status !== "Get") && <div class="input-group">
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="numberOfDigitsRoundingTheRatio"
                                                                    name="numberOfDigitsRoundingTheRatio"
                                                                    onChange={(e) => {
                                                                        setData({ ...data, numberOfDigitsRoundingTheRatio: parseInt(e.target.value) })
                                                                        setData(prevState => ({
                                                                            ...prevState,
                                                                            validationErrors: { ...prevState.validationErrors, numberOfDigitsRoundingTheRatio: '' }
                                                                        }));
                                                                    }}
                                                                    value={data.numberOfDigitsRoundingTheRatio}
                                                                />
                                                            </div>}
                                                            {((state.status === "Get")) &&
                                                                <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="numberOfDigitsRoundingTheRatio" id="numberOfDigitsRoundingTheRatio" placeholder={data.numberOfDigitsRoundingTheRatio} />
                                                            }
                                                            {data.validationErrors.numberOfDigitsRoundingTheRatio && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.numberOfDigitsRoundingTheRatio}
                                                            </div>
                                                        )}
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    {(state.status !== "Get") && <input className="form-check-input mt-2 fs-5" type="checkbox" id="annualRate" checked={data.summerIsNotExcludedInCalculatingTheAnnualAverage} value={true} onChange={(e) => {
                                                        setData({ ...data, summerIsNotExcludedInCalculatingTheAnnualAverage: e.target.checked })
                                                    }} />}
                                                    {(state.status == "Get") && <div class="form-check form-switch">
                                                        <input className="form-check-input mt-2 fs-5" type="checkbox" id="annualRate" disabled checked={data.summerIsNotExcludedInCalculatingTheAnnualAverage === true} />
                                                    </div>}
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="annualRate">عدم استثناء الصيفى فى حساب المعدل السنوى</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    {(state.status !== "Get") && <input className="form-check-input mt-2 fs-5" type="checkbox" checked={data.theCumulativeAverageDoesNotAppearInTheStudentGradesPortal} id="rateAppear" value={true} onChange={(e) => {
                                                        setData({ ...data, theCumulativeAverageDoesNotAppearInTheStudentGradesPortal: e.target.checked })
                                                    }} />}
                                                    {(state.status == "Get") && <div class="form-check form-switch">
                                                        <input className="form-check-input mt-2 fs-5" type="checkbox" id="annualRate" disabled checked={data.theCumulativeAverageDoesNotAppearInTheStudentGradesPortal === true} />
                                                    </div>}
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="rateAppear">عدم ظهور المعدل التراكمى فى بورتال طالب تقديرات المواد</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    {(state.status !== "Get") && <input className="form-check-input mt-2 fs-5" type="checkbox" id="showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal" checked={data.theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades} value={true} onChange={(e) => {
                                                        setData({ ...data, theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades: e.target.checked })
                                                    }} />}
                                                    {(state.status == "Get") && <div class="form-check form-switch">
                                                        <input className="form-check-input mt-2 fs-5" type="checkbox" id="annualRate" disabled checked={data.theSemesterAndCumulativePercentagesAppearInTheStudentsPortalForSubjectGrades === true} />
                                                    </div>}
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal">ظهور النسبه الفصليه و التراكمية فى بورتال الطالب تقديرات المواد</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    {(state.status !== "Get") && <input className="form-check-input mt-2 fs-5" type="checkbox" id="showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal" checked={data.showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal} value={true} onChange={(e) => {
                                                        setData({ ...data, showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal: e.target.checked })
                                                    }} />}
                                                    {(state.status == "Get") && <div class="form-check form-switch">
                                                        <input className="form-check-input mt-2 fs-5" type="checkbox" id="showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal" disabled checked={data.showingTheSemesterAndCumulativeGradeInTheStudentGradesPortal === true} />
                                                    </div>}
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="quarterlyGrade">اظهار التقدير الفصلى والتراكمى فى بورتال الطالب تقديرات المواد</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    {(state.status !== "Get") && <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculateFail" checked={data.calculatingFailingGradePoints} value={true} onChange={(e) => {
                                                        setData({ ...data, calculatingFailingGradePoints: e.target.checked })
                                                    }} />}
                                                    {(state.status == "Get") && <div class="form-check form-switch">
                                                        <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculatingFailingGradePoints" disabled checked={data.calculatingFailingGradePoints === true} />
                                                    </div>}
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="calculateFail">حساب نقاط تقديرات الرسوب</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <p className="text-decoration-underline fs-5 fw-bolder" >المعدل الفصلي :</p>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    {(state.status !== "Get") && <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage" checked={data.calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage} value={true} onChange={(e) => {
                                                        setData({ ...data, calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage: e.target.checked })
                                                    }} />}
                                                    {(state.status == "Get") && <div class="form-check form-switch">
                                                        <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage" disabled checked={data.calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage === true} />
                                                    </div>}
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="calculatingFailureTimesAfterTheFirstTimeInTheSemesterAverage">حساب مرات الرسوب بعد المره الاولي في المعدل الفصلي</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-11">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-5 fw-semibold fs-5 col-form-label" htmlFor="calculateTermRate">
                                                        كيفية حساب المعدل الفصلي
                                                    </label>
                                                    <div className="col-lg-3">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="calculateTermRate" onChange={(e) => {
                                                            setData({ ...data, howToCalculateTheSemesterAverage: parseInt(e.target.value) })
                                                            // setData(prevState => ({
                                                            //     ...prevState,
                                                            //     validationErrors: { ...prevState.validationErrors, calculateTermRate: '' }
                                                            // }));
                                                        }}>
                                                            <option selected disabled>  </option>
                                                            <option value={0} selected={data.howToCalculateTheSemesterAverage === 0}>بالقسمة علي الساعات الفعلية  </option>
                                                            <option value={1} selected={data.howToCalculateTheSemesterAverage === 1}>بالقسمه علي الساعات المكتسبة  </option>
                                                            <option value={2} selected={data.howToCalculateTheSemesterAverage === 2}>قسمة مجموع الدرجات المكتسبة علي اجمالي المجموع الفعلي مضروبا * 0.25</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input style={{ width: '220%' }} className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="howToCalculateTheSemesterAverage" id="howToCalculateTheSemesterAverage" placeholder={Options.howToCalculateTheRate[data.howToCalculateTheSemesterAverage]} />
                                                        }
                                                        {/* {data.validationErrors.calculateTermRate && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.calculateTermRate}
                                                            </div>
                                                        )} */}
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row justify-content-center text-center">


                                                <div className="col-md-12">
                                                    {(state.status !== "Get") && <button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}`} type="submit">
                                                        <i className="fa-regular fa-bookmark"></i> حفظ
                                                    </button>}
                                                    {(state.status !== "Get") && <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={handleClose}>
                                                        <i className="fa-solid fa-lock"></i> غلق
                                                    </button>}
                                                    {
                                                        (state.status !== "Add" && state.status === "Get") &&
                                                        <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="submit" onClick={() => { dispatch({ type: "Update" }); }}>
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
