import {
    Bell,
    Users,
    Activity,
    PhoneCall,
    Monitor,
    Settings,
    User,
    CreditCard,
    Plus,
    Search,
    FileText,
    Zap,
    Shield,
    Clock,
    AlertTriangle,
    CheckCircle,
    XCircle,
    BarChart3,
    Globe,
    Key,
    HelpCircle,
    MessageSquare,
    Github,
    Slack,
    Database,
  } from "lucide-react"
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  
  export function CommandKcomponent() {
    return (
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Incidents & Alerts">
            <CommandItem>
              <AlertTriangle />
              <span>View Active Incidents</span>
              <CommandShortcut>⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Bell />
              <span>View All Alerts</span>
              <CommandShortcut>⌘A</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Plus />
              <span>Create New Incident</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Zap />
              <span>Trigger Warrnagen AI</span>
              <CommandShortcut>⌘W</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Monitoring">
            <CommandItem>
              <Activity />
              <span>View Heartbeats</span>
              <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Monitor />
              <span>Status Pages</span>
              <CommandShortcut>⌘U</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <BarChart3 />
              <span>Analytics Dashboard</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Team & Organization">
            <CommandItem>
              <Users />
              <span>Manage Teams</span>
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <PhoneCall />
              <span>On-Call Schedule</span>
              <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <MessageSquare />
              <span>War Rooms</span>
              <CommandShortcut>⌘R</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Integrations">
            <CommandItem>
              <Slack />
              <span>Slack Integration</span>
            </CommandItem>
            <CommandItem>
              <Github />
              <span>GitHub Integration</span>
            </CommandItem>
            <CommandItem>
              <Database />
              <span>Collectors</span>
            </CommandItem>
            <CommandItem>
              <Globe />
              <span>Webhooks</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Key />
              <span>API Keys</span>
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Help">
            <CommandItem>
              <HelpCircle />
              <span>Documentation</span>
              <CommandShortcut>⌘?</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Search />
              <span>Search</span>
              <CommandShortcut>⌘/</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
  }
  