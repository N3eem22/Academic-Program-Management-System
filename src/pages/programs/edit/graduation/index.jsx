import React, { useEffect, useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Context from "../../../../components/dropdowmitems/Context";
import axios from "axios";
import Joi from "joi";
const GraduationPage = () => {
  const [graduation, setgraduation] = useState({
    studyYears: "",
    value: "",
    rate: "",
    ratio: "",
    compulsoryCourses: "",
    summerTraining: "",
    verifyPaymentOfFees: "",
    makeSureToPassTheOptionalGroups: "",
  });
  function getGradutionData(eventinfo) {
    let myGradution = { ...graduation };
    myGradution[eventinfo.target.name] = eventinfo.target.value;
    setgraduation(myGradution);
    console.log(myGradution);
  }
  async function sendDataToApi() {
    try {
      const dataToSend = { graduationReq: graduation }; // Ensure 'graduationReq' field is included
      console.log("Sending request with payload:", dataToSend);
      const response = await axios.post(
        `https://localhost:7095/api/Graduation`,
        dataToSend
      );
      console.log("Response from API:", response.data);
    } catch (error) {
      console.error("Error sending data to API:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  }

  function submit(e) {
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
            <div className="inputs-card  ">
              <div className="card-body">
                <div className="form-validation">
                  <form
                    className="form-valide"
                    action=""
                    method="post"
                    onSubmit={submit}
                  >
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="form-group d-flex">
                          <div className="my-3 ">
                            <input
                              onChange={getGradutionData}
                              className="form-check-input ms-3 mt-2 "
                              type="radio"
                              name="value"
                              id="ratio"
                              value="نسبه"
                            />
                            <label
                              className="form-check-label fw-semibold fs-6 "
                              htmlFor="value"
                            >
                              نسبه{" "}
                            </label>

                            <input
                              onChange={getGradutionData}
                              className="form-check-input  mx-3 me-5  mt-2"
                              type="radio"
                              name="value"
                              id="rate"
                              value="معدل"
                            />
                            <label
                              className="form-check-label fw-semibold fs-6  "
                              htmlFor="value"
                            >
                              معدل{" "}
                            </label>

                            <label
                              className="form-check-label   fw-semibold fs-5 me-4 "
                              htmlFor="value"
                            >
                              التخرج
                            </label>
                          </div>

                          <div className="col-md-2 mx-4 my-3 me-5  pe-3">
                            <input
                              onChange={getGradutionData}
                              type="number"
                              className="form-control "
                              id="value"
                              name="value"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3">
                          <label
                            className="form-check-label   fw-semibold fs-5 "
                            htmlFor="compulsoryCourses"
                          >
                            المقررات الاجبارية{" "}
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            onChange={getGradutionData}
                            className="form-check-input ms-3  "
                            type="radio"
                            name="compulsoryCourses"
                            id="compulsoryCourses"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6 "
                            htmlFor="compulsoryCourses"
                          >
                            عدم التاكد من النجاح
                          </label>

                          <input
                            onChange={getGradutionData}
                            className="form-check-input  mx-3 me-5 "
                            type="radio"
                            name="compulsoryCourses"
                            id="compulsoryCourses"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6  "
                            htmlFor="compulsoryCourses"
                          >
                            التاكد من النجاح
                          </label>
                        </div>
                      </div>

                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3">
                          <h5></h5>
                          <label
                            className="form-check-label   fw-semibold fs-5 "
                            htmlFor="successInEveryCourse"
                          >
                            النجاح فى جميع المقررات التى درسها{" "}
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            onChange={getGradutionData}
                            className="form-check-input ms-3  "
                            type="radio"
                            name="successInEveryCourse"
                            id="successInEveryCourse"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6 "
                            htmlFor="successInEveryCourse"
                          >
                            عدم التاكد من النجاح
                          </label>

                          <input
                            onChange={getGradutionData}
                            className="form-check-input  mx-3 me-5 "
                            type="radio"
                            name="successInEveryCourse"
                            id="successInEveryCourse"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6  "
                            htmlFor="successInEveryCourse"
                          >
                            التاكد من النجاح
                          </label>
                        </div>
                      </div>

                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3">
                          <label
                            className="form-check-label   fw-semibold fs-5 "
                            htmlFor="passingMilitaryEducation"
                          >
                            اجتياز التربية العسكرية{" "}
                          </label>
                        </div>
                        <div className="col-md-6">
                          <input
                            onChange={getGradutionData}
                            className="form-check-input ms-3  "
                            type="radio"
                            name="passingMilitaryEducation"
                            id="passingMilitaryEducation"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6 "
                            htmlFor="anyDetails"
                          >
                            عدم التأكد من اجتياز التربية العسكرية
                          </label>

                          <input
                            onChange={getGradutionData}
                            className="form-check-input  mx-3 me-5 "
                            type="radio"
                            name="passingMilitaryEducation"
                            id="passingMilitaryEducation"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6  "
                            htmlFor="passingMilitaryEducation"
                          >
                            التأكد من اجتياز التربية العسكرية{" "}
                          </label>
                        </div>
                      </div>

                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3">
                          <label
                            className="form-check-label   fw-semibold fs-5 "
                            htmlFor="summerTraining"
                          >
                            التدريب الصيفي{" "}
                          </label>
                        </div>
                        <div className="col-md-6">
                          <input
                            onChange={getGradutionData}
                            className="form-check-input ms-3  "
                            type="radio"
                            name="summerTraining"
                            id="summerTraining"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6 "
                            htmlFor="summerTraining"
                          >
                            عدم التأكد من إجتياز التدريب الصيفي{" "}
                          </label>

                          <input
                            onChange={getGradutionData}
                            className="form-check-input  mx-3 me-5 "
                            type="radio"
                            name="summerTraining"
                            id="summerTraining"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6  "
                            htmlFor="summerTraining"
                          >
                            التأكد من إجتياز التدريب الصيفي
                          </label>
                        </div>
                      </div>

                      <div className="form-group  mt-4 d-flex  ">
                        <div className="col-md-3 form-group   fw-semibold fs-5  ">
                          <label
                            className="col-form-label"
                            htmlFor="verifyPaymentOfFees"
                          >
                            التاكد من سداد الرسوم
                          </label>
                        </div>
                        <div className="col-md-3">
                          <div className="input-group mb-3 ">
                            <select
                              className="form-select"
                              id="verifyPaymentOfFees"
                              name="verifyPaymentOfFees"
                            >
                              <option value="1">
                                ضرورة سداد الرسوم قبل التخرج
                              </option>
                              <option value="2">
                                عدم ضرورة سداد الرسوم قبل التخرج
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group  mt-2 d-flex  ">
                        <div className="col-md-3 form-group   fw-semibold fs-5  ">
                          <label
                            className="col-form-label"
                            htmlFor="makeSureToPassTheOptionalGroups"
                          >
                            التاكد من اجتياز المجموعات الاختياريه{" "}
                          </label>
                        </div>
                        <div className="col-md-3">
                          <div className="input-group mb-3 ">
                            <select
                              className="form-select"
                              id="makeSureToPassTheOptionalGroups"
                              name="makeSureToPassTheOptionalGroups"
                            >
                              <option value="1">
                                المجموعات التي درس منها الطالب{" "}
                              </option>
                              <option value="2">
                                كل المجموعات الاختياريه{" "}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <h3 style={{ color: "red" }}>مرتبه الشرف </h3>

                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3 fw-semibold fs-5">
                          <label
                            className="col-form-label"
                            htmlFor="determineTheRankBasedOn"
                          >
                            تحدد المرتبة بناءا علي
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-check-input ms-3  "
                            type="radio"
                            name="rate"
                            id="rate"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6 "
                            htmlFor="determineTheRankBasedOn"
                          >
                            المعدل{" "}
                          </label>

                          <input
                            className="form-check-input  mx-3 me-5 "
                            type="radio"
                            name="ratio"
                            id="ratio"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6  "
                            htmlFor="determineTheRankBasedOn"
                          >
                            النسبه{" "}
                          </label>
                        </div>
                      </div>
                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3">
                          <h5>معدل/نسبة المرتبة </h5>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-check-input ms-3  "
                            type="radio"
                            name="choose"
                            id="anyDetails"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6 "
                            htmlFor="anyDetails"
                          >
                            الفصلى
                          </label>

                          <input
                            className="form-check-input  mx-3 me-5 "
                            type="radio"
                            name="choose"
                            id="anyDetails"
                            value="ايا من التفاصيل"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6  "
                            htmlFor="anyDetails"
                          >
                            التراكمى
                          </label>
                        </div>
                      </div>

                      <div className="form-group  mt-2 d-flex  ">
                        <table>
                          <tr className="col-md-6 form-group   fw-semibold fs-5  ">
                            <td>
                              <label
                                className="col-form-label"
                                htmlFor="val-number"
                              >
                                قيمة المعدل/النسبه للمرتبة
                              </label>
                            </td>
                            <div className="input-group mb-3 ">
                              <Context />
                            </div>
                            {/* </td> */}
                          </tr>
                        </table>
                      </div>

                      <div className="form-group  mt-2 d-flex ">
                        <input
                          className="form-check-input ms-2  mt-2 fw-bold fs-5  track-order-change label-to-bold-if-checked"
                          type="checkbox"
                          name="comparingCumulativeAverageForEachYear"
                          id="comparingCumulativeAverageForEachYear"
                        />

                        <div className="form-check">
                          <label
                            className="form-check-label   fw-semibold fs-5 "
                            htmlFor="comparingCumulativeAverageForEachYear"
                          >
                            مقارنة المعدل التراكمى/النسبه التراكميه للعام
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-6 ">
                        <div className="form-group d-flex mt-2">
                          <div className="col-md-7 form-group   fw-semibold fs-5  ">
                            <label
                              className="col-form-label"
                              htmlFor="studyYears"
                            >
                              عدد سنوات الدراسه للحصول علي المرتبه
                            </label>
                          </div>

                          <div className="col-md-2  my-2 ">
                            <input
                              onChange={getGradutionData}
                              type="number"
                              className="form-control "
                              name="studyYears"
                              id="studyYears"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3  fw-semibold fs-5  ">
                          <label
                            className="col-form-label"
                            htmlFor="levelsTobePassed"
                          >
                            النجاح فى جميع المقررات التى درسها
                          </label>
                        </div>

                        <div className="col-md-4 mt-3">
                          <input
                            onChange={getGradutionData}
                            className="form-check-input ms-3  "
                            type="radio"
                            name="successInEveryCourse"
                            id="successInEveryCourse"
                            value="                            عدم التاكد من النجاح
"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6 "
                            htmlFor="successInEveryCourse"
                          >
                            عدم التاكد من النجاح
                          </label>

                          <input
                            onChange={getGradutionData}
                            className="form-check-input  mx-3 me-5 "
                            type="radio"
                            name="successInEveryCourse"
                            id="successInEveryCourse"
                            value="                            التاكد من النجاح
"
                          />
                          <label
                            className="form-check-label fw-semibold fs-6  "
                            htmlFor="successInEveryCourse"
                          >
                            التاكد من النجاح
                          </label>
                        </div>
                      </div>

                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3 mt-4  fw-semibold fs-5">
                          <label
                            className="col-form-label"
                            htmlFor="levelsTobePassed"
                          >
                            المستويات التى يتم استثناءها{" "}
                          </label>
                        </div>
                        <div className="col-md-2 ">
                          <select
                            id="levelsTobePassed"
                            name="levelsTobePassed"
                            class="form-select"
                            multiple
                            aria-label="Multiple select example"
                          >
                            <option selected>---</option>
                            <option value="1">الاول</option>
                            <option value="2">العاشر </option>
                            <option value="3">100</option>{" "}
                            <option value="4">200 </option>
                            <option value="5">300</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3 mt-4  fw-semibold fs-5">
                          <label
                            className="col-form-label"
                            htmlFor="semestersTobePssed"
                          >
                            الفصول التى يتم استثناءها{" "}
                          </label>
                        </div>
                        <div className="col-md-2 ">
                          <select
                            id="semestersTobePssed"
                            name="semestersTobePssed"
                            onChange={getGradutionData}
                            class="form-select"
                            multiple
                            aria-label="Multiple select example"
                          >
                            <option selected>---</option>
                            <option value="1">الاول</option>
                            <option value="2">العاشر </option>
                            <option value="3">100</option>{" "}
                            <option value="4">200 </option>
                            <option value="5">300</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group  mt-4 d-flex  ">
                        <div className="col-md-3 form-group   fw-semibold fs-5  ">
                          <label
                            className="col-form-label"
                            htmlFor="theMinimumGradeForTheCourseId"
                          >
                            الحد الأدنى للتقدير المقرر
                          </label>
                        </div>
                        <div className="col-md-1">
                          <div className="input-group mb-3 ">
                            <select
                              onChange={getGradutionData}
                              className="form-select"
                              id="theMinimumGradeForTheCourseId"
                              name="theMinimumGradeForTheCourseId"
                            >
                              <option value="1">--- </option>
                              <option value="2">أ </option>
                              <option value="3">أ- </option>
                              <option value="4">ب </option>
                              <option value="5">ب- </option>
                              <option value="6">ب+ </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btns  d-flex justify-content-center align-items-center  mx-5 py-3">
                      <button type="submit" className="btn  btn-info mx-1 ">
                        حفظ
                      </button>
                      <button type="submit" className="btn  btn-info mx-1 ">
                        تعديل
                      </button>
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

GraduationPage.displayName = "GraduationPage";

GraduationPage.propTypes = {};

export { GraduationPage };
