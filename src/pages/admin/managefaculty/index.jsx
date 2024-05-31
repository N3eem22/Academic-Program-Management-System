import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageFacultyPage = () => {
  const [faculty, setfaculty] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });
  useEffect(() => {
    setfaculty({ ...faculty, loading: true });
    axios
      .get("https://localhost:7095/api/Faculty?UniversityId=2")
      .then((resp) => {
        setfaculty({
          ...faculty,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setfaculty({
          ...faculty,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, [faculty.reload]);

  const DeleteFaculty = (id) => {
    axios
      .delete(`https://localhost:7095/api/Faculty?id=${id}`)
      .then((response) => {
        setfaculty(faculty.filter(f => f.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting Faculty:", error);
      });
  };

  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h2 style={{ color: "red", paddingBottom: "15px" }}>
              اداره الكليات{" "}
            </h2>
            <div className="card  ">
              <div className="card-header">
                <h4 className="card-title">اداره الكليات</h4>
              </div>

              <div className="card-body">
                <div className="w-100 table-responsive">
                  <div id="example_wrapper" className="dataTables_wrapper">
                    <form>
                      <table id="example" className="display w-100 table ">
                        <thead className="table  table-hover">
                          <tr role="row" className="">
                            <th>id of faculty</th>
                            <th>id of uni</th>
                            <th>اسم الجامعه</th>
                            <th>اسم الكليه</th>
                            <th>تعديل</th>
                            <th>حذف</th>
                          </tr>
                        </thead>

                        <tbody>
                          {faculty.results.map((faculty) => (
                            <tr key={faculty.id}>
                              <td>{faculty.id}</td>
                              <td>{faculty.universityId}</td>
                              <td>{faculty.university}</td>
                              <td> {faculty.facultyName}</td>
                              <td>
                                <div className="d-flex">
                                  <Link to={`/updatefaculty/${faculty.id}`}>
                                    <button
                                      className="btn btn-primary shadow btn-xs sharp me-1"
                                      href=""
                                    >
                                      <i className="fas fa-pen"></i>
                                    </button>
                                  </Link>
                                </div>
                              </td>

                              <td>
                                <div className="d-flex">
                                  <button
                                    onClick={() => DeleteFaculty(faculty.id)} 
                                    className="btn btn-danger shadow btn-xs sharp"
                                  >
                                    <i className="fa fa-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </form>
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

ManageFacultyPage.displayName = "ManageFacultyPage";

ManageFacultyPage.propTypes = {};

export { ManageFacultyPage };
