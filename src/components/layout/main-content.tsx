import React from "react";
import { SharedLayout } from "./shared-layout";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MainContentProps {
  children: React.ReactNode;
  sidebarWidth: number;
}

export function MainContent({ children, sidebarWidth }: MainContentProps) {
  const pathname = usePathname();
  const isSettingsPage = pathname.startsWith("/settings");
  
  return (
    <SharedLayout>
      <div 
        className="relative min-h-screen h-screen flex flex-col"
        // style={{ paddingLeft: sidebarWidth }}
      >
        <main 
        className="bg-background flex-1 h-full p-2"
        >
          <div 
          className="bg-background h-full border overflow-hidden rounded-[0.6rem]"
          >
            <div className={cn("h-full overflow-auto", !isSettingsPage && "p-8")}>
              {children}
            </div>
          </div>
        </main>
      </div>
    </SharedLayout>
  );
} 