import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function useFavicon() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only run on client side and after mounting
    if (!mounted || typeof window === 'undefined') return;

    const currentTheme = resolvedTheme || theme;
    
    // Remove existing favicon links that we might have added
    const existingFavicons = document.querySelectorAll('link[rel*="icon"][data-dynamic="true"]');
    existingFavicons.forEach(favicon => favicon.remove());

    // Create new favicon link using SVG
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.setAttribute('data-dynamic', 'true');
    
    // Switch favicon based on theme
    if (currentTheme === 'dark') {
      link.href = '/favicon-dark.svg';
    } else {
      link.href = '/favicon-light.svg';
    }

    // Add the new favicon to head
    document.head.appendChild(link);

    // Fallback ICO for older browsers
    const icoLink = document.createElement('link');
    icoLink.rel = 'icon';
    icoLink.type = 'image/x-icon';
    icoLink.setAttribute('data-dynamic', 'true');
    icoLink.href = currentTheme === 'dark' ? '/favicon-dark.ico' : '/favicon.ico';
    document.head.appendChild(icoLink);

    console.log(`Favicon switched to ${currentTheme} theme`); // Debug log

  }, [theme, resolvedTheme, mounted]);
} 