import styles from "./App.module.scss";

// react
import { Suspense, useEffect } from "react";

// router
import { Routes, Route, useNavigation } from "react-router-dom";

// pages
import { LoginPage } from "./pages/login";
import { LevelsPage } from "./pages/programs/edit/levels";
import { HomePage } from "./pages/home";
import { EstimatesPage } from "./pages/programs/edit/estimates";
import { AcademicloadPage } from "./pages/programs/edit/academicload";
import { GeneralestimatesPage } from "./pages/programs/edit/generalestimates";
import { GraduationPage } from "./pages/programs/edit/graduation";
import { ManageUsersPage } from "./pages/superadmin/manageusers";
import { ManageUniPage } from "./pages/superadmin/manageuni";
import { ManageFacultyPage } from "./pages/admin/managefaculty";



// mui
import CircularProgress from "@mui/material/CircularProgress";
import Layout from "./pages/layout";

function App() {
  useEffect(() => {}, []);
  return (
    <Suspense
      fallback={
        <CircularProgress
          size={20}
          sx={{
            color: "#fff",
          }}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/levels" element={<LevelsPage />} />
          <Route path="/estimates" element={<EstimatesPage />} />
          <Route path="/academicload" element={<AcademicloadPage />} />
          <Route path="/Generalestimates" element={<GeneralestimatesPage />} />
          <Route path="/graduation" element={<GraduationPage />} />
          <Route path="/manageusers" element={<ManageUsersPage />} />
          <Route path="/manageuni" element={<ManageUniPage />} />
          <Route path="/managefaculty" element={<ManageFacultyPage />} />


        </Route>
        <Route path="/home" element={<HomePage />} />

        {/* <Route path="/admin/*" element={<AdminPage />}>
          <Route path="dashboard" element={<AdminDashboardPage />} />
        </Route> */}
      </Routes>
    </Suspense>
  );
}

export default App;
