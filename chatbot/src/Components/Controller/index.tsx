import React from "react";
import Header from "../Header";
import Sidebar from "../SideBar";
import { Outlet } from "react-router-dom";

const Controller: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <Sidebar />

      <div className="w-full md:pl-[270px] py-[70px] px-14 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Controller;
