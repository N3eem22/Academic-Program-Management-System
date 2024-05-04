import React, { useEffect, useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TablePage } from "../../../../components/tables";
import { headers } from "../../../../helpers/headers";

const LevelsPage = () => {
  // function validation() {
  //   var regx = /^[0-9]{0,3}$/;
  // }

  // var levelinput = document.getElementById("levelinput");
  // var minhoursinput = document.getElementById("minhoursinput");
  // var maxhoursinput = document.getElementById("maxhoursinput");
  // var codeinput = document.getElementById("codeinput");

  // var subcontainer = [];
  // const addSub = () => {
  //   const sub = {
  //     level: levelinput.value,
  //     minhours: minhoursinput.value,
  //     maxhours: maxhoursinput.value,
  //     code: codeinput.value,
  //   };
  //   subcontainer.push(sub);
  //   displaySub();
  //   clearForm();
  // };
  // const clearForm = () => {
  //   levelinput.value = " ";
  //   minhoursinput.value = " ";
  //   maxhoursinput.value = " ";
  //   codeinput.value = " ";
  // };

  // const displaySub = () => {
  //   var subs = ``;
  //   for (var i = 0; i < subcontainer.length; i++) {
  //     subs += `     <tr> 
  //     <td>
  //       <strong>${i + 1}</strong>
  //     </td>
  //     <td>${subcontainer[i].level}</td>
  //     <td>${subcontainer[i].minhours}</td>
  //     <td>${subcontainer[i].maxhours}</td>
  //     <td>${subcontainer[i].code}</td>
  //     <td>
  //     <button className="btn btn-primary shadow btn-xs  rounded-5 me-1 mx-1">
  //       <i className="fas fa-pen"></i>
  //     </button>
  //     <button className="btn btn-danger shadow btn-xs  rounded-5">
  //       <i className="fa fa-trash"></i>
  //     </button>
  //   </td>
  //   </tr>`;
  //   }

  //   document.getElementById("tablebody").innerHTML = subs;
  // };

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
                          <div className="form-group  mt-4 row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="val-number"
                            >
                              المستوي
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-6">
                              <div className="input-group mb-3 ">
                                <select className="form-select" id="levelinput">
                                  <option value="1">الاول</option>
                                  <option value="2">التاني</option>
                                  <option value="3">التالت</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group mb-3 row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="val-number"
                            >
                              الحد الادنى للساعات{" "}
                              <span className="text-danger">*</span>
                            </label>

                            <div className="col-md-3 ">
                              <input
                                type="number"
                                className="form-control"
                                id="minhoursinput"
                              />
                            </div>
                          </div>

                          <div className="form-group mb-3 row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="val-number"
                            >
                              الحد الاقصى للساعات{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-3">
                              <input
                                type="number"
                                className="form-control"
                                id="maxhoursinput"
                              />
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="val-username"
                            >
                              كود المؤسسة <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                id="codeinput"
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
                <button
                  // onClick={addSub}
                  type="submit"
                  className="btn  btn-info mx-1 "
                >
                  جديد
                </button>
                <button type="submit" className="btn  btn-primary mx-1 ">
                  حفظ
                </button>
              </div>
            </div>

            <TablePage headers={headers} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

LevelsPage.displayName = "LevelsPage";

LevelsPage.propTypes = {};

export { LevelsPage };
