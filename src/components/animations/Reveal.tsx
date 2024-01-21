"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

type From = "bottom" | "top" | "left" | "right";

const getHiddenDirection = (from: From) => {
  const hiddenVal = 75;

  switch (from) {
    case "bottom":
      return { y: hiddenVal };

    case "top":
      return { y: -hiddenVal };

    case "left":
      return { x: -hiddenVal };

    case "right":
      return { x: hiddenVal };

    default:
      return { y: hiddenVal };
  }
};

type Props = {
  children: ReactNode;
  width?: "fit-content" | "100%";
  fromDirection?: From;
  className?: string;
};

const Reveal = ({
  children,
  width = "fit-content",
  fromDirection = "bottom",
  className,
}: Props) => {
  const widthClass = width === "fit-content" ? "w-fit" : "w-full";
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
  const hiddenDirection = getHiddenDirection(fromDirection);

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative justify-center border border-blue-500",
        "relative justify-center overflow-hidden",
        widthClass,
        className,
      )}>
      <motion.div
        variants={{
          hidden: { opacity: 0, ...hiddenDirection },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.25 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
