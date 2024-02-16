import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TablePage } from "../../components/tables";

const HomePage = () => {
  return (
    <Fragment>
      <TablePage />
    </Fragment>
  );
};

HomePage.displayName = "HomePage";

HomePage.propTypes = {};

export { HomePage };
