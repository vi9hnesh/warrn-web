"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  url: string
  icon: any
  isActive?: boolean
  items?: { title: string; url: string }[]
}

interface NavGroup {
  label?: string
  items: NavItem[]
}

interface NavMainProps {
  items: NavItem[]
}

export function NavMain({ items }: NavMainProps) {
  const pathname = usePathname()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  // Separate inbox from other items
  const inboxItem = items.find(item => item.title === "Inbox")
  const platformItems = items.filter(item => item.title !== "Inbox")

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => {
      const isActive = pathname.startsWith(item.url)
      const Icon = item.icon
      
      const link = (
        <SidebarMenuItem key={item.url}>
          <SidebarMenuButton asChild>
            <Link
              href={item.url}
              className={cn(
                "flex items-center gap-x-3 rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-foreground hover:bg-sidebar-accent"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )

      if (!item.items?.length) {
        return isCollapsed ? (
          <Tooltip key={item.url}>
            <TooltipTrigger asChild>
              {link}
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
              {item.title}
              {item.items && (
                <span className="text-xs text-muted-foreground">
                  ({item.items.length})
                </span>
              )}
            </TooltipContent>
          </Tooltip>
        ) : (
          link
        )
      }

      return (
        <Collapsible
          key={item.title}
          asChild
          defaultOpen={isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                {Icon && <Icon />}
                <span>{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton asChild>
                      <Link
                        href={subItem.url}
                        className={cn(
                          "flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {!isCollapsed && <span>{subItem.title}</span>}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      )
    })
  }

  return (
    <>
      {inboxItem && (
        <SidebarGroup>
          <SidebarMenu>
            {renderNavItems([inboxItem])}
          </SidebarMenu>
        </SidebarGroup>
      )}
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarMenu>
          {renderNavItems(platformItems)}
        </SidebarMenu>
      </SidebarGroup>
    </>
  )
}
