import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
