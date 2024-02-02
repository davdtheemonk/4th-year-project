import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import SideBarComponent from "../SideBarComponent";

interface SideBarItem {
  /** The text to display inside the button */
  id: number;
  title: string;
  icon: any;
  link: string;
  /** Whether the button can be interacted with */
}
const Sidebar: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const sidebarItems: SideBarItem[] = [
    {
      id: 0,
      title: "Dashboard",
      icon: <GoHome className="w-5 h-5  text-grey" />,
      link: "/dashboard",
    },
    {
      id: 1,
      title: "Reported Cases",
      icon: <HiOutlineDocumentReport className="w-5 h-5  text-grey" />,
      link: "/reports",
    },
  ];
  return (
    <div className="hidden md:block w-[250px] border-r border-white border-opacity-10 bg-primary fixed min-h-screen py-[100px] px-4">
      {sidebarItems.map((sidebarItem) => (
        <SideBarComponent
          item={sidebarItem}
          setPage={setPage}
          key={sidebarItem.id}
        />
      ))}
    </div>
  );
};

export default Sidebar;
