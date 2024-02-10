import styles from "./App.module.scss";

// react
import { Suspense, useEffect } from "react";

// router
import { Routes, Route, useNavigation } from "react-router-dom";

// pages
import { LoginPage } from "./pages/login";

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
      </Routes>
    </Suspense>
  );
}

export default App;
