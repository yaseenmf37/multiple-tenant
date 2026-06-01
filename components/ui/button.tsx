import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

/**
 * shadcn-style Button, but its variants map onto the existing `.btn` design
 * system in globals.css instead of Tailwind utilities — so the look is
 * identical to the hand-written buttons it replaces. Use `asChild` to render
 * the styles on another element (e.g. a LocalizedLink).
 */
export const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn-primary",
      outline: "btn-outline",
      dark: "btn-dark",
      soft: "btn-soft",
      ghost: "btn-ghost",
      onDark: "btn-on-dark btn-outline",
      plain: "",
    },
    size: {
      default: "",
      lg: "btn-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant, size, asChild = false, ...props }, ref) {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
