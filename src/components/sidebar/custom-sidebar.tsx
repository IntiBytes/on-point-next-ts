"use client";

import { useSidebarStore } from "@/lib/store/global/sidebarStore";
import { useEffect } from "react";
import Link from 'next/link'

export default function CustomSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, toggleSidebar } = useSidebarStore();

  //  * Handle apps commands
  function listenToEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      toggleSidebar(false);
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
        <input
          id="sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          readOnly
        />
        <div className="drawer-content w-full">{children}</div>
        <div className="drawer-side">
          <label
            htmlFor="sidebar-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={() => toggleSidebar(false)}
          ></label>
            <ul className="menu bg-base-200 w-80 min-h-full">
            <li>
                <details open>
                  <summary>Inventario</summary>
                  <ul>
                  <li>
                      <Link href={"/products"} onClick={() => toggleSidebar(false)}>Productos</Link>
                    </li>
                    <li>
                      <details open>
                        <summary>Variantes</summary>
                        <ul>
                          <li>
                            <a>Submenu 1</a>
                          </li>
                          <li>
                            <a>Submenu 2</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details open>
                  <summary>Ventas</summary>
                  <ul>
                    <li>
                      <Link href={"/dashboard"} onClick={() => toggleSidebar(false)}>Analíticas</Link>
                    </li>
                    <li>
                      <Link href={"/point-sale"} onClick={() => toggleSidebar(false)}>Punto de Venta</Link>
                    </li>
                    
                  </ul>
                </details>
              </li>
              
            </ul>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
