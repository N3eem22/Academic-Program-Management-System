import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";

const GpaPage = () => {
    const [showCheckbox1, setShowCheckbox1] = useState(false);
    const [showCheckbox2, setShowCheckbox2] = useState(false);

    const handleRadioChange = (event) => {
        if (event.target.value === "الاعلى") {
            setShowCheckbox1(true);
            setShowCheckbox2(false);
        } else if (event.target.value === "الاخير") {
            setShowCheckbox1(false);
            setShowCheckbox2(true);
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

                                <div className="form-validation">
                                    <form className="form-valide" method="post">
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
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="Maximum">
                                                        بتقدير اقصي
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select custom-select-start" id="Maximum">
                                                            <option selected disabled>  </option>
                                                            <option value="option1">أ </option>
                                                            <option value="option2">ب</option>
                                                        </select>
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
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="replaceCourses">
                                                        استبدال المقررات
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
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="totalScores">
                                                        مجموع الدرجات
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="totalScores">
                                                            <option selected disabled>  </option>
                                                            <option value="تقريب">تقريب </option>
                                                            <option value="جبر">جبر</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateRatio">
                                                        كيفية حساب النسبة
                                                    </label>
                                                    <div className="col-lg-4">
                                                        <select className="form-select fs-5 custom-select-start" id="calculateRatio">
                                                            <option selected disabled>  </option>
                                                            <option value="الدرجة المكتسبة مقسومة علي اجمالي عدد الدرجات * 100">الدرجة المكتسبة مقسومة علي اجمالي عدد الدرجات * 100</option>
                                                            <option value="الدرجة المكتسبة مقسومة علي اجمالي عدد الدرجات">الدرجة المكتسبة مقسومه علي اجمالي عدد الدرجات</option>
                                                            <option value="المعدل التراكمي المكتسب مقسوم علي الاجمالي">المعدل التراكمي المكتسب مقسوم علي الاجمالي</option>
                                                            <option value="معادلة خاصه علوم">معادلة خاصه علوم</option>
                                                            <option value="معادلة خاصه (اكاديميه طيبه)">معادلة خاصه (اكاديميه طيبه)</option>
                                                            <option value="حساب النسبة مقربة">حساب النسبة مقربة</option>
                                                            <option value="الدرجة الفعلية مقسومة علي اجمالي الدرجات الفعلية * 100">الدرجة الفعلية مقسومة علي اجمالي الدرجات الفعلية * 100</option>
                                                            <option value="الدرجة الفعلية مقسومة علي اجمالي الساعات الفعلية">الدرجة الفعلية مقسومة علي اجمالي الساعات الفعلية</option>
                                                            <option value="حساب النسبة بناء علي التقديرات العامة">حساب النسبة بناء علي التقديرات العامة</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="multiplyHours">
                                                        ضرب الساعات في درجات الطالب
                                                    </label>
                                                    <div className="col-lg-4">
                                                        <select className="form-select fs-5 custom-select-start" id="multiplyHours">
                                                            <option selected disabled>  </option>
                                                            <option value="الجمع بدون ضرب الدرجة بساعات المقرر">الجمع بدون ضرب الدرجة بساعات المقرر</option>
                                                            <option value="الجمع بضرب الدرجة بساعات المقرر">الجمع بضرب الدرجة بساعات المقرر</option>
                                                            <option value="القسمه علي الساعات بدون ضرب"> القسمه علي الساعات بدون ضرب</option>
                                                            <option value="الجمع بضرب نسبه الطالب في المقرر بساعات المقرر">الجمع بضرب نسبه الطالب في المقرر بساعات المقرر</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateTermAverage">
                                                        حساب ترم المعادلة في المعدل
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="calculateTermAverage" id="enterAverage" value=" عدم دخول فى الحساب " />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="enterAverage">عدم الدخول فى الحساب  </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="calculateTermAverage" id="enterAverage" value=" دخول فى الحساب" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="enterAverage"> دخول فى الحساب</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateTermHours">
                                                        حساب ترم المعادلة في الساعات المكتسبة
                                                    </label>
                                                    <div class="col-lg-6 ">
                                                        <div className="form-group mb-3 row">
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="calculateTermHours" id="enterHours" value=" عدم دخول فى الحساب " />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="enterHours">عدم الدخول فى الحساب  </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="calculateTermHours" id="enterHours" value=" دخول فى الحساب" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="enterHours"> دخول فى الحساب</label>
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
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="rateRounding" id="rate" value=" عدم دخول فى الحساب " />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="rate">عدم تقريب المعدل    </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="rateRounding" id="rate" value=" دخول فى الحساب" />
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
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="numberRate"
                                                                    name="numberRate"
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
                                                                <input className="form-check-input  m-1 mt-2" type="radio" name="rateReduction" id="reduction" value=" عدم دخول فى الحساب " />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="reduction">عدم تخفيض المعدل</label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input className="form-check-input m-1 mt-2" type="radio" name="rateReduction" id="reduction" value=" دخول فى الحساب" />
                                                                <label className="form-check-label fw-semibold fs-5" htmlFor="reduction">تخفيض المعدل</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="addCourse">
                                                        أقصى عدد لإضافة للمقررات الرسوب(بدون نجاح)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="addCourse">
                                                            <option selected disabled>  </option>
                                                            <option value="اضافه الجميع">اضافه الجميع </option>
                                                            <option value="عدم اضافه مقررات">عدم اضافه مقررات</option>
                                                            <option value="اضافه مقرر"> اضافه مقرر</option>
                                                            <option value="اضافه مقرران"> اضافه مقرران</option>
                                                            <option value="اضافه 3 مقررات"> اضافه 3 مقررات</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="deleteCourse">
                                                        حذف مقررات الرسوب (بعد نجاح)
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="deleteCourse">
                                                            <option selected disabled>  </option>
                                                            <option value="حق مقرر واحد من المقام">حذف مقرر واحد من المقام </option>
                                                            <option value="حذف جميع المقررات">حذف جميع المقررات</option>
                                                            <option value="عدم حذف المقررات"> عدم حذف المقررات </option>
                                                            <option value="حساب مقرر في المقام">حساب مقرر في المقام</option>
                                                            <option value="حساب مقرران من المقام"> حساب مقرران في المقام</option>
                                                            <option value="حساب 3 مقرات من المقام"> حساب 3 مقررات في المقام</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="maxCumulative">
                                                        حد الأقصى للمعدل التراكمى
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="maxCumulative">
                                                            <option selected disabled>  </option>
                                                            <option value="GPA 3.5">GPA 3.5</option>
                                                            <option value="GPA 4">GPA 4</option>
                                                            <option value="GPA 5">GPA 5</option>
                                                            <option value="GPA 6">GPA 6</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateCumulativeGrade">
                                                        حساب التقدير التراكمى
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="calculateCumulativeGrade">
                                                            <option selected disabled>  </option>
                                                            <option value="بناء علي المعدل">بناء علي المعدل</option>
                                                            <option value="بناء علي النسبة">بناء علي النسبة</option>
                                                            <option value="بناء علي المعدل وفقا للتقديرات العامة">بناء علي المعدل وفقا للتقديرات العامة</option>
                                                            <option value=">بناء علي النسبة وفقا للتقديرات العام">بناء علي النسبة وفقا للتقديرات العامة</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="calculateTerm">
                                                        كيفية حساب المعدل
                                                    </label>
                                                    <div className="col-lg-2">
                                                        <select className="form-select fs-5 custom-select-start" id="calculateTerm">
                                                            <option selected disabled>  </option>
                                                            <option value="بالقسمة علي الساعات الفعلية">بالقسمة علي الساعات الفعلية  </option>
                                                            <option value="بالقسمه علي الساعات المكتسبة">بالقسمه علي الساعات المكتسبة  </option>
                                                            <option value="قسمة مجموع الدرجات المكتسبة علي اجمالي المجموع الفعلي مضروبا * 0.25">قسمة مجموع الدرجات المكتسبة علي اجمالي المجموع الفعلي مضروبا * 0.25</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <span >
                                                    <div className="form-group  row">
                                                        <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="numberRatePoints">
                                                            عدد ارقام تقريب النقاط
                                                        </label>
                                                        <div class="col-lg-2 ">
                                                            <div class="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="numberRatePoints"
                                                                    name="numberRatePoints"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-md-12">
                                                <span >
                                                    <div className="form-group  row">
                                                        <label className="col-lg-4 fw-semibold fs-5 col-form-label" htmlFor="numberRatePercentage">
                                                            عدد ارقام تقريب النسبة
                                                        </label>
                                                        <div class="col-lg-2 ">
                                                            <div class="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="numberRatePercentage"
                                                                    name="numberRatePercentage"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>


                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="annualRate" value="تسجيل المقرر في الترم الصيفى " />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="annualRate">عدم استثناء الصيفى فى حساب المعدل السنوى</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="rateAppear" value="تسجيل المقرر في الترم الصيفى " />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="rateAppear">عدم ظهور المعدل التراكمى فى بورتال طالب تقديرات المواد</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="cumulativePercentageAppear" value="تسجيل المقرر في الترم الصيفى " />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="cumulativePercentageAppear">ظهور النسبه الفصليه و التراكمية فى بورتال الطالب تقديرات المواد</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="quarterlyGrade" value="تسجيل المقرر في الترم الصيفى " />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="quarterlyGrade">اظهار التقدير الفصلى والتراكمى فى بورتال الطالب تقديرات المواد</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculateFail" value="تسجيل المقرر في الترم الصيفى " />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="calculateFail">حساب نقاط تقديرات الرسوب</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <p className="text-decoration-underline fs-5 fw-bolder" >المعدل الفصلي :</p>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check form-check-inline d-flex">
                                                    <input className="form-check-input mt-2 fs-5" type="checkbox" id="calculateFailAfterFirst" value="تسجيل المقرر في الترم الصيفى " />
                                                    <label className="fw-semibold fs-5 form-check-label mx-5 mt-0" htmlFor="calculateFailAfterFirst">حساب مرات الرسوب بعد المره الاولي في المعدل الفصلي</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-11">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-5 fw-semibold fs-5 col-form-label" htmlFor="calculateTermRate">
                                                        كيفية حساب المعدل الفصلي
                                                    </label>
                                                    <div className="col-lg-3">
                                                        <select className="form-select fs-5 custom-select-start" id="calculateTermRate">
                                                            <option selected disabled>  </option>
                                                            <option value="بالقسمة علي الساعات الفعلية">بالقسمة علي الساعات الفعلية  </option>
                                                            <option value="بالقسمه علي الساعات المكتسبة">بالقسمه علي الساعات المكتسبة  </option>
                                                            <option value="قسمة مجموع الدرجات المكتسبة علي اجمالي المجموع الفعلي مضروبا * 0.25">قسمة مجموع الدرجات المكتسبة علي اجمالي المجموع الفعلي مضروبا * 0.25</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row justify-content-center text-center">


                                                <div className="col-md-12">
                                                    <button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}`} type="button">
                                                        <i className="fa-regular fa-bookmark"></i> حفظ
                                                    </button>
                                                    <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button">
                                                        <i className="fa-solid fa-lock"></i> غلق
                                                    </button>
                                                </div>

                                                {/* etb2a a3ml button fat7  */}


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
