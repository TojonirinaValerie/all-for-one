import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils"; // Tailwind merge utility

const Drawer = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerClose = DialogPrimitive.Close;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    side?: "left" | "right" | "bottom" | "top";
  }
>(({ className, children, side = "left", ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/30 z-40" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 bg-white w-48 h-full shadow-xl ease-in-out transition-transform duration-300",
        {
          "left-0 top-0": side === "left",
          "right-0 top-0": side === "right",
          "bottom-0 left-0 w-full": side === "bottom",
          "top-0 left-0 w-full": side === "top",
        },
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

DrawerContent.displayName = "DrawerContent";

export { Drawer, DrawerTrigger, DrawerContent, DrawerClose };
