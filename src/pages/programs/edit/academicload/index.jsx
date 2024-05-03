import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TablePage } from "../../../../components/tables";
import { headers3 } from "../../../../helpers/headers";

const AcademicloadPage = () => {
  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h2 style={{ color: "red", paddingBottom: "15px" }}>
              برنامج : التثقيف بالفن
            </h2>
            <div className="inputs-card  ">
              <div className="col-md-12 ">
                <div className="card-body">
                  <div className="form-validation">
                    <form className="form-valide" action="#" method="post">
                      <div className="form-group mb-3 row col-md-6">
                        <label
                          className="col-lg-3 col-form-label"
                          htmlFor="val-username"
                        >
                          الفصل الدراسي
                          <span className="text-danger">*</span>
                        </label>

                        <div className="col-md-3">
                          <div class="input-group  ">
                            <select
                              className="form-select"
                              id="inputGroupSelect02"
                            >
                              <option value="1">الاول</option>
                              <option value="2">التاني</option>
                              <option value="3">التالت</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3 row col-md-6">
                        <label
                          className="col-lg-3 col-form-label"
                          htmlFor="val-username"
                        >
                          المستوى الدراسى <span className="text-danger">*</span>
                        </label>

                        <div className="col-md-3">
                          <div class="input-group  ">
                            <select
                              className="form-select"
                              id="inputGroupSelect02"
                            >
                              <option value="1">الاول</option>
                              <option value="2">التاني</option>
                              <option value="3">التالت</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row d-flex">
                        <div class="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-5 col-form-label"
                            htmlFor="val-number"
                          >
                            الحد الادنى للساعات{" "}
                          </label>
                          <div className="col-md-3">
                            <input type="number" class="form-control" />
                          </div>{" "}
                        </div>
                        <div class="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-6 col-form-label"
                            htmlFor="val-number"
                          >
                            استثناء الحد الادنى للساعات{" "}
                          </label>
                          <div className="col-md-3">
                            <input type="number" class="form-control" />
                          </div>{" "}
                        </div>
                      </div>
                      <div class="row d-flex">
                        <div class="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-5 col-form-label"
                            htmlFor="val-number"
                          >
                            الحد الاقصى للساعات{" "}
                          </label>
                          <div className="col-md-3">
                            <input type="number" class="form-control" />
                          </div>{" "}
                        </div>
                        <div class="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-6 col-form-label"
                            htmlFor="val-number"
                          >
                            استثناء الحد الاقصى للساعات{" "}
                          </label>
                          <div className="col-md-3">
                            <input type="number" class="form-control" />
                          </div>{" "}
                        </div>
                      </div>
                      <div class="row d-flex">
                        <div class="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-5 col-form-label"
                            htmlFor="val-number"
                          >
                            ساعات اعادة القيد{" "}
                          </label>
                          <div className="col-md-3">
                            <input type="number" class="form-control" />
                          </div>{" "}
                        </div>
                      </div>
                      <div class="row d-flex">
                        <div class="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-5 col-form-label"
                            htmlFor="val-number"
                          >
                            ساعات الانذار الاكاديمى{" "}
                          </label>
                          <div className="col-md-3">
                            <input type="number" class="form-control" />
                          </div>{" "}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="btns  d-flex justify-content-center align-items-center  mx-5 py-3">
                <button type="submit" className="btn  btn-info mx-1 ">
                  جديد
                </button>
                <button type="submit" className="btn  btn-primary mx-1 ">
                  حفظ
                </button>
              </div>
            </div>

            <TablePage headers={headers3} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AcademicloadPage.displayName = "AcademicloadPage";

AcademicloadPage.propTypes = {};

export { AcademicloadPage };
