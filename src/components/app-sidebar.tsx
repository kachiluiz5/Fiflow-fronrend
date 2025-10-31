"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [

    {
      title: "Data History",
      url: "/data-history",
      icon: IconDatabase,
    },
  ],
  navSecondary: [
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Profile",
      url: "#",
      icon: IconSettings,
    },
  ],
  credits: 500
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>


      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavUser user={data.user} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between gap-4 rounded-md bg-muted/80 p-3 ring-1 ring-border/10 shadow-sm dark:bg-muted/30">
            <div>
              <p className="text-xs text-muted-foreground">Credits</p>
              <p className="text-lg font-semibold">{data.credits}</p>
            </div>
            <a
              href="/billing"
              className="text-sm text-primary hover:underline"
              aria-label="Manage credits"
            >
              Buy
            </a>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
