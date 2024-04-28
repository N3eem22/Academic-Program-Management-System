import styles from "./App.module.scss";

// react
import { Suspense, useEffect } from "react";

// router
import { Routes, Route, useNavigation } from "react-router-dom";

// pages
import { LoginPage } from "./pages/login";
import { LevelsPage } from "./pages/programs/edit/levels";
import { HomePage } from "./pages/home";

// mui
import CircularProgress from "@mui/material/CircularProgress";
import Layout from "./pages/layout";
import { ControlsPage } from "./pages/controls";
import { CoursesPage } from "./pages/programs/edit/courses";
import { GpaPage } from "./pages/programs/edit/gpa";
import { ControlPage } from "./pages/programs/edit/control";

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
          <Route path="/controls" element={<ControlsPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/gpa" element={<GpaPage/>} />
          <Route path="/control" element={<ControlPage/>} />
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
