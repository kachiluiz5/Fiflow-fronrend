"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
}

export function Progress({ className, value = 0, ...props }: ProgressProps) {
  const pct = Math.max(0, Math.min(100, Math.round(value)))

  return (
    <div className={cn("w-full bg-muted/30 rounded-full h-2", className)} {...props}>
      <div
        className="h-2 rounded-full bg-primary transition-all duration-300"
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
      />
    </div>
  )
}

export default Progress
