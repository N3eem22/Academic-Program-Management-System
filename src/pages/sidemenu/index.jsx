import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { getAuthUser } from "../../helpers/storage";
import { ProgramComponent } from "../../components/ProgramComponent";
import axios from "axios";

const SideMenu = () => {
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [reload, setReload] = useState(0);
  const [programInfoId, setProgramInfoId] = useState("");


  const [showProgramComponent, setShowProgramComponent] = useState(false);
  const handleClick = () => {
    setShowProgramComponent(!showProgramComponent);
  };
  useEffect(() => {
    const authUser = getAuthUser();
    setIsSuperAdmin(authUser && authUser.userRole === "SuperAdmin");
    setIsAdmin(authUser && authUser.userRole === "Admin");
    setIsUser(authUser && authUser.userRole === "User");
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };


const [ProgramId, setProgramId] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Step 2: Create a function to update state
  const handleProgramId = (data) => {
    console.log(data);
    setProgramId(data);
  };
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log(ProgramId);
    axios.get(`https://localhost:7095/api/ProgramInformation/${ProgramId}`)

            .then((resp) => {
              setProgramInfoId(resp.data.Id)
                console.log(resp);
            })
            .catch((err) => {
              setShow(false);
                console.log(err);
            });
  }, [ProgramId , reload]);

  const handleProgramClick = (programId) => {
    setSelectedProgram(programId);
    handleProgramId(programId); // Ensure you're calling the correct function
  };

  return (
    <div className="container-fluid" dir="rtl">
      <div className="row">
        <div className="col-md-2">
          <div className={styles.sideMenu}>
            {isUser && (
              <div
                className={`${styles.menuItem} ${
                  activeItem === "dashboard" && styles.active
                }`}
                onClick={() => handleItemClick("dashboard")}
              >
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h5 className="accordion-header text-xl-start">
                      <button
                        className="accordion-button  fs-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
            
                      >
                        البرامج الدراسيه
                      </button>
                    </h5>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse "
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <button className="btn  fs-4" onClick={(e) => handleClick(e)}>
                          بيانات البرنامج
                        </button>
                      </div>
                
                      {showProgramComponent && <ProgramComponent onProgramId={handleProgramId} />}                    </div>
                  </div>
                </div>
              </div>
            )}

            {isAdmin && (
              <div
                className={` ${styles.menuItem} ${
                  activeItem === "controlLookups" && styles.active
                }`}
                onClick={() => setActiveItem("controlLookups")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/AdminLookUps"> نظام التحكم </Link>
              </div>
            )}

            {isAdmin && (
              <div
                className={` ${styles.menuItem} ${
                  activeItem === "controlUni" && styles.active
                }`}
                onClick={() => setActiveItem("controlUni")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/managefaculty"> اداره الكليات</Link>
              </div>
            )}
 {isSuperAdmin && (
              <div
                className={`${styles.menuItem} ${
                  activeItem === "userManagement" && styles.active
                }`}
                onClick={() => handleItemClick("userManagement")}
              >
                <Link to="/manageusers">إدارة المستخدمين</Link>
              </div>
            )}
            {isSuperAdmin && (
              <div
                className={` ${styles.menuItem} ${
                  activeItem === "controlUni" && styles.active
                }`}
                onClick={() => setActiveItem("controlUni")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/manageuni">إدارة الجامعات </Link>
              </div>
            )}
           
            {isSuperAdmin && (
              <div
                className={`${styles.menuItem} ${
                  activeItem === "logcontrol" && styles.active
                }`}
                onClick={() => handleItemClick("logcontrol")}
              >
                <Link to="/logFiles">إدارة السجل</Link>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-10">
          <nav
            className={`${styles["navbar"]} border border-2  rounded-top-5  shadow pb-3  `}
          >
            <div className="nav-content fs-5 fw-semibold p-2">
            {isSuperAdmin && (
                <Link
                  className="navbar-brand fs-5 fw-semibold"
                  to="/manageusers"
                >
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    إدارة المستخدمين
                  </button>
                </Link>
              )}
              {isSuperAdmin && (
                <Link className="navbar-brand fs-5 fw-semibold" to="/manageuni">
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    إدارة الجامعات
                  </button>
                </Link>
              )}
            
              {isSuperAdmin && (
                <Link className="navbar-brand fs-5 fw-semibold" to="/logFiles">
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    إدارة ملفات السجل
                  </button>
                </Link>
              )}
              {/* {isSuperAdmin && (
                <Link className="navbar-brand fs-5 fw-semibold" to="/controls">
                  <img
                    src="../src\assets\imgs\gear-wide-connected.svg"
                    alt="Logo"
                    width="25"
                    height="20"
                    className="d-inline-block ms-3 me-3 align-text-center"
                  />
                  نظام التحكم
                </Link>
              )} */}
            </div>

            <div className="nav-content fs-5 fw-semibold p-2">
              {isAdmin && (
                <Link
                  className="navbar-brand fs-5 fw-semibold"
                  to="/AdminLookUps"
                >
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    نظام التحكم{" "}
                  </button>
                </Link>
              )}
              {isAdmin && (
                <a className="navbar-brand" href="/managefaculty">
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    اداره الكليات{" "}
                  </button>
                </a>
              )}
            </div>

            <div className="nav-content fs-6  fw-semibold">

              

 
              {isUser && (
                <Link
                  className="navbar-brand fs-6   fw-semibold"
                  to={`/programs/:${ProgramId}`}
                >
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    البرامج الدراسيه{" "}
                  </button>
                </Link>
              )}
              {isUser &&   (
                <Link
                  className="navbar-brand fs-5 fw-semibold"
                  to={`/Levelsuser/${12}`}
                >
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    المستويات
                  </button>
                </Link>
              )}
              {isUser &&  (
                <a className="navbar-brand" href={`/estimates/${12}`}>
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1 "
                  >
                    التقديرات
                  </button>
                </a>
              )}
              {isUser &&  (
                <a className="navbar-brand" href= {`/academicload/${12}`}>
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    العبء الدراسي حسب المستوي
                  </button>
                </a>
              )}
              {isUser &&  (
                <a className="navbar-brand" href={`/courses/${12}`}>
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    مقررات البرنامج
                  </button>
                </a>
              )}
              {isUser &&    (
                <a className="navbar-brand" href= {`/gpa/${12}`}>
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    المعدل التراكمي
                  </button>
                </a>
              )}
              {isUser &&   (
                <a className="navbar-brand" href= {`/control/${12}`}>
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light  btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    الكنترول
                  </button>
                </a>
              )}
              {isUser &&   (
                <a className="navbar-brand" href=  {`/graduation/${12}`}>
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    التخرج
                  </button>
                </a>
              )}
              {isUser &&   (
                <a className="navbar-brand" href= {`/Generalestimates/${12}`}>
                  <button
                    type="button"
                    style={{
                      borderLeftColor: "#19355a",
                      borderTopColor: "#19355a",
                      borderRightColor: "#19355a",
                    }}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    التقديرات العامه
                  </button>
                </a>
              )} 
              <div className="nav-content fs-5 fw-semibold p-2">{isUser}</div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
