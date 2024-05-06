import React, { Fragment, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { useParams, Form } from "react-router-dom";
import { getAuthUser } from "../../../../helpers/storage";
const UpdateUsersPage = () => {
  const { id } = useParams();
  const auth = getAuthUser();

  const [users, setUsers] = useState({
    displayName: "",
    phoneNumber: "",
    email: "",
    faculties: "",
    university: "",
    universities: [],
    role: "",
    err: "",
    loading: false,
    reload: false,
    success: null,
  });






  useEffect(() => {
    const userToken = getAuthUser(); 
    axios.get('https://localhost:7095/api/University', {
      headers: {
        'Authorization': `Bearer ${userToken.token}`
      }
    })
    .then(response => {
      setUsers({ ...users, university: response.data });
      console.log(response.data);
    })
    .catch(err => {
      setUsers({
        ...users,
        loading: false,
        err: [{ message: err.response.data.message }]
      });
    });
  }, []);








  const updateUser = (e) => {
    e.preventDefault();
    setUsers({ ...users, loading: true });

    const formData = new FormData();
    formData.append("displayName", users.displayName);
    formData.append("phoneNumber", users.phoneNumber);
    formData.append("email", users.email);
    formData.append("faculties", users.faculties);
    formData.append("university", users.university);
    formData.append("role", users.role);

    axios
      .put(`https://localhost:7095/api/Users/Update?id=${id}`, formData, {
        headers: {
          token: auth.token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        setUsers({
          ...users,
          loading: false,
          success: "Users updated successfully!",
          reload: movie.reload + 1,
        });
      })
      .catch((err) => {
        setUsers({
          ...users,
          loading: false,
          success: null,
          err: [{ message: err.response.data.message }]
        });
      });
  };

  useEffect(() => {
    axios
      .get(
        `https://localhost:7095/api/Users/Details?id=ea9d2ca3-3c75-481d-bab9-4204abe1721f`,
        {
          params: {
            id: id,
          },
        }
      )
      .then((resp) => {
        setUsers({
          ...users,
          displayName: resp.data.displayName,
          phoneNumber: resp.data.phoneNumber,
          email: resp.data.email,
          faculties: resp.data.faculties,
          university: resp.data.university,
          role: resp.data.role,
        });
      })
      .catch((err) => {
        setUsers({
          ...users,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [users.reload]);

  //   // const updateUsers = (id) =>{
  //   //   alert(id)

  //   // }

  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="col-12" style={{ paddingBottom: "15px" }}>
              <div className="row">
                <div className="col-4">
                  <h2 style={{ color: "red" }}>تعديل المستخدمين</h2>
                </div>
              </div>
            </div>
            <div className="w-100 table-responsive">
              <div id="example_wrapper" className="dataTables_wrapper">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">تعديل المستخدمين</h4>
                  </div>
                  <div className="card-body">
                    <div className="basic-form">
                      <form onSubmit={updateUser} className="col-md-12">
                        <div className="mb-3 row">
                          <label
                            className="col-md-1 col-form-label"
                            htmlFor="displayName"
                          >
                            الاسم
                          </label>
                          <div className="col-md-3">
                            <input
                              value={users.displayName}
                              onChange={(e) =>
                                setUsers({
                                  ...users,
                                  displayName: e.target.value,
                                })
                              }
                              id="displayName"
                              name="displayName"
                              type="text"
                              className="form-control"
                              placeholder="الاسم"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-md-1 col-form-label"
                            htmlFor="phoneNumber"
                          >
                            الموبايل
                          </label>
                          <div className="col-md-3">
                            <input
                              value={users.phoneNumber}
                              onChange={(e) =>
                                setUsers({
                                  ...users,
                                  phoneNumber: e.target.value,
                                })
                              }
                              id="phoneNumber"
                              name="phoneNumber"
                              type="number"
                              className="form-control"
                              placeholder="الموبايل"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-md-1 col-form-label"
                            htmlFor=" email"
                          >
                            الايميل
                          </label>
                          <div className="col-md-3">
                            <input
                              value={users.email}
                              onChange={(e) =>
                                setUsers({
                                  ...users,
                                  email: e.target.value,
                                })
                              }
                              id="email"
                              name="email"
                              type="text"
                              className="form-control"
                              placeholder="الايميل"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            className="col-md-1 col-form-label"
                            htmlFor=" faculties"
                          >
                            الكليات
                          </label>
                          <div className="col-md-3">
                            <input
                              value={users.faculties}
                              onChange={(e) =>
                                setUsers({
                                  ...users,
                                  faculties: e.target.value,
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
                        <div className="col-lg-12">
                        <label
                            className="col-md-1 col-form-label"
                            htmlFor=" faculties"
                          >
                            الجامعات
                          </label>
                                        <select
                                            multiple
                                            className="form-select custom-select-start fs-6 mb-4"
                                            id="floatingUni"
                                            value={users.universities}
                                            onChange={(e) =>
                                                setUsers({ ...users, university: Array.from(e.target.selectedOptions, option => option.value) })
                                            }
                                        >
                                            <option value="" disabled>Select university</option>
                                            {users.universities.map((university) => (
                                                <option key={university.id} value={university.id}>
                                                    {university.name}
                                                </option>
                                            ))}
                                        </select>

                                        </div>
                                 
                        <div className="mb-3 row">
                          <label
                            className="col-md-1 col-form-label"
                            htmlFor="role"
                          >
                            الدور
                          </label>
                          <div className="col-md-3">
                            <input
                              value={users.role}
                              onChange={(e) =>
                                setUsers({
                                  ...users,
                                  role: e.target.value,
                                })
                              }
                              id="role"
                              name="role"
                              type="text"
                              className="form-control"
                              placeholder="الدور"
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <div className="col-md-12  d-flex align-content-center justify-content-center">
                            <button type="submit" className="btn btn-primary">
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

UpdateUsersPage.displayName = "UpdateUsersPage";

UpdateUsersPage.propTypes = {};

export { UpdateUsersPage };
