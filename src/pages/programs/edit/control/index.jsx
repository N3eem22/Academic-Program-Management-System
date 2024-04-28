import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";
const ControlPage = () => {
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

                                                <div className="form-group  row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="numberRate">
                                                        عدد ارقام تقريب المعدل
                                                    </label>
                                                    <div class="col-2 ">
                                                        <div class="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="numberRate"
                                                                name="numberRate"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-1" ><p className="fw-semibold fs-5" >درجة</p></div>
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
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="fc" value=" استثناء من تقديرات التخفيض تقدير fc" />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="fc"> استثناء من تقديرات التخفيض تقدير fc</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-check form-check-inline d-flex ">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="reductionRate" value="احتساب تقدير الموازنة من تقديرات التخفيض" />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="reductionRate">احتساب تقدير الموازنة من تقديرات التخفيض</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="grade">
                                                        الدرجة
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select custom-select-start" aria-label="Select an option" id="grade">
                                                            <option selected disabled>  </option>
                                                            <option value="تقريب"> تقريب</option>
                                                            <option value="جبر">جبر</option>
                                                            <option value="تقريب غير عادي">تقريب غير عادي</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input fs-5" type="checkbox" id="studentPlacement" value="تنسيب الطلاب في المقرر" />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="studentPlacement">تنسيب الطلاب في المقرر</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="replaceCourses">
                                                        تقدير الراسب النظري
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="replaceCourses">
                                                            <option selected disabled>  </option>
                                                            <option value="option1">نعم </option>
                                                            <option value="option2">لا</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className={`col-lg-4 fw-semibold fs-5 col-form-label ${styles.label}`} htmlFor="failRate" style={{ color: "red" }}>
                                                        تقديرات الرسوب باللائحة
                                                        <span className={styles.hoverText}>تقديرات الرسوب المتوقعة هي (ر,غ,م,مح,غ,NP,رن)</span>
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="failRate">
                                                            <option selected disabled>  </option>
                                                            <option value="أ">أ </option>
                                                            <option value="ب">ب</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>




                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="rateReduction">
                                                        تقريب درجة الرسوب النظري
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="roundingDegree" id="roundingDegree" value=" عدم دخول فى الحساب " />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="roundingDegree">تقريب الدرجة  </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="roundingDegree" id="notRoundingDegree" value=" دخول فى الحساب" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="notRoundingDegree">عدم تقريب الدرجة</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="failRate">
                                                        تفاصيل درجات الرسوب النظري
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="failRate">
                                                            <option selected disabled>  </option>
                                                            <option value="منتصف الفصل ">منتصف الفصل  </option>
                                                            <option value="منتصف الفصل 2 ">منتصف الفصل 2 </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="rateReduction">
                                                        اختيار تفاصيل الرسوب النظري بناء علي
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="choose" id="allDetails" value="كل التفاصيل" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="allDetails">كل التفاصيل</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="choose" id="anyDetails" value="ايا من التفاصيل" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="anyDetails">ايا من التفاصيل</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="choose" id="sumDetails" value=" عدم دخول فى الحساب " />
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
                                                    <label className="col-lg-1 fw-semibold fs-5 col-form-label" htmlFor="rateCalculate">
                                                        حساب تقدير
                                                    </label>
                                                    <div className="col-lg-1">
                                                        <select className="form-select fs-5 custom-select-start" id="rateCalculate">
                                                            <option selected disabled>  </option>
                                                            <option value="غائب  ">غائب   </option>
                                                            <option value=" راسب  ">راسب   </option>
                                                        </select>
                                                    </div>
                                                    <label className="col-lg-3 fw-semibold fs-5 col-form-label" htmlFor="inCaseAbsenceInDetailedGrades">
                                                        فى حالة غياب فى الدرجات التفصيلية
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="inCaseAbsenceInDetailedGrades">
                                                            <option selected disabled>  </option>
                                                            <option value="منتصف الفصل  ">منتصف الفصل   </option>
                                                            <option value=" منتصف الفصل 2  ">منتصف الفصل 2   </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-2 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="allOrAny" id="all" value="كلها" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="all">كلها </label>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="allOrAny" id="any" value="ايا منها" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="any">ايا منها </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="charDetails">
                                                        تفاصيل الحروف الاستثانئية
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="charDetails">
                                                            <option selected disabled>  </option>
                                                            <option value="منتصف الفصل ">منتصف الفصل  </option>
                                                            <option value="منتصف الفصل 2 ">منتصف الفصل 2 </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="rateReduction">
                                                        اضافه درجات استثانئية
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="addExceptionGrades" id="addExceptionGrades" value=" عدم دخول فى الحساب " />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="addExceptionGrades">اضافة درجة</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="addExceptionGrades" id="notAddExceptionGrades" value=" دخول فى الحساب" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="notAddExceptionGrades">عدم اضافة درجة </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="exceptionLettersEstimate">
                                                        تقديرات الحرف الاستثنائية
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="exceptionLettersEstimate" onChange={handleSelectChange} value={selectedValue}>
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

                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="notDefinedInTheList">
                                                        تقديرات غير معرفة باللائحة
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="notDefinedInTheList">
                                                            <option selected disabled>  </option>
                                                            <option value="منتصف الفصل ">منتصف الفصل  </option>
                                                            <option value="منتصف الفصل 2 ">منتصف الفصل 2 </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="successRate">
                                                        تقديرات النجاح (لمواد النجاح والرسوب)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="successRate">
                                                            <option selected disabled>  </option>
                                                            <option value="P">P</option>
                                                            <option value="S">S</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="failRating">
                                                        تقديرات الرسوب (لمواد النجاح والرسوب)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="failRating">
                                                            <option selected disabled>  </option>
                                                            <option value="NP ">NP</option>
                                                            <option value=" U  ">U</option>
                                                            <option value="F">F</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="deprivationBeforeExam">
                                                        تقدير الحرمان قبل الامتحان
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="deprivationBeforeExam">
                                                            <option selected disabled>  </option>
                                                            <option value="أ">أ</option>
                                                            <option value="د">د</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="deprivationAfterExam">
                                                        تقدير الحرمان بعد الامتحان
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="deprivationAfterExam">
                                                            <option selected disabled>  </option>
                                                            <option value="أ">أ</option>
                                                            <option value="د">د</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="successRateNotAdded">
                                                        تقدير الساعات لا يضاف للساعات ولا للمعدل
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="successRateNotAdded">
                                                            <option selected disabled></option>
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
                                                    <button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}`} type="button">
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
