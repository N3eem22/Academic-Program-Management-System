import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { useParams, Form } from "react-router-dom";
import { getAuthUser } from "../../../../helpers/storage";
import { Alert } from "bootstrap";
const UpdateUsersPage = () => {
  const { id } = useParams();
  const auth = getAuthUser();

  const [updateusers, setUpdateUsers] = useState({
    displayName: "",
    phoneNumber: "",
    email: "",
    faculties: "",
    universities: "", //details
    // universities : [],
    role: "",
    err: "",
    loading: false,
    reload: false,
    success: null,
  });
  

  const [uniname, setUniName] = useState([]);
  const [facultyname, setFacultyName] = useState([]);

  async function GetUniData() {
    // const userToken = getAuthUser();
    try {
      const response = await axios.get(
        `https://localhost:7095/api/University`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setUniName(response.data);
      //console.log(response.data);
      // console.log(uniname);
    } catch (err) {
      console.log("error");
    }
  }

  useEffect(() => {
    GetUniData();
  }, []);


  useEffect(() => {
    console.log(updateusers);
  }, [updateusers]);
  ///////////////////////////////////////////////////
  async function GetFacultyData(id) {
    // const userToken = getAuthUser();
    try {
      const response = await axios.get(
        `https://localhost:7095/api/Faculty?UniversityId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setFacultyName(response.data);
       console.log(facultyname);
      // console.log(uniname);
    } catch (err) {
      console.log("hiiiiiiiii");
    }
  }

  useEffect(() => {
    console.log(updateusers.universities);
    GetFacultyData(updateusers.universities[0]);
  }, [updateusers.universities]);

  useEffect(() => {
    console.log(facultyname);
  }, [facultyname]);

  // useEffect(() => {
  //   const userToken = getAuthUser();
  //   axios
  //     .get(`https://localhost:7095/api/University`, {
  //       headers: {
  //         Authorization: `Bearer ${userToken.token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setUpdateUsers({ ...updateusers, universities: response.data });
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       setUpdateUsers({
  //         ...updateusers,
  //         loading: false,
  //         err: [{ message: err.response.data.message }],
  //       });
  //     });
  // }, []);

  useEffect(() => {
    const userToken = getAuthUser();
    axios
      .get(`https://localhost:7095/api/Users/Details?id=${id}`)
      .then((resp) => {
        setUpdateUsers({
          ...updateusers,
          displayName: resp.data.displayName,
          phoneNumber: resp.data.phoneNumber,
          email: resp.data.email,
          faculties: resp.data.faculties,
          universities: resp.data.universities,
          role: resp.data.role,
        });
     
       })
      .catch((err) => {
        setUpdateUsers({
          ...updateusers,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [id, updateusers.reload]);




  const navigate = useNavigate();
  const updateUser = (e) => {
    e.preventDefault();
    setUpdateUsers({ ...updateusers, loading: true });
    const formData = new FormData();
    formData.append("displayName", updateusers.displayName);
    formData.append("phoneNumber", updateusers.phoneNumber);
    formData.append("email", updateusers.email);
    formData.append("faculties", updateusers.faculties);
    formData.append("university", updateusers.universities);
    formData.append("role", updateusers.role);
    console.log(updateusers.faculties);
    axios .put(`https://localhost:7095/api/Users/Update?id=${id}`,{
      id: id,
      email: updateusers.email,
      displayName: updateusers.displayName  ,
      phoneNumber: updateusers.phoneNumber ,
      role: updateusers.role,
      faculties: updateusers.faculties,
      universities: updateusers.universities,

    } ,{
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    })
      .then((resp) => {
       
        
        setUpdateUsers({
          ...updateusers,
          loading: false,
          success: "Users updated successfully!",
          });
        navigate("/manageusers");
      })

      .catch((err) => {
        console.log(err);
        setUpdateUsers({
          ...updateusers,
          loading: false,
          success: null,
          err: [{ message: err.response }],
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
                {updateusers.success && (
                  <Alert variant="success" className="p-2">
                    {updateusers.success}
                  </Alert>
                )}
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
                      <form className="col-md-12" >
                        <div className="mb-3 row">
                          <label
                            className="col-md-1 col-form-label"
                            htmlFor="displayName"
                          >
                            الاسم
                          </label>
                          <div className="col-md-3">
                            <input
                              value={updateusers.displayName}
                              onChange={(e) =>
                                setUpdateUsers({
                                  ...updateusers,
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
                              value={updateusers.phoneNumber}
                              onChange={(e) =>
                                setUpdateUsers({
                                  ...updateusers,
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
                              value={updateusers.email}
                              onChange={(e) =>
                                setUpdateUsers({
                                  ...updateusers,
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
                          <div className="col-md-4">



                          <div className="col-md-3">
                           
                          </div>
                          <select
                            multiple = {updateusers.role === "User" ? false : true}
                            className="form-select custom-select-start fs-6 mb-4 "
                            id="floatingUni"
                            // value={
                            //   Array.isArray(updateusers.faculties)
                            //     ? updateusers.faculties
                            //     : []
                            // }
                            onChange={(e) =>
                              setUpdateUsers({
                                ...updateusers,
                                faculties: Array.from(
                                  e.target.selectedOptions,
                                  (option) => parseInt(option.value) 
                                ),
                              })
                            }
                          >
                            <option value="" disabled>
                              اختر الكليه
                            </option> 
                            {facultyname.map((faculties , index) => (
                              <option
                              selected={updateusers.faculties[index] === faculties.facultyName} 
                                key={faculties.id}
                                value={faculties.id}
                              >
                                {faculties.facultyName} 
                              </option>
                            ))}
                          </select>









                            {/* <input
                              value={updateusers.faculties}
                              onChange={(e) =>
                                setUpdateUsers({
                                  ...updateusers,
                                  faculties: e.target.value,
                                })
                              }
                              id="faculties"
                              name="faculties"
                              type="text"
                              className="form-control"
                              placeholder="الكليات"
                            /> */}
                          </div>
                        </div>
                        <div className="col-lg-12 row">
                          <label
                            className="col-md-1 col-form-label"
                            htmlFor=" faculties"
                          >
                            الجامعات
                          </label>
                          <div className="col-md-4">
                          <div className="col-md-3">
                            
                          </div>
                          <select
                            multiple = {updateusers.role === "User" || "Admin" ? false : true}
                            className="form-select custom-select-start fs-6 mb-4 "
                            id="floatingUni"
                            // value={
                            //   Array.isArray(updateusers.universities)
                            //     ? updateusers.universities
                            //     : []
                            // }
                            onChange={(e) =>
                              setUpdateUsers({
                                ...updateusers,
                                universities: Array.from(
                                  e.target.selectedOptions,
                                  (option) =>parseInt(option.value) 
                                ),
                              })
                            }
                          >
                            <option value="" disabled>
                              اختر الجامعة
                            </option>
                            {uniname.map((universities , index) => (
                              <option
                              selected={updateusers.universities[0]=== universities.name} 
                                key={universities.id}
                                value={universities.id}
                              >
                                {universities.name} 
                              </option>
                            ))}
                          </select>
                        </div>
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
                              value={updateusers.role}
                              onChange={(e) =>
                                setUpdateUsers({
                                  ...updateusers,
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
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={updateUser}
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

UpdateUsersPage.displayName = "UpdateUsersPage";

UpdateUsersPage.propTypes = {};

export { UpdateUsersPage };

// const [updateusers, setUpdateUsers] = useState({
//   displayName: "",
//   phoneNumber: "",
//   email: "",
//   faculties: "",
//   university: "", //details
//   universities: [], //uni api
//   role: "",
//   err: "",
//   loading: false,
//   reload: false,
//   success: null,
// });

// useEffect(() => {
//   const userToken = getAuthUser();

//   axios
//     .get(`https://localhost:7095/api/Users/Details?id=${id}`)
//     .then((resp) => {
//       setUpdateUsers({
//         ...updateusers,
//         displayName: resp.data.displayName,
//         phoneNumber: resp.data.phoneNumber,
//         email: resp.data.email,
//         faculties: resp.data.faculties,
//         universities: resp.data.universities,
//         role: resp.data.role,
//       });
//     })
//     .catch((err) => {
//       setUpdateUsers({
//         ...updateusers,
//         loading: false,
//         success: null,
//         err: "Something went wrong, please try again later!",
//       });
//     });
// }, [id, updateusers.reload]);

// useEffect(() => {
//   const userToken = getAuthUser();
//   axios
//     .get(`https://localhost:7095/api/University`, {
//       headers: {
//         Authorization: `Bearer ${userToken.token}`,
//       },
//     })
//     .then((response) => {
//       setUpdateUsers({ ...updateusers, universities: response.data });
//       console.log(response.data);
//     })
//     .catch((err) => {
//       setUpdateUsers({
//         ...updateusers,
//         loading: false,
//         err: [{ message: err.response.data.message }],
//       });
//     });
// }, []);

// const updateUser = (e) => {
//   e.preventDefault();
//   setUpdateUsers({ ...updateusers, loading: true });

//   const formData = new FormData();
//   formData.append("displayName", updateusers.displayName);
//   formData.append("phoneNumber", updateusers.phoneNumber);
//   formData.append("email", updateusers.email);
//   formData.append("faculties", updateusers.faculties);
//   formData.append("university", updateusers.universities);
//   formData.append("role", updateusers.role);

//   axios
//     .put(
//       `https://localhost:7095/api/Users/Update/${id}`,
//       formData,

//       {
//         params: {
//           id: updateusers.id,
//         },
//         headers: {
//           token: auth.token,
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     )
//     .then((resp) => {
//       setUpdateUsers({
//         ...updateusers,
//         loading: false,
//         success: "Users updated successfully!",
//         reload: users.reload + 1,
//       });
//     })
//     .catch((err) => {
//       setUpdateUsers({
//         ...updateusers,
//         loading: false,
//         success: null,
//         err: [{ message: err.response.data.message }],
//       });
//     });
// };

// <div className="col-lg-12 row">
// <label
//   className="col-md-1 col-form-label"
//   htmlFor=" faculties"
// >
//   الجامعات
// </label>
// <div className="col-md-3">
//   <input
//     value={updateusers.universities}
//     onChange={(e) =>
//       setUpdateUsers({
//         ...updateusers,
//         universities: e.target.value,
//       })
//     }
//     id="universities"
//     name="universities"
//     type="text"
//     className="form-control"
//     placeholder="الجامعات"
//   />
// </div>
// <select
//   multiple
//   className="form-select custom-select-start fs-6 mb-4 "
//   id="floatingUni"
//   value={
//     Array.isArray(updateusers.university)
//       ? updateusers.university
//       : []
//   }
//   onChange={(e) =>
//     setUpdateUsers({
//       ...updateusers,
//       universities: Array.from(
//         e.target.selectedOptions,
//         (option) => option.value
//       ),
//     })
//   }
// >
//   <option value="" disabled>
//     اختر الجامعة
//   </option>
//   {updateusers.universities &&
//     updateusers.universities.map((universities) => (
//       <option
//         key={universities.id}
//         value={universities.id}
//       >
//         {universities.name}
//       </option>
//     ))}
// </select>
// </div>
