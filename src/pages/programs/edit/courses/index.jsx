import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";
import axios from "axios";
const CoursesPage = () => {

    const [data, setData] = useState({

        programId: 1002,
        courseId: "",
        courseNameInArabic: '',
        courseCodeInEnglish: '',
        sub_CourseNameInArabic: '',
        maximumGrade: "",
        semesterId: "",
        levelId: "",
        prerequisiteId: "",
        courseTypeId: "",
        linkRegistrationToHours: "",
        chooseDetailesofFailingGrades: "",
        successRate: "",
        previousQualification: "", //المؤهل السابق
        gender: "",
        addingCourse: "",
        passOrFailSubject: false,
        registrationForTheCourseInTheSummerTerm: false,
        firstReductionEstimatesForFailureTimes: "",
        percentageForFristGrade: "",
        secondReductionEstimatesForFailureTimes: "",
        percentageForSecondGrade: "",
        thirdReductionEstimatesForFailureTimes: "",
        percentageForThirdGrade: "",
        numberOfPreviousPreRequisiteCourses: "", // عدد المتطلب السابق
        partOneCourse: "",
        coursesandGradesDetails: [],
        coursesAndHours: [],
        detailsOfFailingGrades: [],
        preRequisiteCourses: []

    });
    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleChangepreRequisiteCourses = (e) => {
        const { name, value } = e.target;
        if (name === 'preRequisiteCourses') {
            setData(prevData => ({
                ...prevData,
                preRequisiteCourses: [
                    {
                        preRequisiteCourseId: value,

                    }
                ]
            }));
        } else {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };
    const handleChangePreviousQualification = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            previousQualification: value
        }));
    };
    const [selectedValue, setSelectedValue] = useState("");
    const [customValues, setCustomValues] = useState({});
    const [sections, setSections] = useState([]);
    const [gradesDetails, setGradesDetails] = useState([]);
    const [allGrades, setAllGrades] = useState([]);
    const [prerequisites, setPrerequisites] = useState([]);
    const [previousQualifications, setPreviousQualifications] = useState([]);
    const [levels, setLevels] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [selectedGrades, setSelectedGrades] = useState([]);
    const [gradeInput, setGradeInput] = useState("");
    const [hoursOptions, setHoursOptions] = useState([]);
    const [courseTypes, setCourseTypes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const gradesDetailsResponse = await axios.get(`https://localhost:7095/api/GradesDetails?UniversityId=${1}`);
                const allGradesResponse = await axios.get(`https://localhost:7095/api/AllGrades?UniversityId=${1}`);
                const prerequisitesResponse = await axios.get(`https://localhost:7095/api/Prerequisites?UniversityId=${1}`);
                const previousQualificationsResponse = await axios.get(`https://localhost:7095/api/PreviousQualification?UniversityId=${1}`);
                const levelsResponse = await axios.get(`https://localhost:7095/api/Level?UniversityId=${1}`);
                const semestersResponse = await axios.get(`https://localhost:7095/api/Semesters?UniversityId=${1}`);
                const hoursResponse = await axios.get(`https://localhost:7095/api/Hours?UniversityId=${3}`);
                const courseTypesResponse = await axios.get(`https://localhost:7095/api/CourseType?UniversityId=${1}`);

                setGradesDetails(Array.isArray(gradesDetailsResponse.data) ? gradesDetailsResponse.data : [gradesDetailsResponse.data]);
                setAllGrades(Array.isArray(allGradesResponse.data) ? allGradesResponse.data : [allGradesResponse.data]);
                setPrerequisites(Array.isArray(prerequisitesResponse.data) ? prerequisitesResponse.data : [prerequisitesResponse.data]);
                setPreviousQualifications(Array.isArray(previousQualificationsResponse.data) ? previousQualificationsResponse.data : [previousQualificationsResponse.data]);
                setLevels(Array.isArray(levelsResponse.data) ? levelsResponse.data : [levelsResponse.data]);
                setSemesters(Array.isArray(semestersResponse.data) ? semestersResponse.data : [semestersResponse.data]);
                setHoursOptions(hoursResponse.data);
                setCourseTypes(courseTypesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const sendDataToApi = async () => {
        try {
            setData({ ...data, programId: 1002 })
            const res = await axios.post('https://localhost:7095/api/CoursesInformations', {

                programId: 1002,
                courseId: data.courseId,
                maximumGrade: data.maximumGrade,
                semesterId: data.semesterId,
                levelId: data.levelId,
                prerequisiteId: data.prerequisiteId,
                courseTypeId: data.courseTypeId,
                linkRegistrationToHours: data.linkRegistrationToHours,
                chooseDetailesofFailingGrades: data.chooseDetailesofFailingGrades,
                successRate: data.successRate,
                previousQualification: data.previousQualification,
                gender: data.gender,
                addingCourse: data.addingCourse,
                passOrFailSubject: data.passOrFailSubject,
                registrationForTheCourseInTheSummerTerm: data.registrationForTheCourseInTheSummerTerm,
                firstReductionEstimatesForFailureTimes: data.firstReductionEstimatesForFailureTimes,
                percentageForFristGrade: data.percentageForFristGrade,
                secondReductionEstimatesForFailureTimes: data.secondReductionEstimatesForFailureTimes,
                percentageForSecondGrade: data.percentageForSecondGrade,
                thirdReductionEstimatesForFailureTimes: data.thirdReductionEstimatesForFailureTimes,
                percentageForThirdGrade: data.percentageForThirdGrade,
                numberOfPreviousPreRequisiteCourses: data.numberOfPreviousPreRequisiteCourses,
                partOneCourse: data.partOneCourse,
                coursesandGradesDetails: data.coursesandGradesDetails,
                coursesAndHours: data.coursesAndHours,
                detailsOfFailingGrades: data.detailsOfFailingGrades,
                preRequisiteCourses: data.preRequisiteCourses
            });

            console.log('Response:', res.data);
        } catch (err) {
            setData({
                ...data,
                loading: false,
                err: [{ message: err.response.data.message }],
            });
        }
    }
    function submit(e) {
        console.log(data);
        e.preventDefault();

        sendDataToApi();
    }
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
                    const updatedGrades = prevData.coursesandGradesDetails.map((grade) =>
                        grade.gradeDetailsId === id ? { ...grade, value } : grade
                    );

                    return {
                        ...prevData,
                        coursesandGradesDetails: updatedGrades,
                    };
                });
            }

            return newValues;
        });
    };
    const handlePlusIconClick = () => {
        if (selectedValue) {
            const selectedDetail = gradesDetails.find(detail => detail.id === parseInt(selectedValue));
            if (selectedDetail) {
                const newSectionId = sections.length + 1;
                const newSection = {
                    id: newSectionId,
                    value: selectedDetail.theDetails,
                };
                setSections([...sections, newSection]);

                setData((prevData) => {
                    const isFirstAddition = sections.length === 0;

                    return {
                        ...prevData,
                        coursesandGradesDetails: isFirstAddition
                            ? [
                                {

                                    gradeDetailsId: newSectionId,
                                    value: ""
                                }
                            ]
                            : [
                                ...prevData.coursesandGradesDetails,
                                {
                                    gradeDetailsId: newSectionId,

                                    value: "",
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
            coursesandGradesDetails: prevData.coursesandGradesDetails.filter((_, index) => index !== indexToRemove)
        }));

        setCustomValues((prevValues) => {
            const newValues = { ...prevValues };
            delete newValues[id];
            return newValues;
        });
    };
    const handleSearch = async () => {
        try {
            const response = await axios.get('https://localhost:7095/api/CollegeCourses');
            const courses = response.data;
            const course = courses.find(course => course.id.toString() === data.courseId.toString());
            if (course) {
                setData({
                    ...data,
                    courseNameInArabic: course.courseNameInArabic,
                    courseCodeInEnglish: course.courseCodeInEnglish,
                    sub_CourseNameInArabic: course.sub_CourseNameInArabic,
                });
                // Clear error message if a valid course is found
                document.querySelector(".error-message").innerText = "";
            } else {
                document.querySelector(".error-message").innerText = "لا يوجد مقررات";
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again.');
        }
    };
    const handleSearchPartOne = async () => {
        try {
            const response = await axios.get('https://localhost:7095/api/CollegeCourses');
            const courses = response.data;
            const course = courses.find(course => course.id.toString() === data.partOneCourse.toString());
            if (course) {
                setData({
                    ...data,
                    partOneCourseMessage: `اسم المقرر: ${course.courseNameInArabic}`,
                });
            } else {
                setData({
                    ...data,
                    partOneCourseMessage: 'لا يوجد مقررات',
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleSearchPreRequisiteCourses = async () => {
        try {
            const response = await axios.get('https://localhost:7095/api/CollegeCourses');
            const courses = response.data;
            const matchingCourses = courses.filter(course => {
                return data.preRequisiteCourses.some(prerequisite => prerequisite.preRequisiteCourseId.toString() === course.id.toString());
            });
            if (matchingCourses.length > 0) {
                setData({
                    ...data,
                    preRequisiteCoursesMessage: `اسم المقرر: ${matchingCourses[0].courseNameInArabic}`,
                });
            } else {
                setData({
                    ...data,
                    preRequisiteCoursesMessage: 'لا يوجد مقررات',
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleSearchConcurrentCourses = async () => {
        try {
            const response = await axios.get('https://localhost:7095/api/CollegeCourses');
            const courses = response.data;
            const course = courses.find(course => course.id.toString() === data.concurrentCourses.toString());
            if (course) {
                setData({
                    ...data,
                    concurrentCoursesMessage: `اسم المقرر: ${course.courseNameInArabic}`,
                });
            } else {
                setData({
                    ...data,
                    concurrentCoursesMessage: 'لا يوجد مقررات',
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
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
    const handleSelectChangeLevelId = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            levelId: value
        }));
    };
    const handleSelectChangeSemesterId = (e) => {
        const { value } = e.target;
        setData(prevData => ({
            ...prevData,
            semesterId: value
        }));
    };
    const updateData = () => {
        setData(prevData => ({
            ...prevData,
            detailsOfFailingGrades: selectedGrades.map(gradeId => ({

                failedGradeId: gradeId,
                value: gradeInput
            }))
        }));
    };
    const handleSelectChangeFailingGrades = (event) => {
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
    const handleSelectChangeCoursesAndHours = (e) => {
        const selectedValue = e.target.value;
        setData(prevData => ({
            ...prevData,
            coursesAndHours: [{ hourId: selectedValue }]
        }));
    };
    const handleSelectChangeCourseTypeId = (e) => {
        const selectedValue = e.target.value;
        setData(prevData => ({
            ...prevData,
            courseTypeId: selectedValue
        }));
    };
    return (
        <Fragment>
            <div className="container " dir="rtl">
                <div className="row mt-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <h2 style={{ color: "red" }}>برنامج : التثقيف بالفن</h2>
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
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="courseId">
                                                        كود المقرر
                                                    </label>
                                                    <div class="col-lg-6 input-with-icon">
                                                        <div class="input-group">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="courseId"
                                                                name="courseId"
                                                                onChange={(e) => {
                                                                    setData({ ...data, courseId: e.target.value });
                                                                }}
                                                                value={data.courseId}
                                                            />
                                                            <div className="input-group-append" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleSearch}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </span>
                                                            </div>
                                                            <div className="error-message mt-2 me-2" style={{ color: "red" }}></div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="courseNameInArabic">
                                                        اسم المقرر
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="courseNameInArabic"
                                                            name="courseNameInArabic"
                                                            value={data.courseNameInArabic}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 fw-semibold fs-5 col-form-label"
                                                        htmlFor="courseCodeInEnglish"
                                                    >
                                                        كود المقرر الفرعي
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="courseCodeInEnglish"
                                                            name="courseCodeInEnglish"
                                                            value={data.courseCodeInEnglish}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 fw-semibold fs-5 col-form-label"
                                                        htmlFor="sub_CourseNameInArabic"
                                                    >
                                                        اسم المقرر الفرعي
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="sub_CourseNameInArabic"
                                                            name="sub_CourseNameInArabic"
                                                            value={data.sub_CourseNameInArabic}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 fw-semibold fs-5 col-form-label"
                                                        htmlFor="semesterId"
                                                    >
                                                        الفصل الدراسي
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select className="form-select semesterId"
                                                            aria-label="semesterId"
                                                            id="semesterId"
                                                            value={data.semesterId}
                                                            onChange={handleSelectChangeSemesterId}
                                                        >
                                                            <option selected disabled></option>
                                                            {semesters.map((semester) => (
                                                                <option key={semester.id} value={semester.id}>{semester.semesters}</option>
                                                            ))}

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
                                                        <select
                                                            className="form-select custom-select-start"
                                                            aria-label="Select an option"
                                                            id="levelId"
                                                            value={data.levelId}
                                                            onChange={handleSelectChangeLevelId}
                                                        >
                                                            <option selected disabled></option>
                                                            {levels.map((level) => (
                                                                <option key={level.id} value={level.id}>{level.levels}</option>
                                                            ))}

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-2 fw-semibold fs-5 col-form-label" htmlFor="coursesAndHours">
                                                        الساعات
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select
                                                            className="form-select fs-5 custom-select-start"
                                                            id="coursesAndHours"
                                                            onChange={handleSelectChangeCoursesAndHours}
                                                        >
                                                            <option selected disabled> </option>
                                                            {hoursOptions.map(hour => (
                                                                <option key={hour.id} value={hour.id}>{hour.hoursName}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-2 fw-semibold fs-5 col-form-label" htmlFor="coursesandGradesDetails">
                                                        الدرجات التفصيلية للمقرر
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="coursesandGradesDetails" onChange={handleSelectChange}>
                                                            <option selected disabled> </option>
                                                            {gradesDetails.map(detail => (
                                                                <option key={detail.id} value={detail.id}>
                                                                    {detail.theDetails}
                                                                </option>
                                                            ))}
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
                                                        <div className="col-md-4" key={section.id}>
                                                            <div className="form-group row">
                                                                <div className="col-lg-8">
                                                                    <div className="input-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control mt-2"
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
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mt-4 col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="detailsOfFailingGrades">
                                                        تفاصيل درجات الرسوب النظري
                                                    </label>
                                                    <div className="col-lg-4">
                                                        <select className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="detailsOfFailingGrades"
                                                            onChange={handleSelectChangeFailingGrades}
                                                            multiple>
                                                            {gradesDetails.map(detail => (
                                                                <option key={detail.id} value={detail.id}>
                                                                    {detail.theDetails}
                                                                </option>
                                                            ))}

                                                        </select>
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
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            }


                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="chooseDetailesofFailingGrades">
                                                        اختيار تفاصيل الرسوب النظري بناء علي
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-3">
                                                                <input
                                                                    className="form-check-input  m-1 mt-2"
                                                                    type="radio"
                                                                    name="chooseDetailesofFailingGrades"
                                                                    id="inlineRadio1"
                                                                    value={0}
                                                                    selected={data.chooseDetailesofFailingGrades === 0}
                                                                    onChange={(e) => setData({ ...data, chooseDetailesofFailingGrades: e.target.value })}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="inlineRadio1">كل التفاصيل</label>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="chooseDetailesofFailingGrades"
                                                                    id="inlineRadio2"
                                                                    value={1}
                                                                    selected={data.chooseDetailesofFailingGrades === 1}
                                                                    onChange={(e) => setData({ ...data, chooseDetailesofFailingGrades: e.target.value })}
                                                                />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="inlineRadio2">ايا من التفاصيل</label>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <input
                                                                    className="form-check-input m-1 mt-2"
                                                                    type="radio"
                                                                    name="chooseDetailesofFailingGrades"
                                                                    id="inlineRadio3"
                                                                    value={2}
                                                                    selected={data.chooseDetailesofFailingGrades === 2}
                                                                    onChange={(e) => setData({ ...data, chooseDetailesofFailingGrades: e.target.value })}
                                                                />
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
                                                        htmlFor="maximumGrade"
                                                    >
                                                        الدرجة العظمى للمقرر
                                                    </label>
                                                    <div className="col-lg-3">

                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="maximumGrade"
                                                            name="maximumGrade"
                                                            onChange={(e) => {
                                                                setData({ ...data, maximumGrade: parseInt(e.target.value) })
                                                            }}
                                                            value={data.maximumGrade}

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
                                                        <select
                                                            className="form-select custom-select-start"
                                                            aria-label="Select an option"
                                                            id="courseTypeId"
                                                            onChange={handleSelectChangeCourseTypeId}
                                                        >
                                                            <option selected disabled> </option>
                                                            {courseTypes.map(type => (
                                                                <option key={type.id} value={type.id}>{type.courseType}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="prerequisiteId">
                                                        متطلب
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select
                                                            className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="prerequisiteId"
                                                            name="prerequisiteId"
                                                            value={data.prerequisiteId}
                                                            onChange={handleChangepreRequisiteCourses}
                                                        >
                                                            <option disabled value=""></option>
                                                            {prerequisites.map(prerequisite => (
                                                                <option key={prerequisite.id} value={prerequisite.id}>
                                                                    {prerequisite.prerequisite}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="previousQualification">
                                                        المؤهل السابق
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select
                                                            className="form-select custom-select-start fs-5"
                                                            aria-label="Select options"
                                                            id="previousQualification"
                                                            name="previousQualification"
                                                            value={data.previousQualification}
                                                            onChange={handleChangePreviousQualification}
                                                        >
                                                            <option disabled value="">اختر المؤهل السابق</option>
                                                            {previousQualifications.map(qualification => (
                                                                <option key={qualification.id} value={qualification.id}>
                                                                    {qualification.previousQualification}
                                                                </option>
                                                            ))}
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
                                                            onChange={(e) => {
                                                                setData({ ...data, linkRegistrationToHours: parseInt(e.target.value) })
                                                            }}
                                                            value={data.linkRegistrationToHours}

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
                                                                onChange={(e) => {
                                                                    setData({ ...data, partOneCourse: parseInt(e.target.value) })
                                                                }}
                                                                value={data.partOneCourse}
                                                            />
                                                            <div className="input-group-append" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleSearchPartOne}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {data.partOneCourseMessage && (
                                                            <p className="message fw-semibold fs-5" style={{ color: data.partOneCourseMessage === 'لا يوجد مقررات' ? 'red' : '' }}>
                                                                {data.partOneCourseMessage}
                                                            </p>
                                                        )}

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
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="preRequisiteCourses">
                                                        المتطلب السابق
                                                    </label>
                                                    <div className="col-lg-6 input-with-icon">
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="preRequisiteCourses"
                                                                name="preRequisiteCourses"


                                                                onChange={handleChangepreRequisiteCourses}
                                                            />
                                                            <div className="input-group-append" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleSearchPreRequisiteCourses}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {data.preRequisiteCoursesMessage && (
                                                            <p className="message fw-semibold fs-5" style={{ color: data.preRequisiteCoursesMessage === 'لا يوجد مقررات' ? 'red' : '' }}>
                                                                {data.preRequisiteCoursesMessage}
                                                            </p>
                                                        )}
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
                                                            onChange={(e) => {
                                                                setData({ ...data, numberOfPreviousPreRequisiteCourses: parseInt(e.target.value) })
                                                            }}
                                                            value={data.numberOfPreviousPreRequisiteCourses}

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
                                                                onChange={(e) => {
                                                                    setData({ ...data, concurrentCourses: parseInt(e.target.value) })
                                                                }}
                                                                value={data.concurrentCourses}
                                                            />
                                                            <div className="input-group-append" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleSearchConcurrentCourses}>
                                                                <span className="input-group-text">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {data.concurrentCoursesMessage && (
                                                            <p className="message fw-semibold fs-5" style={{ color: data.concurrentCoursesMessage === 'لا يوجد مقررات' ? 'red' : '' }}>
                                                                {data.concurrentCoursesMessage}
                                                            </p>
                                                        )}
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
                                                        <select className="form-select custom-select-start"
                                                            aria-label="Select an option"
                                                            id="firstReductionEstimatesForFailureTimes"
                                                            value={data.firstReductionEstimatesForFailureTimes}
                                                            onChange={handleSelectChangeFirstReduction}
                                                        >
                                                            <option selected disabled> </option>
                                                            {allGrades.map((grade) => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="percentageForFristGrade"
                                                                name="percentageForFristGrade"

                                                                style={{ textAlign: "center" }}
                                                                onChange={(e) => {
                                                                    setData({ ...data, percentageForFristGrade: parseInt(e.target.value) })
                                                                }}
                                                                value={data.percentageForFristGrade}
                                                            />
                                                            <p className="mb-0 me-2 fs-5 fw-semibold">%</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-1">
                                                        <label
                                                            className="col-lg-1 me-5 mt-1 fw-semibold fs-5"
                                                            htmlFor="secondReductionEstimatesForFailureTimes"
                                                        >
                                                            التانيه
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <select className="form-select custom-select-start"
                                                            aria-label="Select an option"
                                                            id="secondReductionEstimatesForFailureTimes"
                                                            value={data.secondReductionEstimatesForFailureTimes}
                                                            onChange={handleSelectChangeSeconedReduction}
                                                        >
                                                            <option selected disabled> </option>
                                                            {allGrades.map((grade) => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="percentageForSecondGrade"
                                                                name="percentageForSecondGrade"

                                                                style={{ textAlign: "center" }}
                                                                onChange={(e) => {
                                                                    setData({ ...data, percentageForSecondGrade: parseInt(e.target.value) })
                                                                }}
                                                                value={data.percentageForSecondGrade}
                                                            />
                                                            <p className="mb-0 me-2 fs-5 fw-semibold">%</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <label
                                                            className="col-lg-1 me-5 mt-1 fw-semibold fs-5"
                                                            htmlFor="thirdReductionEstimatesForFailureTimes"
                                                        >
                                                            التالته
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <select className="form-select custom-select-start"
                                                            id="thirdReductionEstimatesForFailureTimes"
                                                            value={data.thirdReductionEstimatesForFailureTimes}
                                                            onChange={handleSelectChangeThirdReduction}
                                                        >
                                                            <option selected disabled> </option>
                                                            {allGrades.map((grade) => (
                                                                <option key={grade.id} value={grade.id}>{grade.theGrade}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="percentageForThirdGrade"
                                                                name="percentageForThirdGrade"

                                                                style={{ textAlign: "center" }}
                                                                onChange={(e) => {
                                                                    setData({ ...data, percentageForThirdGrade: parseInt(e.target.value) })
                                                                }}
                                                                value={data.percentageForThirdGrade}
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
                                                        <select className="form-select" aria-label="Select an option" id="successRate" onChange={(e) => {
                                                            setData({ ...data, successRate: parseInt(e.target.value) })
                                                        }}>
                                                            <option className="fs-5 fw-semibold" selected disabled></option>
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
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="registrationForTheCourseInTheSummerTerm" checked={data.registrationForTheCourseInTheSummerTerm} value={true} onChange={(e) => {
                                                        setData({ ...data, registrationForTheCourseInTheSummerTerm: e.target.checked })
                                                    }} />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="registrationForTheCourseInTheSummerTerm">تسجيل المقرر في الترم الصيفي  </label>
                                                </div>
                                            </div>
                                            <br /> <br />
                                            <div className="col-xl-6">
                                                <div className="form-group row">
                                                    <div className="col-lg-4">
                                                        <input className="form-check-input  m-1 mt-2"
                                                            type="radio"
                                                            name="addingCourse"
                                                            id="add"
                                                            value={0}
                                                            selected={data.addingCourse === 0}
                                                            onChange={(e) => setData({ ...data, addingCourse: e.target.value })}
                                                        />
                                                        <label className="form-check-label fw-bold f-6" htmlFor="add">يضاف للمعدل التراكمي </label>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <input className="form-check-input m-1 mt-2"
                                                            type="radio"
                                                            name="addingCourse"
                                                            id="justHours"
                                                            value={1}
                                                            selected={data.addingCourse === 1}
                                                            onChange={(e) => setData({ ...data, addingCourse: e.target.value })}
                                                        />
                                                        <label className="form-check-label fw-bold f-6" htmlFor="justHours"> يضاف للساعات فقط </label>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input className="form-check-input m-1 mt-2"
                                                            type="radio"
                                                            name="addingCourse"
                                                            id="noAdd"
                                                            value={2}
                                                            selected={data.addingCourse === 2}
                                                            onChange={(e) => setData({ ...data, addingCourse: e.target.value })} />
                                                        <label className="form-check-label fw-bold f-6" htmlFor="noAdd">لا يضاف للمعدل التراكمي </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="passOrFailSubject" checked={data.passOrFailSubject} value={true} onChange={(e) => {
                                                        setData({ ...data, passOrFailSubject: e.target.checked })
                                                    }} />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="passOrFailSubject">مادة نجاح او رسوب</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="form-group row">
                                                    <div className="col-lg-3">
                                                        <input className="form-check-input
                                                          m-1 mt-2"
                                                            type="radio"
                                                            name="gender"
                                                            id="male"
                                                            value={0}
                                                            selected={data.gender === 0}
                                                            onChange={(e) => setData({ ...data, gender: e.target.value })}
                                                        />
                                                        <label className="form-check-label fw-semibold f-5" htmlFor="male">ذكور   </label>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <input className="form-check-input m-1 mt-2"
                                                            type="radio"
                                                            name="gender"
                                                            id="female"
                                                            value={1}
                                                            selected={data.gender === 1}
                                                            onChange={(e) => setData({ ...data, gender: e.target.value })}
                                                        />
                                                        <label className="form-check-label fw-semibold f-5" htmlFor="female"> اناث   </label>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input className="form-check-input m-1 mt-2"
                                                            type="radio"
                                                            name="gender"
                                                            id="maleAndFemale"
                                                            value={2}
                                                            selected={data.gender === 2}
                                                            onChange={(e) => setData({ ...data, gender: e.target.value })}
                                                        />
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
                                                <button className={` btn fs-4 fw-semibold px-4  text-white ${styles.save}`} type="submit">
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
