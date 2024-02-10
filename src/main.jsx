import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import App from "./App";
import store from "./store/index";

// router
import { BrowserRouter } from "react-router-dom";
// redux
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
