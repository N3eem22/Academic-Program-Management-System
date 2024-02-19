import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
const HeaderPage = () => {
  return (
    <Fragment>
      <div className="container-fluied" dir="rtl">
        <div className="row">
          <div className={styles["header"]}>
            <div className={`${styles["nav-logo"]} col-md-4   `}>
              <h2>جامعه حلوان لاداره شئون الطلاب</h2>
            </div>
            <div className={`${styles["header-content"]} col-md-6   `}>
              <p>التربية الفنية</p>
              <p>العام الاكاديمى 2023-2024 - الفصل الدراسي الأول</p>
            </div>
            <div className={`${styles["header-icon"]} col-md-2   `}>
              <Link to="login">
                <button className="border border-transparent  rounded-2 p-2">
                  <link to="login" />
                  <img src="..\src\assets\imgs\box-arrow-left.svg" alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HeaderPage.displayName = "HeaderPage";

HeaderPage.propTypes = {};

export { HeaderPage };
