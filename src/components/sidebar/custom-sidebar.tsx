"use client";

import { useSidebarStore } from "@/lib/store/global/sidebarStore";
import { useEffect, useState } from "react";

export default function CustomSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, toggleSidebar } = useSidebarStore();

   function listenToEscapeKey(event: KeyboardEvent){
    if(event.key === "Escape"){
      toggleSidebar(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", listenToEscapeKey);
    return () => {
      window.removeEventListener("keydown", listenToEscapeKey);
    };
  });

  return (
    <>
    {/* ARIA LABEL DRAWER */}
      <div className="drawer z-50">
        <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" checked={isOpen}/>
        <div className="drawer-content w-full">
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="sidebar-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={() => toggleSidebar(false)}
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
