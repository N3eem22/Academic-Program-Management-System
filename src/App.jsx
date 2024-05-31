import styles from "./App.module.scss";
import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Layout from "./pages/layout";
import { LoginPage } from "./pages/login";
import { LevelsPage } from "./pages/programs/edit/levels";
import { HomePage } from "./pages/home";
import { EstimatesPage } from "./pages/programs/edit/estimates";
import { AcademicloadPage } from "./pages/programs/edit/academicload";
import { GeneralestimatesPage } from "./pages/programs/edit/generalestimates";
import { GraduationPage } from "./pages/programs/edit/graduation";
import { ManageUsersPage } from "./pages/superadmin/manageusers";
import { UpdateUsersPage } from "./pages/superadmin/manageusers/updateusers";
import { ManageUniPage } from "./pages/superadmin/manageuni";
import { ManageFacultyPage } from "./pages/admin/managefaculty";
import { UpdatefacultyPage } from "./pages/admin/managefaculty/updatefaculty";
import { ControlsPage } from "./pages/controls";
import { CoursesPage } from "./pages/programs/edit/courses";
import { GpaPage } from "./pages/programs/edit/gpa";
import { ControlPage } from "./pages/programs/edit/control";
import { RegisterPage } from "./pages/superadmin/register";
import Admin from "./middleware/Admin";
import SuperAdmin from "./middleware/SuperAdmin";
import User from "./middleware/User";
import { AddUniversity } from "./pages/superadmin/addUniversity";
import { UpdateUniversity } from "./pages/superadmin/updateUniversity";
import { useParams } from "react-router-dom";

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
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route element={<Admin />}>
            <Route path="/managefaculty" element={<ManageFacultyPage />} />
            <Route
              path="/updatefaculty/:id"
              element={<UpdateFacultyWrapper />}
            />
          </Route>
          <Route element={<SuperAdmin />}>
            <Route path="/manageuni" element={<ManageUniPage />} />
            <Route path="/addUniversity" element={<AddUniversity />} />
            <Route path="/manageusers" element={<ManageUsersPage />} />
            {/* <Route path="/updateusers/:id" element={<UpdateUsersPage />} /> */}

            <Route path="/updateusers/:id" element={<UpdateUsersWrapper />} />

            <Route path="/register" element={<RegisterPage />} />
            {/* Pass id to UpdateUniversity */}
            <Route
              path="/editUniversity/:id"
              element={<UpdateUniversityWrapper />}
            />
          </Route>
          <Route element={<User />}>
            <Route path="/control" element={<ControlPage />} />
            <Route path="/gpa" element={<GpaPage />} />
            <Route path="/graduation" element={<GraduationPage />} />
            <Route path="/controls" element={<ControlsPage />} />
            <Route path="/estimates" element={<EstimatesPage />} />
          <Route path="/academicload" element={<AcademicloadPage />} />
          <Route path="/Generalestimates" element={<GeneralestimatesPage />} />
          <Route path="/graduation" element={<GraduationPage />} />
            <Route
              path="/Generalestimates"
              element={<GeneralestimatesPage />}
            />
            <Route path="/levels" element={<LevelsPage />} />
            <Route path="/estimates" element={<EstimatesPage />} />
            <Route path="/academicload" element={<AcademicloadPage />} />

            <Route path="/courses" element={<CoursesPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

// Wrapper component to extract id from route params
function UpdateUniversityWrapper() {
  let { id } = useParams(); // Get id from route params
  return <UpdateUniversity id={id} />;
}

function UpdateUsersWrapper() {
  let { id } = useParams();
  return <UpdateUsersPage id={id} />;
}
function UpdateFacultyWrapper() {
  let { id } = useParams();
  return <UpdatefacultyPage id={id} />;
}

export default App;

{
  /* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/levels" element={<LevelsPage />} />
          <Route path="/estimates" element={<EstimatesPage />} />
          <Route path="/academicload" element={<AcademicloadPage />} />
          <Route path="/Generalestimates" element={<GeneralestimatesPage />} />
          <Route path="/graduation" element={<GraduationPage />} />
          <Route path="/manageusers" element={<ManageUsersPage />} />
          <Route path="/manageuni" element={<ManageUniPage />} />
          <Route path="/managefaculty" element={<ManageFacultyPage />} />
          <Route path="/controls" element={<ControlsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/gpa" element={<GpaPage />} />
          <Route path="/control" element={<ControlPage />} />
        </Route>
        <Route path="/home" element={<HomePage />} />

        
      </Routes> */
}
