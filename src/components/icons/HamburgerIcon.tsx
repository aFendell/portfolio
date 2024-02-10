import { cn } from "@/lib/utils";

type Props = {
  isOpen: boolean;
};

const HemburgerIcon = ({ isOpen }: Props) => {
  return (
    <div className="">
      <span
        className={cn(
          "block h-[2px] w-6 bg-white duration-200",
          isOpen ? " translate-y-1.5 rotate-45" : "",
        )}
      />
      <span
        className={cn(
          "mt-1 block h-[2px] w-6 bg-white duration-200",
          isOpen ? "opacity-0" : "",
        )}
      />
      <span
        className={cn(
          "mt-1 block h-[2px] w-6 bg-white duration-200",
          isOpen ? "-translate-y-1.5 -rotate-45" : "",
        )}
      />
    </div>
  );
};

export default HemburgerIcon;
