"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { Avatar } from "@nextui-org/avatar";
import { IoMenu } from "react-icons/io5";

import { useSidebarStore } from "@/lib/store/global/sidebarStore";

export default function CustomNavbar() {
  const { toggleSidebar } = useSidebarStore();

  return (
    <>
      <Navbar className="z-0" isBordered>
        <NavbarContent>
          <Button
            isIconOnly
            onClick={() => toggleSidebar(true)}
            variant="light"
          >
            <IoMenu size={20} />
          </Button>

          <NavbarBrand>
            <p className="font-bold text-inherit text-3xl">OnPoint</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
