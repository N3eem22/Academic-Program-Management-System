import styles from "./App.module.scss";

// react
import { Suspense, useEffect } from "react";

// router
import { Routes, Route, useNavigation } from "react-router-dom";

// pages
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import { LevelsPage } from "./pages/programs/edit/levels";

// mui
import CircularProgress from "@mui/material/CircularProgress";

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
        <Route path="/login" element={<LoginPage />} />

        {/* <Route path="/admin/*" element={<AdminPage />}>
          <Route path="dashboard" element={<AdminDashboardPage />} />
        </Route> */}
      </Routes>
    </Suspense>
  );
}

export default App;
