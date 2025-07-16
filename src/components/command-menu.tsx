"use client"

import * as React from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { LayoutDashboard, AlertCircleIcon, SettingsIcon, PlusIcon, MoonIcon, SunIcon, UsersRound, ServerIcon, FileUser, BuildingIcon, CreditCardIcon, User, SearchIcon } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export const CommandMenu = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
  const { theme, setTheme } = useTheme()
  
  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative justify-between text-sm text-muted-foreground",
          "h-6 w-15",
          "hover:bg-muted/50"
        )}
        onClick={() => setOpen(true)}
      >
          <>
            <span className="inline-flex">⌘ K</span>
          </>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/dashboard"))
              }}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/alerts"))
              }}
            >
              <AlertCircleIcon className="mr-2 h-4 w-4" />
              Alerts
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/teams"))
              }}
            >
              <UsersRound className="mr-2 h-4 w-4" />
              Teams
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/settings"))
              }}
            >
              <SettingsIcon className="mr-2 h-4 w-4" />
              Settings
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/services"))
              }}
            >
              <ServerIcon className="mr-2 h-4 w-4" />
              Services
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Quick Actions">
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/new-project"))
              }}
            >
              <PlusIcon className="mr-2 h-4 w-4" />
              Create New Project
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("dark")
              }}
            >
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark Mode
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("light")
              }}
            >
              <SunIcon className="mr-2 h-4 w-4" />
              Light Mode
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/settings"))
              }}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/settings/users"))
              }}
            >
              <FileUser className="mr-2 h-4 w-4" />
              Users
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/settings/teams"))
              }}
            >
              <UsersRound className="mr-2 h-4 w-4" />
              Manage Teams
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/settings/services"))
              }}
            >
              <ServerIcon className="mr-2 h-4 w-4" />
              Manage Services
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/settings/organization"))
              }}
            >
              <BuildingIcon className="mr-2 h-4 w-4" />
              Organization
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/settings/billing"))
              }}
            >
              <CreditCardIcon className="mr-2 h-4 w-4" />
              Billing
            </CommandItem>
          </CommandGroup>
        </CommandList>
        
        {/* Bottom bar with keyboard shortcuts */}
        <div className="border-t bg-muted/50 px-4 py-4">
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono font-medium opacity-100">
                ↑↓
              </kbd>
              <span>to Navigate</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <div className="flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono font-medium opacity-100">
                ↵
              </kbd>
              <span>to Select</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <div className="flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono font-medium opacity-100">
                esc
              </kbd>
              <span>to Dismiss</span>
            </div>
          </div>
        </div>
      </CommandDialog>
    </>
  )
} 