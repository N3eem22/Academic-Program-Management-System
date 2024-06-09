import React, { useEffect, useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TablePage } from "../../../../components/tables";
import { headers } from "../../../../helpers/headers";
import axios from "axios";

const LevelsPage = () => {
  let [data, setData] = useState([]);
  let [reload, setReload] = useState(false);
  let [selectedRow, setSelectedRow] = useState(null);
  let [level, setLevel] = useState([]);
  let [levelid, setLevelid] = useState("");
  let [minhours, setMinhours] = useState("");
  let [maxhours, setMaxhours] = useState("");
  let [institutionCode, setInstitutionCode] = useState("");

  async function getLevel() {
    let { data } = await axios.get(
      "https://localhost:7095/api/Level?UniversityId"
    );
    setLevel(data);
  }

  useEffect(() => {
    getLevel();
    axios
      .get("https://localhost:7095/api/ProgramLevels/48")
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
    console.log(levelid);
    axios
      .post("https://localhost:7095/api/ProgramLevels", {
        prog_InfoId: 48,
        theLevelId: levelid,
        minimumHours: minhours,
        maximumHours: maxhours,
        institutionCode: institutionCode,
      })
      .then((res) => {
        console.log(res);
        setReload(!reload);
        clearForm();
      })

      .catch((er) => {
        console.error("Error response:", er.response);
        console.error("Error data:", er.response.data);
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
      .put(`https://localhost:7095/api/ProgramLevels/${selectedRow.id}`, {
        prog_InfoId: 48,
        theLevelId: levelid,
        minimumHours: minhours,
        maximumHours: maxhours,
        institutionCode: institutionCode,
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
    setSelectedRow(row);
    setLevelid(row.theLevel);
    setMinhours(row.minimumHours);
    setMaxhours(row.maximumHours);
    setInstitutionCode(row.institutionCode);
  };

  const clearForm = (row) => {
    setSelectedRow(row);
    setLevelid("");
    setMinhours("");
    setMaxhours("");
    setInstitutionCode("");
  };

  const handleDelete = () => {
    if (!selectedRow) {
      alert("Please select a row to delete");
      return;
    }
    axios
      .delete(`https://localhost:7095/api/ProgramLevels/${selectedRow.id}`)
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
      <div className="container" dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h2 style={{ color: "red" }}>
            برنامج :  التربيه الفنيه
            </h2>
            <div className="inputs-card">
              <div className="col-md-12">
                <div className="card-body">
                  <div className="form-validation">
                    <form className="form-valide" required method="post">
                      <div className="row">
                          <div className="form-group mt-4 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="theLevelId"
                            >
                              المستوي
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-2">
                              <div className="input-group mb-3">
                                <select
                                  className="form-select "
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
                          <div className="form-group mb-3 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="minimumHours"
                            >
                              الحد الادنى للساعات{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-2">
                              <input
                                type="number"
                                className="form-control"
                                id="minimumHours"
                                required
                                value={minhours}
                                onChange={(e) => setMinhours(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="form-group mb-3 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="maximumHours"
                            >
                              الحد الاقصى للساعات{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-2">
                              <input
                                type="number"
                                className="form-control"
                                id="maximumHours"
                                value={maxhours}
                                required
                                onChange={(e) => setMaxhours(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="form-group mb-3 row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="institutionCode"
                            >
                              كود المؤسسة <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                id="institutionCode"
                                name="institutionCode"
                                required
                                value={institutionCode}
                                onChange={(e) =>
                                  setInstitutionCode(e.target.value)
                                }
                              />
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
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <TablePage
              headers={headers}
              data={data}
              onRowClick={handleRowSelect}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

LevelsPage.displayName = "LevelsPage";

LevelsPage.propTypes = {};

export { LevelsPage };
