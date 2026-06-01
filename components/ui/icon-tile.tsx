import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

export const iconTileVariants = cva("itile", {
  variants: {
    variant: {
      default: "",
      sand: "itile-sand",
      ink: "itile-ink",
    },
  },
  defaultVariants: { variant: "default" },
});

/** Rounded icon tile (`.itile`). Pass the SVG `path` data; `strokeWidth` and
 * the inner-svg style can be tuned for the few non-default uses. */
export function IconTile({
  path,
  variant,
  className,
  style,
  svgStyle,
  strokeWidth = 1.8,
}: VariantProps<typeof iconTileVariants> & {
  path: string;
  className?: string;
  style?: CSSProperties;
  svgStyle?: CSSProperties;
  strokeWidth?: number;
}) {
  return (
    <span className={cn(iconTileVariants({ variant }), className)} style={style}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={svgStyle}
      >
        <path d={path} />
      </svg>
    </span>
  );
}
