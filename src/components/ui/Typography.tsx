import { cn } from "@/lib/utils";

type HeadingWithAfter = {
  withAfter?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const HeroTitle = ({
  children,
  className,
  withAfter = true,
}: HeadingWithAfter) => {
  const afterClasses =
    "after:absolute after:-right-4 after:bottom-0.5 after:block after:h-2.5 after:w-2.5 after:bg-fuchsia-500/90 after:rounded-full after:content-['']";

  return (
    <h1
      className={cn(
        "relative mb-8 w-fit scroll-m-20 text-center text-4xl font-bold sm:mb-12 sm:text-start sm:text-5xl sm:font-extrabold",
        withAfter ? afterClasses : "",
        className,
      )}>
      {children}
    </h1>
  );
};

export const SectionTitle = ({
  children,
  className,
  withAfter = true,
}: HeadingWithAfter) => {
  const afterClasses =
    "after:absolute after:-right-[7px] after:bottom-[4px] after:block after:h-1 after:w-1 after:bg-fuchsia-500/90 after:rounded-full after:content-['']";

  return (
    <h2
      className={cn(
        "relative mx-auto mb-8 w-fit scroll-m-20 text-center text-2xl font-medium sm:mx-0 sm:mb-12 sm:text-start sm:text-3xl",
        withAfter ? afterClasses : "",
        className,
      )}>
      {children}
    </h2>
  );
};

export const Subtitle = ({
  children,
  className,
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "max-w-3xl text-pretty text-center text-lg leading-7 sm:text-start",
        className,
      )}>
      {children}
    </p>
  );
};

export const P = ({
  children,
  className,
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "max-w-3xl text-pretty text-center leading-7 sm:text-start",
        className,
      )}>
      {children}
    </p>
  );
};

export const Muted = ({
  children,
  className,
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "text-center text-xs font-light text-gray-50 sm:text-start",
        className,
      )}>
      {children}
    </p>
  );
};

export const H3 = ({
  children,
  className,
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={`scroll-m-20 text-center text-xl font-medium sm:text-start ${className}`}>
      {children}
    </h3>
  );
};
