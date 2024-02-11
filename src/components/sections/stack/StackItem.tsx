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
        variant="secondary"
        className="rounded-sm sm:rounded-md sm:px-3 sm:py-2 sm:text-base">
        {tech}
      </Badge>
    </motion.li>
  );
};

export default StackItem;
