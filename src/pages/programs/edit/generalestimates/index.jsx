import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TablePage } from "../../../../components/tables";
import { headers4 } from "../../../../helpers/headers";

const GeneralestimatesPage = () => {
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
              <div className="col-md-6 ">
                <div className="card-body">
                  <div className="form-validation">
                    <form className="form-valide" action="#" method="post">
                      <div className="row">
                        <div className=" d-flex">
                          <div className="col-md-4 ">
                            <div className="form-group mb-3 row">
                              <label
                                className="col-lg-5 col-form-label"
                                htmlFor="val-username"
                              >
                                التقدير<span className="text-danger">*</span>
                              </label>

                              <div className="col-md-6">
                                <div class="input-group  ">
                                  <select
                                    className="form-select"
                                    id="inputGroupSelect02"
                                  >
                                    <option value="1">F</option>
                                    <option value="2">A</option>
                                    <option value="3">B</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div />
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                className="col-lg-5 col-form-label"
                                htmlFor="val-number"
                              >
                                التقدير المكافئ{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="col-md-6">
                                <div class="input-group mb-3 ">
                                  <select
                                    class="form-select"
                                    id="inputGroupSelect02"
                                  >
                                    <option value="1">راسب</option>
                                    <option value="2">امتياز</option>
                                    <option value="3">جيدجدا</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row d-flex">
                          <div class="form-group mb-3 col-md-4 d-flex ">
                            <label
                              className="col-lg-6 col-form-label"
                              htmlFor="val-number"
                            >
                              النسبة من
                            </label>
                            <input type="number" class="form-control" />
                          </div>
                          <div class="form-group mb-3 col-md-4 d-flex">
                            <label
                              className="col-lg-6 col-form-label"
                              htmlFor="val-number"
                            >
                              الي
                            </label>
                            <input type="number" class="form-control" />
                          </div>
                        </div>
                        <div class="row d-flex">
                          <div class="form-group mb-3 col-md-4 d-flex ">
                            <label
                              className="col-lg-6 col-form-label"
                              htmlFor="val-number"
                            >
                              النقاط من
                            </label>
                            <input type="number" class="form-control" />
                          </div>
                          <div class="form-group mb-3 col-md-4 d-flex">
                            <label
                              className="col-lg-6 col-form-label"
                              htmlFor="val-number"
                            >
                              الي
                            </label>
                            <input type="number" class="form-control" />
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label
                            className="col-lg-3 col-form-label"
                            htmlFor="val-username"
                          >
                            تقدير التخرج
                            <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-6">
                            <div class="input-group mb-3 ">
                              <select
                                class="form-select"
                                id="inputGroupSelect02"
                              >
                                <option value="1">جيد</option>
                                <option value="2">جيدجدا</option>
                                <option value="3">امتياز</option>
                              </select>
                            </div>
                          </div>
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

            <TablePage headers={headers4} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

GeneralestimatesPage.displayName = "GeneralestimatesPage";

GeneralestimatesPage.propTypes = {};

export { GeneralestimatesPage };
