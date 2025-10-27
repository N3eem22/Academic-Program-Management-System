import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HeaderPage } from "../header";
import SideMenu from "../sidemenu";

const HomePage = () => {
  return (
    <Fragment>
      <div className=" container-fluid" dir="rtl">
        <div className="row">
          <div className="col-md-12">
            <div className={styles["header"]}>
              <HeaderPage />
              <div>
              <div className={styles["sidemenu"]}>
                <SideMenu />
              </div>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HomePage.displayName = "HomePage";

HomePage.propTypes = {};

export { HomePage };
