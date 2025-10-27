// SuperAdmin.jsx
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getAuthUser } from "../helpers/storage.jsx";


const SuperAdmin = () => {
  const auth = getAuthUser();
  if (auth && auth.userRole === "SuperAdmin") {
    return <Outlet/> ;
  } else {
    return <Navigate to="/" />;
  }
};

export default SuperAdmin;
