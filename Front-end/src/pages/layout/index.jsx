import React from "react";
import { HeaderPage } from "../header";
import SideMenu from "../sidemenu";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <>
      <HeaderPage />
      {!isLoginPage && <SideMenu />}
      <Outlet />
    </>
  );
}
