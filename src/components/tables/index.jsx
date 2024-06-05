import React, { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TablePage = ({ headers, data, onRowClick }) => {
  return (
    <Fragment>
      <div dir="rtl">
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        {headers &&
                          headers.map((header, index) => (
                            <th key={index}>{header}</th>
                          ))}
                      </tr>
                    </thead>

                    <tbody id="tablebody">
                      {data &&
                        data.map((item, index) => (
                          <tr key={index} onClick={() => onRowClick(item)}>
                            {Object.values(item)
                              .slice(2)
                              .map((value, i) => (
                                <td key={i}>{value}</td>
                              ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

TablePage.displayName = "TablePage";

export { TablePage };
