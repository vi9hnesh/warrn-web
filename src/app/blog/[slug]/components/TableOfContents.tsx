'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Heading {
  level: number
  text: string
  anchor: string
}

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      // Use scroll-based detection only for smoother experience
      const updateActiveHeading = () => {
        const scrollY = window.scrollY + 150 // Offset for header
        const headingElements = headings.map(h => ({
          id: h.anchor,
          element: document.getElementById(h.anchor),
          offsetTop: document.getElementById(h.anchor)?.offsetTop || 0
        })).filter(h => h.element)

        // Find the heading that's currently in view
        let activeHeading = headingElements[0]?.id || ''
        
        for (let i = 0; i < headingElements.length; i++) {
          const current = headingElements[i]
          const next = headingElements[i + 1]
          
          if (scrollY >= current.offsetTop) {
            if (!next || scrollY < next.offsetTop) {
              activeHeading = current.id
              break
            }
          }
        }

        setActiveId(activeHeading)
      }

      // Throttle scroll events for better performance
      let ticking = false
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateActiveHeading()
            ticking = false
          })
          ticking = true
        }
      }

      updateActiveHeading()
      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [headings])

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Back Navigation */}
        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
        
        {/* Table of Contents */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
            On this page
          </h3>
          <nav className="space-y-3">
            {headings.map((heading) => (
              <a
                key={heading.anchor}
                href={`#${heading.anchor}`}
                className={`block text-sm transition-colors leading-5 py-1 ${
                  activeId === heading.anchor
                    ? 'text-primary font-semibold border-primary pl-3 -ml-3'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
} 