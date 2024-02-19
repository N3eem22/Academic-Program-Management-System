import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TablePage = () => {
  return (
    <Fragment>
      <div dir="rtl">
        <div className="container">
          <div className="row">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="width80">
                          <strong>#</strong>
                        </th>
                        <th>
                          <strong>المستوى الدراسى</strong>
                        </th>
                        <th>
                          <strong>الحد الادنى للساعات </strong>
                        </th>
                        <th>
                          <strong>الحد الاقصى للساعات </strong>
                        </th>
                        <th>
                          <strong>كود المؤسسة</strong>
                        </th>

                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>01</strong>
                        </td>
                        <td>الاول</td>
                        <td>10</td>
                        <td>20</td>
                        <td>0huiu2</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <strong>02</strong>
                        </td>
                        <td>التاني</td>
                        <td>10</td>
                        <td>22</td>
                        <td>fhso0</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <strong>03</strong>
                        </td>
                        <td>التالت</td>
                        <td>50</td>
                        <td>20</td>
                        <td>hu0w2</td>
                        <td></td>
                      </tr>
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
