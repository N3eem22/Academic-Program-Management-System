import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./index.module.scss";

const ControlsPage = () => {
    const [formData, setFormData] = useState({
        courseNameInArabic: "",
        courseNameInEnglish: "",
        sub_CourseNameInArabic: "",
        sub_CourseNameInEnglish: "",
        courseCodeInArabic: "",
        courseCodeInEnglish: "",
        sub_CourseCodeInArabic: "",
        sub_CourseCodeInEnglish: "",
        courseNickname: "",
        contentSummaryInArabic: "",
        contentSummaryInEnglish: "",
        facultyId: ""
    });

    const [submittedData, setSubmittedData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://localhost:7095/api/CollegeCourses");
            setSubmittedData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateData();
            } else {
                await addData();
            }
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }
    };

    const addData = async () => {
        try {
            const response = await axios.post("https://localhost:7095/api/CollegeCourses", formData);
            console.log("Response from server:", response.data);
            setSubmittedData([...submittedData, formData]);
            resetForm();
        } catch (error) {
            console.error("Error adding data:", error);
        }
    };

    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleUpdate = (item) => {
        setSelectedItemId(item.id);
        setFormData(item);
        setIsEditing(true);
    };

    const updateData = async (id) => {
        try {
            const response = await axios.put(`https://localhost:7095/api/CollegeCourses/${id}`, formData);
            console.log("Updated data:", response.data);
            fetchData();
            resetForm();
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };


    const resetForm = () => {
        setFormData({
            courseNameInArabic: "",
            courseNameInEnglish: "",
            sub_CourseNameInArabic: "",
            sub_CourseNameInEnglish: "",
            courseCodeInArabic: "",
            courseCodeInEnglish: "",
            sub_CourseCodeInArabic: "",
            sub_CourseCodeInEnglish: "",
            courseNickname: "",
            contentSummaryInArabic: "",
            contentSummaryInEnglish: "",
            facultyId: ""
        });
    };
    const deleteItem = async (id) => {
        try {
            await axios.delete(`https://localhost:7095/api/CollegeCourses/${id}`);
            fetchData(); 
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <>
            <div className="container" dir="rtl">
                <div className="row mt-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <h2 style={{ color: "red" }}>برنامج : التثقيف بالفن</h2>
                        <br />
                        <div className="inputs-card">
                            <div className="card-body">
                                <div className="form-validation">
                                    <form className="form-valide" onSubmit={handleSubmit} method="post">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="facultyId">
                                                        كود الكلية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="facultyId"
                                                            name="facultyId"
                                                            value={formData.facultyId}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="courseNameInArabic">
                                                        اسم المقرر باللغة العربية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="courseNameInArabic"
                                                            name="courseNameInArabic"
                                                            value={formData.courseNameInArabic}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="courseNameInEnglish">
                                                        اسم المقرر باللغة الانجليزية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="courseNameInEnglish"
                                                            name="courseNameInEnglish"
                                                            value={formData.courseNameInEnglish}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="sub_CourseNameInArabic">
                                                        اسم المقرر الفرعي باللغة العربية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="sub_CourseNameInArabic"
                                                            name="sub_CourseNameInArabic"
                                                            value={formData.sub_CourseNameInArabic}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="sub_CourseNameInEnglish">
                                                        اسم المقرر الفرعي باللغة الانجليزية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="sub_CourseNameInEnglish"
                                                            name="sub_CourseNameInEnglish"
                                                            value={formData.sub_CourseNameInEnglish}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="courseCodeInArabic">
                                                        كود المقرر باللغة العربية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="courseCodeInArabic"
                                                            name="courseCodeInArabic"
                                                            value={formData.courseCodeInArabic}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="courseCodeInEnglish">
                                                        كود المقرر باللغة الانجليزية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="courseCodeInEnglish"
                                                            name="courseCodeInEnglish"
                                                            value={formData.courseCodeInEnglish}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="sub_CourseCodeInArabic">
                                                        كود المقرر الفرعي باللغة العربية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="sub_CourseCodeInArabic"
                                                            name="sub_CourseCodeInArabic"
                                                            value={formData.sub_CourseCodeInArabic}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="sub_CourseCodeInEnglish">
                                                        كود المقرر الفرعي باللغة الانجليزية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="sub_CourseCodeInEnglish"
                                                            name="sub_CourseCodeInEnglish"
                                                            value={formData.sub_CourseCodeInEnglish}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="courseNickname">
                                                        اسم الشهرة
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="courseNickname"
                                                            name="courseNickname"
                                                            value={formData.courseNickname}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="contentSummaryInArabic">
                                                        ملخص المحتوي باللغة العربية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="contentSummaryInArabic"
                                                            name="contentSummaryInArabic"
                                                            value={formData.contentSummaryInArabic}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-lg-4 col-form-label" htmlFor="contentSummaryInEnglish">
                                                        ملخص المحتوي باللغة الانجليزية
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="contentSummaryInEnglish"
                                                            name="contentSummaryInEnglish"
                                                            value={formData.contentSummaryInEnglish}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center text-center">
                                                <div className="col-md-6">
                                                    <button className={`btn fs-4 fw-semibold px-4 text-white ${styles.save}`} type="button" onClick={() => updateData(selectedItemId)}>
                                                        <i className="fa-regular fa-bookmark"></i> {isEditing ? 'تعديل' : 'حفظ'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {submittedData.length > 0 && (
                            <table className="table mt-4">
                                <thead>
                                    <tr>
                                        <th>كود الكلية</th>
                                        <th>اسم المقرر باللغة العربية</th>
                                        <th>اسم المقرر باللغة الانجليزية</th>
                                        <th>اسم المقرر الفرعي باللغة العربية</th>
                                        <th>اسم المقرر الفرعي باللغة الانجليزية</th>
                                        <th>كود المقرر باللغة العربية</th>
                                        <th>كود المقرر باللغة الانجليزية</th>
                                        <th>كود المقرر الفرعي باللغة العربية</th>
                                        <th>كود المقرر الفرعي باللغة الانجليزية</th>
                                        <th>اسم الشهرة</th>
                                        <th>ملخص المحتوي باللغة العربية</th>
                                        <th>ملخص المحتوي باللغة الانجليزية</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {submittedData.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.facultyId}</td>
                                            <td>{data.courseNameInArabic}</td>
                                            <td>{data.courseNameInEnglish}</td>
                                            <td>{data.sub_CourseNameInArabic}</td>
                                            <td>{data.sub_CourseNameInEnglish}</td>
                                            <td>{data.courseCodeInArabic}</td>
                                            <td>{data.courseCodeInEnglish}</td>
                                            <td>{data.sub_CourseCodeInArabic}</td>
                                            <td>{data.sub_CourseCodeInEnglish}</td>
                                            <td>{data.courseNickname}</td>
                                            <td>{data.contentSummaryInArabic}</td>
                                            <td>{data.contentSummaryInEnglish}</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm" onClick={() => handleUpdate(data)}>نعديل</button>
                                            </td>
                                            <td>
                                            <button className="btn btn-danger btn-sm" onClick={() => deleteItem(data.id)}>حذف</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};

ControlsPage.displayName = "ControlsPage";

ControlsPage.propTypes = {};

export { ControlsPage };
