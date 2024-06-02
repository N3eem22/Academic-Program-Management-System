import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";
import axios from "axios";
const ControlPage = () => {
    
    const [controlData, setControlData] = useState({

        programId: 1002,
        subtractFromTheDiscountRate: '',
        exceptionToDiscountEstimates: false,
        calculatingTheBudgetEstimateFromTheReductionEstimates: false,
        theGrade: '',
        placementOfStudentsInTheCourse: false,
        estimatingTheTheoreticalFailure: '',
        failureEstimatesInTheLists: [],
        detailsOfTheoreticalFailingGrades: '',
        detailsOfTheoreticalFailingGradesNav: [],
        chooseTheDetailsOfTheoreticalFailureBasedOn: '',
        calculateEstimate: '',
        aCaseOfAbsenceInTheDetailedGrades: [],
        allDetailOrNo: '',
        detailsOfExceptionalLetters: [],
        addingExciptionLetters: '',
        exceptionalLetterGrades: [],
        estimatesNotDefinedInTheLists: [],
        successGrades: '',
        failingGrades: '',
        estimateDeprivationBeforeTheExamId: '',
        estimateDeprivationAfterTheExamId: '',
        aSuccessRatingDoesNotAddHours: [],
    });
    const [globalControlData, setGlobalControlData] = useState({
        detailsOfTheoreticalFailingGrades: '',
    });

    const [localControlData, setLocalControlData] = useState({
        detailsOfTheoreticalFailingGrades: '',
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked, options } = event.target;
        let selectedValues;

        if (type === 'checkbox') {
            selectedValues = checked ? value : '';
        } else if (type === 'radio') {
            selectedValues = value;
        } else if (type === 'select-multiple') {
            selectedValues = Array.from(options)
                .filter((option) => option.selected)
                .map((option) => option.value);
        } else {
            selectedValues = value;
        }

        setControlData({
            ...controlData,
            [name]: selectedValues,
        });

        setGlobalControlData({
            ...globalControlData,
            [name]: selectedValues,
        });

        setLocalControlData({
            ...localControlData,
            [name]: selectedValues,
        });
    };



    const handleSave = (e, programId) => {
        e.preventDefault();
        setControlData({ ...controlData, loading: true, err: [] });
        axios.post(`https://localhost:7095/api/Control/${programId}`, {
            subtractFromTheDiscountRate: controlData.subtractFromTheDiscountRate,
            calculatingTheBudgetEstimateFromTheReductionEstimates: controlData.calculatingTheBudgetEstimateFromTheReductionEstimates,
            exceptionToDiscountEstimates: controlData.exceptionToDiscountEstimates,
            theGrade: controlData.theGrade,
            placementOfStudentsInTheCourse: controlData.placementOfStudentsInTheCourse,
            estimatingTheTheoreticalFailure: controlData.estimatingTheTheoreticalFailure,
            failureEstimatesInTheLists: controlData.failureEstimatesInTheLists,
            detailsOfTheoreticalFailingGrades: controlData.detailsOfTheoreticalFailingGrades,
            detailsOfTheoreticalFailingGradesNav: controlData.detailsOfTheoreticalFailingGradesNav,
            chooseTheDetailsOfTheoreticalFailureBasedOn: controlData.chooseTheDetailsOfTheoreticalFailureBasedOn,
            calculateEstimate: controlData.calculateEstimate,
            aCaseOfAbsenceInTheDetailedGrades: controlData.aCaseOfAbsenceInTheDetailedGrades,
            allDetailOrNo: controlData.allDetailOrNo,
            detailsOfExceptionalLetters: controlData.detailsOfExceptionalLetters,
            addingExciptionLetters: controlData.addingExciptionLetters,
            exceptionalLetterGrades: controlData.exceptionalLetterGrades,
            estimatesNotDefinedInTheLists: controlData.estimatesNotDefinedInTheLists,
            successGrades: controlData.successGrades,
            failingGrades: controlData.failingGrades,
            estimateDeprivationBeforeTheExamId: controlData.estimateDeprivationBeforeTheExamId,
            estimateDeprivationAfterTheExamId: controlData.estimateDeprivationAfterTheExamId,
            aSuccessRatingDoesNotAddHours: controlData.aSuccessRatingDoesNotAddHours,
        })
        .then((resp) => {
            setControlData({ ...controlData, loading: false, err: [] });
            console.log(resp.data);
        })
        .catch((err) => {
            setControlData({
                ...controlData,
                loading: false,
                err: [{ message: err.response.data.message }],
            });
        });
    };
    

    const [selectedValue, setSelectedValue] = useState("");
    const [sections, setSections] = useState([]);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handlePlusIconClick = () => {
        const newSection = {
            id: sections.length + 1,
            selectedValue: selectedValue,
        };
        setSections([...sections, newSection]);
    };

    const handleRemoveSection = (id) => {
        const updatedSections = sections.filter((section) => section.id !== id);
        setSections(updatedSections);
    };
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
                                    <form className="form-valide" method="post">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="subtractFromTheDiscountRate">
                                                        طرح من نسبة التخفيض
                                                    </label>
                                                    <div className="col-2">
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="subtractFromTheDiscountRate"
                                                                name="subtractFromTheDiscountRate"
                                                                value={controlData.subtractFromTheDiscountRate}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
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
                                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="try">
                                                                            <option selected disabled>  </option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-5">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div class="input-group">
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control"
                                                                                        id="numberRate"
                                                                                        name="numberRate"
                                                                                    />
                                                                                    <div className="input-group-append mx-1">
                                                                                        <span className="fw-semibold fs-5">%</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="row">
                                                                    <div className="col-lg-2">
                                                                        <p className="fw-semibold fs-5">الثانية</p>
                                                                    </div>
                                                                    <div className="col-lg-5">
                                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="try">
                                                                            <option selected disabled>  </option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-5">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div class="input-group">
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control"
                                                                                        id="numberRate"
                                                                                        name="numberRate"
                                                                                    />
                                                                                    <div className="input-group-append mx-1">
                                                                                        <span className="fw-semibold fs-5">%</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <span className="fw-semibold fs-5 ">الثالثة فاكثر</span>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="try">
                                                                            <option selected disabled>  </option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div class="input-group">
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control"
                                                                                        id="numberRate"
                                                                                        name="numberRate"
                                                                                    />
                                                                                    <div className="input-group-append mx-1">
                                                                                        <span className="fw-semibold fs-5">%</span>
                                                                                    </div>
                                                                                </div>
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
                                                    <input
                                                        className="form-check-input mt-2 fs-5"
                                                        type="checkbox"
                                                        id="exceptionToDiscountEstimates"
                                                        name="exceptionToDiscountEstimates"
                                                        checked={controlData.exceptionToDiscountEstimates}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="exceptionToDiscountEstimates"> استثناء من تقديرات التخفيض تقدير fc</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-check form-check-inline d-flex ">
                                                    <input
                                                        className="form-check-input mt-2 fs-5"
                                                        type="checkbox"
                                                        id="calculatingTheBudgetEstimateFromTheReductionEstimates"
                                                        name="calculatingTheBudgetEstimateFromTheReductionEstimates"
                                                        checked={controlData.calculatingTheBudgetEstimateFromTheReductionEstimates}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="calculatingTheBudgetEstimateFromTheReductionEstimates">احتساب تقدير الموازنة من تقديرات التخفيض</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="theGrade">
                                                        الدرجة
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select custom-select-start"
                                                            aria-label="Select an option"
                                                            id="theGrade"
                                                            name="theGrade"
                                                            value={controlData.theGrade}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option selected disabled></option>
                                                            <option value="تقريب">تقريب</option>
                                                            <option value="جبر">جبر</option>
                                                            <option value="تقريب غير عادي">تقريب غير عادي</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input
                                                        className="form-check-input fs-5"
                                                        type="checkbox"
                                                        id="placementOfStudentsInTheCourse"
                                                        name="placementOfStudentsInTheCourse"
                                                        checked={controlData.placementOfStudentsInTheCourse}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="placementOfStudentsInTheCourse">تنسيب الطلاب في المقرر</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="estimatingTheTheoreticalFailure">
                                                        تقدير الراسب النظري
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select fs-5 custom-select-start"
                                                            id="estimatingTheTheoreticalFailure"
                                                            name="estimatingTheTheoreticalFailure"
                                                            value={controlData.estimatingTheTheoreticalFailure}
                                                            onChange={handleInputChange}

                                                        >
                                                            <option selected disabled>  </option>
                                                            <option value="option1">نعم </option>
                                                            <option value="option2">لا</option>
                                                        </select>
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
                                                        <select
                                                            className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="failureEstimatesInTheLists"
                                                            multiple
                                                            name="failureEstimatesInTheLists"
                                                            value={controlData.failureEstimatesInTheLists}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="أ">أ</option>
                                                            <option value="ب">ب</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="detailsOfTheoreticalFailingGrades">
                                                        تقريب درجة الرسوب النظري
                                                    </label>
                                                    <div className="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="detailsOfTheoreticalFailingGrades"
                                                                    id="roundingDegree"
                                                                    value="تقريب الدرجة"
                                                                    checked={localControlData.detailsOfTheoreticalFailingGrades === 'تقريب الدرجة'}
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="roundingDegree">تقريب الدرجة</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="detailsOfTheoreticalFailingGrades"
                                                                    id="notRoundingDegree"
                                                                    value="عدم تقريب الدرجة"
                                                                    checked={localControlData.detailsOfTheoreticalFailingGrades === 'عدم تقريب الدرجة'}
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="notRoundingDegree">عدم تقريب الدرجة</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="detailsOfTheoreticalFailingGradesNav">
                                                        تفاصيل درجات الرسوب النظري
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="detailsOfTheoreticalFailingGradesNav"
                                                            multiple
                                                            name="detailsOfTheoreticalFailingGradesNav"
                                                            value={controlData.detailsOfTheoreticalFailingGradesNav}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="منتصف الفصل ">منتصف الفصل  </option>
                                                            <option value="منتصف الفصل 2 ">منتصف الفصل 2 </option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="chooseTheDetailsOfTheoreticalFailureBasedOn">
                                                        اختيار تفاصيل الرسوب النظري بناء علي
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="chooseTheDetailsOfTheoreticalFailureBasedOn"
                                                                    id="allDetails"
                                                                    value="كل التفاصيل"
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="allDetails">كل التفاصيل</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="chooseTheDetailsOfTheoreticalFailureBasedOn"
                                                                    id="anyDetails"
                                                                    value="ايا من التفاصيل"
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="anyDetails">ايا من التفاصيل</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="chooseTheDetailsOfTheoreticalFailureBasedOn"
                                                                    id="sumDetails"
                                                                    value="مجموع التفاصيل"
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="sumDetails">مجموع التفاصيل</label>
                                                            </div>
                                                        </div>
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
                                                        <select
                                                            className="form-select fs-5 custom-select-start"
                                                            id="calculateEstimate"
                                                            name="calculateEstimate"
                                                            value={controlData.calculateEstimate}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option selected disabled>  </option>
                                                            <option value="غائب  ">غائب   </option>
                                                            <option value=" راسب  ">راسب   </option>
                                                        </select>
                                                    </div>
                                                    <label className="col-lg-3 fw-semibold fs-5 col-form-label" htmlFor="aCaseOfAbsenceInTheDetailedGrades">
                                                        فى حالة غياب فى الدرجات التفصيلية
                                                    </label>

                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="aCaseOfAbsenceInTheDetailedGrades"
                                                            multiple
                                                            name="aCaseOfAbsenceInTheDetailedGrades"
                                                            value={controlData.aCaseOfAbsenceInTheDetailedGrades}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="منتصف الفصل ">منتصف الفصل  </option>
                                                            <option value="منتصف الفصل 2 ">منتصف الفصل 2 </option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="allDetailOrNo"
                                                                    id="all"
                                                                    value="كلها"
                                                                    checked={controlData.allDetailOrNo === "كلها"}
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="all">كلها</label>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="allDetailOrNo"
                                                                    id="any"
                                                                    value="ايا منها"
                                                                    checked={controlData.allDetailOrNo === "ايا منها"}
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="any">ايا منها</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="detailsOfExceptionalLetters">
                                                        تفاصيل الحروف الاستثانئية
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="detailsOfExceptionalLetters"
                                                            multiple
                                                            name="detailsOfExceptionalLetters"
                                                            value={controlData.detailsOfExceptionalLetters}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="منتصف الفصل">منتصف الفصل</option>
                                                            <option value="منتصف الفصل 2">منتصف الفصل 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="addingExciptionLetters">
                                                        اضافه درجات استثانئية
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="addingExciptionLetters"
                                                                    id="addExceptionGrades"
                                                                    value="اضافة درجة"
                                                                    checked={controlData.addingExciptionLetters === "اضافة درجة"}
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="addExceptionGrades">اضافة درجة</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="addingExciptionLetters"
                                                                    id="notAddExceptionGrades"
                                                                    value="عدم اضافة درجة"
                                                                    checked={controlData.addingExciptionLetters === "عدم اضافة درجة"}
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="notAddExceptionGrades">عدم اضافة درجة</label>
                                                            </div>
                                                        </div>
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
                                            </div>
                                            {/* //////////////////////////////////////// */}
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="estimatesNotDefinedInTheLists">
                                                        تقديرات غير معرفة باللائحة
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="estimatesNotDefinedInTheLists"
                                                            multiple
                                                            name="estimatesNotDefinedInTheLists"
                                                            value={controlData.estimatesNotDefinedInTheLists}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="منتصف الفصل">منتصف الفصل</option>
                                                            <option value="منتصف الفصل 2">منتصف الفصل 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="successGrades">
                                                        تقديرات النجاح (لمواد النجاح والرسوب)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select fs-5 custom-select-start"
                                                            id="successGrades"
                                                            name="successGrades"
                                                            value={controlData.successGrades}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option selected disabled> </option>
                                                            <option value="P">P</option>
                                                            <option value="S">S</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="failingGrades">
                                                        تقديرات الرسوب (لمواد النجاح والرسوب)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select fs-5 custom-select-start"
                                                            id="failingGrades"
                                                            name="failingGrades"
                                                            value={controlData.failingGrades}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option selected disabled> </option>
                                                            <option value="NP">NP</option>
                                                            <option value="U">U</option>
                                                            <option value="F">F</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="estimateDeprivationBeforeTheExamId">
                                                        تقدير الحرمان قبل الامتحان
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select fs-5 custom-select-start"
                                                            id="estimateDeprivationBeforeTheExamId"
                                                            name="estimateDeprivationBeforeTheExamId"
                                                            value={controlData.estimateDeprivationBeforeTheExamId}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option selected disabled> </option>
                                                            <option value="أ">أ</option>
                                                            <option value="د">د</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="estimateDeprivationAfterTheExamId">
                                                        تقدير الحرمان بعد الامتحان
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select fs-5 custom-select-start"
                                                            id="estimateDeprivationAfterTheExamId"
                                                            name="estimateDeprivationAfterTheExamId"
                                                            value={controlData.estimateDeprivationAfterTheExamId}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option selected disabled> </option>
                                                            <option value="أ">أ</option>
                                                            <option value="د">د</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="aSuccessRatingDoesNotAddHours">
                                                        تقدير نجاح لا يضاف للساعات ولا للمعدل
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="aSuccessRatingDoesNotAddHours"
                                                            name="aSuccessRatingDoesNotAddHours"
                                                            value={controlData.aSuccessRatingDoesNotAddHours}
                                                            onChange={handleInputChange}
                                                            multiple
                                                        >
                                                            <option value="أ">أ</option>
                                                            <option value="د">د</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row justify-content-center text-center">


                                                <div className="col-md-12">
                                                    <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button">
                                                        <i className="fa-solid fa-lock"></i> غلق
                                                    </button>
                                                    <button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={handleSave}>
                                                        <i className="fa-regular fa-bookmark"></i> حفظ
                                                    </button>
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
