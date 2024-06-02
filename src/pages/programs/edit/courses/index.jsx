import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";
import axios from "axios";
const CoursesPage = () => {
    const [selectedValueGrade, setSelectedValueGrade] = useState("");
    const [selectedValueHours, setSelectedValueHours] = useState("");
    const [selectedValueGradeCourse, setSelectedValueGradeCourse] = useState("");
    const [gradeSections, setGradeSections] = useState([]);
    const [hoursSections, setHoursSections] = useState([]);
    const [courseSections, setCourseSections] = useState([]);

    const handleSelectChangeGrade = (event) => {
        setSelectedValueGrade(event.target.value);
    };

    const handleSelectChangeHours = (event) => {
        setSelectedValueHours(event.target.value);
    };

    const handleSelectChangeGradeCourse = (event) => {
        setSelectedValueGradeCourse(event.target.value);
    };

    const handlePlusIconClick = (sectionType) => {
        const newSection = {
            id: sectionType === "grade" ? gradeSections.length + 1 : sectionType === "hours" ? hoursSections.length + 1 : courseSections.length + 1,
            selectedValue: sectionType === "grade" ? selectedValueGrade : sectionType === "hours" ? selectedValueHours : selectedValueGradeCourse,
        };

        if (sectionType === "grade") {
            setGradeSections([...gradeSections, newSection]);
        } else if (sectionType === "hours") {
            setHoursSections([...hoursSections, newSection]);
        } else {
            setCourseSections([...courseSections, newSection]);
        }
    };

    const handleRemoveSection = (id, sectionType) => {
        if (sectionType === "grade") {
            const updatedSections = gradeSections.filter((section) => section.id !== id);
            setGradeSections(updatedSections);
        } else if (sectionType === "hours") {
            const updatedSections = hoursSections.filter((section) => section.id !== id);
            setHoursSections(updatedSections);
        } else {
            const updatedSections = courseSections.filter((section) => section.id !== id);
            setCourseSections(updatedSections);
        }
    };
    const [dataCourse, setDataCourse] = useState({

        programId: 41,
        courseId: 3,
        maximumGrade: 1,
        semesterId: 1,
        levelId: 1,
        prerequisiteId: 1,
        courseTypeId: 1,
        linkRegistrationToHours: 1,
        chooseDetailesofFailingGrades: 1,
        successRate: 1,
        previousQualification: 1,
        gender: 0,
        addingCourse: 0,
        passOrFailSubject: true,
        registrationForTheCourseInTheSummerTerm: true,
        firstReductionEstimatesForFailureTimes: 3,
        percentageForFristGrade: 0,
        secondReductionEstimatesForFailureTimes: 3,
        percentageForSecondGrade: 0,
        thirdReductionEstimatesForFailureTimes: 3,
        percentageForThirdGrade: 0,
        numberOfPreviousPreRequisiteCourses: 0,
        partOneCourse: 3,
        "coursesandGradesDetails": [
            {
                "courseInfoId": 31,
                "gradeDetailsId": 1,
                "value": 0
            }
        ],
        "coursesAndHours": [
            {
                "courseInfoId": 31,
                "hourId": 1
            }
        ],
        "detailsOfFailingGrades": [
            {
                "courseInfoId": 31,
                "failedGradeId": 1,
                "value": 0
            }
        ],
        "preRequisiteCourses": [
            {
                "preRequisiteCourseId": 3,
                "courseInfoId": 31
            }
        ]

    });
    const sendData = () => {
        axios.post(dataCourse)
            .then(response => {
                console.log('تم إرسال البيانات بنجاح:', response);

            })
            .catch(error => {
                console.error('حدث خطأ أثناء إرسال البيانات:', error);
            });
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
                                    <form className="form-valide" method="post">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="courseId">
                                                        كود المقرر
                                                    </label>
                                                    <div class="col-lg-6 input-with-icon">
                                                        <div class="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="courseId"
                                                                name="courseId"
                                                                required
                                                                style={{ textAlign: "center" }}
                                                            />
                                                            <div className="input-group-append" style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="arabicName">
                                                        اسم المقرر
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="arabicName"
                                                            name="arabicName"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 fw-semibold fs-5 col-form-label"
                                                        htmlFor="arabicCodeF"
                                                    >
                                                        كود المقرر الفرعي
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="arabicCodeF"
                                                            name="arabicCodeF"

                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 fw-semibold fs-5 col-form-label"
                                                        htmlFor="famousName"
                                                    >
                                                        اسم المقرر الفرعي
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="famousName"
                                                            name="famousName"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 fw-semibold fs-5 col-form-label"
                                                        htmlFor="term"
                                                    >
                                                        الفصل الدراسي
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select className="form-select semesterId" aria-label="semesterId" id="semesterId">
                                                            <option selected disabled ></option>
                                                            <option> الفصل الدراسي الاول</option>
                                                            <option value="option1"> الفصل الدراسي الثاني</option>
                                                            <option value="option2"> الصيفي</option>
                                                            <option value="option3"> الموازنة</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="levelId">
                                                        المستوى
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="levelId">
                                                            <option selected disabled> المستوى: </option>
                                                            <option value="option1">المستوى الرابع</option>
                                                            <option value="option2">المستوى الخامس</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-2 fw-semibold fs-5 col-form-label" htmlFor="detailGradeForPart">
                                                        الدرجات التفصيلية للجزء
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="detailGradeForPart" onChange={handleSelectChangeGrade} value={selectedValueGrade}>
                                                            <option selected disabled> </option>
                                                            <option value="المستوى الرابع">المستوى الرابع</option>
                                                            <option value="المستوى الخامس">المستوى الخامس</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={() => handlePlusIconClick("grade")}>
                                                            <span className="input-group-text">
                                                                <i className="fa-solid fa-plus fw-bold fs-5"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {gradeSections.map((section) => (
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
                                                                        <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={() => handleRemoveSection(section.id, "grade")}>
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

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-2 fw-semibold fs-5 col-form-label"
                                                        htmlFor="highGrade"
                                                    >
                                                        الدرجة العظمى
                                                    </label>
                                                    <div className="col-lg-2">

                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="highGrade"
                                                            name="highGrade"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-2 fw-semibold fs-5 col-form-label" htmlFor="hours">
                                                        الساعات
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="hours" onChange={handleSelectChangeHours} value={selectedValueHours}>
                                                            <option selected disabled> </option>
                                                            <option value="الساعات المعتمدة">الساعات المعتمدة </option>
                                                            <option value="ساعات المحاضرة">ساعات المحاضرة </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={() => handlePlusIconClick("hours")}>
                                                            <span className="input-group-text">
                                                                <i className="fa-solid fa-plus fw-bold fs-5"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {hoursSections.map((section) => (
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
                                                                        <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={() => handleRemoveSection(section.id, "hours")}>
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
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-2 fw-semibold fs-5 col-form-label" htmlFor="detailGradeForCourse">
                                                        الدرجات التفصيلية للمقرر
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="detailGradeForCourse" onChange={handleSelectChangeGradeCourse} value={selectedValueGradeCourse}>
                                                            <option selected disabled> </option>
                                                            <option value="منتصف الفصل">منتصف الفصل</option>
                                                            <option value="منتصف الفصل 2">منتصف الفصل 2</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={() => handlePlusIconClick("course")}>
                                                            <span className="input-group-text">
                                                                <i className="fa-solid fa-plus fw-bold fs-5"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {courseSections.map((section) => (
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
                                                                        <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }} onClick={() => handleRemoveSection(section.id, "course")}>
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

                                            {/* <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="detailGradeForCourse">
                                                        الدرجات التفصيلية للمقرر
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="detailGradeForCourse">
                                                            <option selected disabled> </option>
                                                            <option value="option1">المستوى الرابع</option>
                                                            <option value="option2">المستوى الخامس</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="input-group-append mt-1" style={{ display: "flex", cursor: "pointer" }}>
                                                            <span className="input-group-text">
                                                                <i class="fa-solid fa-plus fw-bold fs-5"></i>
                                                            </span>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            {/* hidden 
                                            <div className="col-md-6">
                                                <span className={`border ${styles.border}`}>
                                                    <div className="form-group  row">
                                                        <label className="col-lg-3 fw-semibold fs-5 col-form-label" htmlFor="addLevel">
                                                            كود المقرر:
                                                        </label>
                                                        <div class="col-lg-5 ">
                                                            <div class="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="addLevel"
                                                                    name="addLevel"
                                                                    style={{ textAlign: "center" }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div> */}
                                            <div className="mt-4 col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="failGrades">
                                                        تفاصيل درجات الرسوب النظري
                                                    </label>
                                                    <div className="col-lg-4">
                                                        <select className="form-select custom-select-start fs-5" aria-label="Select options" id="failGrades" multiple>
                                                            <option value="المستوى الرابع">المستوى الرابع</option>
                                                            <option value="المستوي الخامس">المستوى الخامس</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* hidden */}
                                            <div className="col-md-6">
                                                <div className="form-group  row">
                                                    {/* <p className=" fw-medium">نسب الرسوب النظري</p> */}
                                                    <label className="col-lg-2 fw-semibold fs-5 col-form-label" htmlFor="addLevel">
                                                        كود المقرر:
                                                    </label>
                                                    <div class="col-lg-3 ">
                                                        <div class="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="addLevel"
                                                                name="addLevel"
                                                                style={{ textAlign: "center" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="chooseDetailesofFailingGrades">
                                                        اختيار تفاصيل الرسوب النظري بناء علي
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-3">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="chooseDetailesofFailingGrades" id="inlineRadio1" value="option1" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="inlineRadio1">كل التفاصيل</label>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="chooseDetailesofFailingGrades" id="inlineRadio2" value="option2" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="inlineRadio2">ايا من التفاصيل</label>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="chooseDetailesofFailingGrades" id="inlineRadio3" value="option3" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="inlineRadio3">مجموع التفاصيل</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 fw-semibold fs-5 col-form-label"
                                                        htmlFor="highGradeTow"
                                                    >
                                                        الدرجة العظمى للمقرر
                                                    </label>
                                                    <div className="col-lg-3">

                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="highGradeTow"
                                                            name="highGradeTow"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-2 fw-semibold fs-5 col-form-label" htmlFor="courseTypeId">
                                                        نوع المقرر
                                                    </label>
                                                    <div className="col-lg-3">
                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="courseTypeId">
                                                            <option selected disabled> </option>
                                                            <option value="option1">اجباري</option>
                                                            <option value="option2">اختيارى</option>
                                                            <option value="option1">مشروع</option>
                                                            <option value="option2">تدريب</option>
                                                            <option value="option1">اختياري حر</option>
                                                        </select>
                                                    </div>
                                                    {/* <div className="col-lg-6">
                                                        <div className="form-check form-check-inline d-flex">
                                                            <input className="form-check-input mt-2 fs-5" type="checkbox" id="degree" value="ظهور المقرر بالشهادة" />
                                                            <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="degree">ظهور المقرر بالشهاده</label>
                                                        </div>
                                                    </div>                  elmafrod tzhr lma y5tar ma4ro3 */}
                                                </div>
                                            </div>
                                            <div className="mt-4 col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="requisite">
                                                        متطلب
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="requisite">
                                                            <option selected disabled> </option>
                                                            <option value="جامعه">جامعه</option>
                                                            <option value="علوم مساعده"> علوم مساعده</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="previousQualification">
                                                        المؤهل السابق
                                                    </label>

                                                    <div className="col-lg-4">
                                                        <select className="form-select custom-select-start fs-5" aria-label="Select options" id="previousQualification" multiple>
                                                            <option value="ثانوي عام علوم">ثانوي عام علوم</option>
                                                            <option value="ثانوي زراعي 3"> ثانوي زراعي 3 </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="linkRegistrationToHours">
                                                        ربط التسجيل بعدد الساعات
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="linkRegistrationToHours"
                                                            name="linkRegistrationToHours"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6"></div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="partOneCourse">
                                                        الجزء الاول
                                                    </label>
                                                    <div class="col-lg-6 input-with-icon">
                                                        <div class="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="partOneCourse"
                                                                name="partOneCourse"
                                                                required
                                                                style={{ textAlign: "center" }}
                                                            />
                                                            <div className="input-group-append" style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6"></div>
                                            <div className="col-lg-7">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-4" type="checkbox" id="mokrr" value=" المقرر جزء من مقرر" checked disabled />
                                                    <label className="fw-bolder fs-5 form-check-label mx-5 mt-0" htmlFor="mokrr">المقرر جزء من مقرر (لا يدخل فى حساب المعدل التراكمى الا بعد اتمام الجزء الثانى)  </label>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="prerequisiteId">
                                                        المتطلب السابق
                                                    </label>
                                                    <div class="col-lg-6 input-with-icon">
                                                        <div class="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="prerequisiteId"
                                                                name="prerequisiteId"
                                                                required
                                                                style={{ textAlign: "center" }}
                                                            />
                                                            <div className="input-group-append" style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6"></div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 fw-semibold fs-5 col-form-label"
                                                        htmlFor="numberOfPreviousPreRequisiteCourses"
                                                    >
                                                        عدد المتطلب السابق
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="numberOfPreviousPreRequisiteCourses"
                                                            name="numberOfPreviousPreRequisiteCourses"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6"></div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="concurrentCourses">
                                                        المقررات المتزامنة
                                                    </label>
                                                    <div class="col-lg-6 input-with-icon">
                                                        <div class="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="concurrentCourses"
                                                                name="concurrentCourses"
                                                                required
                                                                style={{ textAlign: "center" }}
                                                            />
                                                            <div className="input-group-append" style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-3 fw-semibold fs-5 col-form-label"

                                                    >
                                                        تقديرات التخفيض لمرات الرسوب
                                                    </label>
                                                    <div className="col-lg-1">
                                                        <label
                                                            className="col-lg-1 me-5 mt-1 fw-semibold fs-5"
                                                            htmlFor="firstReductionEstimatesForFailureTimes"
                                                        >
                                                            الاولي
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="firstReductionEstimatesForFailureTimes">
                                                            <option selected disabled> </option>
                                                            <option value="option1">ثانوي عام علوم</option>
                                                            <option value="option2"> ثانوي زراعي 3 </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="percentageForFirstGrade"
                                                                name="percentageForFirstGrade"
                                                                required
                                                                style={{ textAlign: "center" }}
                                                            />
                                                            <p className="mb-0 me-2 fs-5 fw-semibold">%</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-1">
                                                        <label
                                                            className="col-lg-1 me-5 mt-1 fw-semibold fs-5"
                                                            htmlFor="second"
                                                        >
                                                            التانيه
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="secondReductionEstimatesForFailureTimes">
                                                            <option selected disabled> </option>
                                                            <option value="option1">ثانوي عام علوم</option>
                                                            <option value="option2"> ثانوي زراعي 3 </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="percentageForSecondGrade"
                                                                name="percentageForSecondGrade"
                                                                required
                                                                style={{ textAlign: "center" }}
                                                            />
                                                            <p className="mb-0 me-2 fs-5 fw-semibold">%</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <label
                                                            className="col-lg-1 me-5 mt-1 fw-semibold fs-5"
                                                            htmlFor="third"
                                                        >
                                                            التالته
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="thirdReductionEstimatesForFailureTimes">
                                                            <option selected disabled> </option>
                                                            <option value="option1">ثانوي عام علوم</option>
                                                            <option value="option2"> ثانوي زراعي 3 </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="percentageForThirdGrade"
                                                                name="percentageForThirdGrade"
                                                                required
                                                                style={{ textAlign: "center" }}
                                                            />
                                                            <p className="mb-0 me-2 fs-5 fw-semibold">%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="successRate">
                                                        نسبة النجاح
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select className="form-select" aria-label="Select an option" id="successRate">
                                                            <option className="fs-5 fw-semibold" selected disabled>اختر...</option>
                                                            {Array.from({ length: 51 }, (_, index) => (
                                                                <option className="fs-5 fw-semibold" key={index} value={index + 50}>{index + 50}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6"></div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="registerCourseInSummerTerm" value="تسجيل المقرر في الترم الصيفى " />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="registerCourseInSummerTerm">تسجيل المقرر في الترم الصيفي  </label>
                                                </div>
                                            </div>
                                            <br /> <br />
                                            <div className="col-xl-6">
                                                <div className="form-group row">
                                                    <div className="col-lg-4">
                                                        <input className="form-check-input  m-1 mt-2" type="radio" name="addingCourse" id="add" value="يضاف للمعدل التراكمي " />
                                                        <label className="form-check-label fw-bold f-6" htmlFor="add">يضاف للمعدل التراكمي </label>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <input className="form-check-input m-1 mt-2" type="radio" name="addingCourse" id="justHours" value=" يضاف للساعات فقط" />
                                                        <label className="form-check-label fw-bold f-6" htmlFor="justHours"> يضاف للساعات فقط </label>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input className="form-check-input m-1 mt-2" type="radio" name="addingCourse" id="noAdd" value="لا يضاف للمعدل التراكمي  " />
                                                        <label className="form-check-label fw-bold f-6" htmlFor="noAdd">لا يضاف للمعدل التراكمي </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="registrationForTheCourseInTheSummerTerm" value="تسجيل المقرر في الترم الصيفى " />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="registrationForTheCourseInTheSummerTerm">مادة نجاح او رسوب</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="form-group row">
                                                    <div className="col-lg-3">
                                                        <input className="form-check-input  m-1 mt-2" type="radio" name="gender" id="male" value="ذكر" />
                                                        <label className="form-check-label fw-semibold f-5" htmlFor="male">ذكور   </label>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <input className="form-check-input m-1 mt-2" type="radio" name="gender" id="female" value="اناث" />
                                                        <label className="form-check-label fw-semibold f-5" htmlFor="female"> اناث   </label>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input className="form-check-input m-1 mt-2" type="radio" name="gender" id="maleAndFemale" value="ذكور  واناث" />
                                                        <label className="form-check-label fw-semibold f-5" htmlFor="maleAndFemale">ذكور واناث</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 mt-4">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <p className="fw-bold fs-3" style={{ color: 'darkred' }}>تقديرات المقرر</p>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <p className="fs-5 fw-semibold mt-1">	(ملحوظه تستخدم تقديرات المقرر فى حالة وجود جدول تقديرات خاص بالمقرر منفردا)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2 d-md-block text-center mt-3">
                                                <button className={` btn fs-4 fw-semibold px-4  text-white ${styles.save}`} type="button" onClick={sendData}>
                                                    <i className="fa-regular fa-bookmark"></i> حفظ
                                                </button>
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

CoursesPage.displayName = "CoursesPage";

CoursesPage.propTypes = {};

export { CoursesPage };
