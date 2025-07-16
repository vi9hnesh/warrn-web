import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./card";
import { Skeleton } from "./skeleton";

interface SkeletonLoaderProps {
  variant?: "default" | "table" | "card" | "detail";
  className?: string;
  rows?: number;
}

export function SkeletonLoader({
  variant = "default",
  className,
  rows = 3,
}: SkeletonLoaderProps) {
  if (variant === "table") {
    return (
      <div className={cn("w-full space-y-4", className)}>
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-[300px]" />
          <div className="flex gap-2 ml-auto">
            <Skeleton className="h-10 w-[140px]" />
            <Skeleton className="h-10 w-[140px]" />
          </div>
        </div>
        <Card>
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px] ml-auto" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === "detail") {
    return (
      <div className={cn("w-full space-y-6", className)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-24" /> {/* Back button */}
            <div className="space-y-2">
              <Skeleton className="h-8 w-[300px]" /> {/* Title */}
              <Skeleton className="h-4 w-[200px]" /> {/* Subtitle */}
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-[120px]" />
            <Skeleton className="h-9 w-[120px]" />
          </div>
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[150px]" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <Skeleton className="h-6 w-[100px]" />
              <Skeleton className="h-6 w-[100px]" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[100px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[200px] w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <Card className={className}>
        <CardHeader>
          <Skeleton className="h-6 w-[250px]" />
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: rows }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <div className={cn("w-full space-y-4", className)}>
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </div>
  );
} 