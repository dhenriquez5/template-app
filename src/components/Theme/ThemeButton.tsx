"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { ThemeMode } from '../Svgs/ThemeMode';

interface Props {
  isSidebarOpen: boolean;
}

export const ThemeButton = ({ isSidebarOpen }: Props) => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex justify-center items-center">
      {isSidebarOpen && (
        <span className="block p-2 font-bold">
          {resolvedTheme === "dark" ? "Light Mode" : "Dark mode"}
        </span>
      )}
      <div className="w-8 h-4 rounded-lg transition-all relative duration-300">
        <div className="grid justify-items-center content-center h-full w-full bg-blend-multiply duration-300">
          <div className="content">
            <div className="text-3xl">
              <label className="relative cursor-pointer transition-all duration-300" onClick={toggleTheme}>
                <ThemeMode/>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
