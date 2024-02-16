import React, { Fragment, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  loginPageStatesInitialState,
  loginPageStatesReducer,
} from "./indexReducer";

const LoginPage = React.memo(() => {
  // const [loginPageStates, dispatchLoginPageStates] = useReducer(
  //   loginPageStatesReducer,
  //   loginPageStatesInitialState
  // );
  // const forgetPasswordBtnHandler = () => {
  //   dispatchLoginPageStates({ type: "FORGET" });
  // };
  return (
    <Fragment>
      <div className="container-fluid text-center  bg-light w-100 vh-100">
        <div className="row">
          <div className="col-md-12 border-3 ">
            <div className="row w-100 vh-100 shadow-5 align-content-center justify-content-center  ">
              <div className="  w-50 h-75  card shadow justify-content-center  align-items-center ">
                <div className="col-md-4 logo ">
                  <img
                    src="./src/assets/imgs/Hel.svg"
                    className=" w-50  h-100"
                    alt="..."
                  />
                </div>

                <div className="col-md-4 form my-5">
                  <div className="form-floating ">
                    <input
                      type="email"
                      className="form-control mb-4 "
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    {/* <div class="input-group-text ">
                      {" "}
                      <i class="fa fa-eye"></i>
                    </div> */}

                    <label for="floatingPassword ">Password</label>
                  </div>
                </div>

                <button type="button" className={styles["button"]}>
                  Login
                </button>

                <div className="ForgetPass py-3 ">
                  <div className="txt">
                    Forgot Password ?
                    <button type="button" class="btn btn-link">
                      Click Here
                    </button>
                  </div>
                </div>
                {/* {!pageStates.forget && <div></div>} */}
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
