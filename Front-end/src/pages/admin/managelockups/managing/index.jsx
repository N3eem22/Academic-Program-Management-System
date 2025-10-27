import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
const ManagingHome = () => {

    

  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h2 style={{ color: "red", paddingBottom: "15px" }}>
               مركز الادارة{" "}
            </h2>
            <div className="card  ">
              <div className="card-header">
                <h4 className="card-title"> </h4>
              </div>

              <div className="card-body">
              <div className="w-100 table-responsive">
                  <div id="example_wrapper" className="dataTables_wrapper">
                    <form>
                      <table id="example" className="display w-100 table ">
                        <thead className="table  table-hover f-bolder">
                          <tr role="row" className="">
                            <th> </th>
                           
                          </tr>
                        </thead>
                        <tbody>
                        
                      
                            <tr >
                              <td></td>
                         
                            </tr>
                            

                         
     
                         
                      
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
}

ManagingHome.displayName = "ManagingHome";

ManagingHome.propTypes = {};

export { ManagingHome };