import { cn } from "@/lib/utils";
import React from "react";

export const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "lg:px-[100px] px-[20px] sm:px-[20px] md:px-[20px]  py-[80px]",
      className
    )}
    {...props}
  />
));
Section.displayName = "Section";
