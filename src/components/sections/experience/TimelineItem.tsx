"use client";

import * as React from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

import type { ExperienceItem } from "@/data/experience";
import { cn } from "@/lib/utils";
import { H3, Muted, P } from "@/components/ui/Typography";
import useMediaQuery from "@/hooks/useMediaQuery";

const iconsMap = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  code: Code2,
} as const;

type Props = {
  isEven: boolean;
} & ExperienceItem;

const TimelineItem = ({
  id,
  title,
  company,
  date,
  icon,
  description,
  isEven,
}: Props) => {
  const IconComponent = iconsMap[icon];

  const [itemScope, animate] = useAnimate();
  const isItemInView = useInView(itemScope, { once: true });
  const isMdScreen = useMediaQuery("md");

  React.useEffect(() => {
    if (isItemInView) {
      if (!isMdScreen) {
        const enterAnimation = async () => {
          await animate(
            `#item-${id}`,
            { opacity: [0, 1] },
            { duration: 2, delay: stagger(1) },
          );
        };
        enterAnimation();
      } else {
        const enterAnimation = async () => {
          const translateX = isEven ? "-192px" : "192px";
          await animate(
            `#item-${id}`,
            { opacity: [0, 1], x: [translateX, "0px"] },
            { duration: 0.8, delay: 0.4 },
          );
          await animate(
            `#line-${id}`,
            { opacity: [0, 1], scaleX: [0, 1] },
            { duration: 0.25 },
          );
          animate(
            `#dot-${id}`,
            { opacity: [0, 1], scaleX: [0, 1] },
            { duration: 0.25 },
          );
        };
        enterAnimation();
      }
    }
  }, [animate, id, isEven, isItemInView, isMdScreen]);

  return (
    <li
      ref={itemScope}
      className={cn(isEven ? "md:-translate-x-48" : "md:translate-x-48")}>
      <div
        id={`item-${id}`}
        className={cn(
          "relative block w-72 rounded-md border border-gray-400 p-5 neon-neutral",
        )}
        key={id}>
        <H3 className="!text-center md:!text-start">{title}</H3>
        <P className="!text-center md:!text-start">{date}</P>
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <Muted className="mr-2">{company}</Muted>
          <IconComponent className="animate-wiggle" />
        </div>
        <P className="pt-3 !text-center md:!text-start">{description}</P>
      </div>
      <span
        id={`line-${id}`}
        className={cn(
          "absolute -bottom-7 top-[22px] hidden h-[1px] w-12 scale-x-0 bg-white opacity-0 md:inline",
          isEven ? "-right-12 origin-left" : "-left-12 origin-right",
        )}></span>
      <span
        id={`dot-${id}`}
        className={cn(
          "fixed top-4 hidden h-3 w-3 scale-0 items-center justify-center rounded-full bg-white opacity-0 md:inline",
          isEven ? "-right-[54px]" : "-left-[54px]",
        )}></span>
    </li>
  );
};

export default TimelineItem;
