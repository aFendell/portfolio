import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton = ({ children, className, type, disabled }: Props) => {
  return (
    <div
      className={cn(
        "group relative flex h-fit items-center justify-center",
        className,
      )}>
      <div
        className={cn(
          "absolute -inset-0.5 -z-10 w-full rounded-md bg-gradient-to-r from-pink-700  to-violet-700 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200",
          disabled ? "-inset-0 opacity-40 blur-0" : "",
        )}></div>
      <div
        className={cn(
          "absolute -inset-0.5 -z-20 w-full animate-tilt rounded-md bg-gradient-to-r from-pink-700  to-violet-700 opacity-75 blur transition group-hover:animate-none",
          disabled ? "-inset-0 animate-none opacity-40" : "",
        )}></div>
      <button
        type={type}
        disabled={disabled}
        className={cn(
          "relative flex w-full items-center justify-center rounded-md bg-gray-950 px-7 py-4 transition duration-200 group-hover:text-gray-100",
          disabled ? "bg-gray-900" : "",
        )}>
        {children}
      </button>
    </div>
  );
};

export default ActionButton;
