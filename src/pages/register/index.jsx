import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { setAuthUser } from "../../helper/storage.jsx";
import { useNavigate } from "react-router-dom";

const RegisterPage = React.memo(() => {
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        email: "",
        displayName: "",
        phoneNumber: "",
        password: "",
        role: "",
        university: "",
        universities: [],
        faculty: "",
        faculties: [],
        loading: false,
        err: [],
    });
    useEffect(() => {
        axios
            .get("https://localhost:7095/api/University")
            .then((response) => {
                setRegister({ ...register, universities: response.data });
                console.log(response.data);
            })
            .catch((err) => {
                setRegister({
                    ...register,
                    loading: false,
                    err: [{ message: err.response.data.message }],
                });
            });


    }, []);
    useEffect(() => {
        if (register.university) {
            axios
                .get(`https://localhost:7095/api/faculty?universityId=${register.university}`)

                .then((response) => {
                    setRegister({ ...register, faculties: response.data });
                    console.log(response.data);
                    console.log(register.university);
                })
                .catch((err) => {
                    setRegister({
                        ...register,
                        loading: false,
                        err: [{ message: err.response.data.message }],
                    });
                });
        }
    }, [register.university]);


    const RegisterFun = (e) => {
        e.preventDefault();
        setRegister({ ...register, loading: true, err: [] });
        axios
            .post("https://localhost:7095/api/Accounts/Register", {
                email: register.email,
                displayName: register.displayName,
                phoneNumber: register.phoneNumber,
                password: register.password,
                role: register.role,
                facultyid: [register.faculty],
                universityID: [register.university] 
            })
            .then((resp) => {
                setRegister({ ...register, loading: false, err: [] });
                setAuthUser(resp.data.user);
                localStorage.setItem("Token", JSON.stringify(resp.data.token));
                navigate("/");
            })
            .catch((err) => {
                setRegister({
                    ...register,
                    loading: false,
                    err: [{ message: err.response.data.message }],
                });
            });
    };

    return (
        <Fragment>
            <div className="container-fluid text-center bg-light w-100 ">
                <div className="row">
                    <div className="col-md-12 border-3">
                        <div className="row w-100 vh-100 shadow-5 align-content-center justify-content-center">
                            <div className="w-50  card shadow justify-content-center align-items-center">
                                <div className="col-md-4 logo mt-4">
                                    <img
                                        src="./src/assets/imgs/Hel.svg"
                                        className="w-50 "
                                        alt="..."
                                    />
                                </div>
                                {register.err && register.err.length > 0 && (
                                    <div className="col-md-4 mt-3 alert alert-danger">
                                        <ul
                                            className="fw-semibold fs-5"
                                            style={{ listStyleType: "none", padding: 0, margin: 0 }}
                                        >
                                            {register.err.map((error, index) => (
                                                <li key={index}>{error.message}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="col-md-4 form mt-1 mb-5">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control mb-4"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            value={register.email}
                                            onChange={(e) =>
                                                setRegister({ ...register, email: e.target.value })
                                            }
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating position-relative">
                                        <input
                                            type="text"
                                            className="form-control mb-4"
                                            id="floatingName"
                                            placeholder="Name"
                                            value={register.displayName}
                                            onChange={(e) =>
                                                setRegister({ ...register, displayName: e.target.value })
                                            }
                                        />

                                        <label htmlFor="floatingName">Name</label>
                                    </div>
                                    <div className="form-floating position-relative ">
                                        <input
                                            type="text"
                                            className="form-control  mb-4"
                                            id="floatingPhoneNumber"
                                            placeholder="Phone Number"
                                            value={register.phoneNumber}
                                            onChange={(e) =>
                                                setRegister({ ...register, phoneNumber: e.target.value })
                                            }
                                        />
                                        <label htmlFor="floatingPhoneNumber">Phone Number</label>
                                    </div>
                                    <div className="form-floating position-relative">
                                        <input
                                            type="password"
                                            className="form-control  mb-4"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            value={register.password}
                                            onChange={(e) =>
                                                setRegister({ ...register, password: e.target.value })
                                            }
                                        />

                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-floating position-relative">
                                        <select
                                            className="form-control mb-4 fw-semibold"
                                            id="floatingUni"
                                            value={register.university}
                                            onChange={(e) =>
                                                setRegister({ ...register, university: e.target.value })
                                            }
                                        >
                                            <option value="" disabled>Select an university</option>
                                            {register.universities.map((university) => (
                                                <option key={university.id} value={university.id}>
                                                    {university.name}
                                                </option>
                                            ))}
                                        </select>
                                        <label htmlFor="floatingUni fw-semibold">University</label>
                                    </div>
                                    <div className="form-floating position-relative">
                                        <select
                                            className="form-control mb-4 fw-semibold"
                                            id="floatingFaculity"
                                            value={register.faculty}
                                            onChange={(e) =>
                                                setRegister({ ...register, faculty: e.target.value })
                                            }
                                        >
                                            <option value="" disabled>Select a faculty</option>
                                            {register.faculties.map((faculty) => (
                                                <option key={faculty.id} value={faculty.id}>
                                                    {faculty.facultyName}
                                                </option>
                                            ))}
                                        </select>
                                        <label htmlFor="floatingFaculity fw-semibold">Faculty</label>
                                    </div>

                                    <div className={`form-group radio-group mt-4 ${styles.radio} `}>
                                        <div className="form-check ms-5">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="adminRadio"
                                                name="role"
                                                value="Admin"
                                                checked={register.role === "Admin"}
                                                onChange={(e) => setRegister({ ...register, role: e.target.value })}
                                            />
                                            <label className="form-check-label fw-semibold" htmlFor="adminRadio">
                                                Admin
                                            </label>
                                        </div>

                                        <div className="form-check me-5">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="userRadio"
                                                name="role"
                                                value="User"
                                                checked={register.role === "User"}
                                                onChange={(e) => setRegister({ ...register, role: e.target.value })}
                                            />
                                            <label className="form-check-label fw-semibold" htmlFor="userRadio">
                                                User
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className={` mb-4 ${styles["button"]}`}
                                    onClick={RegisterFun}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
});

RegisterPage.displayName = "RegisterPage";

RegisterPage.propTypes = {};

export { RegisterPage };
