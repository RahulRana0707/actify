"use client"

import * as React from "react"
import {
  Bot,
  Command,
  Eye,
  FlaskConical,
  LayoutDashboard,
  LayoutGrid,
  Layers,
  Plug2,
  Server,
  Store,
} from "lucide-react"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavUser } from "@/components/dashboard/nav-user"
import type { NavMainGroup } from "@/components/dashboard/nav-main"
import type { UserData } from "@/lib/get-user-data"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@actify/ui/components/sidebar"

const data = {
  navGroups: [
    {
      label: "Platform",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: LayoutDashboard,
        },
        {
          title: "Agents",
          url: "/agents",
          icon: Bot,
        },
        {
          title: "Build",
          icon: Layers,
          isActive: true,
          items: [
            { title: "Knowledge", url: "/knowledge" },
            { title: "Tools", url: "/tools" },
            { title: "Behavior", url: "/behaviour" },
          ],
        },
        {
          title: "Test",
          icon: FlaskConical,
          items: [{ title: "Playground", url: "/playground" }],
        },
        {
          title: "Observe",
          icon: Eye,
          items: [
            { title: "Logs", url: "/logs" },
            { title: "Analytics", url: "/analytics" },
          ],
        },
        {
          title: "System",
          icon: Server,
          items: [{ title: "Settings", url: "/settings" }],
        },
      ],
    },
    {
      label: "Marketplace",
      items: [
        {
          title: "Browse",
          url: "/marketplace",
          icon: Store,
        },
        {
          title: "Integrations",
          url: "/marketplace/integrations",
          icon: Plug2,
        },
        {
          title: "Partner apps",
          url: "/marketplace/apps",
          icon: LayoutGrid,
        },
      ],
    },
  ] satisfies NavMainGroup[],
}

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user: UserData | null }) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain groups={data.navGroups} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
