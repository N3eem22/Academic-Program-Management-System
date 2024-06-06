import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { getAuthUser } from "../../helpers/storage";
import { ProgramComponent } from "../../components/ProgramComponent";

const SideMenu = () => {
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const [activeItem, setActiveItem] = useState("");

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
  // useEffect(() => {
  //   console.log('isAdmin:', isAdmin); 
  //   console.log('isUser:', isUser);
  // }, [isAdmin ,isUser]);
 
  const handleItemClick = (item) => {
    setActiveItem(item);
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
                    <strong className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        البرامج الدراسيه
                      </button>
                     
                    </strong>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse "
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <button className="btn" onClick={(e)=>handleClick(e)}>بيانات البرنامج</button>
                      </div>
                      {showProgramComponent && <ProgramComponent />} 
                    </div>
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
                //                 className={`${styles.menuItem} ${
                //                   activeItem === "controlUni" && styles.active
                //                 }`}
                //                 onClick={() => handleItemClick("controlUni")}

                className={` ${styles.menuItem} ${
                  activeItem === "controlUni" && styles.active
                }`}
                onClick={() => setActiveItem("controlUni")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/manageuni">ادارة الجامعات </Link>
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
          </div>
        </div>

        <div className="col-md-10">
          <nav className={`${styles["navbar"]} border border-2  rounded-top-5  shadow pb-3  `}>
            <div className="nav-content fs-5 fw-semibold p-2">
              {isSuperAdmin && (
                <Link className="navbar-brand fs-5 fw-semibold" to="/manageuni">
                  <img
                    src="../src\assets\imgs\gear-wide-connected.svg"
                    alt="Logo"
                    width="25"
                    // height="20"
                    className=" d-inline-block align-text-center"
                  />
                  إدارة الجامعات
                </Link>
              )}
              {isSuperAdmin && (
                <Link
                  className="navbar-brand fs-5 fw-semibold"
                  to="/manageusers"
                >
                  <img
                    src="../src\assets\imgs\gear-wide-connected.svg"
                    alt="Logo"
                    width="25"
                    // height="20"
                    className="  d-inline-block align-text-center"
                  />
                  إدارة المستخدمين
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
                  <img
                    src="../src\assets\imgs\gear-wide-connected.svg"
                    alt="Logo"
                    width="25"
                    height="20"
                    className=" ms-3 d-inline-block align-text-center"
                  />
                  نظام التحكم
                </Link>
              )}
              {isAdmin && (
                <a className="navbar-brand" href="/managefaculty">
                  <img
                    src="../src\assets\imgs\book.svg"
                    alt="Logo"
                    width="25"
                    height="20"
                    className="d-inline-block align-text-center"
                  />
                  اداره الكليات{" "}
                </a>
              )}
            </div>

            <div className="nav-content fs-6  fw-semibold">
            {isUser && (
                <Link className="navbar-brand fs-6   fw-semibold" to="/Levelsuser">
                  <button
                    type="button"
                    style={{  borderLeftColor: "#19355a" , borderTopColor: "#19355a" , borderRightColor : "#19355a" ,}}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"  
                  >
البرامج الدراسيه                  </button>
                </Link>
              )}
              {isUser && (
                <Link className="navbar-brand fs-5 fw-semibold" to="/Levelsuser">
                  <button
                    type="button"
                    style={{  borderLeftColor: "#19355a" , borderTopColor: "#19355a" , borderRightColor : "#19355a" ,}}
                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    المستويات
                  </button>
                </Link>
              )}
              {isUser && (
                <a className="navbar-brand" href="/estimates">
                  <button
                    type="button"
                    style={{  borderLeftColor: "#19355a" , borderTopColor: "#19355a" , borderRightColor : "#19355a" ,}}

                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1 "
                  >
                    التقديرات
                  </button>
                </a>
              )}
              {isUser && (
                <a className="navbar-brand" href="/academicload">
                  <button
                    type="button"
                    style={{  borderLeftColor: "#19355a" , borderTopColor: "#19355a" , borderRightColor : "#19355a" ,}}

                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    العبء الدراسي حسب المستوي
                  </button>
                </a>
              )}
              {isUser && (
                <a className="navbar-brand" href="courses">
                  <button
                    type="button"
                    style={{  borderLeftColor: "#19355a" , borderTopColor: "#19355a" , borderRightColor : "#19355a" ,}}

                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    مقررات البرنامج
                  </button>
                </a>
              )}
              {isUser && (
                <a className="navbar-brand" href="/gpa">
                  <button
                    type="button"
                    style={{  borderLeftColor: "#19355a" , borderTopColor: "#19355a" , borderRightColor : "#19355a" ,}}

                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    المعدل التراكمي
                  </button>
                </a>
              )}
              {isUser && (
                <a className="navbar-brand" href="/control">
                  <button
                    type="button"
                    style={{  borderLeftColor: "#19355a" , borderTopColor: "#19355a" , borderRightColor : "#19355a" ,}}

                    className="btn btn-light  btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    الكنترول
                  </button>
                </a>
              )}
              {isUser && (
                <a className="navbar-brand" href="/graduation">
                  <button
                    type="button"
                    style={{  borderLeftColor: "#19355a" , borderTopColor: "#19355a" , borderRightColor : "#19355a" ,}}

                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    التخرج
                  </button>
                </a>
              )}
              {isUser && (
                <a className="navbar-brand" href="/Generalestimates">
                  <button
                    type="button"
                    style={{  borderLeftColor: "#19355a" , borderTopColor: "#19355a" , borderRightColor : "#19355a" ,}}

                    className="btn btn-light btn-lg border-2 rounded-5  rounded-bottom mx-1"
                  >
                    التقديرات العامه
                  </button>
                </a>
              )}
            <div className="nav-content fs-5 fw-semibold p-2">
              {isUser}
              
            </div>
        </div>
            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
