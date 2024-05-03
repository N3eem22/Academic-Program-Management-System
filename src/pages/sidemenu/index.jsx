import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const SideMenu = ({ activeItem }) => {
  return (
    <div className=" container-fluid  " dir="rtl">
      <div className="row">
        <div className="col-md-2">
          <div className={styles.sideMenu}>
            <div
              className={`${styles.menuItem} ${
                activeItem === "dashboard" && styles.active
              }`}
              onClick={() => (activeItem = "dashboard")}
            >
              البرامج الدراسيه
            </div>
            <div
              className={`${styles.menuItem} ${
                activeItem === "reports" && styles.active
              }`}
              onClick={() => (activeItem = "reports")}
            >
              التقارير
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <nav
            className={`${styles["navbar"]} border border-2 shadow p-2 mb-1  `}
          >
            <div className="nav-content p-3">
              <a className="navbar-brand" href="#">
                <img
                  src="../src\assets\imgs\book.svg"
                  alt="Logo"
                  width="25"
                  height="20"
                  className="d-inline-block align-text-center"
                />
                البرامج الدراسيه
              </a>
            </div>
            <div className="">
              <Link className="navbar-brand" to="/controls">
                <img
                  src="../src\assets\imgs\gear-wide-connected.svg"
                  alt="Logo"
                  width="25"
                  height="20"
                  className="d-inline-block align-text-center"
                />
                نظام التحكم
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
