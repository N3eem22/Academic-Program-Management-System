import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdatefacultyPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [Updatefaculty, setUpdatefaculty] = useState({
    id: "",
    facultyName: "",
    universityId: "",
    university: "",
    loading: false,
    err: [],
  });

  useEffect(() => {
    axios
      .get(`https://localhost:7095/api/Faculty/${id}`)
      .then((response) => {
        const { id, facultyName, universityId, university } = response.data;
        setUpdatefaculty({
          ...Updatefaculty,
          id,
          facultyName,
          universityId,
          university,
        });
        console.log(Updatefaculty);
      })
      .catch((error) => {
        console.error("Error fetching university data:", error);
      });
  }, [Updatefaculty.loading]);
  const handleUpdatefaculty = (e) => {
    e.preventDefault();
    setUpdatefaculty({ ...Updatefaculty, loading: true, err: [] });
    axios
      .put(
        `https://localhost:7095/api/Faculty/${id}?updatedFacultyName=${Updatefaculty.facultyName}`,
        {
          facultyName: Updatefaculty.facultyName,
        }
      )
      .then(() => {
        setUpdatefaculty({ ...Updatefaculty, loading: false, err: [] });
        navigate("/managefaculty");
      })
      .catch((err) => {
        setUpdatefaculty({
          ...Updatefaculty,
          loading: false,
          err: [{ message: err.response.data.message }],
        });
      });
  };

  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="col-12" style={{ paddingBottom: "15px" }}>
              <div className="row">
                <div className="col-4">
                  <h2 style={{ color: "red" }}>تعديل الكليات</h2>
                </div>
              </div>
              {Updatefaculty.err && Updatefaculty.err.length > 0 && (
                <div className="col-md-4 m-auto  alert alert-danger">
                  <ul
                    className="fw-semibold fs-5"
                    style={{ listStyleType: "none", padding: 0, margin: 0 }}
                  >
                    {Updatefaculty.err.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="w-100 table-responsive">
              <div id="example_wrapper" className="dataTables_wrapper">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">تعديل الكليات</h4>
                  </div>
                  <div className="card-body">
                    <div className="basic-form">
                      <form className="col-md-12">
                        <div className="mb-3 row">
                          <label
                            className="col-md-2 col-form-label"
                            htmlFor=" faculties"
                          >
                            اسم الكليه
                          </label>
                          <div className="col-md-3">
                            <input
                              value={Updatefaculty.facultyName}
                              onChange={(e) =>
                                setUpdatefaculty({
                                  ...Updatefaculty,
                                  facultyName: e.target.value,
                                })
                              }
                              id="faculties"
                              name="faculties"
                              type="text"
                              className="form-control"
                              placeholder="الكليات"
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <div className="col-md-12  d-flex align-content-center justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleUpdatefaculty}
                            >
                              تعديل
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { UpdatefacultyPage };
