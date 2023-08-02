"use client";
import React, { useState } from "react";
import { ThemeButton } from "../Theme/ThemeButton";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/Ai";
import { MenuData, MenuData2, MenuI } from "./Menu";
import { SidebarItem } from "./SidebarItem";
import { Divider } from "../Divider/Divider";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div
      className={` grid  shadow-lg   dark:shadow-sm dark:shadow-white  ${
        sidebarOpen ? "grid-cols-[300px]" : "grid-cols-[90px]"
      } transition-all duration-100`}
    >
      <div className="sticky justify-center items-center pb-6 pt-5">
        <button
          onClick={toggleSidebar}
          className={`flex justify-center items-center dark:text-black bg-blue-50 absolute top-12 right-[-18px] rounded-[50%] border-[1px] w-8 h-8  shadow-md
          transition-all duration-300 ${
            sidebarOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <AiOutlineLeft />
        </button>
        <div
          className={`flex gap-3 cursor-pointer transition-all p-2 ${
            sidebarOpen ? "scale-75" : "scale-100"
          } `}
        >
          <Image
            src="/next.svg"
            alt="Logo"
            className="max-w-full h-auto dark:invert"
            width={100}
            height={24}
            priority
          />
          <h1 className={`${sidebarOpen ? "" : "hidden"} text-xl`}>
            Stock Project
          </h1>
        </div>
      </div>
      {MenuData &&
        MenuData.map((menu) => (
          <SidebarItem key={menu.id} {...menu} sidebarOpen={sidebarOpen} />
        ))}
      <Divider />
      {MenuData2 &&
        MenuData2.map((menu) => (
          <SidebarItem key={menu.id} {...menu} sidebarOpen={sidebarOpen} />
        ))}

      <Divider />
      <ThemeButton isSidebarOpen={sidebarOpen} />
    </div>
  );
};
