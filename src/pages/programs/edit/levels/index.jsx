import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TablePage } from "../../../../components/tables";

const LevelsPage = () => {
  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h2 style={{ color: "red" }}>برنامج : التثقيف بالفن</h2>
            <div className="inputs-card  ">
              <div className="col-md-6 ">
                <div className="card-body">
                  <div className="form-validation">
                    <form className="form-valide" action="#" method="post">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group mb-3 row">
                            <label
                              className="col-lg-4 col-form-label"
                              htmlFor="val-username"
                            >
                              المستوي<span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                id="val-username"
                                name="val-username"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group mb-3 row">
                            <label
                              className="col-lg-4 col-form-label"
                              htmlFor="val-number"
                            >
                              الحد الادنى للساعات{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                id="val-number"
                                name="val-number"
                              />
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label
                              className="col-lg-4 col-form-label"
                              htmlFor="val-number"
                            >
                              الحد الاقصى للساعات{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                id="val-number"
                                name="val-number"
                              />
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label
                              className="col-lg-4 col-form-label"
                              htmlFor="val-username"
                            >
                              كود المؤسسة <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                id="val-username"
                                name="val-username"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="btns  d-flex justify-content-center align-items-center  mx-5 py-3">
                <button type="submit" className="btn  btn-primary mx-1 ">
                  حفظ
                </button>
                <button className="btn btn-success mx-1 ">تعديل</button>
                <button className="btn btn-danger mx-1 ">حذف</button>
              </div>
            </div>
            <TablePage />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

LevelsPage.displayName = "LevelsPage";

LevelsPage.propTypes = {};

export { LevelsPage };
