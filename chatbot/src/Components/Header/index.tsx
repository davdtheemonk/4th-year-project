import React from "react";
import { Badge } from "@tremor/react";
import Button from "../Button";

const Header: React.FC = () => {
  return (
    <div className="border-b border-white border-opacity-10 fixed z-10 h-[70px] w-full bg-primary">
      <nav className="pt-6 pb-4 px-4 ">
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="text-grey">/</p>
          <div className="gradient w-6 h-6 rounded-full " />
          <p className="text-slate text-sm">David Mugalla</p>
          <Badge size="sm" className="bg-[#1f202c] text-slate">
            Admin
          </Badge>
          <Button />
        </div>
      </nav>
    </div>
  );
};

export default Header;
