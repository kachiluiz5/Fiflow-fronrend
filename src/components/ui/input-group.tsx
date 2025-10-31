"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap items-stretch w-full relative",
          className
        )}
        {...props}
      />
    )
  }
)
InputGroup.displayName = "InputGroup"

const InputGroupAddon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & {
  align?: "inline-start" | "inline-end" | "block-start" | "block-end"
}>(({ className, align = "inline-start", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center",
        align === "inline-end" && "ml-auto",
        align === "block-end" && "mt-2 w-full justify-end gap-2",
        className
      )}
      {...props}
    />
  )
})
InputGroupAddon.displayName = "InputGroupAddon"

const InputGroupText = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "flex items-center px-3 text-sm text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
InputGroupText.displayName = "InputGroupText"

const InputGroupInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
InputGroupInput.displayName = "InputGroupInput"

const InputGroupTextarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
InputGroupTextarea.displayName = "InputGroupTextarea"

const InputGroupButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "icon-xs"
}>(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        size === "default" && "h-10 px-4 py-2",
        size === "icon-xs" && "h-7 w-7",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
InputGroupButton.displayName = "InputGroupButton"

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
}