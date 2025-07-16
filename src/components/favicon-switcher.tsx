"use client";

import { useFavicon } from '@/hooks/use-favicon';

export function FaviconSwitcher() {
  useFavicon();
  return null; // This component doesn't render anything visible
} 