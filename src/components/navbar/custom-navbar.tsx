"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { Avatar } from "@nextui-org/avatar";
import { IoMenu } from "react-icons/io5";

import { useState } from "react";
import { useSidebarStore } from "@/lib/store/global/sidebarStore";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, toggleSidebar } = useSidebarStore();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="z-0" isBordered>
        <NavbarContent>
          <Button
            isIconOnly
            onClick={() => toggleSidebar(true)}
            variant="light"
          >
            <IoMenu size={20} />
          </Button>

          <NavbarBrand>
            <p className="font-bold text-inherit">OnPoint</p>
          </NavbarBrand>
        </NavbarContent>

        {/* <NavbarContent className="hidden lg:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarContent justify="end">
          <NavbarItem>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
