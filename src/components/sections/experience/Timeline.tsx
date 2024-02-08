"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import type { ExperienceItem } from "@/data/experience";
import TimelineItem from "./TimelineItem";

type Props = {
  items: ExperienceItem[];
};

const Timeline = ({ items }: Props) => {
  const containerRef = useRef(null);
  const lineControls = useAnimation();
  const isContainerInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isContainerInView) {
      lineControls.start("visible");
    }
  }, [isContainerInView, lineControls]);

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        className="absolute left-1/2 top-[-2rem] -z-10 hidden h-[calc(100%+4rem)] w-[1px] origin-top -translate-x-1/2 bg-white sm:block"
        variants={{
          hidden: { scaleY: 0, opacity: 0 },
          visible: { scaleY: 1, opacity: 1 },
        }}
        initial="hidden"
        animate={lineControls}
        transition={{ duration: 3 }}></motion.div>
      <ul className="flex flex-col items-center justify-center gap-4 sm:gap-8">
        {items.map((item, index) => {
          const isEven = index % 2 === 0 ? true : false;
          return <TimelineItem key={item.id} {...item} isEven={isEven} />;
        })}
      </ul>
    </div>
  );
};

export default Timeline;
