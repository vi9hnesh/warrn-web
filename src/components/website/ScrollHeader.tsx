"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { GlowEffect } from "../glowing-button";
import { useTheme } from "next-themes";

const ScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50px
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto" style={{ maxWidth: '1600px' }}>
        <div className={`bg-background rounded-2xl shadow-none transition-all duration-300 ${
          isScrolled ? "shadow-sm border border-border" : "shadow-none"
        }`}>
          <div className="px-2 py-2 flex items-center justify-between">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 ms-2">
                <div className="h-8 w-8 m-0 flex items-center justify-center">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="24px" height="24px" viewBox="0 0 300.000000 300.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="currentColor" stroke="none">
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
                <span className="font-bold font-mono text-xl tracking-tight text-foreground">Warrn</span>
              </Link>
            </div>

            {/* Right side - Theme toggle and Navigation */}
            <div className="flex items-center space-x-4">
              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-6">
                <a 
                  href="#features" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  onClick={(e) => scrollToSection(e, "features")}
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  onClick={(e) => scrollToSection(e, "pricing")}
                >
                  Pricing
                </a>
                <Link 
                  href="/blog"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
                <a 
                  href="#about" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  onClick={(e) => scrollToSection(e, "about")}
                >
                  Contact
                </a>
              </nav>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9 rounded-full"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              <Link href="/login">
                <Button size="lg" className="font-mono">Try Warrn</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ScrollHeader; 