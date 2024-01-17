import { cn } from "@/lib/utils";

export const SectionTitle = ({
  children,
  className,
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "mb-2 scroll-m-20 text-center text-2xl font-medium sm:text-start sm:text-3xl",
        className,
      )}>
      {children}
    </h2>
  );
};

export const P = ({
  children,
  className,
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "max-w-3xl text-pretty text-center leading-7 sm:text-start [&:not(:first-child)]:mt-6",
        className,
      )}>
      {children}
    </p>
  );
};
