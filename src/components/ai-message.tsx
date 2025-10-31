"use client"

import * as React from "react"
import { Copy, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface AIMessageProps {
  message: string
  isLoading?: boolean
  isAI?: boolean
}

const LOADING_STATES = [
  "Analyzing context...",
  "Processing request...",
  "Generating response...",
  "Refining answer...",
  "Finalizing response..."
]

export function AIMessage({ message, isLoading, isAI = true }: AIMessageProps) {
  const [loadingState, setLoadingState] = React.useState(0)

  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingState((prev) => (prev + 1) % LOADING_STATES.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  // Bubble base styles — consistent radius and sizing for single-line messages
  const bubbleBase = cn(
    "group relative rounded-2xl py-2 px-3 text-sm leading-normal break-words min-w-[6rem] max-w-[65%]",
    isAI ? "bg-muted text-foreground mr-12" : "bg-primary text-primary-foreground ml-12"
  )

  if (isLoading) {
    return (
      <div className={bubbleBase}>
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span className="text-sm">{LOADING_STATES[loadingState]}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={bubbleBase}>
      <p className="whitespace-pre-wrap">{message}</p>

      {/* Controls shown on hover at the bottom-right of the bubble */}
      <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => {
            try {
              navigator.clipboard.writeText(message || "")
              toast.success("Copied to clipboard")
            } catch (e) {
              toast.error("Copy failed")
            }
          }}
        >
          <Copy className="h-4 w-4" />
        </Button>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast("Thanks for the feedback 👍")}>
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast("Thanks for the feedback 👎")}>
            <ThumbsDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}