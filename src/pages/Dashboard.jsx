import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
    </div>
  );
}