"use client";
import * as React from "react";
import Link from "next/link";

import { routes } from "@/data/routes";
import { cn } from "@/lib/utils";
import HemburgerIcon from "../icons/HamburgerIcon";
import { Button } from "../ui/Button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };

  return (
    <div className="fixed top-0 w-full border-opacity-40 bg-gray-950 bg-opacity-60 p-3 shadow-black/[0.03] backdrop-blur-md">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleIsOpen}
        data-collapse-toggle="navbar-sticky">
        <HemburgerIcon isOpen={isOpen} />
      </Button>
      <nav
        onClick={toggleIsOpen}
        className={cn(
          "absolute top-16 -z-10 h-screen w-full origin-top -translate-x-3 scale-0 overflow-scroll bg-gray-950 bg-opacity-85 opacity-0 backdrop-blur-md duration-100",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}>
        <ul className="relative z-20 flex flex-col gap-1 py-2 sm:flex-row sm:gap-3">
          {routes.map((route) => (
            <li
              className="flex items-center justify-center border-b border-gray-400  border-opacity-40"
              key={route.hash}>
              <Link
                className="rounded-full px-4 py-4 text-white hover:text-gray-950"
                href={route.hash}
                onClick={toggleIsOpen}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
