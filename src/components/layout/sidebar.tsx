"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { logout } from "@/lib/auth";
import {
  LayoutDashboard,
  Bell,
  Settings,
  Users,
  BarChart,
  LogOut,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { apiGet } from "@/lib/api";
import { User as ApiUser } from "@/lib/types";

const SIDEBAR_COLLAPSED_KEY = "sidebar_collapsed";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Alerts", href: "/alerts", icon: Bell },
  { name: "Analytics", href: "/analytics", icon: BarChart },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  isCollapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export function Sidebar({ isCollapsed, onCollapse }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [userData, setUserData] = useState<ApiUser | null>(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await apiGet<ApiUser>('/api/me');
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Get initials for avatar fallback
  const getInitials = (user: ApiUser | null) => {
    if (!user) return '';
    return `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`.toUpperCase();
  };

  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex flex-col p-2 pt-4 bg-black border-r border-white/[0.08]",
        isCollapsed ? "w-[68px]" : "w-64"
      )}
      style={{ width: isCollapsed ? 68 : 256 }}
    >
      <div className="flex flex-col h-full">
        {/* Logo section */}
        <div className={cn(
          "flex h-16 items-center gap-x-3 px-3",
          isCollapsed ? "justify-center" : "px-6"
        )}>
          <div className="w-8 h-8">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="25.000000pt" height="25.000000pt" viewBox="0 0 167.000000 300.000000"
              preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
              fill="white" stroke="none">
              <path d="M804 2630 c-18 -6 -45 -25 -62 -44 -32 -37 -36 -55 -48 -279 -3 -64
              -11 -120 -16 -123 -10 -6 -168 109 -264 193 -49 42 -72 55 -116 64 -62 13
              -120 1 -162 -32 -24 -19 -26 -27 -26 -89 0 -68 1 -70 49 -127 62 -74 111 -120
              186 -173 33 -24 89 -71 125 -106 36 -34 80 -76 99 -91 25 -21 32 -34 27 -49
              -3 -10 -61 -55 -128 -99 -198 -130 -304 -212 -318 -245 -16 -38 -6 -75 30
              -111 57 -57 133 -32 310 102 117 89 164 116 174 101 2 -4 -1 -260 -6 -569 -6
              -309 -7 -578 -3 -599 9 -48 56 -95 118 -119 45 -17 51 -17 81 -2 30 14 35 22
              46 79 7 39 15 215 19 458 3 217 10 401 15 409 5 8 12 77 15 152 4 82 11 143
              18 150 8 8 26 1 70 -29 32 -21 68 -42 80 -46 11 -4 55 -31 97 -61 110 -79 152
              -99 215 -99 50 0 55 2 97 46 56 60 59 101 13 168 -36 53 -61 72 -274 221 -88
              61 -168 119 -179 129 -17 17 -17 19 -1 44 18 27 144 125 275 213 110 74 180
              158 180 215 0 49 -49 97 -98 98 -43 0 -44 -1 -265 -148 -132 -88 -191 -122
              -198 -115 -8 8 -8 61 0 183 12 196 5 254 -38 302 -29 33 -84 44 -137 28z"/>
              </g>
            </svg>
          </div>
          <div className={cn("overflow-hidden", isCollapsed && "hidden")}>
            <div className="text-2xl font-bold text-white">warrn</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 mt-8 space-y-1">
          <TooltipProvider delayDuration={0}>
            {navigation.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-x-3 rounded-md p-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-white/20 text-white"
                          : "text-gray-400 hover:bg-white/[0.1] hover:text-white",
                        isCollapsed && "justify-center"
                      )}
                    >
                      <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span className={cn("overflow-hidden whitespace-nowrap", isCollapsed && "hidden")}>
                        {item.name}
                      </span>
                    </Link>
                  </TooltipTrigger>
                  {isCollapsed && (
                    <TooltipContent 
                      side="right" 
                      className="flex items-center bg-black text-white border-white/[0.08]"
                      sideOffset={30}
                    >
                      {item.name}
                    </TooltipContent>
                  )}
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </nav>

        <div className="mt-auto">
          {/* Collapse Button */}
          <div className={cn(
            "flex items-center mb-2 px-2",
            isCollapsed ? "justify-center" : "justify-end"
          )}>
            <TooltipProvider delayDuration={1000}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white hover:bg-white/[0.06]"
                    onClick={() => onCollapse(!isCollapsed)}
                  >
                    {isCollapsed ? (
                      <ChevronRight className="h-5 w-5" />
                    ) : (
                      <ChevronLeft className="h-5 w-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent 
                  side="right"
                  className="flex items-center bg-black text-white border-white/[0.08]"
                  sideOffset={30}
                >
                  {isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Avatar Dropdown */}
          <div className="p-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={cn(
                  "w-full flex items-center gap-3 rounded-md p-2 text-sm font-medium text-gray-400 hover:bg-white/[0.06] hover:text-white transition-colors",
                  isCollapsed && "justify-center"
                )}>
                  <Avatar className="h-8 w-8 border border-white/[0.08]">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-white/[0.06] text-white">
                      {userData ? getInitials(userData) : <User className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>
                  <div className={cn("flex-1 text-left overflow-hidden", isCollapsed && "hidden")}>
                    <p className="text-sm font-medium text-white">
                      {userData ? `${userData.first_name} ${userData.last_name}` : 'Guest'}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {userData?.username || ''}
                    </p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 bg-black border-white/[0.08] text-white" 
                align="end" 
                side="right" 
                sideOffset={30}
              >
                <DropdownMenuLabel className="text-gray-400">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/[0.08]" />
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="cursor-pointer flex items-center text-gray-400">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/[0.08]" />
                <DropdownMenuItem 
                  onClick={handleLogout}
                  className="cursor-pointer flex items-center text-gray-400 hover:text-white hover:bg-white/[0.06]"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
} 