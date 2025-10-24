'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollManager() {
  const pathname = usePathname()

  // Disable browser scroll restoration to prevent unexpected jumps
  useEffect(() => {
    const { history } = window
    const prev = 'scrollRestoration' in history ? history.scrollRestoration : undefined
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    return () => {
      if ('scrollRestoration' in history && prev) {
        history.scrollRestoration = prev
      }
    }
  }, [])

  // Ensure we land at the top on initial mount and on route changes without a hash
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.location.hash && document.getElementById(window.location.hash.slice(1))) {
      // Allow normal anchor behavior
      return
    }
    // Use a microtask to run after layout calculation
    queueMicrotask(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
  }, [pathname])

  return null
}


