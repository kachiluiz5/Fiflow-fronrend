"use client"

import { useState } from "react"
import { MessagesSquare, Table, Plus, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export function ChatToggle() {
  const [mode, setMode] = useState("data")
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (value: string) => {
    if (value) {
      setMode(value)
      toast.success(`Switched to ${value} mode`)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-2">
      <ToggleGroup type="single" value={mode} onValueChange={handleToggle}>
        <ToggleGroupItem value="data" aria-label="Toggle data view">
          <Table className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="chat" aria-label="Toggle chat view">
          <MessagesSquare className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      
      <Sheet open={mode === "chat" && isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            className={mode === "chat" ? "": "hidden"}
            onClick={() => setIsOpen(true)}
          >
            Open Chat
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[600px] sm:w-[800px] p-0">
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-auto p-4">
              {/* Chat messages would go here */}
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  Hello! How can I help you today?
                </div>
              </div>
            </div>
            <div className="border-t p-4">
              <InputGroup>
                <InputGroupTextarea placeholder="Ask, Search or Chat..." />
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
                    onClick={() => toast.success("Message sent!")}
                  >
                    <ArrowUp className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}