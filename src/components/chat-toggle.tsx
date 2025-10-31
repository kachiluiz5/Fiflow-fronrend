"use client"

import * as React from "react"
import { MessagesSquare, Table, Send, Plus, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AIMessage } from "@/components/ai-message"
import { Separator } from "@/components/ui/separator"
import { SheetTitle, SheetDescription } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export function ChatToggle() {
  const [mode, setMode] = React.useState("data")
  const [isOpen, setIsOpen] = React.useState(false)
  const isMobile = useIsMobile()

  const handleToggle = (value: string) => {
    if (value) {
      setMode(value)
      // auto-open the sheet when switching to chat, close when switching away
      if (value === "chat") {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }
  }

  const [messages, setMessages] = React.useState([
    { id: 1, text: "Hello! How can I help you today?", isAI: true },
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const [input, setInput] = React.useState("")
  const chatContainerRef = React.useRef<HTMLDivElement>(null)

  const handleSend = async () => {
    if (!input.trim()) return
    
    const newMessages = [
      ...messages,
      { id: messages.length + 1, text: input, isAI: false }
    ]
    setMessages(newMessages)
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { id: messages.length + 2, text: "This is a simulated AI response to your message. In a real application, this would be replaced with actual AI-generated content.", isAI: true }
      ])
      setIsLoading(false)
    }, 3000)
  }

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    // Bottom-center floating navigation with icon + label pills
    <div className="fixed left-1/2 bottom-6 -translate-x-1/2 z-50 flex items-center">
      <div className={cn(
        "flex items-center gap-1 rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg p-1.5",
        // thicker, more visible container border when chat is active
        mode === "chat" ? "border-4 border-primary/30" : "border border-border"
      )}>
        <ToggleGroup type="single" value={mode} onValueChange={handleToggle} className="flex items-center gap-1">
          <ToggleGroupItem
            value="data"
            aria-label="Toggle data view"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full data-[state=on]:bg-accent data-[state=on]:text-accent-foreground data-[state=on]:scale-105 data-[state=on]:shadow-md transition-all duration-200"
          >
            <Table className="h-4 w-4" />
            <span className="text-sm font-medium">Data</span>
          </ToggleGroupItem>
          <div className="w-px h-6 bg-border/60 mx-1" />
          <ToggleGroupItem
            value="chat"
            aria-label="Toggle chat view"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full data-[state=on]:bg-accent data-[state=on]:text-accent-foreground data-[state=on]:scale-105 data-[state=on]:shadow-md transition-all duration-200"
          >
            <MessagesSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Chat</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Sheet is controlled — will open automatically when mode === 'chat' */}
      <Sheet open={mode === "chat" && isOpen} onOpenChange={setIsOpen}>
        {/* keep a hidden trigger to preserve keyboard accessibility, but sheet opens programmatically */}
        <SheetTrigger asChild>
          <button className="sr-only">Open Chat</button>
        </SheetTrigger>
        <SheetContent 
            side={isMobile ? "bottom" : "right"}
            className={cn(
              "p-0 flex-1",
              isMobile 
                ? "h-[94vh] rounded-t-xl border-t w-full" 
                : "!w-[80%] !max-w-[1400px] min-w-[800px] rounded-l-xl"
            )}
          >
          <div className="flex flex-col h-full">
            <div className="border-b px-6 py-4">
              <div className="max-w-[800px] mx-auto w-full">
                <SheetTitle className="text-lg font-semibold">AI Assistant</SheetTitle>
              </div>
            </div>
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth max-w-[800px] mx-auto w-full"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.isAI ? "justify-start" : "justify-end"
                  )}
                >
                  {/* Use AIMessage for both AI and user messages so controls and styles are consistent */}
                  <AIMessage message={msg.text} isAI={msg.isAI} />
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <AIMessage message="" isLoading isAI />
                </div>
              )}
            </div>
            <div className="border-t p-4">
              <div className="max-w-[800px] mx-auto w-full">
                <InputGroup>
                  <InputGroupTextarea 
                    placeholder="Ask, Search or Chat..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSend()
                      }
                    }}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupButton
                      variant="outline"
                      className="rounded-full"
                      size="icon-xs"
                    >
                      <Plus className="h-4 w-4" />
                    </InputGroupButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <InputGroupButton variant="ghost">Auto</InputGroupButton>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        side="top"
                        align="start"
                        className="[--radius:0.95rem]"
                      >
                        <DropdownMenuItem>Auto</DropdownMenuItem>
                        <DropdownMenuItem>Agent</DropdownMenuItem>
                        <DropdownMenuItem>Manual</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <InputGroupText className="ml-auto">52% used</InputGroupText>
                    <Separator orientation="vertical" className="!h-4" />
                    <InputGroupButton
                      variant="default"
                      className="rounded-full"
                      size="icon-xs"
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                    >
                      <ArrowUp className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}