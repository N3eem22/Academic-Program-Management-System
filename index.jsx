import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Buttons from "../../components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = React.memo(() => {
  return (
    <Fragment>
      <div className=" container-fluid w-100 vh-100 m-auto position-relative ">
        <div className="row">
          <div className="col-md-12 position-absolute top-50 start-50 translate-middle  position-relative ">
            <div
              className="card  shadow w-50 my-5 py-5  position-absolute top-50 start-50 translate-middle border border-2"
            >
              <div className="card-body">
                <form className=" rounded border-1 d-flex align-items-center justify-content-center">
                  <fieldset>
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label"></label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        class="form-control"
                        placeholder="User Name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label"></label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        class="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div class="mb-3">
                      <div>Forgot Password?</div>
                    </div>
                    <Buttons/>
                  </fieldset>
                </form>
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
