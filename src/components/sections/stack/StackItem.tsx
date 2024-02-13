"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";

type Props = {
  tech: string;
  index: number;
};

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const StackItem = ({ tech, index }: Props) => {
  return (
    <motion.li
      variants={fadeInAnimationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      custom={index}>
      <Badge
        size="lg"
        variant="secondary"
        className="relative rounded-sm neon-neutral">
        {tech}
        <div className="absolute -inset-0.5 -z-20 w-full animate-tilt rounded-md bg-white opacity-75 blur-[1px] transition"></div>
      </Badge>
    </motion.li>
  );
};

export default StackItem;
