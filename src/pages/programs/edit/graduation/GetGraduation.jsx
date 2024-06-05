import React, { useEffect, useState, Fragment  ,useReducer} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";
import axios from "axios";
import { useGlobalState } from "./index";
import Context from "../../../../components/dropdowmitems/Context";


const GetGraduation = ({data}) => {
const [graduation , setGraduation] = useState([]);
useEffect(() => {

      setGraduation(data);
      //console.log(globalState);
    }, [data]);
    useEffect(() => {

       //console.log(graduation);
      
      }, [graduation]);
      const { globalState, setGlobalState } = useGlobalState();
    
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
                   
                  >
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="form-group d-flex">
                          <div className="my-3 ">
                           
                          {
  graduation.ratio && (
    <label
      className="form-check-label fw-semibold fs-5 me-4"
      htmlFor="value"
    >
      نسبه
    </label>
  )
}

{
  graduation.rate && (
    <label
      className="form-check-label fw-semibold fs-5 me-4"
      htmlFor="value"
    >
      معدل
    </label>
  )
}


                            <label
                              className="form-check-label   fw-semibold fs-5 me-4 "
                              htmlFor="value"
                            >
                              التخرج
                            </label>
                          </div>

                          <div className="col-md-2 mx-4 my-3 me-5  pe-3">
                            <input
                              value={graduation.value}
                              placeholder={graduation.value}
                              type="number"
                              className="form-control"
                              id="value"
                              name="value"
                              disabled
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
                        <div className="col-md-4 bold">
                          <input
                            className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`}
                            type="text"
                            name="compulsoryCourses"
                            id="compulsoryCourses"
                            value={graduation.compulsoryCourses === true ? "التاكد من النجاح" : "عدم التاكد من النجاح" }
                            //placeholder={graduation.compulsoryCourses === true ? "التاكد من النجاح" : "عدم التاكد من النجاح" }
                            disabled
                          />
                          
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
                            className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`}                            
                            type="text"
                            name="successInEveryCourse"
                            id="successInEveryCourse"
                            value={graduation.successInEveryCourse === true ? "التاكد من النجاح" : "عدم التاكد من النجاح" }
                            disabled
                          />               
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
                           className={`form m-1 mt-2 ${styles['bold-and-large-text-input']}`}
                            type="text"
                            name="passingMilitaryEducation"
                            id="passingMilitaryEducation"
                            disabled
                            value={graduation.passingMilitaryEducation === true ? "التأكد من اجتياز التربية العسكرية": " عدم التأكد من اجتياز التربية العسكرية"}
                          />
                        
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
                        <div className="col-md-9">
                          <input
                           style={{ width: '50%' }} 
                           className={`form m-1 mt-2 ${styles['bold-and-large-text-input']} `}
                            type="text"
                            name="summerTraining"
                            disabled
                            id="summerTraining"
                            value={graduation.summerTraining === true ? "التأكد من إجتياز التدريب الصيفي" : "عدم التأكد من إجتياز التدريب الصيفي"}
                          />
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
                              value={()=>{graduation.verifyPaymentOfFees === 0 ? " ضرورة سداد الرسوم قبل التخرج" : "عدم ضرورة سداد الرسوم قبل التخرج"}}
                                disabled
                             >
                              <option value={0} >
                                ضرورة سداد الرسوم قبل التخرج
                              </option>
                              <option value={1} >
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
                              disabled                              >
                              <option value={0} selected={()=>{graduation.makeSureToPassTheOptionalGroups === 0 } }>
                                المجموعات التي درس منها الطالب{" "}
                              </option>
                              <option value={1}  selected={()=>{graduation.makeSureToPassTheOptionalGroups === 1 } }>
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
                             className={`form m-1 mt-2 ${styles['bold-and-large-text-input']} `}
                            type="text"
                            name="determineTheRankBasedOn"
                            id="determineTheRankBasedOn"
                            value={graduation.determineTheRankBasedOn === true ? "المعدل": "النسبه"}
                            disabled
                            />
                        </div>
                      </div>
                      <div className="form-group  mt-4 d-flex ">
                        <div className="col-md-3">
                          <h5>معدل/نسبة المرتبة </h5>
                        </div>
                        <div className="col-md-4">
                          <input
                            className={`form m-1 mt-2 ${styles['bold-and-large-text-input']} `}
                            type="text"
                            name="rateBase"
                            id="rateBase"
                            value={graduation.rateBase === 0 ? "الفصلى" : "التراكمى"}
                            disabled
                          />                         
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
                              {/* <Context /> */}
                            </div>
                           
                          </tr>
                        </table>
                      </div>
                
                  

                  

                      <div className="form-group  mt-2 d-flex ">
                        <input
                          className="form-check-input ms-2  mt-2 fw-bold fs-5  track-order-change label-to-bold-if-checked"
                          type="checkbox"
                          name="comparingCumulativeAverageForEachYear"
                          id="comparingCumulativeAverageForEachYear"
                          checked={graduation.comparingCumulativeAverageForEachYear === true}
                          disabled
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
                            value={graduation.studyYears}
                            type="text"
                            disabled
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
                            value={graduation.successInEveryCourse === true ? "التاكد من النجاح" : " عدم التاكد من النجاح"}
                            className={`form m-1 mt-2 ${styles['bold-and-large-text-input']} `}
                            type="text"
                            name="successInEveryCourse"
                            id="successInEveryCourse"
                            disabled
                          />
                          
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
            
                          
                          <input
                            value={graduation.graduationLevels}
                            className={`form m-1 mt-2 ${styles['bold-and-large-text-input']} `}
                            type="text"
                            name="levelsTobePassed"
                            id="levelsTobePassed"
                            disabled
                          />
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
                        
                              <input
                            value={graduation.graduationSemesters}
                            className={`form m-1 mt-2 ${styles['bold-and-large-text-input']} `}
                            type="text"
                            name="levelsTobePassed"
                            id="levelsTobePassed"
                            disabled
                          />

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
                    
                        <input
                            value={graduation.theMinimumGradeForTheCourse}
                            className={`form m-1 mt-2 ${styles['bold-and-large-text-input']} `}
                            type="text"
                            name="semestersTobePssed"
                            id="semestersTobePssed"
                            disabled
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btns  d-flex justify-content-center align-items-center  mx-5 py-3">
                                                    {  globalState.State !== "Get" && <button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}`} type="submit">
                                                        <i className="fa-regular fa-bookmark"></i> حفظ
                                                    </button>}
                                                    { (globalState.State !== "Get") && <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={()=> {dispatch({type : "Get"})}}>
                                                        <i className="fa-solid fa-lock"></i> غلق
                                                    </button>}
                                                   
                                                        <button className={`btn fs-4 mx-3 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={()=>{
                                                        
                                                        setGlobalState({...globalState , State : "Update"});
                                                        }}>
                                                        <i className="fa-solid fa-lock-open"></i> تعديل
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

GetGraduation.displayName = "GetGraduation";

GetGraduation.propTypes = {};

export { GetGraduation };
