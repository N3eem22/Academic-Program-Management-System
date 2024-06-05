import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Renderer } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import axios from "axios";
const LogFiles = () => { 
  const[logData, setLogData] = useState([]);
  useEffect(()=>{
    axios.get('https://localhost:7095/api/AppLogs')
    .then(res => setLogData(res.data))
    .catch(err => console.log(err));

},[]);
  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h2 style={{ color: "red", paddingBottom: "15px" }}>
              ملفات السجل{" "}
            </h2>
            <div className="card  ">
              <div className="card-header">
                <h4 className="card-title">ملفات السجل</h4>
              </div>

              <div className="card-body">
              <div className="w-100 table-responsive">
                  <div id="example_wrapper" className="dataTables_wrapper">
                    <form>
                      <table id="example" className="display w-100 table ">
                        <thead className="table  table-hover f-bolder">
                          <tr role="row" className="">
                            <th>بريد المستخدم</th>
                            <th>اسم الكيان</th>
                            <th>الاجراء</th>
                            <th>الزمن</th>
                            <th>التغيير</th>
                            <th>الكود</th>
                            {/* <th>تم الحذف</th> */}
                          </tr>
                        </thead>
                        <tbody>
                         { 
                         logData.map((user, index) => {
                          return(
                            <tr key={index}>
                              <td>{user.userEmail}</td>
                              <td>{user.entityName}</td>
                              <td>{user.action}</td>
                              <td>{user.timestamp}</td>
                              <td>{user.changes}</td>
                              <td>{user.id}</td>
                              {/* <td>{user.isDeleted}</td> */}
                            </tr>
                            

                          )

                         })
                         
                         }
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
LogFiles.displayName = "LogFiles";

LogFiles.propTypes = {};

export { LogFiles };