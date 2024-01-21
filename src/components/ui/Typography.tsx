import { cn } from "@/lib/utils";

export const Title = ({
  children,
  className,
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "mb-6 scroll-m-20 text-center text-2xl font-medium sm:text-start sm:text-3xl",
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
