"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Users,
  Settings,
  CreditCard,
  Shield,
  Sliders,
  Building,
  UsersRound,
  Server,
  Group,
  FileUser
} from "lucide-react";

const settingsNavigation = [
  { 
    label: 'General',
    items: [
      { name: "Profile", href: "/settings", icon: Settings },
      { name: "Users", href: "/settings/users", icon: FileUser },
      { name: "Teams", href: "/settings/teams", icon: UsersRound },
      { name: "Services", href: "/settings/services", icon: Server },
      { name: "Organization", href: "/settings/organization", icon: Building },
    ]
  },
  {
    label: 'Billing',
    items: [
      { name: "Subscription", href: "/settings/subscription", icon: CreditCard },
    ]
  },
  {
    label: 'Security',
    items: [
      { name: "Security Settings", href: "/settings/security", icon: Shield },
      { name: "API Keys", href: "/settings/api-keys", icon: Sliders },
    ]
  }
];

export function SettingsSidebar() {
  const pathname = usePathname();

  return (
    <>
      {settingsNavigation.map((group, idx) => (
        <div key={group.label} className={cn("mb-6", idx !== 0 && "pt-2")}>
          <div className="px-3 mb-2">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {group.label}
            </h3>
          </div>
          <div className="space-y-1">
            {group.items.map((item) => {
              const isActive = 
                pathname === item.href || 
                (item.href !== "/settings" && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-black/10 dark:bg-white/10 text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
} 