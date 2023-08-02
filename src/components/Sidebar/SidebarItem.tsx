import React, { useEffect, useState } from "react";
import { MenuI } from "./Menu";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const SidebarItem = ({ id, label, Icon, to, sidebarOpen }: any) => {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (pathName === to) {
      console.log("Activo")
     return  setIsActive(true);
    }
    setIsActive(false);
    
  }, [pathName]);

  return (
    <div
      className={`hover:cursor-pointer hover:bg-slate-300 hover:shadow-sm ${isActive ? "bg-gray-100 dark:bg-gray-600" : ""}`}
      style={{ padding: "0 15%" }}
    >
      <Link href={to}>
        <div className=" flex items-center gap-1 py-2">
          <div className="py-2 px-4 text-2xl">
            <Icon />
          </div>
          {sidebarOpen && <span>{label}</span>}
        </div>
      </Link>
    </div>
  );
};
