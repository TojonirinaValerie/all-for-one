import { cn } from "@/lib/utils";
import React from "react";

export const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("px-[150px] py-[80px]", className)}
    {...props}
  />
));
Section.displayName = "Section";
