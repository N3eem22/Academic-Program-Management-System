import React from "react";
import { HeaderPage } from "../header";
import SideMenu from "../sidemenu";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return<>
    <HeaderPage/>
    <SideMenu/>
    <Outlet></Outlet>    
    </>
}