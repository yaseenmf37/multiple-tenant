import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const chipVariants = cva("chip", {
  variants: {
    variant: {
      default: "",
      ink: "chip-ink",
      sand: "chip-sand",
    },
  },
  defaultVariants: { variant: "default" },
});

/** Pill label (`.chip`). Use `asChild` to render as a link (e.g. the anchor
 * chips on the solutions page). */
export function Chip({
  variant,
  className,
  asChild = false,
  ...props
}: ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof chipVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";
  return <Comp className={cn(chipVariants({ variant }), className)} {...props} />;
}
