import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
// import { Link } from "react-router-dom";
import { getAuthUser } from "../../../helpers/storage";

const ManageFacultyPage = () => {
  const navigate = useNavigate();

  const auth = getAuthUser();
  const [faculty, setFaculty] = useState({
    loading: true,
    results: [],
    err: null,
  });

  const [reload, setReload] = useState(false);

  useEffect(() => {
    const userToken = getAuthUser();
    setFaculty({ ...faculty, loading: true });
    axios
      .get("https://localhost:7095/api/Faculty", {
        headers: {
          Authorization: `Bearer ${userToken.token}`,
        },
      })
      .then((resp) => {
        console.log(resp.data);
        setFaculty({
          ...faculty,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setFaculty({
          ...faculty,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, []);

  
  const deleteFaculty = (id) => {
    axios
      .delete(`https://localhost:7095/api/Faculty/${id}`)
      .then((response) => {
        setReload(!reload); // Trigger reload of faculty data
      })
      .catch((error) => {
        console.error("Error deleting Faculty:", error);
      });
  };
  const handleupdtefaculty = (id) => {
    // هنا يمكنك تنفيذ الإجراءات الخاصة بك لتحميل بيانات الجامعة المحددة والتحول إلى صفحة التعديل
    navigate(`/updatefaculty/${id}`);
  };
  
  const handleAddFacultyClick = () => {
    navigate('/addfaculty');
  };
  return (
    <Fragment>
      <div className="container" dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="row ">
            <div className="col-2">
            <h2 style={{ color: "red", paddingBottom: "15px" }}>
              اداره الكليات
            </h2>
            </div>

            <div className="col-md-2">
                  <button className="btn btn-success py-3 fw-semibold fs-5 sharp" type="button" onClick={handleAddFacultyClick}>
                    اضافة كليه
                  </button>
                </div>
                </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">اداره الكليات</h4>
              </div>
              <div className="card-body">
                <div className="w-100 table-responsive">
                  <div id="example_wrapper" className="dataTables_wrapper">
                    <form>
                      <table id="example" className="display w-100 table">
                        <thead className="table table-hover">
                          <tr role="row">
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
                              <td>{faculty.facultyName}</td>
                              <td>
                                <div className="d-flex">
                                  {/* <Link to={`/updatefaculty/${faculty.id}`}> */}
                                  <button
                                    className="btn btn-primary shadow btn-xs sharp me-1"
                                    onClick={() =>
                                      handleupdtefaculty(faculty.id)
                                    }
                                  >
                                    <i className="fas fa-pen"></i>
                                  </button>
                                  {/* </Link> */}
                                </div>
                              </td>
                              <td>
                                <div className="d-flex">
                                  <button
                                    onClick={() => deleteFaculty(faculty.id)}
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
