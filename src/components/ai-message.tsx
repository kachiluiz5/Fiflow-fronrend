"use client"

import * as React from "react"
import { Copy, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface AIMessageProps {
  message: string
  isLoading?: boolean
}

const LOADING_STATES = [
  "Analyzing context...",
  "Processing request...",
  "Generating response...",
  "Refining answer...",
  "Finalizing response..."
]

export function AIMessage({ message, isLoading }: AIMessageProps) {
  const [loadingState, setLoadingState] = React.useState(0)

  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingState((prev) => (prev + 1) % LOADING_STATES.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 text-muted-foreground">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="text-sm">{LOADING_STATES[loadingState]}</span>
      </div>
    )
  }

  return (
    <div className="group relative space-y-2">
      <p className="text-sm leading-loose">{message}</p>
      <div className="absolute -right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => {
            navigator.clipboard.writeText(message)
            toast.success("Copied to clipboard")
          }}
        >
          <Copy className="h-4 w-4" />
        </Button>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ThumbsDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}