import React, { useEffect, useState, Fragment } from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TablePage } from "../../../../components/tables";
import { headers3 } from "../../../../helpers/headers";
import axios from "axios";

const AcademicloadPage = () => {
  let [reload, setReload] = useState(false);
  let [selectedRow, setSelectedRow] = useState(null);
  let [minimumHours, setMinimumHours] = useState("");
  let [exceptionToMinimumHours, setExceptionToMinimumHours] = useState("");
  let [maximumHours, setMaximumHours] = useState("");
  let [exceptionToTheMaximumHours, setExceptionToTheMaximumHours] =
    useState("");
  let [reregistrationHours, setReregistrationHours] = useState("");
  let [academicNoticeHours, setAcademicNoticeHours] = useState("");

  let [data, setData] = useState([]);
  let [semesters, setSemesters] = useState([]);
  let [SemestersId, setSemestersId] = useState([]);

  async function getSemestersfromapi() {
    let { data } = await axios.get(
      "https://localhost:7095/api/Semesters?UniversityId"
    );
    setSemesters(data.results);
    setSemesters(data);

    // console.log(theGrade);
  }
  // useEffect(() => {
  //   getSemestersfromapi("grade");
  // }, [data]);
  ///////////////////////////////////////////
  let [level, setLevel] = useState([]);
  let [levelid, setLevelid] = useState([]);
  async function getAcademicLevelfromapi() {
    let { data } = await axios.get(
      "https://localhost:7095/api/Level?UniversityId"
    );
    setLevel(data.results);
    setLevel(data);
  }
  // useEffect(() => {
  //   getAcademicLevelfromapi("graduationEstimate");
  // }, []);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  useEffect(() => {
    getSemestersfromapi();
    getAcademicLevelfromapi();
    axios
      .get("https://localhost:7095/api/AcademicLoadAccordingToLevel/17")
      .then((res) => {
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
      .post("https://localhost:7095/api/AcademicLoadAccordingToLevel", {
        prog_InfoId: 17,
        levelId: parseInt(levelid),
        semestersId: parseInt(SemestersId),
        minimumHours: parseInt(minimumHours),
        exceptionToMinimumHours: parseInt(exceptionToMinimumHours),
        maximumHours: parseInt(maximumHours),
        exceptionToTheMaximumHours: parseInt(exceptionToTheMaximumHours),
        re_registrationHours: parseInt(reregistrationHours),
        academicNoticeHours: parseInt(academicNoticeHours),
      })
      .then((res) => {
        console.log(res);
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
    axios
      .put(
        `https://localhost:7095/api/AcademicLoadAccordingToLevel/${selectedRow.id}`,
        {
          prog_InfoId: 17,
          levelId: parseInt(levelid),
          semestersId: parseInt(SemestersId),
          minimumHours: parseInt(minimumHours),
          exceptionToMinimumHours: parseInt(exceptionToMinimumHours),
          maximumHours: parseInt(maximumHours),
          exceptionToTheMaximumHours: parseInt(exceptionToTheMaximumHours),
          re_registrationHours: parseInt(reregistrationHours),
          academicNoticeHours: parseInt(academicNoticeHours),
        }
      )
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
    setMinimumHours(row.minimumHours);
    setExceptionToMinimumHours(row.exceptionToMinimumHours);
    setMaximumHours(row.maximumHours);
    setExceptionToTheMaximumHours(row.exceptionToTheMaximumHours);
    setReregistrationHours(row.re_registrationHours);
    setAcademicNoticeHours(row.academicNoticeHours);
    setSemestersId(row.aL_Semesters);
    setLevelid(row.academicLevel);
  };

  const clearForm = (row) => {
    setSelectedRow(row);
    setMinimumHours("");
    setExceptionToMinimumHours("");
    setMaximumHours("");
    setExceptionToTheMaximumHours("");
    setReregistrationHours("");
    setAcademicNoticeHours("");
    setSemestersId("");
    setLevelid("");
  };

  const handleDelete = () => {
    if (!selectedRow) {
      alert("Please select a row to delete");
      return;
    }
    axios
      .delete(
        `https://localhost:7095/api/AcademicLoadAccordingToLevel/${selectedRow.id}`
      )
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
              برنامج :  التربيه الفنيه
            </h2>
            <div className="inputs-card  ">
              <div className="col-md-12 ">
                <div className="card-body">
                  <div className="form-validation">
                    <form className="form-valide" action="#" method="post">
                      <div className="form-group mb-3 row col-md-6">
                        <label
                          className="col-lg-3 col-form-label"
                          htmlFor="semesters"
                        >
                          الفصل الدراسي
                          <span className="text-danger">*</span>
                        </label>

                        <div className="col-md-3">
                          <div className="input-group  ">
                            <select
                              className="form-select"
                              id="semesters"
                              value={SemestersId}
                              onChange={(e) => {
                                setSemestersId(e.target.value);
                              }}
                            >
                              <option value=""></option>
                              {semesters.map((item, index) => (
                                <option key={index} value={item.id}>
                                  {item.semesters}{" "}
                                  {item.semesters === SemestersId
                                    ? setSemestersId(item.id)
                                    : ""}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3 row col-md-6">
                        <label
                          className="col-lg-3 col-form-label"
                          htmlFor="levels"
                        >
                          المستوى الدراسى <span className="text-danger">*</span>
                        </label>

                        <div className="col-md-3">
                          <div className="input-group  ">
                            <select
                              className="form-select"
                              id="theLevelId"
                              value={levelid}
                              onChange={(e) => {
                                setLevelid(e.target.value);
                              }}
                            >
                              <option value=""></option>
                              {level.map((item, index) => (
                                <option key={index} value={item.id}>
                                  {item.levels}
                                  {item.levels === levelid
                                    ? setLevelid(item.id)
                                    : ""}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex">
                        <div className="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-5 col-form-label"
                            htmlFor="minimumHours"
                          >
                            الحد الادنى للساعات
                          </label>
                          <div className="col-md-3">
                            <input
                              type="number"
                              id="minimumHours"
                              className="form-control"
                              value={minimumHours}
                              onChange={(e) => setMinimumHours(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-6 col-form-label"
                            htmlFor="exceptionToMinimumHours"
                          >
                            استثناء الحد الادنى للساعات
                          </label>
                          <div className="col-md-3">
                            <input
                              type="number"
                              id="exceptionToMinimumHours"
                              className="form-control"
                              value={exceptionToMinimumHours}
                              onChange={(e) =>
                                setExceptionToMinimumHours(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex">
                        <div className="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-5 col-form-label"
                            htmlFor="maximumHours"
                          >
                            الحد الاقصى للساعات
                          </label>
                          <div className="col-md-3">
                            <input
                              type="number"
                              id="maximumHours"
                              className="form-control"
                              value={maximumHours}
                              onChange={(e) => setMaximumHours(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-6 col-form-label"
                            htmlFor="exceptionToTheMaximumHours"
                          >
                            استثناء الحد الاقصى للساعات
                          </label>
                          <div className="col-md-3">
                            <input
                              type="number"
                              id="exceptionToTheMaximumHours"
                              className="form-control"
                              value={exceptionToTheMaximumHours}
                              onChange={(e) =>
                                setExceptionToTheMaximumHours(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex">
                        <div className="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-5 col-form-label"
                            htmlFor="reRegistrationHours"
                          >
                            ساعات اعادة القيد
                          </label>
                          <div className="col-md-3">
                            <input
                              type="number"
                              id="reRegistrationHours"
                              className="form-control"
                              value={reregistrationHours}
                              onChange={(e) =>
                                setReregistrationHours(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex">
                        <div className="form-group mb-3 col-md-4 d-flex ">
                          <label
                            className="col-lg-5 col-form-label"
                            htmlFor="academicNoticeHours"
                          >
                            ساعات الانذار الاكاديمى
                          </label>
                          <div className="col-md-3">
                            <input
                              type="number"
                              id="academicNoticeHours"
                              className="form-control"
                              value={academicNoticeHours}
                              onChange={(e) =>
                                setAcademicNoticeHours(e.target.value)
                              }
                            />
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
                  type="button"
                  className="btn btn-danger mx-1"
                >
                  حذف
                </button>
              </div>
            </div>

            <TablePage
              headers={headers3}
              data={data}
              onRowClick={handleRowSelect}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AcademicloadPage.displayName = "AcademicloadPage";

AcademicloadPage.propTypes = {};

export { AcademicloadPage };
