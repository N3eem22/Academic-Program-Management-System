import React, { Fragment, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { setAuthUser } from "../../helper/storage.jsx";
import { useNavigate } from "react-router-dom";

const LoginPage = React.memo(() => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    role: "",
    loading: false,
    err: [],
    showPassword: false, 
  });

  const togglePasswordVisibility = () => {
    setLogin({ ...login, showPassword: !login.showPassword });
  };

  const LoginFun = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true, err: [] });
    axios
      .post("https://localhost:7095/api/Accounts/Login", {
        email: login.email,
        password: login.password,
        role: login.role,
      })
      .then((resp) => {
        setLogin({ ...login, loading: false, err: [] });
        setAuthUser(resp.data.user);
        console.log(resp.data);
        localStorage.setItem("Token", JSON.stringify(resp.data.token));
        navigate("/");
      })
      .catch((err) => {
        setLogin({
          ...login,
          loading: false,
          err: [{ message: err.response.data.message }],
        });
      });
  };

  return (
    <Fragment>
      <div className="container-fluid text-center bg-light w-100 vh-100">
        <div className="row">
          <div className="col-md-12 border-3">
            <div className="row w-100 vh-100 shadow-5 align-content-center justify-content-center">
              <div className="w-50 h-75 card shadow justify-content-center align-items-center">
                <div className="col-md-4 logo">
                  <img
                    src="./src/assets/imgs/Hel.svg"
                    className="w-50 h-100"
                    alt="..."
                  />
                </div>
                {login.err && login.err.length > 0 && (
                  <div className="col-md-4 mt-3 alert alert-danger">
                    <ul
                      className="fw-semibold fs-5"
                      style={{ listStyleType: "none", padding: 0, margin: 0 }}
                    >
                      {login.err.map((error, index) => (
                        <li key={index}>{error.message}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="col-md-4 form mt-1 mb-5">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control mb-4"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={login.email}
                      onChange={(e) =>
                        setLogin({ ...login, email: e.target.value })
                      }
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating position-relative">
                    <input
                      type={login.showPassword ? "text" : "password"}
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      value={login.password}
                      onChange={(e) =>
                        setLogin({ ...login, password: e.target.value })
                      }
                    />
                    <i
                      className={`position-absolute end-0 top-50 translate-middle-y ${styles.passwordIcon}`}
                      onClick={togglePasswordVisibility}
                    >
                      <i
                        className={`${login.showPassword ? "fas fa-eye-slash" : "fas fa-eye"} fs-5 me-3`}
                        style={{ cursor: "pointer" }}
                      ></i>


                    </i>
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  
                  <div className={`form-group radio-group mt-4 ${styles.radio} `}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="adminRadio"
                        name="role"
                        value="Admin"
                        checked={login.role === "Admin"}
                        onChange={(e) => setLogin({ ...login, role: e.target.value })}
                      />
                      <label className="form-check-label fw-semibold" htmlFor="adminRadio">
                        Admin
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="superAdminRadio"
                        name="role"
                        value="SuperAdmin"
                        checked={login.role === "SuperAdmin"}
                        onChange={(e) => setLogin({ ...login, role: e.target.value })}
                      />
                      <label className="form-check-label fw-semibold" htmlFor="superAdminRadio">
                        Super Admin
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="userRadio"
                        name="role"
                        value="User"
                        checked={login.role === "User"}
                        onChange={(e) => setLogin({ ...login, role: e.target.value })}
                      />
                      <label className="form-check-label fw-semibold" htmlFor="userRadio">
                        User
                      </label>
                    </div>
                  </div>
              </div>
                <button
                  type="button"
                  className={styles["button"]}
                  onClick={LoginFun}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

LoginPage.displayName = "LoginPage";

LoginPage.propTypes = {};

export { LoginPage };
