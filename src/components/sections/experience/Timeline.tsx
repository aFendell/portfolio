"use client";

import { motion } from "framer-motion";

import type { ExperienceItem } from "@/data/experience";
import TimelineItem from "./TimelineItem";

type Props = {
  items: ExperienceItem[];
};

const fadeGrowAnimationVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 3,
      delay: 0.4,
    },
  },
};

const Timeline = ({ items }: Props) => {
  return (
    <div className="relative">
      <motion.div
        className="absolute left-1/2 top-[-2rem] -z-10 hidden h-[calc(100%+4rem)] w-[1px] origin-top -translate-x-1/2 bg-white md:block"
        variants={fadeGrowAnimationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}></motion.div>
      <ul className="flex flex-col items-center justify-center gap-6 sm:gap-8">
        {items.map((item, index) => {
          const isEven = index % 2 === 0 ? true : false;
          return <TimelineItem key={item.id} {...item} isEven={isEven} />;
        })}
      </ul>
    </div>
  );
};

export default Timeline;
