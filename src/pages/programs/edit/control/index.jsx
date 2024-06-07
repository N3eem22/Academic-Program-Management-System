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
        err: [],
        validationErrors: {}
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    var Options = {
        theGrade: ["تقريب", "جبر", "عادي"],
        failingGrades: ["NP", "U", "F"],
        chooseTheDetailsOfTheoreticalFailureBasedOn: ["كل التفاصيل", "ايا من التفاصيل", "مجموع التفاصيل"]
    }

    const [GetData, setGetData] = useState([]);
    const [data, setData] = useState({

        programId: 1002,
        subtractFromTheDiscountRate: "",
        exceptionToDiscountEstimates: false,
        firstReductionEstimatesForFailureTimes: "",
        percentageForFristGrade: "",
        secondReductionEstimatesForFailureTimes: "",
        percentageForSecondGrade: "",
        thirdReductionEstimatesForFailureTimes: "",
        percentageForThirdGrade: "",
        calculatingTheBudgetEstimateFromTheReductionEstimates: false,
        theGrade: "",
        placementOfStudentsInTheCourse: false,
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
        gradeThatSelected:"",
       
        err: [],
        validationErrors: {}
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
                    estimateDeprivationBeforeTheExamId: resp.data.estimateDeprivationBeforeTheExam,
                    estimateDeprivationAfterTheExamId: resp.data.estimateDeprivationAfterTheExam,
                    aSuccessRatingDoesNotAddHours: resp.data.aSuccessRatingDoesNotAddHours || prevData.aSuccessRatingDoesNotAddHours,
                    


                });
                setGetData(resp.data);
                console.log("reeee", resp.data);
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
                })


                console.log('Response:', res);
                if (res.status === 200) {
                    dispatch({ type: 'Get' });
                    const getRes = await axios.get(`https://localhost:7095/api/control/${1002}`);
                    const updatedData = getRes.data;
                    setData({
                        ...data,
                        subtractFromTheDiscountRate: updatedData.subtractFromTheDiscountRate,
                        exceptionToDiscountEstimates: updatedData.exceptionToDiscountEstimates,
                        firstReductionEstimatesForFailureTimes: updatedData.firstReductionEstimatesForFailureTimes,
                        percentageForFristGrade: updatedData.percentageForFristGrade,
                        secondReductionEstimatesForFailureTimes: updatedData.secondReductionEstimatesForFailureTimes,
                        percentageForSecondGrade: updatedData.percentageForSecondGrade,
                        thirdReductionEstimatesForFailureTimes: updatedData.thirdReductionEstimatesForFailureTimes,
                        percentageForThirdGrade: updatedData.percentageForThirdGrade,
                        calculatingTheBudgetEstimateFromTheReductionEstimates: updatedData.calculatingTheBudgetEstimateFromTheReductionEstimates,
                        theGrade: updatedData.theGrade,
                        placementOfStudentsInTheCourse: updatedData.placementOfStudentsInTheCourse,
                        estimatingTheTheoreticalFailure: updatedData.estimatingTheTheoreticalFailure,
                        failureEstimatesInTheLists: updatedData.failureEstimatesInTheLists,
                        detailsOfTheoreticalFailingGrades: updatedData.detailsOfTheoreticalFailingGrades,
                        detailsOfTheoreticalFailingGradesNav: updatedData.detailsOfTheoreticalFailingGradesNav,
                        chooseTheDetailsOfTheoreticalFailureBasedOn: updatedData.chooseTheDetailsOfTheoreticalFailureBasedOn,
                        calculateEstimate: updatedData.calculateEstimate,
                        aCaseOfAbsenceInTheDetailedGrades: updatedData.aCaseOfAbsenceInTheDetailedGrades,
                        allDetailOrNo: updatedData.allDetailOrNo,
                        detailsOfExceptionalLetters: updatedData.detailsOfExceptionalLetters,
                        addingExciptionLetters: updatedData.addingExciptionLetters,
                        exceptionalLetterGrades: updatedData.exceptionalLetterGrades,
                        estimatesNotDefinedInTheLists: updatedData.estimatesNotDefinedInTheLists,
                        successGrades: updatedData.successGrades,
                        failingGrades: updatedData.failingGrades,
                        estimateDeprivationBeforeTheExamId: updatedData.estimateDeprivationBeforeTheExam,
                        estimateDeprivationAfterTheExamId: updatedData.estimateDeprivationAfterTheExam,
                        aSuccessRatingDoesNotAddHours: updatedData.aSuccessRatingDoesNotAddHours,
                        gradeThatSelected: gradeInput,
                    });
                }
            }
            setData((prevState) => ({ ...prevState, err: [] }));
        } catch (err) {
            setData({
                ...data,
                err: [{ message: err.response?.data?.message || err.message }],
            });
        }
    }
    const validateInputs = () => {
        const errors = {};
        if (!data.subtractFromTheDiscountRate) errors.subtractFromTheDiscountRate = "يجب عليك ادخال هذه القيمه";
        if (!data.firstReductionEstimatesForFailureTimes) errors.firstReductionEstimatesForFailureTimes = "يجب عليك ادخال هذه القيمه";
        if (!data.percentageForFristGrade) errors.percentageForFristGrade = "يجب عليك ادخال هذه القيمه";
        if (!data.secondReductionEstimatesForFailureTimes) errors.secondReductionEstimatesForFailureTimes = "يجب عليك ادخال هذه القيمه";
        if (!data.percentageForSecondGrade) errors.percentageForSecondGrade = "يجب عليك ادخال هذه القيمه";
        if (!data.thirdReductionEstimatesForFailureTimes) errors.thirdReductionEstimatesForFailureTimes = "يجب عليك ادخال هذه القيمه";
        if (!data.percentageForThirdGrade) errors.percentageForThirdGrade = "يجب عليك ادخال هذه القيمه";
        if (!data.theGrade) errors.theGrade = "يجب عليك ادخال هذه القيمه";
        if (!data.estimateDeprivationBeforeTheExamId) errors.estimateDeprivationBeforeTheExamId = "يجب عليك ادخال هذه القيمه";
        if (!data.estimateDeprivationAfterTheExamId) errors.estimateDeprivationAfterTheExamId = "يجب عليك ادخال هذه القيمه";
    
        return errors;
    }
    function submit(e) {
        e.preventDefault();
        const validationErrors = validateInputs();
        if (Object.keys(validationErrors).length > 0) {
            setData((prevState) => ({ ...prevState, validationErrors }));
            return;
        }
        sendDataToApi();
    }
    const [allGrades, setAllGrades] = useState([]);
    const [gradesDetails, setGradesDetails] = useState([]);

    useEffect(() => {
        const selectedGrade = allGrades.find(grade => data.firstReductionEstimatesForFailureTimes === grade.theGrade);
        if (selectedGrade) {
            setData(prevGraduation => ({
                ...prevGraduation,
                firstReductionEstimatesForFailureTimes: parseInt(selectedGrade.id)
            }));
        }
    }, [data.firstReductionEstimatesForFailureTimes, allGrades]);
    useEffect(() => {
        const selectedGrade = allGrades.find(grade => data.secondReductionEstimatesForFailureTimes === grade.theGrade);
        if (selectedGrade) {
            setData(prevGraduation => ({
                ...prevGraduation,
                secondReductionEstimatesForFailureTimes: parseInt(selectedGrade.id)
            }));
        }
    }, [data.secondReductionEstimatesForFailureTimes, allGrades]);
    useEffect(() => {
        const selectedGrade = allGrades.find(grade => data.thirdReductionEstimatesForFailureTimes === grade.theGrade);
        if (selectedGrade) {
            setData(prevGraduation => ({
                ...prevGraduation,
                thirdReductionEstimatesForFailureTimes: parseInt(selectedGrade.id)
            }));
        }
    }, [data.thirdReductionEstimatesForFailureTimes, allGrades]);
    useEffect(() => {
        const selectedGrade = allGrades.find(grade => data.estimatingTheTheoreticalFailure === grade.theGrade);
        if (selectedGrade) {
            setData(prevGraduation => ({
                ...prevGraduation,
                estimatingTheTheoreticalFailure: parseInt(selectedGrade.id)
            }));
        }
    }, [data.estimatingTheTheoreticalFailure, allGrades]);
    useEffect(() => {
        const selectedGrade = allGrades.find(grade => data.estimateDeprivationBeforeTheExamId === grade.theGrade);
        if (selectedGrade) {
            setData(prevGraduation => ({
                ...prevGraduation,
                estimateDeprivationBeforeTheExamId: parseInt(selectedGrade.id)
            }));
        }
    }, [data.estimateDeprivationBeforeTheExamId, allGrades]);
    useEffect(() => {
        const selectedGrade = allGrades.find(grade => data.estimateDeprivationAfterTheExamId === grade.theGrade);
        if (selectedGrade) {
            setData(prevGraduation => ({
                ...prevGraduation,
                estimateDeprivationAfterTheExamId: parseInt(selectedGrade.id)
            }));
        }
    }, [data.estimateDeprivationAfterTheExamId, allGrades]);




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
                                value: "",
                            }
                        ]
                        : [
                            ...prevData.exceptionalLetterGrades,
                            {
                                gradeId: selectedGrade.id,
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







    useEffect(() => {
        axios.get(`https://localhost:7095/api/AllGrades?UniversityId=${1}`)
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
        axios.get(`https://localhost:7095/api/GradesDetails?UniversityId=${1}`)
            .then(response => {
                if (Array.isArray(response.data)) {
                    setGradesDetails(response.data);
                } else if (typeof response.data === 'object') {
                    setGradesDetails([response.data]);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
                if (state.status === "Update") {
                    const updatedGrades = response.data
                        .filter(grade => grade.id === parseInt(data.theGrade))
                        .map(grade => ({
                            gradeDetailId: grade.id,
                        }));
                    setData(prevState => ({
                        ...prevState,
                        detailsOfExceptionalLetters: updatedGrades
                    }));
                }


            })
            .catch(error => {
                console.error('Error fetching grades details:', error);
            });



    }, [state.status, data.theGrade]);



    const handleSelectChangeFirstReduction = (e) => {
        const { value } = e.target;
        if (state.status === "Update" || state.status === "add") {
            setData(prevData => ({
                ...prevData,
                firstReductionEstimatesForFailureTimes: value
            }));
        }
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
        }));
        setData(prevData => ({
            ...prevData,
            estimatesNotDefinedInTheLists: selectedOptions
        }));
    };
    const handleSelectChangeACaseOfAbsenceInTheDetailedGrades = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => ({
            gradeDetailId: option.value,
        }));
        setData(prevData => ({
            ...prevData,
            aCaseOfAbsenceInTheDetailedGrades: selectedOptions
        }));
    };
    const handleSelectChangeDetailsOfExceptionalLetters = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => ({
            gradeDetailId: option.value,
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

    useEffect(() => {
        if (state.status === "Get" && GetData.detailsOfTheoreticalFailingGradesNav) {
            const selectedGrades = GetData.detailsOfTheoreticalFailingGradesNav.map(grade => grade.gradeDetailId);
            setSelectedGrades(selectedGrades);
            setGradeInput(GetData.detailsOfTheoreticalFailingGradesNav[0]?.value || ""); // Set grade input to the first grade's value
        }
    }, [state.status, GetData]);

    const handleSelectChangeEstimateDeprivationBeforeTheExamId = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            estimateDeprivationBeforeTheExam: value
        }));
    };
    const handleSelectChangeEstimateDeprivationAfterTheExamId = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            estimateDeprivationAfterTheExam: value
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

    function handleClose() {
        dispatch({ type: 'Get' });
        setData((prevState) => ({ ...prevState, err: [], validationErrors: {} })); // Clear errors on close
    }
    const handleInputChangeVali = (e) => {
        const { name, value } = e.target;
        const isValid = !isNaN(value) && parseInt(value) >= 0;

        setData(prevState => ({
            ...prevState,
            [name]: value,
            validationErrors: {
                ...prevState.validationErrors,
                [name]: isValid ? '' : 'القيمة غير صالحة'
            }
        }));
    }

    const handleInputFocus = (e) => {
        const { name } = e.target;

        setData(prevState => ({
            ...prevState,
            validationErrors: {
                ...prevState.validationErrors,
                [name]: ''
            }
        }));
    }



    return (
        <Fragment>
            <div className="container " dir="rtl">
                <div className="row mt-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <h2 style={{ color: "red" }}        >      برنامج :  التربيه الفنيه
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
                                                                    handleInputChangeVali(e)
                                                                }}
                                                                onFocus={handleInputFocus}
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
                                                        {data.validationErrors.subtractFromTheDiscountRate && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.subtractFromTheDiscountRate}
                                                            </div>
                                                        )}
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
                                                                        {(state.status !== "Get") && (
                                                                            <>
                                                                                <select className="form-select custom-select-start"
                                                                                    aria-label="Select an option"
                                                                                    id="firstReductionEstimatesForFailureTimes"
                                                                                    value={data.firstReductionEstimatesForFailureTimes}
                                                                                    onChange={(e) => {
                                                                                        handleSelectChangeFirstReduction(e);
                                                                                        handleInputChangeVali(e); // Call handleInputChange here
                                                                                    }}
                                                                                    onFocus={handleInputFocus}
                                                                                >
                                                                                    <option selected disabled> </option>
                                                                                    {allGrades.map((grade) => (
                                                                                        <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                                                    ))}
                                                                                </select>
                                                                                {data.validationErrors.firstReductionEstimatesForFailureTimes && (
                                                                                    <div className="text-danger">
                                                                                        {data.validationErrors.firstReductionEstimatesForFailureTimes}
                                                                                    </div>
                                                                                )}
                                                                            </>
                                                                        )}
                                                                        {(state.status === "Get") && (
                                                                            <input className={`form m-1 col-lg-10 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="firstReductionEstimatesForFailureTimes" id="firstReductionEstimatesForFailureTimes" placeholder={GetData.firstReductionEstimatesForFailureTimes} />
                                                                        )}
                                                                    </div>
                                                                    <div className="col-5">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                {(state.status !== "Get") && (
                                                                                    <>
                                                                                        <div className="input-group">
                                                                                            <input
                                                                                                type="number"
                                                                                                className="form-control"
                                                                                                id="percentageForFristGrade"
                                                                                                name="percentageForFristGrade"
                                                                                                onChange={(e) => {
                                                                                                    handleInputChangeVali(e);
                                                                                                    setData({ ...data, percentageForFristGrade: parseInt(e.target.value) });
                                                                                                }}
                                                                                                onFocus={handleInputFocus}
                                                                                                value={data.percentageForFristGrade}
                                                                                            />
                                                                                            <div className="input-group-append mx-1">
                                                                                                <span className="fw-semibold fs-5">%</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        {data.validationErrors.percentageForFristGrade && (
                                                                                            <div className="text-danger">
                                                                                                {data.validationErrors.percentageForFristGrade}
                                                                                            </div>
                                                                                        )}
                                                                                    </>
                                                                                )}
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
                                                                            onChange={(e) => {
                                                                                handleSelectChangeSeconedReduction(e);
                                                                                handleInputChangeVali(e); // Call handleInputChange here
                                                                            }}
                                                                            onFocus={handleInputFocus}                                                                        >
                                                                            <option selected disabled> </option>
                                                                            {allGrades.map((grade) => (
                                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                                            ))}
                                                                        </select>}
                                                                        {((state.status === "Get")) &&
                                                                            <input className={`form m-1 col-lg-10 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="secondReductionEstimatesForFailureTimes" id="secondReductionEstimatesForFailureTimes" placeholder={GetData.secondReductionEstimatesForFailureTimes} />
                                                                        }
                                                                        {data.validationErrors.secondReductionEstimatesForFailureTimes && (
                                                                            <div className="text-danger">
                                                                                {data.validationErrors.secondReductionEstimatesForFailureTimes}
                                                                            </div>
                                                                        )}
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
                                                                                            handleInputChangeVali(e);
                                                                                            setData({ ...data, percentageForSecondGrade: parseInt(e.target.value) });
                                                                                        }}
                                                                                        value={data.percentageForSecondGrade}
                                                                                        onFocus={handleInputFocus} // Add onFocus here
                                                                                    />
                                                                                    <div className="input-group-append mx-1">
                                                                                        <span className="fw-semibold fs-5">%</span>
                                                                                    </div>
                                                                                </div>}
                                                                                {((state.status === "Get")) &&
                                                                                    <input className={`form m-1 col-lg-10 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="percentageForSecondGrade" id="percentageForSecondGrade" placeholder={data.percentageForSecondGrade} />
                                                                                }
                                                                                {data.validationErrors.percentageForSecondGrade && (
                                                                                    <div className="text-danger">
                                                                                        {data.validationErrors.percentageForSecondGrade}
                                                                                    </div>
                                                                                )}
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
                                                                            onChange={(e) => {
                                                                                handleSelectChangeThirdReduction(e);
                                                                                handleInputChangeVali(e); // Call handleInputChange here
                                                                            }}
                                                                            onFocus={handleInputFocus}
                                                                        >
                                                                            <option selected disabled> </option>
                                                                            {allGrades.map((grade) => (
                                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                                            ))}
                                                                        </select>}
                                                                        {((state.status === "Get")) &&
                                                                            <input className={`form m-1 mt-2 col-lg-10 ${styles['bold-and-large-text-input']}`} disabled type="text" name="thirdReductionEstimatesForFailureTimes" id="thirdReductionEstimatesForFailureTimes" placeholder={GetData.thirdReductionEstimatesForFailureTimes} />
                                                                        }
                                                                        {data.validationErrors.thirdReductionEstimatesForFailureTimes && (
                                                                            <div className="text-danger">
                                                                                {data.validationErrors.thirdReductionEstimatesForFailureTimes}
                                                                            </div>
                                                                        )}
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
                                                                                            handleInputChangeVali(e);
                                                                                            setData({ ...data, percentageForThirdGrade: parseInt(e.target.value) });
                                                                                        }}
                                                                                        value={data.percentageForThirdGrade}
                                                                                        onFocus={handleInputFocus}
                                                                                    />
                                                                                    <div className="input-group-append mx-1">
                                                                                        <span className="fw-semibold fs-5">%</span>
                                                                                    </div>
                                                                                </div>}
                                                                                {((state.status === "Get")) &&
                                                                                    <input className={`form m-1 mt-2 col-lg-10 ${styles['bold-and-large-text-input']}`} disabled type="text" name="percentageForThirdGrade" id="percentageForThirdGrade" placeholder={data.percentageForThirdGrade} />
                                                                                }
                                                                                {data.validationErrors.percentageForThirdGrade && (
                                                                                    <div className="text-danger">
                                                                                        {data.validationErrors.percentageForThirdGrade}
                                                                                    </div>
                                                                                )}
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

                                                        }}

                                                    />}
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
                                                        {(state.status !== "Get") && <select className="form-select custom-select-start" id="theGrade" name="theGrade"
                                                            onChange={(e) => {
                                                                setData({ ...data, theGrade: parseInt(e.target.value) })
                                                                handleInputChangeVali(e)
                                                            }}
                                                            onFocus={handleInputFocus}
                                                        >
                                                            <option selected disabled></option>
                                                            <option value={0} selected={data.theGrade === 0}>تقريب</option>
                                                            <option value={1} selected={data.theGrade === 1}>جبر</option>
                                                            <option value={2} selected={data.theGrade === 2}>تقريب غير عادي</option>
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="theGrade" id="theGrade" placeholder={Options.theGrade[data.theGrade]} />
                                                        }
                                                        {data.validationErrors.theGrade && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.theGrade}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    {(state.status !== "Get") && <input className="form-check-input fs-5" type="checkbox" id="placementOfStudentsInTheCourse" name="placementOfStudentsInTheCourse" checked={data.placementOfStudentsInTheCourse} value={true}
                                                        onChange={(e) => {
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

                                                            onChange={(e) => {
                                                                handleSelectChangeEstimatingTheTheoreticalFailure(e);
                                                                handleInputChangeVali(e); // Call handleInputChange here
                                                            }}
                                                            onFocus={handleInputFocus}
                                                        >
                                                            <option selected disabled> </option>
                                                            {allGrades.map((grade) => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="estimatingTheTheoreticalFailure" id="estimatingTheTheoreticalFailure" placeholder={GetData.estimatingTheTheoreticalFailure} />
                                                        }
                                                        {data.validationErrors.estimatingTheTheoreticalFailure && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.estimatingTheTheoreticalFailure}
                                                            </div>
                                                        )}
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
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="failureEstimatesInTheLists" id="failureEstimatesInTheLists" placeholder={GetData.failureEstimatesInTheLists} />
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
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="detailsOfTheoreticalFailingGradesNav" id="detailsOfTheoreticalFailingGradesNav" placeholder={selectedGrades.map(gradeId => {
                                                                const selectedGrade = gradesDetails.find(detail => detail.id === gradeId);
                                                                return selectedGrade ? selectedGrade.theDetails : "";
                                                            }).join(", ")} />
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
                                                            name="gradeThatSelected"
                                                            id="gradeThatSelected"
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
                                                             mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="allDetailOrNo" id="allDetailOrNo" placeholder={GetData.allDetailOrNo === true ? "كلها" : "ايا منها"} />
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
                                                            onChange={(e) => {
                                                                handleSelectChangeEstimateDeprivationBeforeTheExamId(e);
                                                                handleInputChangeVali(e); // Call handleInputChange here
                                                            }}
                                                            
                                                            onFocus={handleInputFocus}
                                                        >
                                                            <option selected disabled> </option>
                                                            {allGrades.map((grade) => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="estimateDeprivationBeforeTheExamId" id="estimateDeprivationBeforeTheExamId" placeholder={GetData.estimateDeprivationBeforeTheExam} />
                                                        }
                                                        {data.validationErrors.estimateDeprivationBeforeTheExamId && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.estimateDeprivationBeforeTheExamId}
                                                            </div>
                                                        )}
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
                                                            onChange={(e) => {
                                                                handleSelectChangeEstimateDeprivationAfterTheExamId(e);
                                                                handleInputChangeVali(e); // Call handleInputChange here
                                                            }}
                                                           
                                                            onFocus={handleInputFocus}
                                                        >
                                                            <option selected disabled> </option>
                                                            {allGrades.map((grade) => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>}
                                                        {((state.status === "Get")) &&
                                                            <input className={`form m-1 col-lg-10 mt-2 ${styles['bold-and-large-text-input']}`} disabled type="text" name="estimateDeprivationAfterTheExamId" id="estimateDeprivationAfterTheExamId" placeholder={GetData.estimateDeprivationAfterTheExam} />
                                                        }
                                                        {data.validationErrors.estimateDeprivationAfterTheExamId && (
                                                            <div className="text-danger">
                                                                {data.validationErrors.estimateDeprivationAfterTheExamId}
                                                            </div>
                                                        )}
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
                                                    {(state.status !== "Get") && <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={handleClose}>
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
