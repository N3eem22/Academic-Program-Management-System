import React, { Fragment , useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const ControlsPage = () => {
    const [code, setCode] = useState('');
    const [arabicName, setArabicName] = useState('');
    const [arabicSubCourseName, setArabicSubCourseName] = useState('');
    const [englishName, setEnglishName] = useState('');
    const [englishSubCourseName, setEnglishSubCourseName] = useState('');
    const [arabicCourseCode, setArabicCourseCode] = useState('');
    const [arabicSubCourseCode, setArabicSubCourseCode] = useState('');
    const [englishCourseCode, setEnglishCourseCode] = useState('');
    const [englishSubCourseCode, setEnglishSubCourseCode] = useState('');
    const [invalidData, setInvalidData] = useState(false);
    const handleChange = (event) => {
        const { value } = event.target;
        const sanitizedValue = value.replace(/\D/g, '');
        setCode(sanitizedValue);
    };

    const handleArabicNameChange = (event) => {
        const { value } = event.target;
        const arabicRegex = /^[\u0600-\u06FF\s]+$/;
        setArabicName(value);
        if (!arabicRegex.test(value)) {
                setInvalidData(true);
                if (value === '') {
                    setArabicName('');
                }
            } else {
                setArabicName(value);
                setInvalidData(false);
            }
    };
    const handleArabicSubCourseNameChange = (event) => {
        const { value } = event.target;
        const arabicRegex = /^[\u0600-\u06FF\s]+$/;
        setArabicSubCourseName(value);
        if (!arabicRegex.test(value)) {
            setInvalidData(true);
            if (value === '') {
                setArabicSubCourseName('');
            }
        } else {
            setArabicSubCourseName(value);
            setInvalidData(false);
        }
    };

    const handleEnglishNameChange = (event) => {
        let value = event.target.value;
        const englishRegex = /^[A-Za-z\s]+$/;
        // If the input contains any invalid characters or is empty, set invalidData to true
        if (!englishRegex.test(value)) {
            setInvalidData(true);
            // If the input is empty, clear the input field
            if (value === '') {
                setEnglishName('');
            }
        } else {
            // If the input is valid, update the state and set invalidData to false
            setEnglishName(value);
            setInvalidData(false);
        }
    };
    

    const handleEnglishSubCourseNameChange = (event) => {
        const { value } = event.target;
        const englishRegex = /^[A-Za-z\s]+$/;
        if (!englishRegex.test(value) ) {
            setInvalidData(true);
           if (value === '') {
            setEnglishSubCourseName('');
           }
        }
        else{
            setEnglishSubCourseName(value);
            setInvalidData(false)
        }
    };

    const handleArabicCourseCodeChange = (event) => {
        const { value } = event.target;
        const arabicNumbersRegex = /^[\u0660-\u0669]+$/;
        if (!arabicNumbersRegex.test(value) ) {
            setInvalidData(true);
            if (value === '')
            setArabicCourseCode('');
        }   
        else{
            setArabicCourseCode(value);
            setInvalidData(false)
        }
    };
    const handleArabicSubCourseCodeChange = (event) => {
        const { value } = event.target;
        const arabicNumbersRegex = /^[\u0660-\u0669]+$/;
        if (!arabicNumbersRegex.test(value) ) {
            setInvalidData(true)
            if (value === '') {
                setArabicSubCourseCode('')
            }
        }
        else{
            setArabicSubCourseCode(value);
            setInvalidData(false)
        }
    };
    const handleEnglishCourseCodeChange = (event) => {
        let value = event.target.value;
        value = value.replace(/[^0-9]/g, '');
        // If the input contains any invalid characters, set invalidData to true
        if (value !== event.target.value) {
            setInvalidData(true);
        } else {
            setEnglishCourseCode(value);
            setInvalidData(false);
        }
    };
        
    const handleEnglishSubCourseCodeChange = (event) => {
        let value = event.target.value;
        value = value.replace(/[^0-9]/g, '');
        // If the input contains any invalid characters, set invalidData to true
        if (value !== event.target.value) {
            setInvalidData(true);
        } else {
            setEnglishSubCourseCode(value);
            setInvalidData(false);
        }
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
                            {invalidData && ( // Conditionally render the paragraph if data is invalid
                                    <p className="alert alert-danger text-center  w-50 fw-bolder fs-4 ">البيانات غير صحيحه ' من فضلك ادخل بيانات صحيحه</p>
                                )}
                                <div className="form-validation">
                                    <form className="form-valide" method="post">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 col-form-label"
                                                        htmlFor="code"
                                                    >
                                                        كود الكلية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="code"
                                                            name="code"
                                                            required
                                                            value={code}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="arabicName">
                                                        اسم المقرر باللغة العربية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="arabicName"
                                                            name="arabicName"
                                                            value={arabicName}
                                                            onChange={handleArabicNameChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4  col-form-label"
                                                        htmlFor="englishName"
                                                    >
                                                        اسم المقرر باللغةالانجليزية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="englishName"
                                                            name="englishName"
                                                            value={englishName}
                                                            onChange={handleEnglishNameChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4  col-form-label"
                                                        htmlFor="arabicNameF"
                                                    >
                                                        اسم المقرر الفرعي باللغة العربية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="arabicNameF"
                                                            name="arabicNameF"
                                                            value={arabicSubCourseName}
                                                            onChange={handleArabicSubCourseNameChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4  col-form-label"
                                                        htmlFor="englishNameF"
                                                    >
                                                        اسم المقرر الفرعي باللغة الانجليزية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="englishNameF"
                                                            name="englishNameF"
                                                            value={englishSubCourseName}
                                                            onChange={handleEnglishSubCourseNameChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4  col-form-label"
                                                        htmlFor="arabicCourseCode"
                                                    >
                                                        كود المقرر باللغة العربية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="arabicCourseCode"
                                                            name="arabicCourseCode"
                                                            value={arabicCourseCode}
                                                            onChange={handleArabicCourseCodeChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">

                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 col-form-label"
                                                        htmlFor="englishCourseCode"
                                                    >
                                                        كود المقرر باللغة الانجليزية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="englishCourseCode"
                                                            name="englishCourseCode"
                                                            value={englishCourseCode}
                                                            onChange={handleEnglishCourseCodeChange}
                                                            required
                                                        />

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4  col-form-label"
                                                        htmlFor="arabicCodeF"
                                                    >
                                                        كود المقرر الفرعي باللغة العربية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="arabicCodeF"
                                                            name="arabicCodeF"
                                                            value={arabicSubCourseCode}
                                                            onChange={handleArabicSubCourseCodeChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4 col-form-label"
                                                        htmlFor="englishSubCourseCode"
                                                    >
                                                        كود المقرر الفرعي باللغة الانجليزية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="englishSubCourseCode"
                                                            name="englishSubCourseCode"
                                                            value={englishSubCourseCode}
                                                            onChange={handleEnglishSubCourseCodeChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4  col-form-label"
                                                        htmlFor="famousName"
                                                    >
                                                        اسم الشهرة<span className="text-danger">*</span>
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
                                                        className="col-lg-4  col-form-label"
                                                        htmlFor="arabicContent"
                                                    >
                                                        ملخص المحتوي باللغة العربية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="arabicContent"
                                                            name="arabicContent"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label
                                                        className="col-lg-4  col-form-label"
                                                        htmlFor="englishContent"
                                                    >
                                                        ملخص المحتوي باللغة الانجليزية<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="englishContent"
                                                            name="englishContent"
                                                            required
                                                        />
                                                    </div>
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

ControlsPage.displayName = "ControlsPage";

ControlsPage.propTypes = {};

export { ControlsPage };
