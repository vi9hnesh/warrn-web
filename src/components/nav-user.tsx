"use client"

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Moon,
  Settings,
  Sparkles,
  Star,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { logout } from "@/lib/auth"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile, toggleSidebar, state } = useSidebar()
  const { theme, setTheme } = useTheme()
  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground p-2"
            >
              <Avatar className="h-8 w-8 rounded-lg border justify-center items-center">
                {user.avatar ? (
                  <AvatarImage src={user.avatar} alt={user.name} />
                ) : (
                  <AvatarFallback className="rounded-lg bg-primary/10 text-primary">
                    {initials}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-none gap-1">
                <span className="font-medium truncate">{user.name}</span>
                <span className="text-xs text-muted-foreground truncate">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[280px] rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={8}
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex items-center gap-3 p-2">
                <Avatar className="h-12 w-12 rounded-lg border">
                  {user.avatar ? (
                    <AvatarImage src={user.avatar} alt={user.name} />
                  ) : (
                    <AvatarFallback className="rounded-lg bg-primary/10 text-primary">
                      {initials}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="grid gap-0.5">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </DropdownMenuLabel>
            {/* <DropdownMenuItem className="py-2"> */}
                <div className="flex flex-row items-center gap-1">

                  {/* <Moon className="mr-2 ms-2 size-4" /> */}
                  <div className="flex ms-3 items-center gap-2 rounded-md bg-muted/80 w-auto p-1">
                    <button
                      onClick={() => setTheme("light")}
                      className={cn(
                        "flex items-center justify-center rounded-sm px-2.5 py-1.5 text-sm font-medium transition-colors",
                        theme === "light" ? "bg-background shadow-sm" : "hover:bg-muted/80"
                      )}
                    >
                      Light
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={cn(
                        "flex items-center justify-center rounded-sm px-2.5 py-1.5 text-sm font-medium transition-colors",
                        theme === "dark" ? "bg-background shadow-sm" : "hover:bg-muted/80"
                      )}
                    >
                      Dark
                    </button>
                    <button
                      onClick={() => setTheme("system")}
                      className={cn(
                        "flex items-center justify-center rounded-sm px-2.5 py-1.5 text-sm font-medium transition-colors",
                        theme === "system" ? "bg-background shadow-sm" : "hover:bg-muted/80"
                      )}
                    >
                      System
                    </button>
                  </div>
                </div>
              {/* </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2 py-2">
                <Star className="size-4 text-primary" />
                <div className="grid gap-0.5 flex-1">
                  <span className="font-medium">Upgrade to Pro</span>
                  <span className="text-xs text-muted-foreground">Unlock all features and benefits</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="py-2">
                <BadgeCheck className="mr-2 size-4" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2" asChild>
                <Link href="/settings" className="flex items-center w-full">
                  <Settings className="mr-2 size-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2">
                <Bell className="mr-2 size-4" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="py-2 text-destructive focus:text-destructive cursor-pointer"
              onSelect={handleLogout}
            >
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
