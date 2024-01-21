"use client";

import { useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Code2, LucideIcon } from "lucide-react";

import { Icon, ExperienceItem } from "@/data/experience";
import { cn } from "@/lib/utils";
import { H3, Muted, P } from "@/components/ui/Typography";

const iconsMap: Record<Icon, LucideIcon> = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  code: Code2,
};

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

  useEffect(() => {
    if (isItemInView) {
      const enterTimeline = async () => {
        await animate(
          `#item-${id}`,
          { x: 0, opacity: 1 },
          { duration: 0.8, delay: 0.25 },
        );
        await animate(
          `#line-${id}`,
          { opacity: 1, scaleX: 1 },
          { duration: 0.25 },
        );
        animate(`#dot-${id}`, { opacity: 1, scale: 1 }, { duration: 0.25 });
      };
      enterTimeline();
    } else {
      const exitTimeline = async () => {
        await animate(`#dot-${id}`, { opacity: 0, scale: 0 });
        await animate(`#line-${id}`, { opacity: 0, scaleX: 0 });
        animate(`#item-${id}`, { x: isEven ? -75 : 75, opacity: 0 });
      };
      exitTimeline();
    }
  }, [animate, id, isEven, isItemInView]);

  return (
    <li
      ref={itemScope}
      className={cn(isEven ? "sm:-translate-x-48" : "sm:translate-x-48")}>
      <div
        id={`item-${id}`}
        className={cn(
          "relative block w-72 rounded-md border border-gray-400 p-5",
        )}
        key={id}>
        <H3>{title}</H3>
        <P>{date}</P>
        <div className="flex items-center justify-center gap-2 sm:justify-start">
          <Muted className="mr-2">{company}</Muted>
          <IconComponent />
        </div>
        <P className="pt-3">{description}</P>
      </div>
      <span
        id={`line-${id}`}
        className={cn(
          "absolute -bottom-7 top-5 hidden h-[1px] w-12 bg-white sm:inline",
          isEven ? "origin-left sm:-right-12" : "origin-right sm:-left-12",
        )}></span>
      <span
        id={`dot-${id}`}
        className={cn(
          "fixed top-4  hidden h-3 w-3 items-center justify-center rounded-full bg-white sm:inline",
          isEven ? "sm:-right-[54px]" : "sm:-left-[54px]",
        )}></span>
    </li>
  );
};

export default TimelineItem;
