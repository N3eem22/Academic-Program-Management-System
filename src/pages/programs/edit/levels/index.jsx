import React, { useEffect, useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TablePage } from "../../../../components/tables";
import { headers } from "../../../../helpers/headers";
import Joi from "joi";
import axios from "axios";

const LevelsPage = () => {
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

  let [level, setlevel] = useState([]);
  async function getLevel() {
    let { data } = await axios.get(
      "https://localhost:7095/api/ProgramLevels/9"
    );
    // setlevel(data.results);
    console.log(data);
    setlevel(data);
  }
  useEffect(() => {
    getLevel();
  }, []);

  function validateForm() {
    let scheme = Joi.object({
      minhours: Joi.number().min(0).max(1000).required(),
      maxhours: Joi.number().min(0).max(1000).required(),
      // code : Joi.string().number().min(1).max(4).required(),
      code: Joi.pattern("w"),
    });
    return scheme.validate(level, { abortEarly: false });
  }
  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h2 style={{ color: "red" }}>برنامج : التثقيف بالفن</h2>
            <div className="inputs-card  ">
              <div className="col-md-12 ">
                <div className="card-body">
                  <div className="form-validation">
                    <form className="form-valide" action="#" method="post">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group  mt-4 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="level"
                            >
                              المستوي
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-2">
                              <div className="input-group mb-3 ">
                                <select className="form-select" id="level">
                                  {level.map((item, index) => (
                                    <option key={index} value={item.value}>
                                      {item.text}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="form-group mb-3 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="minhours"
                            >
                              الحد الادنى للساعات{" "}
                              <span className="text-danger">*</span>
                            </label>

                            <div className="col-md-2 ">
                              <input
                                type="number"
                                className="form-control"
                                id="minhours"
                              />
                            </div>
                          </div>

                          <div className="form-group mb-3 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="maxhours"
                            >
                              الحد الاقصى للساعات{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-2">
                              <input
                                type="number"
                                className="form-control"
                                id="maxhours"
                              />
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="code"
                            >
                              كود المؤسسة <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                id="code"
                                name="code"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="btns d-flex justify-content-center align-items-center py-3">
                          <button
                            // onClick={addSub}
                            type="submit"
                            className="btn  btn-info mx-1 "
                          >
                            جديد
                          </button>
                          <button
                            type="submit"
                            className="btn  btn-primary mx-1 "
                          >
                            حفظ
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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
