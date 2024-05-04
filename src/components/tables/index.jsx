import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TablePage = ({ headers }) => {
  return (
    <Fragment>
      <div dir="rtl">
        <div className="container">
          <div className="row">
            {/* <tbody id="tablebody"> */}
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        {headers &&
                          headers?.map((header) => (
                            <th key={header}>{header}</th>
                          ))}
                      </tr>
                    </thead>

                    <tbody id="tablebody">
                      {/* <tr>
                        <td>
                          <strong>2</strong>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="w-space-no">جيد</span>
                          </div>
                        </td>
                        <td>جيد </td>
                        <td>2</td>

                        <td>
                          <button className="btn btn-primary shadow btn-xs  rounded-5 me-1 mx-1">
                            <i className="fas fa-pen"></i>
                          </button>
                          <button className="btn btn-danger shadow btn-xs  rounded-5">
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>3</strong>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="w-space-no">امتياز</span>
                          </div>
                        </td>
                        <td>امتياز </td>
                        <td>22</td>

                        <td>
                          <div className="d-flex">
                            <button className="btn btn-primary shadow btn-xs  rounded-5 me-1 mx-1">
                              <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button className="btn btn-danger shadow btn-xs  rounded-5">
                              <i className="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr> */}
                  
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* </tbody> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

TablePage.displayName = "TablePage";

export { TablePage };
