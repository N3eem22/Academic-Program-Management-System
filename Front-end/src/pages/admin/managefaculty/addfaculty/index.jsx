import React, { Fragment, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Addfaculty = () => {
  const navigate = useNavigate();
  const [Faculty, setFaculty] = useState({
    facultyName: "",
    universityId: "",
    loading: false,
    err: [],
  });

  const handleAddfaculty = (e) => {
    e.preventDefault();
    setFaculty({ ...Faculty, loading: true, err: [] });
    axios
      .post("https://localhost:7095/api/Faculty", {
        facultyName: Faculty.facultyName,
        universityId: Faculty.universityId,
      })
      .then(() => {
        setFaculty({ ...Faculty, loading: false, err: [] });
        navigate("/managefaculty");
      })
      .catch((err) => {
        setFaculty({
          ...Faculty,
          loading: false,
          err: [{ message: err.response.data.message }],
        });
      });
  };

  return (
    <Fragment>
      <div
        className="container rtl"
        dir="rtl"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "50px",
          width: "40%",
        }}
      >
        {Faculty.err && Faculty.err.length > 0 && (
          <div className="col-md-4 m-auto  alert alert-danger">
            <ul
              className="fw-semibold fs-5"
              style={{ listStyleType: "none", padding: 0, margin: 0 }}
            >
              {Faculty.err.map((error, index) => (
                <li key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="row mt-3">
          <div className="col-md-2"></div>

          <div className="col-md-10">
            <div className="col-md-12 m-auto">
              <span>
                <div className="form-group m-auto  row">
                  <label
                    className="col-lg-3 fw-semibold fs-5 col-form-label"
                    htmlFor="universityName"
                  >
                    اسم الكليه
                  </label>
                  <div className="col-lg-5 ">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="universityName"
                        value={Faculty.facultyName}
                        onChange={(e) =>
                          setFaculty({
                            ...Faculty,
                            facultyName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="col-md-12">
              <span>
                <div className="form-group m-auto  row">
                  <label
                    className="col-lg-3 fw-semibold fs-5 col-form-label"
                    htmlFor="location"
                  >
                    University Id
                  </label>
                  <div className="col-lg-5 ">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        value={Faculty.universityId}
                        onChange={(e) =>
                          setFaculty({
                            ...Faculty,
                            universityId: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-5 m-auto">
                  <button
                    type="button"
                    onClick={handleAddfaculty}
                    className="px-4 mt-3 fw-semibold fs-5 btn btn-primary"
                  >
                    إضافة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { Addfaculty };
