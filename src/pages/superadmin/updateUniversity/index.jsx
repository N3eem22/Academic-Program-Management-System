import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUniversity = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // نقوم بإستخدام hook useParams للوصول إلى الـ ID من رابط الصفحة

    const [updateUni, setUpdateUni] = useState({
        name: "",
        location: "",
        loading: false,
        err: [],
    });

    useEffect(() => {
        // استعلام البيانات الحالية للجامعة المحددة عبر طلب GET قبل تحميل الصفحة
        axios.get(`https://localhost:7095/api/University/${id}`)
            .then(response => {
                const { name, location } = response.data;
                setUpdateUni({ ...updateUni, name, location });
            })
            .catch(error => {
                console.error('Error fetching university data:', error);
            });
    }, [id]); // نحدد id كـ dependency لتحميل البيانات فقط عندما يتغير الـ ID

    const handleUpdateUniversity = (e) => {
        e.preventDefault();
        setUpdateUni({ ...updateUni, loading: true, err: [] });
        axios.put(`https://localhost:7095/api/University/${id}`, {
            name: updateUni.name,
            location: updateUni.location
        })
            .then(() => {
                setUpdateUni({ ...updateUni, loading: false, err: [] });
                navigate("/manageuni");
            })
            .catch((err) => {
                setUpdateUni({
                    ...updateUni,
                    loading: false,
                    err: [{ message: err.response.data.message }],
                });
            });

    };

    return (
        <Fragment>
            <div className="container rtl" dir="rtl" style={{ backgroundColor: "#fff", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)", padding: "20px", borderRadius: "10px", marginTop: "50px", width: "40%" }}>
            {updateUni.err && updateUni.err.length > 0 && (
                        <div className="col-md-4 m-auto  alert alert-danger">
                            <ul
                                className="fw-semibold fs-5"
                                style={{ listStyleType: "none", padding: 0, margin: 0 }}
                            >
                                {updateUni.err.map((error, index) => (
                                    <li key={index}>{error.message}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                <div className="row mt-3">
                    <div className="col-md-2"></div>
                    
                    <div className="col-md-10">
                        <div className="col-md-12 m-auto">
                            <span>
                                <div className="form-group m-auto  row">
                                    <label className="col-lg-3 fw-semibold fs-5 col-form-label" htmlFor="universityName">
                                        اسم الجامعة
                                    </label>
                                    <div className="col-lg-5 ">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="universityName"
                                                value={updateUni.name}
                                                onChange={(e) =>
                                                    setUpdateUni({ ...updateUni, name: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="col-md-12">
                            <span>
                                <div className="form-group m-auto  row">
                                    <label className="col-lg-3 fw-semibold fs-5 col-form-label" htmlFor="location">
                                        الموقع
                                    </label>
                                    <div className="col-lg-5 ">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="location"
                                                value={updateUni.location}
                                                onChange={(e) =>
                                                    setUpdateUni({ ...updateUni, location: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-5 m-auto">
                                    <button type="button" onClick={handleUpdateUniversity} className="px-4 mt-3 fw-semibold fs-5 btn btn-primary">
                                        تعديل
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export { UpdateUniversity };
