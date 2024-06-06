import React, { useEffect, useState, Fragment } from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TablePage } from "../../../../components/tables";
import { headers4 } from "../../../../helpers/headers";
import axios from "axios";

const GeneralestimatesPage = () => {
  let [reload, setReload] = useState(false);
  let [selectedRow, setSelectedRow] = useState(null);
  let [thePercentageFrom, setthePercentageFrom] = useState("");
  let [thePercentageTo, setthePercentageTo] = useState("");
  let [pointsFrom, setpointsFrom] = useState("");
  let [pointsTo, setpointsTo] = useState("");
  let [theGrade, setTheGrade] = useState([]);
  let [theGradeId, setTheGradeId] = useState([]);
  let [data, setData] = useState([]);

  async function getgradesfromapi() {
    let { data } = await axios.get("https://localhost:7095/api/AllGrades?2");
    setTheGrade(data);
  }
  useEffect(() => {
    getgradesfromapi("grade");
  }, []);
  ///////////////////////////////////////////
  let [graduationEstimate, setgraduationEstimate] = useState([]);
  let [graduationEstimateId, setgraduationEstimateId] = useState([]);

  let [equivalentEstimate, setequivalentEstimate] = useState([]);
  let [equivalentEstimateId, setequivalentEstimateId] = useState([]);

  async function getgraduationEstimatefromapi() {
    let { data } = await axios.get(
      "https://localhost:7095/api/EquivalentGrade?2"
    );
    console.log(data);
    setgraduationEstimate(data);
    setequivalentEstimate(data);
  }
  useEffect(() => {
    getgraduationEstimatefromapi("graduationEstimate");
  }, []);

  useEffect(() => {
    getgradesfromapi();
    getgraduationEstimatefromapi();
    axios
      .get("https://localhost:7095/api/Program_TheGrade/17")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((er) => {
        console.error("Error response:", er.response);
        console.error("Error data:", er.response.data);
      });
  }, [reload]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://localhost:7095/api/Program_TheGrade", {
        prog_InfoId: 17,
        theGradeId: theGradeId,
        equivalentEstimateId: equivalentEstimateId,
        thePercentageFrom: thePercentageFrom,
        thePercentageTo: thePercentageTo,
        pointsFrom: pointsFrom,
        pointsTo: pointsTo,
        graduationEstimateId: graduationEstimateId,
      })
      .then((res) => {
        console.log(res);
        console.log(data);
        setReload(!reload);
        clearForm();
      })

      .catch((er) => {
        console.error("Error response:", er.response);
        console.error("Error data:", er);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    // if (!selectedRow) {
    //   alert("Please select a row to update");
    //   return;
    // }
    // console.log(levelid);
    axios
      .put(`https://localhost:7095/api/Program_TheGrade/${selectedRow.id}`, {
        prog_InfoId: 17,
        theGradeId: theGradeId,
        equivalentEstimateId: equivalentEstimateId,
        thePercentageFrom: thePercentageFrom,
        thePercentageTo: thePercentageTo,
        pointsFrom: pointsFrom,
        pointsTo: pointsTo,
        graduationEstimateId: graduationEstimateId,
      })
      .then((res) => {
        console.log(res);
        setReload(!reload);
        setSelectedRow(null);
        clearForm();
      })
      .catch((er) => {
        console.error("Error response:", er.response);
        console.error("Error data:", er.response.data);
      });
  };

  const handleRowSelect = (row) => {
    console.log(row);
    setSelectedRow(row);
    setTheGradeId(row.theGrade);
    setthePercentageFrom(row.thePercentageFrom);
    setthePercentageTo(row.thePercentageTo);
    setpointsFrom(row.pointsFrom);
    setpointsTo(row.pointsTo);
    setgraduationEstimateId(row.graduationEstimate);
    setequivalentEstimateId(row.equivalentEstimate);
  };

  const clearForm = (row) => {
    setSelectedRow(row);
    setTheGradeId("");
    setgraduationEstimateId("");
    setthePercentageFrom("");
    setthePercentageTo("");
    setpointsFrom("");
    setpointsTo("");
    setequivalentEstimateId("");
  };

  const handleDelete = () => {
    if (!selectedRow) {
      alert("Please select a row to delete");
      return;
    }
    axios
      .delete(`https://localhost:7095/api/Program_TheGrade/${selectedRow.id}`)
      .then((res) => {
        console.log(res);
        setReload(!reload);
        setSelectedRow(null);
        clearForm();
      })
      .catch((er) => {
        console.error("Error response:", er.response);
        console.error("Error data:", er.response.data);
      });
  };

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
                    <form className="form-valide" method="post">
                      <div className="row">
                        <div className="col-xl-6 ">
                          <div className=" d-flex">
                            <div className="col-md-4 ">
                              <div className="form-group mb-3 row">
                                <label
                                  className="col-lg-5 col-form-label"
                                  htmlFor="theGrade"
                                >
                                  التقدير<span className="text-danger">*</span>
                                </label>

                                <div className="col-md-6">
                                  <div className="input-group  ">
                                    <select
                                      className="form-select"
                                      id="theGrade"
                                      value={theGradeId}
                                      onChange={(e) => {
                                        setTheGradeId(e.target.value);
                                      }}
                                    >
                                      <option value=""></option>
                                      {theGrade.map((item, index) => (
                                        <option key={index} value={item.id}>
                                          {item.theGrade}{" "}
                                          {item.theGrade === theGradeId
                                            ? setTheGradeId(item.id)
                                            : ""}
                                        </option>
                                      ))}
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
                                  htmlFor="graduationEstimateId"
                                >
                                  التقدير المكافئ{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="col-md-6">
                                  <div className="input-group mb-3 ">
                                    <select
                                      className="form-select"
                                      id="graduationEstimateId"
                                      value={graduationEstimateId}
                                      onChange={(e) => {
                                        setgraduationEstimateId(e.target.value);
                                      }}
                                    >
                                      <option value=""></option>
                                      {graduationEstimate &&
                                        graduationEstimate.map(
                                          (item, index) => (
                                            <option key={index} value={item.id}>
                                              {item.equivalentGrade}{" "}
                                              {item.equivalentGrade ===
                                              graduationEstimateId
                                                ? setgraduationEstimateId(
                                                    item.id
                                                  )
                                                : ""}
                                            </option>
                                          )
                                        )}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row d-flex">
                            <div className="form-group mb-3 col-md-4 d-flex ">
                              <label
                                className="col-lg-6 col-form-label"
                                htmlFor="thePercentageFrom"
                              >
                                النسبة من
                              </label>
                              <input
                                type="number"
                                id="thePercentageFrom"
                                className="form-control"
                                value={thePercentageFrom}
                                onChange={(e) =>
                                  setthePercentageFrom(e.target.value)
                                }
                              />
                            </div>
                            <div className="form-group mb-3 col-md-4 d-flex">
                              <label
                                className="col-lg-6 col-form-label"
                                htmlFor="thePercentageTo"
                              >
                                الي
                              </label>
                              <input
                                type="number"
                                id="thePercentageTo"
                                className="form-control"
                                value={thePercentageTo}
                                onChange={(e) =>
                                  setthePercentageTo(e.target.value)
                                }
                              />
                            </div>
                          </div>
                          <div className="row d-flex">
                            <div className="form-group mb-3 col-md-4 d-flex ">
                              <label
                                className="col-lg-6 col-form-label"
                                htmlFor="pointsFrom"
                              >
                                النقاط من
                              </label>
                              <input
                                type="number"
                                id="pointsFrom"
                                className="form-control"
                                value={pointsFrom}
                                onChange={(e) => setpointsFrom(e.target.value)}
                              />
                            </div>
                            <div className="form-group mb-3 col-md-4 d-flex">
                              <label
                                className="col-lg-6 col-form-label"
                                htmlFor="val-number"
                              >
                                الي
                              </label>
                              <input
                                type="number"
                                id="pointsTo"
                                className="form-control"
                                value={pointsTo}
                                onChange={(e) => setpointsTo(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="form-group mb-3 row">
                            <label
                              className="col-lg-3 col-form-label"
                              htmlFor="equivalentEstimate"
                            >
                              تقدير التخرج
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-6">
                              <div className="input-group mb-3 ">
                                <select
                                  className="form-select"
                                  id="equivalentEstimate"
                                  value={equivalentEstimateId}
                                  onChange={(e) => {
                                    setequivalentEstimateId(e.target.value);
                                  }}
                                >
                                  <option value=""></option>
                                  {equivalentEstimate &&
                                    equivalentEstimate.map((item, index) => (
                                      <option key={index} value={item.id}>
                                        {item.equivalentGrade}
                                        {item.equivalentGrade ===
                                        equivalentEstimateId
                                          ? setequivalentEstimateId(item.id)
                                          : ""}
                                      </option>
                                    ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="btns d-flex justify-content-center align-items-center py-3">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-info mx-1"
                >
                  جديد
                </button>
                <button
                  onClick={handleUpdate}
                  type="submit"
                  className="btn btn-success mx-1"
                >
                  تعديل
                </button>
                <button
                  onClick={handleDelete}
                  type="submit"
                  className="btn btn-danger mx-1"
                >
                  حذف
                </button>
              </div>
            </div>

            <TablePage
              headers={headers4}
              data={data}
              onRowClick={handleRowSelect}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

GeneralestimatesPage.displayName = "GeneralestimatesPage";

GeneralestimatesPage.propTypes = {};

export { GeneralestimatesPage };
