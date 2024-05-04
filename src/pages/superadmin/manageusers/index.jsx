import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ManageUsersPage = () => {
  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h2 style={{ color: "red", paddingBottom: "15px" }}>
              اداره المستخدمين{" "}
            </h2>
            <div className="card  ">
              <div className="card-header">
                <h4 className="card-title">اداره المستخدمين</h4>
              </div>

              <div className="card-body">
                <div class="w-100 table-responsive">
                  <div id="example_wrapper" className="dataTables_wrapper">
                    <form>
                      <table id="example" className="display w-100 table ">
                        <thead className="table  table-hover">
                          <tr role="row" className="">
                            <th>id</th>

                            <th>الاسم</th>
                            <th>الموبايل</th>
                            <th>الايميل</th>

                            <th>الكليات</th>

                            <th>الجامعات</th>
                            <th>الدور</th>
                            <th>تعديل</th>
                            <th>حذف</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>

                            <td>احمد محمد</td>
                            <td>01012754672 </td>
                            <td>info2@example.com</td>
                            <td>حاسبات ومعلومات</td>
                            <td>حلوان</td>
                            <td>role</td>

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

                            <td>احمد محمد</td>
                            <td>01012754672 </td>
                            <td>info2@example.com</td>
                            <td>حاسبات ومعلومات</td>
                            <td>حلوان</td>
                            <td>role</td>

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

                            <td>احمد محمد</td>
                            <td>01012754672 </td>
                            <td>info2@example.com</td>
                            <td>حاسبات ومعلومات</td>
                            <td>حلوان</td>
                            <td>role</td>

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

                            <td>احمد محمد</td>
                            <td>01012754672 </td>
                            <td>info2@example.com</td>
                            <td>حاسبات ومعلومات</td>
                            <td>حلوان</td>
                            <td>role</td>

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

                            <td>احمد محمد</td>
                            <td>01012754672 </td>
                            <td>info2@example.com</td>
                            <td>حاسبات ومعلومات</td>
                            <td>حلوان</td>
                            <td>role</td>

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

ManageUsersPage.displayName = "ManageUsersPage";

ManageUsersPage.propTypes = {};

export { ManageUsersPage };
