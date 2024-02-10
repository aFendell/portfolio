"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { routes } from "@/data/routes";

const DesktopNav = () => {
  return (
    <motion.div
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      className="fixed left-1/2 top-6 w-full px-6">
      <nav className="mx-auto flex max-w-4xl flex-1 items-center justify-center rounded-md border-opacity-40 bg-gray-950 bg-opacity-70 shadow-black/[0.03] backdrop-blur-md">
        <ul className="flex flex-col gap-1 py-2 sm:flex-row sm:gap-3">
          {routes.map((route) => (
            <motion.li
              className="flex h-3/4 items-center justify-center"
              key={route.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                className="rounded-full px-4 py-2 text-white hover:bg-gray-50 hover:text-gray-950"
                href={route.hash}>
                {route.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default DesktopNav;
