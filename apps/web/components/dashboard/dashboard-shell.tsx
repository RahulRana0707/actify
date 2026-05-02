"use client"

import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { DashboardBreadcrumb } from "@/components/dashboard/dashboard-breadcrumb"
import type { UserData } from "@/lib/get-user-data"
import { Separator } from "@actify/ui/components/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@actify/ui/components/sidebar"

export function DashboardShell({
  children,
  user,
}: {
  children: React.ReactNode
  user: UserData | null
}) {
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-6"
            />
            <DashboardBreadcrumb />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
