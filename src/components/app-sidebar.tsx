"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  LayoutDashboard,
  Bell,
  BarChart,
  Users,
  Server,
  Inbox,
  LifeBuoy,
  Send,
  Book,
  Sprout,
} from "lucide-react"
import { usePathname } from "next/navigation"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
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
import { User } from "@/lib/types"
import { useUser } from "@/hooks/useUser"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CommandMenu } from "@/components/command-menu"

interface NavItem {
  title: string
  url: string
  icon: React.ComponentType<any>
  isActive?: boolean
  items?: Array<{
    title: string
    url: string
  }>
}

const data = {
  user: {
    name: "",
    email: "",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Inbox",
      url: "/inbox",
      icon: Inbox,
    },
    {
      title: "Alerts",
      url: "/alerts",
      icon: Bell,
    },
    {
      title: "Teams",
      url: "/teams",
      icon: Users,
    },
    {
      title: "Services",
      url: "/services",
      icon: Server,
    },
  ] as NavItem[],
  navSecondary: [
    {
      title: "Shine",
      url: "/shine",
      icon: Sprout,
    },
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback", 
      icon: Send,
    },
  ],
  projects: [],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, loading } = useUser();
  const pathname = usePathname();

  const userDisplayData = user ? {
    name: `${user.first_name} ${user.last_name}`.trim() || user.username.split('@')[0],
    email: user.username,
    avatar: ""
  } : data.user;

  // Update navigation items with active state
  const navMainWithActive = data.navMain.map(item => ({
    ...item,
    isActive: item.items 
      ? item.items.some(subItem => pathname === subItem.url || pathname.startsWith(item.url))
      : pathname === item.url || pathname.startsWith(item.url)
  }));

  return (
    <TooltipProvider delayDuration={0}>
      <Sidebar collapsible="icon" variant="inset" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="/dashboard">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <img src="https://0vyln3ksw4.ufs.sh/f/1rcEIF9rX2uo4UxaQcg3vBQzYStXa6lRgNHCfqGZKh0nJDA1" alt="Warrn Logo" width={32} height={32} className="w-6 h-6 invert" />  
                    {/* <img src="https://0vyln3ksw4.ufs.sh/f/1rcEIF9rX2uoIkkAwKijF1RXQbqGtKYvDOVNU6k73PhAdW8p" alt="Warrn Logo" width={32} height={32} className="w-6 h-6" /> */}
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">warrn</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={navMainWithActive} />
          <NavSecondary items={data.navSecondary} className="mt-auto" />
        </SidebarContent>
        <SidebarFooter>
        <SidebarMenu className="flex items-center gap-2 px-2">
            {/* <CommandMenu /> */}
          </SidebarMenu>
          <NavUser user={userDisplayData} />
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  )
}
