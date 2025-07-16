import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface SharedLayoutProps {
  children: React.ReactNode;
}

export function SharedLayout({ children }: SharedLayoutProps) {
  return (
    <div className="fixed inset-0 bg-black">
      <div className="h-full w-full">
        {children}
      </div>
    </div>
  );
} 