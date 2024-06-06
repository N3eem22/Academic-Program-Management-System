// DESKTOP-N5LVV8M
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

const ControlPage = () => {
    const ProgramId = 1002;
    const initialState = {
        status: '',
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    var Options = {
        theGrade: ["تقريب", "جبر", "عادي"],
        failingGrades: ["NP", "U", "F"],
        chooseTheDetailsOfTheoreticalFailureBasedOn: ["كل التفاصيل", "ايا من التفاصيل", "مجموع التفاصيل"]
    }


    const [data, setData] = useState({

        programId: 1002,
        subtractFromTheDiscountRate: "",
        exceptionToDiscountEstimates: "",
        firstReductionEstimatesForFailureTimes: "",
        percentageForFristGrade: "",
        secondReductionEstimatesForFailureTimes: "",
        percentageForSecondGrade: "",
        thirdReductionEstimatesForFailureTimes: "",
        percentageForThirdGrade: "",
        calculatingTheBudgetEstimateFromTheReductionEstimates: "",
        theGrade: "",
        placementOfStudentsInTheCourse: "",
        estimatingTheTheoreticalFailure: "",
        failureEstimatesInTheLists: [],
        detailsOfTheoreticalFailingGrades: "",
        detailsOfTheoreticalFailingGradesNav: [],
        chooseTheDetailsOfTheoreticalFailureBasedOn: "",
        calculateEstimate: "",
        aCaseOfAbsenceInTheDetailedGrades: [],
        allDetailOrNo: "",
        detailsOfExceptionalLetters: [],
        addingExciptionLetters: "",
        exceptionalLetterGrades: [],
        estimatesNotDefinedInTheLists: [],
        successGrades: "",
        failingGrades: "",
        estimateDeprivationBeforeTheExamId: "",
        estimateDeprivationAfterTheExamId: "",
        aSuccessRatingDoesNotAddHours: [],
    });
    useEffect(() => {

        console.log(data);
    }, [data]);

    useEffect(() => {
        const fetchData = async (programId) => {
            const res = await axios.get(`https://localhost:7095/api/control/${1002}`).then((resp) => {
                dispatch({ type: 'Get' });
                setData({
                    ...data, subtractFromTheDiscountRate: resp.data.subtractFromTheDiscountRate,
                    exceptionToDiscountEstimates: resp.data.exceptionToDiscountEstimates,
                    firstReductionEstimatesForFailureTimes: resp.data.firstReductionEstimatesForFailureTimes,
                    percentageForFristGrade: resp.data.percentageForFristGrade,
                    secondReductionEstimatesForFailureTimes: resp.data.secondReductionEstimatesForFailureTimes,
                    percentageForSecondGrade: resp.data.percentageForSecondGrade,
                    thirdReductionEstimatesForFailureTimes: resp.data.thirdReductionEstimatesForFailureTimes,
                    percentageForThirdGrade: resp.data.percentageForThirdGrade,
                    calculatingTheBudgetEstimateFromTheReductionEstimates: resp.data.calculatingTheBudgetEstimateFromTheReductionEstimates,
                    theGrade: resp.data.theGrade,
                    placementOfStudentsInTheCourse: resp.data.placementOfStudentsInTheCourse,
                    estimatingTheTheoreticalFailure: resp.data.estimatingTheTheoreticalFailure,
                    failureEstimatesInTheLists: resp.data.failureEstimatesInTheLists || prevData.failureEstimatesInTheLists,
                    detailsOfTheoreticalFailingGrades: resp.data.detailsOfTheoreticalFailingGrades,
                    detailsOfTheoreticalFailingGradesNav: resp.data.detailsOfTheoreticalFailingGradesNav || prevData.detailsOfTheoreticalFailingGradesNav,
                    chooseTheDetailsOfTheoreticalFailureBasedOn: resp.data.chooseTheDetailsOfTheoreticalFailureBasedOn,
                    calculateEstimate: resp.data.calculateEstimate,
                    aCaseOfAbsenceInTheDetailedGrades: resp.data.aCaseOfAbsenceInTheDetailedGrades || prevData.aCaseOfAbsenceInTheDetailedGrades,
                    allDetailOrNo: resp.data.allDetailOrNo,
                    detailsOfExceptionalLetters: resp.data.detailsOfExceptionalLetters || prevData.detailsOfExceptionalLetters,
                    addingExciptionLetters: resp.data.addingExciptionLetters,
                    exceptionalLetterGrades: resp.data.exceptionalLetterGrades || prevData.exceptionalLetterGrades,
                    estimatesNotDefinedInTheLists: resp.data.estimatesNotDefinedInTheLists || prevData.estimatesNotDefinedInTheLists,
                    successGrades: resp.data.successGrades,
                    failingGrades: resp.data.failingGrades,
                    estimateDeprivationBeforeTheExamId: resp.data.estimateDeprivationBeforeTheExamId,
                    estimateDeprivationAfterTheExamId: resp.data.estimateDeprivationAfterTheExamId,
                    aSuccessRatingDoesNotAddHours: resp.data.aSuccessRatingDoesNotAddHours || prevData.aSuccessRatingDoesNotAddHours
                });
                console.log(resp.data);
            }).catch((err) => {
                dispatch({ type: 'Add' });
                console.log(err);
            });


        }
        fetchData(ProgramId);
    }, []);



    const sendDataToApi = async () => {
        try {
            setData({ ...data, programId: 1002 })
            const dataToSend = { controlReq: data };
            if (state.status === "Add") {
                const res = await axios.post('https://localhost:7095/api/Control', {
                    programId: 1002,
                    subtractFromTheDiscountRate: data.subtractFromTheDiscountRate,
                    exceptionToDiscountEstimates: data.exceptionToDiscountEstimates,
                    firstReductionEstimatesForFailureTimes: data.firstReductionEstimatesForFailureTimes,
                    percentageForFristGrade: data.percentageForFristGrade,
                    secondReductionEstimatesForFailureTimes: data.secondReductionEstimatesForFailureTimes,
                    percentageForSecondGrade: data.percentageForSecondGrade,
                    thirdReductionEstimatesForFailureTimes: data.thirdReductionEstimatesForFailureTimes,
                    percentageForThirdGrade: data.percentageForThirdGrade,
                    calculatingTheBudgetEstimateFromTheReductionEstimates: data.calculatingTheBudgetEstimateFromTheReductionEstimates,
                    theGrade: data.theGrade,
                    placementOfStudentsInTheCourse: data.placementOfStudentsInTheCourse,
                    estimatingTheTheoreticalFailure: data.estimatingTheTheoreticalFailure,
                    failureEstimatesInTheLists: data.failureEstimatesInTheLists,
                    detailsOfTheoreticalFailingGrades: data.detailsOfTheoreticalFailingGrades,
                    detailsOfTheoreticalFailingGradesNav: data.detailsOfTheoreticalFailingGradesNav,
                    chooseTheDetailsOfTheoreticalFailureBasedOn: data.chooseTheDetailsOfTheoreticalFailureBasedOn,
                    calculateEstimate: data.calculateEstimate,
                    aCaseOfAbsenceInTheDetailedGrades: data.aCaseOfAbsenceInTheDetailedGrades,
                    allDetailOrNo: data.allDetailOrNo,
                    detailsOfExceptionalLetters: data.detailsOfExceptionalLetters,
                    addingExciptionLetters: data.addingExciptionLetters,
                    exceptionalLetterGrades: data.exceptionalLetterGrades,
                    estimatesNotDefinedInTheLists: data.estimatesNotDefinedInTheLists,
                    successGrades: data.successGrades,
                    failingGrades: data.failingGrades,
                    estimateDeprivationBeforeTheExamId: data.estimateDeprivationBeforeTheExamId,
                    estimateDeprivationAfterTheExamId: data.estimateDeprivationAfterTheExamId,
                    aSuccessRatingDoesNotAddHours: data.aSuccessRatingDoesNotAddHours
                });
            }
            else if (state.status === "Update") {
                const res = await axios.put(`https://localhost:7095/api/Control/${1}`, {
                    programId: 1002,
                    subtractFromTheDiscountRate: data.subtractFromTheDiscountRate,
                    exceptionToDiscountEstimates: data.exceptionToDiscountEstimates,
                    firstReductionEstimatesForFailureTimes: data.firstReductionEstimatesForFailureTimes,
                    percentageForFristGrade: data.percentageForFristGrade,
                    secondReductionEstimatesForFailureTimes: data.secondReductionEstimatesForFailureTimes,
                    percentageForSecondGrade: data.percentageForSecondGrade,
                    thirdReductionEstimatesForFailureTimes: data.thirdReductionEstimatesForFailureTimes,
                    percentageForThirdGrade: data.percentageForThirdGrade,
                    calculatingTheBudgetEstimateFromTheReductionEstimates: data.calculatingTheBudgetEstimateFromTheReductionEstimates,
                    theGrade: data.theGrade,
                    placementOfStudentsInTheCourse: data.placementOfStudentsInTheCourse,
                    estimatingTheTheoreticalFailure: data.estimatingTheTheoreticalFailure,
                    failureEstimatesInTheLists: data.failureEstimatesInTheLists,
                    detailsOfTheoreticalFailingGrades: data.detailsOfTheoreticalFailingGrades,
                    detailsOfTheoreticalFailingGradesNav: data.detailsOfTheoreticalFailingGradesNav,
                    chooseTheDetailsOfTheoreticalFailureBasedOn: data.chooseTheDetailsOfTheoreticalFailureBasedOn,
                    calculateEstimate: data.calculateEstimate,
                    aCaseOfAbsenceInTheDetailedGrades: data.aCaseOfAbsenceInTheDetailedGrades,
                    allDetailOrNo: data.allDetailOrNo,
                    detailsOfExceptionalLetters: data.detailsOfExceptionalLetters,
                    addingExciptionLetters: data.addingExciptionLetters,
                    exceptionalLetterGrades: data.exceptionalLetterGrades,
                    estimatesNotDefinedInTheLists: data.estimatesNotDefinedInTheLists,
                    successGrades: data.successGrades,
                    failingGrades: data.failingGrades,
                    estimateDeprivationBeforeTheExamId: data.estimateDeprivationBeforeTheExamId,
                    estimateDeprivationAfterTheExamId: data.estimateDeprivationAfterTheExamId,
                    aSuccessRatingDoesNotAddHours: data.aSuccessRatingDoesNotAddHours
                });
                dispatch({ type: 'Get' });
            }

            console.log('Response:', res);
            if (res.status === 200) {
                dispatch({ type: 'Get' });
                console.log(state);
            }
        } catch (err) {
            console.log('Error data:', err.response.data);
            return err;
        }
    }
    function submit(e) {
        console.log(data);
        e.preventDefault();

        sendDataToApi();
    }




    const [selectedValue, setSelectedValue] = useState("");
    const [customValues, setCustomValues] = useState({});
    const [sections, setSections] = useState([]);



    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);
    };

    const handleCustomInputChange = (event, id) => {
        const value = event.target.value;
        setCustomValues((prevValues) => {
            const newValues = {
                ...prevValues,
                [id]: value,
            };

            if (value.trim() !== "") {
                setData((prevData) => {
                    const updatedGrades = prevData.exceptionalLetterGrades.map((grade) =>
                        grade.gradeId === id ? { ...grade, value } : grade
                    );

                    return {
                        ...prevData,
                        exceptionalLetterGrades: updatedGrades,
                    };
                });
            }

            return newValues;
        });
    };

    const handlePlusIconClick = () => {
        if (selectedValue) {
            const selectedGrade = allGrades.find(grade => grade.id === parseInt(selectedValue));
            const newSectionId = sections.length + 1;
            const newSection = {
                id: selectedGrade.id,
                value: selectedGrade.theGrade,
            };
            setSections([...sections, newSection]);

            setData((prevData) => {
                const isFirstAddition = sections.length === 0;

                return {
                    ...prevData,
                    exceptionalLetterGrades: isFirstAddition
                        ? [
                            {
                                gradeId: selectedGrade.id,
                                controlId: 0,
                                value: "",
                            }
                        ]
                        : [
                            ...prevData.exceptionalLetterGrades,
                            {
                                gradeId: selectedGrade.id,
                                controlId: 0,
                                value: "",
                            }
                        ]
                };
            });
        }
    };

    const handleRemoveSection = (id) => {
        const updatedSections = sections.filter((section) => section.id !== id);
        setSections(updatedSections);

        const indexToRemove = sections.findIndex((section) => section.id === id);

        setData((prevData) => ({
            ...prevData,
            exceptionalLetterGrades: prevData.exceptionalLetterGrades.filter((_, index) => index !== indexToRemove)
        }));
        setCustomValues((prevValues) => {
            const newValues = { ...prevValues };
            delete newValues[id];
            return newValues;
        });
    };






    const [allGrades, setAllGrades] = useState([]);
    const [gradesDetails, setGradesDetails] = useState([]);
    const [prerequisites, setPrerequisites] = useState([]);
    const [previousQualifications, setPreviousQualifications] = useState([]);
    const [levels, setLevels] = useState([]);
    const [semesters, setSemesters] = useState([]);


    useEffect(() => {


        axios.get('https://localhost:7095/api/AllGrades?UniversityId=1')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setAllGrades(response.data);
                } else if (typeof response.data === 'object') {
                    setAllGrades([response.data]);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching all grades:', error);
            });
        axios.get('https://localhost:7095/api/GradesDetails/1')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setGradesDetails(response.data);
                } else if (typeof response.data === 'object') {
                    setGradesDetails([response.data]);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching grades details:', error);
            });


        // axios.get('https://localhost:7095/api/Prerequisites/1')
        //     .then(response => {
        //         if (Array.isArray(response.data)) {
        //             setPrerequisites(response.data);
        //         } else if (typeof response.data === 'object') {
        //             setPrerequisites([response.data]);
        //         } else {
        //             console.error('Unexpected response format:', response.data);
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error fetching prerequisites:', error);
        //     });

        // axios.get('https://localhost:7095/api/PreviousQualification/1')
        //     .then(response => {
        //         if (Array.isArray(response.data)) {
        //             setPreviousQualifications(response.data);
        //         } else if (typeof response.data === 'object') {
        //             setPreviousQualifications([response.data]);
        //         } else {
        //             console.error('Unexpected response format:', response.data);
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error fetching previous qualifications:', error);
        //     });
        // axios.get('https://localhost:7095/api/Level/1')
        //     .then(response => {
        //         if (Array.isArray(response.data)) {
        //             setLevels(response.data);
        //         } else if (typeof response.data === 'object') {
        //             setLevels([response.data]);
        //         } else {
        //             console.error('Unexpected response format:', response.data);
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error fetching levels:', error);
        //     });
        // axios.get('https://localhost:7095/api/Semesters/1')
        //     .then(response => {
        //         if (Array.isArray(response.data)) {
        //             setSemesters(response.data);
        //         } else if (typeof response.data === 'object') {
        //             setSemesters([response.data]);
        //         } else {
        //             console.error('Unexpected response format:', response.data);
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error fetching semesters:', error);
        //     });
    }, []);

    const handleSelectChangeFirstReduction = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            firstReductionEstimatesForFailureTimes: value
        }));
    };
    const handleSelectChangeSeconedReduction = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            secondReductionEstimatesForFailureTimes: value
        }));
    };
    const handleSelectChangeThirdReduction = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            thirdReductionEstimatesForFailureTimes: value
        }));
    };
    const handleSelectChangeFailureEstimatesInTheLists = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => ({
            gradeId: parseInt(option.value),
            controlId: 0
        }));
        setData(prevData => ({
            ...prevData,
            failureEstimatesInTheLists: selectedOptions
        }));
    };
    const handleSelectChangeEstimatesNotDefinedInTheLists = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => ({
            gradeId: parseInt(option.value),
            controlId: 0
        }));
        setData(prevData => ({
            ...prevData,
            estimatesNotDefinedInTheLists: selectedOptions
        }));
    };
    const handleSelectChangeACaseOfAbsenceInTheDetailedGrades = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => ({
            gradeDetailId: option.value,
            controlId: 0,
        }));
        setData(prevData => ({
            ...prevData,
            aCaseOfAbsenceInTheDetailedGrades: selectedOptions
        }));
    };
    const handleSelectChangeDetailsOfExceptionalLetters = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => ({
            gradeDetailId: option.value,
            controlId: 0,
        }));
        setData(prevData => ({
            ...prevData,
            detailsOfExceptionalLetters: selectedOptions
        }));
    };
    const [selectedGrades, setSelectedGrades] = useState([]);
    const [gradeInput, setGradeInput] = useState("");

    const updateData = () => {
        setData(prevData => ({
            ...prevData,
            detailsOfTheoreticalFailingGradesNav: selectedGrades.map(gradeId => ({
                gradeDetailId: gradeId,
                value: gradeInput
            }))
        }));
    };

    const handleSelectChangeOfTheoreticalFailingGradesNav = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedGrades(selectedOptions);
        updateData();
    };

    const handleInputChange = (event) => {
        setGradeInput(event.target.value);
        updateData();
    };

    useEffect(() => {
        updateData();
    }, [selectedGrades, gradeInput]);
    const handleSelectChangeEstimateDeprivationBeforeTheExamId = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            estimateDeprivationBeforeTheExamId: value
        }));
    };
    const handleSelectChangeEstimateDeprivationAfterTheExamId = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            estimateDeprivationAfterTheExamId: value
        }));
    };
    const handleSelectChangeASuccessRatingDoesNotAddHours = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => ({
            gradeId: parseInt(option.value),
        }));
        setData(prevData => ({
            ...prevData,
            aSuccessRatingDoesNotAddHours: selectedOptions
        }));
    };
    const handleSelectChangeEstimatingTheTheoreticalFailure = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            estimatingTheTheoreticalFailure: value
        }));
    };







    // const handlePlusIconClick = () => {
    //     if (selectedValue) {
    //         const newSection = {
    //             id: sections.length +1,   //elmafrod +1
    //             value: selectedValue,
    //         };
    //         setSections([...sections, newSection]);


    //             setData((prevData) => ({
    //                 ...prevData,
    //                 exceptionalLetterGrades: [
    //                     ...prevData.exceptionalLetterGrades,
    //                     {
    //                         gradeId: sections.length + 1,
    //                         controlId: 0,
    //                         value: selectedValue,
    //                     }
    //                 ]
    //             }));

    //     }
    // };
    // const handleRemoveSection = (id) => {
    //     // Filter out the removed section from the sections array
    //     const updatedSections = sections.filter((section) => section.id !== id);
    //     setSections(updatedSections);

    //     // Find the index of the section to remove in exceptionalLetterGrades array
    //     const indexToRemove = sections.findIndex((section) => section.id === id);

    //     // Update the exceptionalLetterGrades array by filtering out the element at indexToRemove
    //     setData((prevData) => ({
    //         ...prevData,
    //         exceptionalLetterGrades: prevData.exceptionalLetterGrades.filter((_, index) => index !== indexToRemove)
    //     }));
    // };


    // const handlePlusIconClick = () => {
    //     const newSection = {
    //         id: sections.length + 1,
    //         selectedValue: selectedValue,
    //     };
    //     setSections([...sections, newSection]);
    // };

    // const handleRemoveSection = (id) => {
    //     const updatedSections = sections.filter((section) => section.id !== id);
    //     setSections(updatedSections);
    // };
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
                                            <div className="col-12">
                                                <div className="form-group row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="subtractFromTheDiscountRate">
                                                        طرح من نسبة التخفيض
                                                    </label>
                                                    <div className="col-2">
                                                        {(state.status !== "Get") && <div className="input-group">
                                                            <input type="text"
                                                                className="form-control"
                                                                id="subtractFromTheDiscountRate"
                                                                name="subtractFromTheDiscountRate"
                                                                onChange={(e) => {
                                                                    setData({ ...data, subtractFromTheDiscountRate: parseInt(e.target.value) })
                                                                }}
                                                                value={data.subtractFromTheDiscountRate}
                                                            />
                                                        </div>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`}
                                                                disabled
                                                                type="text"
                                                                name="subtractFromTheDiscountRate"
                                                                id="subtractFromTheDiscountRate"
                                                                placeholder={data.subtractFromTheDiscountRate} />
                                                        }
                                                    </div>
                                                    <div className="col-1"><p className="fw-semibold fs-5">درجة</p></div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-3 fw-semibold fs-5 col-form-label" htmlFor="Maximum">
                                                        بتقدير التخفيض لمواد الرسوب
                                                    </label>

                                                    <div className="col-md-9">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="row">
                                                                    <div className="col-lg-2">
                                                                        <p className="fw-semibold fs-5">ألاولي</p>
                                                                    </div>
                                                                    <div className="col-lg-5">
                                                                        {(state.status !== "Get") && <select className="form-select custom-select-start"
                                                                            aria-label="Select an option"
                                                                            id="firstReductionEstimatesForFailureTimes"
                                                                            value={data.firstReductionEstimatesForFailureTimes}
                                                                            onChange={handleSelectChangeFirstReduction}
                                                                        >
                                                                            <option selected disabled> </option>
                                                                            {allGrades.map((grade) => (
                                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                                            ))}
                                                                        </select>}
                                                                        {((state.status === "Get")) &&
                                                                            <input className={`form m-1 col-lg-10 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="firstReductionEstimatesForFailureTimes" id="firstReductionEstimatesForFailureTimes" placeholder={data.firstReductionEstimatesForFailureTimes} />
                                                                        }
                                                                    </div>
                                                                    <div className="col-5">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                {(state.status !== "Get") && <div class="input-group">
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control"
                                                                                        id="percentageForFristGrade"
                                                                                        name="percentageForFristGrade"
                                                                                        onChange={(e) => {
                                                                                            setData({ ...data, percentageForFristGrade: parseInt(e.target.value) })
                                                                                        }}
                                                                                        value={data.percentageForFristGrade}
                                                                                    />
                                                                                    <div className="input-group-append mx-1">
                                                                                        <span className="fw-semibold fs-5">%</span>
                                                                                    </div>
                                                                                </div>}
                                                                                {((state.status === "Get")) &&
                                                                                    <input className={`form m-1 col-lg-10 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="percentageForFristGrade" id="percentageForFristGrade" placeholder={data.percentageForFristGrade} />
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="row">
                                                                    <div className="col-lg-2">
                                                                        <p className="fw-semibold fs-5" htmlFor="secondReductionEstimatesForFailureTimes" >الثانية</p>
                                                                    </div>
                                                                    <div className="col-lg-5">
                                                                        {(state.status !== "Get") && <select className="form-select custom-select-start"
                                                                            aria-label="Select an option"
                                                                            id="secondReductionEstimatesForFailureTimes"
                                                                            value={data.secondReductionEstimatesForFailureTimes}
                                                                            onChange={handleSelectChangeSeconedReduction}
                                                                        >
                                                                            <option selected disabled> </option>
                                                                            {allGrades.map((grade) => (
                                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                                            ))}
                                                                        </select>}
                                                                        {((state.status === "Get")) &&
                                                                            <input className={`form m-1 col-lg-10 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="secondReductionEstimatesForFailureTimes" id="secondReductionEstimatesForFailureTimes" placeholder={data.secondReductionEstimatesForFailureTimes} />
                                                                        }
                                                                    </div>
                                                                    <div className="col-5">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                {(state.status !== "Get") && <div class="input-group">
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control"
                                                                                        id="percentageForSecondGrade"
                                                                                        name="percentageForSecondGrade"
                                                                                        onChange={(e) => {
                                                                                            setData({ ...data, percentageForSecondGrade: parseInt(e.target.value) })
                                                                                        }}
                                                                                        value={data.percentageForSecondGrade}
                                                                                    />
                                                                                    <div className="input-group-append mx-1">
                                                                                        <span className="fw-semibold fs-5">%</span>
                                                                                    </div>
                                                                                </div>}
                                                                                {((state.status === "Get")) &&
                                                                                    <input className={`form m-1 col-lg-10 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="percentageForSecondGrade" id="percentageForSecondGrade" placeholder={data.percentageForSecondGrade} />
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <span className="fw-semibold fs-5  " htmlFor="thirdReductionEstimatesForFailureTimes">الثالثة فاكثر</span>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        {(state.status !== "Get") && <select className="form-select custom-select-start"
                                                                            aria-label="Select an option"
                                                                            name="thirdReductionEstimatesForFailureTimes"
                                                                            id="thirdReductionEstimatesForFailureTimes"
                                                                            value={data.thirdReductionEstimatesForFailureTimes}
                                                                            onChange={handleSelectChangeThirdReduction}
                                                                        >
                                                                            <option selected disabled> </option>
                                                                            {allGrades.map((grade) => (
                                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                                            ))}
                                                                        </select>}
                                                                        {((state.status === "Get")) &&
                                                                            <input className={`form m-1 mt-2 col-lg-10 ${styles['bold-and-large-text-input']}`} disabled type="text" name="thirdReductionEstimatesForFailureTimes" id="thirdReductionEstimatesForFailureTimes" placeholder={data.thirdReductionEstimatesForFailureTimes} />
                                                                        }
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                {(state.status !== "Get") && <div class="input-group">
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control"
                                                                                        id="percentageForThirdGrade"
                                                                                        name="percentageForThirdGrade"
                                                                                        onChange={(e) => {
                                                                                            setData({ ...data, percentageForThirdGrade: parseInt(e.target.value) })
                                                                                        }}
                                                                                        value={data.percentageForThirdGrade}
                                                                                    />
                                                                                    <div className="input-group-append mx-1">
                                                                                        <span className="fw-semibold fs-5">%</span>
                                                                                    </div>
                                                                                </div>}
                                                                                {((state.status === "Get")) &&
                                                                                    <input className={`form m-1 mt-2 col-lg-10 ${styles['bold-and-large-text-input']}`} disabled type="text" name="percentageForThirdGrade" id="percentageForThirdGrade" placeholder={data.percentageForThirdGrade} />
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 ">
                                                <div className="form-check form-check-inline d-flex ">
                                                    {(state.status !== "Get") && <input className="form-check-input mt-2 fs-5"
                                                        type="checkbox" id="exceptionToDiscountEstimates"
                                                        name="exceptionToDiscountEstimates"
                                                        checked={data.exceptionToDiscountEstimates}
                                                        value={true}
                                                        onChange={(e) => {
                                                            setData({ ...data, exceptionToDiscountEstimates: e.target.checked })
                                                        }} />}
                                                    {(state.status == "Get") && <div class="form-check form-switch">
                                                        <input className="form-check-input mt-2 fs-5" type="checkbox"
                                                            id="exceptionToDiscountEstimates"
                                                            disabled
                                                            checked={data.exceptionToDiscountEstimates === true} />
                                                    </div>}
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="exceptionToDiscountEstimates"> استثناء من تقديرات التخفيض تقدير fc</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-check form-check-inline d-flex ">
                                                    {(state.status !== "Get") && <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculatingTheBudgetEstimateFromTheReductionEstimates" name="calculatingTheBudgetEstimateFromTheReductionEstimates" checked={data.calculatingTheBudgetEstimateFromTheReductionEstimates} value={true} onChange={(e) => {
                                                        setData({ ...data, calculatingTheBudgetEstimateFromTheReductionEstimates: e.target.checked })
                                                    }} />}
                                                    {(state.status == "Get") && <div class="form-check form-switch">
                                                        <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculatingTheBudgetEstimateFromTheReductionEstimates" disabled checked={data.calculatingTheBudgetEstimateFromTheReductionEstimates === true} />
                                                    </div>}
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="calculatingTheBudgetEstimateFromTheReductionEstimates">احتساب تقدير الموازنة من تقديرات التخفيض</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="theGrade">
                                                        الدرجة
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select custom-select-start" id="theGrade" name="theGrade" onChange={(e) => {
                                                            setData({ ...data, theGrade: parseInt(e.target.value) })
                                                        }}>
                                                            <option selected disabled></option>
                                                            <option value={0} selected={data.theGrade === 0}>تقريب</option>
                                                            <option value={1} selected={data.theGrade === 1}>جبر</option>
                                                            <option value={2} selected={data.theGrade === 2}>تقريب غير عادي</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="theGrade" id="theGrade" placeholder={Options.theGrade[data.theGrade]} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    {(state.status !== "Get") && <input className="form-check-input fs-5" type="checkbox" id="placementOfStudentsInTheCourse" name="placementOfStudentsInTheCourse" checked={data.placementOfStudentsInTheCourse} value={true} onChange={(e) => {
                                                        setData({ ...data, placementOfStudentsInTheCourse: e.target.checked })
                                                    }} />}
                                                    {(state.status == "Get") && <div class="form-check form-switch">
                                                        <input className="form-check-input mt-2 fs-5" type="checkbox" id="placementOfStudentsInTheCourse" disabled checked={data.placementOfStudentsInTheCourse === true} />
                                                    </div>}
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="placementOfStudentsInTheCourse">تنسيب الطلاب في المقرر</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="estimatingTheTheoreticalFailure">
                                                        تقدير الراسب النظري
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start"
                                                            id="estimatingTheTheoreticalFailure"
                                                            name="estimatingTheTheoreticalFailure"
                                                            value={data.estimatingTheTheoreticalFailure}
                                                            onChange={handleSelectChangeEstimatingTheTheoreticalFailure}
                                                        >
                                                            <option selected disabled> </option>
                                                            {allGrades.map((grade) => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="estimatingTheTheoreticalFailure" id="estimatingTheTheoreticalFailure" placeholder={data.estimatingTheTheoreticalFailure} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className={`col-lg-4 fw-semibold fs-5 col-form-label ${styles.label}`} htmlFor="failureEstimatesInTheLists" style={{ color: "red" }}>
                                                        تقديرات الرسوب باللائحة
                                                        <span className={styles.hoverText}>تقديرات الرسوب المتوقعة هي (ر,غ,م,مح,غ,NP,رن)</span>
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select
                                                            className="form-select custom-select-start fs-5"
                                                            id="failureEstimatesInTheLists"
                                                            multiple
                                                            onChange={handleSelectChangeFailureEstimatesInTheLists}
                                                        >
                                                            {allGrades.map(grade => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="failureEstimatesInTheLists" id="failureEstimatesInTheLists" placeholder={data.failureEstimatesInTheLists} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="roundingDegree">
                                                        تقريب درجة الرسوب النظري
                                                    </label>
                                                    <div className="col-lg-6 ">
                                                        {(state.status !== "Get") && <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="roundingDegree" id="detailsOfTheoreticalFailingGrades" checked={data.detailsOfTheoreticalFailingGrades === true} value={true} onChange={(e) => {
                                                                    setData({ ...data, detailsOfTheoreticalFailingGrades: true })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="detailsOfTheoreticalFailingGrades">تقريب الدرجة</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="roundingDegree" id="detailsOfTheoreticalFailingGrades" checked={data.detailsOfTheoreticalFailingGrades === false} value={false} onChange={(e) => {
                                                                    setData({ ...data, detailsOfTheoreticalFailingGrades: false })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="notRoundingDegree">عدم تقريب الدرجة</label>
                                                            </div>
                                                        </div>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="detailsOfTheoreticalFailingGrades" id="detailsOfTheoreticalFailingGrades" placeholder={data.detailsOfTheoreticalFailingGrades === true ? "تقريب الدرجة " : "عدم تقريب الدرجة"} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="detailsOfTheoreticalFailingGradesNav">
                                                        تفاصيل درجات الرسوب النظري
                                                    </label>
                                                    <div className="col-lg-4">
                                                        {(state.status !== "Get") && <select className="form-select custom-select-start fs-5"
                                                            id="detailsOfTheoreticalFailingGradesNav"
                                                            onChange={handleSelectChangeOfTheoreticalFailingGradesNav}
                                                            multiple>
                                                            {gradesDetails.map(detail => (
                                                                <option key={detail.id} value={detail.id}>
                                                                    {detail.theDetails}
                                                                </option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="detailsOfTheoreticalFailingGradesNav" id="detailsOfTheoreticalFailingGradesNav" placeholder={data.detailsOfTheoreticalFailingGradesNav} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            {selectedGrades.length > 0 &&
                                                <div className="mt-4 col-xl-3">
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-lg-4 fw-semibold fs-5 col-form-label">
                                                            {selectedGrades.length > 0 ? 'الدرجة المحددة:' : ''}
                                                        </label>
                                                        <div className="col-lg-4">
                                                            <input
                                                                type="number"
                                                                className="form-control fs-5"
                                                                value={gradeInput}
                                                                onChange={handleInputChange}
                                                                disabled={state.status === "Get"}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="anyDetails">
                                                        اختيار تفاصيل الرسوب النظري بناء علي
                                                    </label>
                                                    <div class="col-lg-6">
                                                        {state.status !== 'Get' && (
                                                            <div className="form-group mb-3 row">
                                                                <div className="col-lg-4">
                                                                    <input
                                                                        className="form-check-input m-1 mt-2"
                                                                        type="radio"
                                                                        id="allDetails"
                                                                        name="chooseTheDetailsOfTheoreticalFailureBasedOn"
                                                                        value={0}
                                                                        selected={data.chooseTheDetailsOfTheoreticalFailureBasedOn === 0}
                                                                        onChange={(e) => setData({ ...data, chooseTheDetailsOfTheoreticalFailureBasedOn: e.target.value })}
                                                                    />
                                                                    <label className="form-check-label fw-semibold fs-5" htmlFor="allDetails">
                                                                        كل التفاصيل
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <input
                                                                        className="form-check-input m-1 mt-2"
                                                                        type="radio"
                                                                        id="anyDetails"
                                                                        name="chooseTheDetailsOfTheoreticalFailureBasedOn"
                                                                        value={1}
                                                                        selected={data.chooseTheDetailsOfTheoreticalFailureBasedOn === 1}
                                                                        onChange={(e) => setData({ ...data, chooseTheDetailsOfTheoreticalFailureBasedOn: e.target.value })}
                                                                    />
                                                                    <label className="form-check-label fw-semibold fs-5" htmlFor="anyDetails">
                                                                        ايا من التفاصيل
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <input
                                                                        className="form-check-input m-1 mt-2"
                                                                        type="radio"
                                                                        id="sumDetails"
                                                                        name="chooseTheDetailsOfTheoreticalFailureBasedOn"
                                                                        value={2}
                                                                        selected={data.chooseTheDetailsOfTheoreticalFailureBasedOn === 2}
                                                                        onChange={(e) => setData({ ...data, chooseTheDetailsOfTheoreticalFailureBasedOn: e.target.value })}
                                                                    />
                                                                    <label className="form-check-label fw-semibold fs-5" htmlFor="sumDetails">
                                                                        مجموع التفاصيل
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {state.status === 'Get' && (
                                                            <input
                                                                className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`}
                                                                disabled
                                                                type="text"
                                                                name="chooseTheDetailsOfTheoreticalFailureBasedOn"
                                                                id="chooseTheDetailsOfTheoreticalFailureBasedOn"
                                                                placeholder={Options.chooseTheDetailsOfTheoreticalFailureBasedOn[data.chooseTheDetailsOfTheoreticalFailureBasedOn]}
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="fw-semibold fs-5" style={{ color: "red" }}>لحساب تقدير غائب فى التقدير النهائى للطالب عند غياب الطالب فى نهاية الفصل يجب اختيار تفاصيل الحروف الاسثنائية نهاية الفصل</p>
                                            <br />


                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-1 fw-semibold fs-5 col-form-label" htmlFor="calculateEstimate">
                                                        حساب تقدير
                                                    </label>
                                                    <div className="col-lg-1">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="calculateEstimate" name="calculateEstimate" onChange={(e) => setData({ ...data, calculateEstimate: e.target.value === "0" ? 0 : 1 })}>
                                                            <option selected disabled>  </option>
                                                            <option value={0} selected={data.calculateEstimate === 0}>غائب   </option>
                                                            <option value={1} selected={data.calculateEstimate === 1}>راسب   </option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form col-lg-10 m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="calculateEstimate" id="calculateEstimate" placeholder={data.calculateEstimate === 0 ? "غائب" : "راسب"} />
                                                        }
                                                    </div>
                                                    <label className="col-lg-3 fw-semibold fs-5 col-form-label" htmlFor="aCaseOfAbsenceInTheDetailedGrades">
                                                        فى حالة غياب فى الدرجات التفصيلية
                                                    </label>

                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select
                                                            className="form-select custom-select-start fs-5" aria-label="Select options"
                                                            id="aCaseOfAbsenceInTheDetailedGrades"
                                                            multiple
                                                            name="aCaseOfAbsenceInTheDetailedGrades"
                                                            onChange={handleSelectChangeACaseOfAbsenceInTheDetailedGrades}
                                                        >
                                                            {gradesDetails.map(detail => (
                                                                <option key={detail.id} value={detail.id}>
                                                                    {detail.theDetails}
                                                                </option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="aCaseOfAbsenceInTheDetailedGrades" id="aCaseOfAbsenceInTheDetailedGrades" placeholder={data.aCaseOfAbsenceInTheDetailedGrades} />
                                                        }
                                                    </div>

                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="allOrNO" id="allDetailOrNo" checked={data.allDetailOrNo === true} value={true} onChange={(e) => {
                                                                    setData({ ...data, allDetailOrNo: true })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="all">كلها</label>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="allOrNO" id="allDetailOrNo" checked={data.allDetailOrNo === false} value={false} onChange={(e) => {
                                                                    setData({ ...data, allDetailOrNo: false })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="any">ايا منها</label>
                                                            </div>
                                                        </div>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 col-lg-8
                                                             mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="allDetailOrNo" id="allDetailOrNo" placeholder={data.allDetailOrNo === true ? "كلها" : "ايا منها"} />
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="detailsOfExceptionalLetters">
                                                        تفاصيل الحروف الاستثانئية
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select custom-select-start fs-5"
                                                            id="detailsOfExceptionalLetters"
                                                            multiple name="detailsOfExceptionalLetters"
                                                            onChange={handleSelectChangeDetailsOfExceptionalLetters}
                                                        >
                                                            {gradesDetails.map(detail => (
                                                                <option key={detail.id} value={detail.id}>
                                                                    {detail.theDetails}
                                                                </option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="detailsOfExceptionalLetters" id="detailsOfExceptionalLetters" placeholder={data.detailsOfExceptionalLetters} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="addingExciptionLetters">
                                                        اضافه درجات استثانئية
                                                    </label>
                                                    <div class="col-lg-6">
                                                        {(state.status !== "Get") && <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="addingExciptionLetters" id="yesAddingExciptionLetters" checked={data.addingExciptionLetters === true} value={true} onChange={(e) => {
                                                                    setData({ ...data, addingExciptionLetters: true })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="yesAddingExciptionLetters">اضافة درجة</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="addingExciptionLetters" id="notAddingExciptionLetters" checked={data.addingExciptionLetters === false} value={false} onChange={(e) => {
                                                                    setData({ ...data, addingExciptionLetters: false })
                                                                }} />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="notAddingExciptionLetters">عدم اضافة درجة</label>
                                                            </div>
                                                        </div>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="addingExciptionLetters" id="addingExciptionLetters" placeholder={data.addingExciptionLetters === true ? "اضافة درجة " : "عدم اضافة درجة"} />
                                                        }

                                                    </div>
                                                </div>
                                            </div>

                                            {/* 
                                            harbotha b3den  */}
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="exceptionalLetterGrades">
                                                        تقديرات الحرف الاستثنائية
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && (
                                                            <select className="form-select fs-5 custom-select-start" id="exceptionalLetterGrades" onChange={handleSelectChange} value={selectedValue}>
                                                                <option disabled></option>
                                                                {allGrades.map((grade) => (
                                                                    <option key={grade.id} value={grade.id}>
                                                                        {grade.theGrade}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        )}

                                                        {(state.status === "Get") && (
                                                            <div>
                                                                {sections.map((section, index) => (
                                                                    <input
                                                                        className={`form m-1  mt-2 ${styles['bold-and-large-text-input']}`} disabled
                                                                        key={index}
                                                                        type="text"
                                                                        value={`${section.value}  : ${data.exceptionalLetterGrades[index]?.value || ''}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="col-md-1">
                                                        {(state.status !== "Get") && (
                                                            <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={handlePlusIconClick}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-plus fw-bold fs-5"></i>
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {sections.map((section) => (
                                                        <div className="col-md-4" key={section.id}>
                                                            {(state.status !== "Get") && (
                                                                <div className="form-group row">
                                                                    <div className="col-lg-5">
                                                                        <div className="input-group" style={{ marginBottom: state.status === "Get" ? "0" : "1rem" }}>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control mt-2 "
                                                                                style={{ textAlign: "center" }}
                                                                                value={section.value}
                                                                                disabled
                                                                            />
                                                                            <input
                                                                                type="text"
                                                                                className="form-control mt-2"
                                                                                placeholder="ادخل قيمة"
                                                                                value={customValues[section.id] || ""}
                                                                                onChange={(event) => handleCustomInputChange(event, section.id)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="input-group-append mt-2" style={{ display: "flex", cursor: "pointer" }} onClick={() => handleRemoveSection(section.id)}>
                                                                            <span className="input-group-text">
                                                                                <i className="fa-regular fa-xmark fw-bold fs-5"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>


                                            {/* <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="exceptionalLetterGrades">
                                                        تقديرات الحرف الاستثنائية
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && (
                                                            <select className="form-select fs-5 custom-select-start" id="exceptionalLetterGrades" onChange={handleSelectChange} value={selectedValue}>
                                                                <option selected disabled>  </option>
                                                                <option value="أ">أ</option>
                                                                <option value="ب">ب</option>
                                                            </select>
                                                        )}

                                                        {(state.status === "Get") && (
                                                            <div>
                                                                {data.exceptionalLetterGrades.map((grade, index) => (
                                                                    <input
                                                                        className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled
                                                                        key={index}
                                                                        type="text"
                                                                        value={grade.value}
                                                                    />
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="col-md-1">
                                                        {(state.status !== "Get") && (
                                                            <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={handlePlusIconClick}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-plus fw-bold fs-5"></i>
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {sections.map((section) => (
                                                        <div className="col-md-4" key={section.id}>
                                                            {(state.status !== "Get") && (
                                                                <div className="form-group row">
                                                                    <div className="col-lg-5">
                                                                        <div className="input-group" style={{ marginBottom: state.status === "Get" ? "0" : "1rem" }}>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control mt-2 "
                                                                                style={{ textAlign: "center" }}
                                                                                value={section.value}
                                                                                disabled
                                                                            />
                                                                            <input
                                                                                type="text"
                                                                                className="form-control mt-2"
                                                                                placeholder="ادخل قيمة"
                                                                                value={customValues[section.id] || ""}
                                                                                onChange={(event) => handleCustomInputChange(event, section.id)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="input-group-append mt-2" style={{ display: "flex", cursor: "pointer" }} onClick={() => handleRemoveSection(section.id)}>
                                                                            <span className="input-group-text">
                                                                                <i className="fa-regular fa-xmark fw-bold fs-5"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div> */}
                                            {/* شششششششششششششششششششششششششش */}

                                            {/* 
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="exceptionalLetterGrades">
                                                        تقديرات الحرف الاستثنائية
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="exceptionalLetterGrades" onChange={handleSelectChange} value={selectedValue}>
                                                            <option selected disabled>  </option>
                                                            <option value="أ">أ</option>
                                                            <option value="ب">ب</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={handlePlusIconClick}>
                                                            <span className="input-group-text">
                                                                <i className="fa-solid fa-plus fw-bold fs-5"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {sections.map((section) => (
                                                        <div className="col-md-2" key={section.id}>
                                                            <span className={`border ${styles.border}`}>
                                                                <div className="form-group row">
                                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label">
                                                                        {section.selectedValue}
                                                                    </label>
                                                                    <div className="col-lg-4">
                                                                        <div className="input-group">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                style={{ textAlign: "center" }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={() => handleRemoveSection(section.id)}>
                                                                            <span className="input-group-text">
                                                                                <i className="fa-regular fa-xmark fw-bold fs-5"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div> */}
                                            {/* //////////////////////////////////////// */}
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="estimatesNotDefinedInTheLists">
                                                        تقديرات غير معرفة باللائحة
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select custom-select-start fs-5" aria-label="Select options" id="estimatesNotDefinedInTheLists" multiple name="estimatesNotDefinedInTheLists"
                                                            onChange={handleSelectChangeEstimatesNotDefinedInTheLists}
                                                        >
                                                            {allGrades.map(grade => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="estimatesNotDefinedInTheLists" id="estimatesNotDefinedInTheLists" placeholder={data.estimatesNotDefinedInTheLists} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="successGrades">
                                                        تقديرات النجاح (لمواد النجاح والرسوب)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="successGrades" name="successGrades" required onChange={(e) => {
                                                            setData({ ...data, successGrades: e.target.value === "P" ? 0 : 1 })
                                                        }}>
                                                            <option selected disabled> </option>
                                                            <option value="P" selected={data.successGrades === 0}>P</option>
                                                            <option value="S" selected={data.successGrades === 1}>S</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="successGrades" id="successGrades" placeholder={data.successGrades === 0 ? "P" : "S"} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="failingGrades">
                                                        تقديرات الرسوب (لمواد النجاح والرسوب)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start" id="failingGrades" name="failingGrades" value={data.failingGrades} onChange={(e) => { setData({ ...data, failingGrades: parseInt(e.target.value) }) }}>
                                                            <option selected disabled> </option>
                                                            <option value={0} selected={data.failingGrades === 0}>NP</option>
                                                            <option value={1} selected={data.failingGrades === 1}>U</option>
                                                            <option value={2} selected={data.failingGrades === 2}>F</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input style={{ width: '130%' }} className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="failingGrades" id="failingGrades" placeholder={Options.failingGrades[data.failingGrades]} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="estimateDeprivationBeforeTheExamId">
                                                        تقدير الحرمان قبل الامتحان
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start"
                                                            id="estimateDeprivationBeforeTheExamId"
                                                            name="estimateDeprivationBeforeTheExamId"
                                                            value={data.estimateDeprivationBeforeTheExamId}
                                                            onChange={handleSelectChangeEstimateDeprivationBeforeTheExamId}
                                                        >
                                                            <option selected disabled> </option>
                                                            {allGrades.map((grade) => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="estimateDeprivationBeforeTheExamId" id="estimateDeprivationBeforeTheExamId" placeholder={data.estimateDeprivationBeforeTheExamId} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="estimateDeprivationAfterTheExamId">
                                                        تقدير الحرمان بعد الامتحان
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select fs-5 custom-select-start"
                                                            id="estimateDeprivationAfterTheExamId"
                                                            name="estimateDeprivationAfterTheExamId"
                                                            value={data.estimateDeprivationAfterTheExamId}
                                                            onChange={handleSelectChangeEstimateDeprivationAfterTheExamId}
                                                        >
                                                            <option selected disabled> </option>
                                                            {allGrades.map((grade) => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="estimateDeprivationAfterTheExamId" id="estimateDeprivationAfterTheExamId" placeholder={data.estimateDeprivationAfterTheExamId} />
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="aSuccessRatingDoesNotAddHours">
                                                        تقدير نجاح لا يضاف للساعات ولا للمعدل
                                                    </label>
                                                    <div className="col-lg-2">
                                                        {(state.status !== "Get") && <select className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="aSuccessRatingDoesNotAddHours"
                                                            name="aSuccessRatingDoesNotAddHours"
                                                            multiple

                                                            onChange={handleSelectChangeASuccessRatingDoesNotAddHours}
                                                        >

                                                            {allGrades.map(grade => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="aSuccessRatingDoesNotAddHours" id="aSuccessRatingDoesNotAddHours" placeholder={data.aSuccessRatingDoesNotAddHours} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row justify-content-center text-center">


                                                <div className="col-md-12">
                                                    {(state.status !== "Get") && <button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}`} type="submit">
                                                        <i className="fa-regular fa-bookmark"></i> حفظ
                                                    </button>}
                                                    {(state.status !== "Get") && <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={() => { dispatch({ type: "Get" }) }}>
                                                        <i className="fa-solid fa-lock"></i> غلق
                                                    </button>}
                                                    {
                                                        (state.status !== "Add" && state.status === "Get") &&
                                                        <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={() => { dispatch({ type: "Update" }) }}>
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

ControlPage.displayName = "ControlPage";

ControlPage.propTypes = {};

export { ControlPage };
