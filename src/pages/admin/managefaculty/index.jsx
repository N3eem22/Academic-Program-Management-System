import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ManageFacultyPage = () => {
  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h2 style={{ color: "red", paddingBottom: "15px" }}>
              اداره الكليات{" "}
            </h2>
            <div className="card  ">
              <div className="card-header">
                <h4 className="card-title">اداره الكليات</h4>
              </div>

              <div className="card-body">
                <div class="w-100 table-responsive">
                  <div id="example_wrapper" className="dataTables_wrapper">
                    <form>
                      <table id="example" className="display w-100 table ">
                        <thead className="table  table-hover">
                          <tr role="row" className="">
                            <th>id of uni</th>

                            <th>الاسم</th>
                            <th>تعديل</th>
                            <th>حذف</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>حاسبات ومعلومات</td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-primary shadow btn-xs sharp me-1"
                                  href=""
                                >
                                  <i class="fas fa-pen"></i>
                                </a>
                              </div>
                            </td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-danger shadow btn-xs sharp"
                                  href=""
                                >
                                  <i class="fa fa-trash"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>حاسبات ومعلومات</td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-primary shadow btn-xs sharp me-1"
                                  href=""
                                >
                                  <i class="fas fa-pen"></i>
                                </a>
                              </div>
                            </td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-danger shadow btn-xs sharp"
                                  href=""
                                >
                                  <i class="fa fa-trash"></i>
                                </a>
                              </div>
                            </td>
                          </tr>   <tr>
                            <td>1</td>
                            <td>حاسبات ومعلومات</td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-primary shadow btn-xs sharp me-1"
                                  href=""
                                >
                                  <i class="fas fa-pen"></i>
                                </a>
                              </div>
                            </td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-danger shadow btn-xs sharp"
                                  href=""
                                >
                                  <i class="fa fa-trash"></i>
                                </a>
                              </div>
                            </td>
                          </tr>   <tr>
                            <td>1</td>
                            <td>حاسبات ومعلومات</td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-primary shadow btn-xs sharp me-1"
                                  href=""
                                >
                                  <i class="fas fa-pen"></i>
                                </a>
                              </div>
                            </td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-danger shadow btn-xs sharp"
                                  href=""
                                >
                                  <i class="fa fa-trash"></i>
                                </a>
                              </div>
                            </td>
                          </tr>   <tr>
                            <td>1</td>
                            <td>حاسبات ومعلومات</td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-primary shadow btn-xs sharp me-1"
                                  href=""
                                >
                                  <i class="fas fa-pen"></i>
                                </a>
                              </div>
                            </td>

                            <td>
                              <div class="d-flex">
                                <a
                                  class="btn btn-danger shadow btn-xs sharp"
                                  href=""
                                >
                                  <i class="fa fa-trash"></i>
                                </a>
                              </div>
                            </td>
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
};

ManageFacultyPage.displayName = "ManageFacultyPage";

ManageFacultyPage.propTypes = {};

export { ManageFacultyPage };
