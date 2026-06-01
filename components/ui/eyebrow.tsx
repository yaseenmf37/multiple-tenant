import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** The small uppercase section label (`.eyebrow`). `center` adds `.center`
 * and centers it, matching the repeated `style={{ justifyContent: "center" }}`. */
export function Eyebrow({
  children,
  center = false,
  className,
  style,
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={cn("eyebrow", center && "center justify-center", className)}
      style={style}
    >
      {children}
    </span>
  );
}
