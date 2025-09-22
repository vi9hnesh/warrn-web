"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type IconProps = React.SVGProps<SVGSVGElement>;

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

// Removed the old 404 text icon - now using the lost.svg illustration

export default function NotFound() {
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 md:py-24 md:px-20 gap-8 md:gap-12">
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-lg md:max-w-xl">
          <Image
            src="/images/lost.svg"
            alt="Lost illustration"
            width={885}
            height={708}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
            Page not found
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md">
          Sorry, we can't find the page you're looking for.
          </p>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row items-center justify-center max-w-sm w-full">
          <Button
            className="w-full sm:w-auto min-w-32"
            size={isMobile ? "default" : "lg"}
            variant="outline"
            onClick={handleGoBack}
          >
            <ArrowLeft className="size-4 mr-2" /> Go back
          </Button>
          <Button
            className="w-full sm:w-auto min-w-32"
            size={isMobile ? "default" : "lg"}
            onClick={handleGoHome}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
