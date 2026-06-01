import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

/** Image placeholder box (`.ph`) with a centered mono label — used wherever a
 * real photo will eventually go. */
export function Placeholder({
  label,
  dark = false,
  className,
  style,
  labelStyle,
}: {
  label: string;
  dark?: boolean;
  className?: string;
  style?: CSSProperties;
  labelStyle?: CSSProperties;
}) {
  return (
    <div className={cn("ph", dark && "ph-dark", className)} style={style}>
      <span style={labelStyle}>{label}</span>
    </div>
  );
}
