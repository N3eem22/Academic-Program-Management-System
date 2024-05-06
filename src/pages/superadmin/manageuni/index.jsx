import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // استيراد مكتبة axios
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ManageUniPage = () => {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7095/api/University')
      .then(response => {
        setUniversities(response.data);
      })
      .catch(error => {
        console.error('Error fetching universities:', error);
      });
  }, []);

  const handleAddUniversityClick = () => {
    navigate('/addUniversity');
  };
  const handleDeleteUniversity = (id) => {
    axios.delete(`https://localhost:7095/api/University/${id}`)
      .then(response => {
        // بعد الحذف بنجاح، يمكننا تحديث الحالة لإزالة الجامعة المحذوفة من القائمة
        setUniversities(universities.filter(university => university.id !== id));
      })
      .catch(error => {
        console.error('Error deleting university:', error);
      });
  };
  const handleEditUniversity = (id) => {
    // هنا يمكنك تنفيذ الإجراءات الخاصة بك لتحميل بيانات الجامعة المحددة والتحول إلى صفحة التعديل
    navigate(`/editUniversity/${id}`);
  };

  return (
    <Fragment>
      <div className="container " dir="rtl">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="col-12" style={{ paddingBottom: "15px" }}>
              <div className="row"><div className="col-2">
                <h2 style={{ color: "red" }}>
                  اداره الجامعات{" "}
                </h2>
              </div>
                <div className="col-md-2">
                  <button className="btn btn-success py-3 fw-semibold fs-5 sharp" type="button" onClick={handleAddUniversityClick}>
                    اضافة جامعه
                  </button>
                </div>
              </div>
            </div>
            <div className="card  ">
              <div className="card-header">
                <h4 className="card-title">اداره الجامعات</h4>
              </div>

              <div className="card-body">
                <div class="w-100 table-responsive">
                  <div id="example_wrapper" className="dataTables_wrapper">
                    <form>
                      <table id="example" className="display w-100 table ">
                        <thead className="table  table-hover">
                          <tr role="row" className="">
                            <th>الاسم</th>
                            <th>الموقع</th>
                            <th>تعديل</th>
                            <th>حذف</th>
                          </tr>
                        </thead>
                        <tbody>
                          {universities.map(university => (
                            <tr key={university.id}>
                              <td>{university.name}</td>
                              <td>{university.location}</td>
                              <td>
                                <div className="d-flex">
                                  <button
                                    className="btn btn-primary shadow btn-xs sharp me-1"
                                    onClick={() => handleEditUniversity(university.id)} 
                                  >
                                    <i className="fas fa-pen"></i>
                                  </button>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex">
                                  <button
                                    className="btn btn-danger shadow btn-xs sharp"
                                    onClick={() => handleDeleteUniversity(university.id)} 
                                  >
                                    <i className="fa fa-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
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

ManageUniPage.displayName = "ManageUniPage";

ManageUniPage.propTypes = {};

export { ManageUniPage };
