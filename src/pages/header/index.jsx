import React, { Fragment } from "react";
import axios from "axios";
import { removeAuthUser } from "../../helpers/storage.jsx";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
const HeaderPage = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.post("https://localhost:7095/api/Accounts/Logout" );
      removeAuthUser();
      navigate("/"); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
};

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
                <button onClick={logout} className="border border-transparent  rounded-2 p-2">
                  <img src="..\src\assets\imgs\box-arrow-left.svg" alt="" />
                </button>
              
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
