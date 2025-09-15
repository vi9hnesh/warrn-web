import React from 'react'
import Image from 'next/image'
import { AnimatedGroup } from '@/components/ui/animated-group'

export default function PremiumGallery() {
  return (
    <section className="relative py-16 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(90%_60%_at_50%_0%,hsl(var(--muted)/.4)_0%,transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl">Crafted for modern, premium operations</h2>
          <p className="mt-4 text-foreground/70">Minimal design, maximal clarity. A visual system that keeps focus on what matters.</p>
        </div>

        <AnimatedGroup preset="slide" className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {/* Large feature image */}
          <figure className="group relative overflow-hidden rounded-2xl border bg-background/60 shadow-md ring-1 ring-border/60">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/premium/alan-zhang-_F47NSUf-fs-unsplash.jpg"
                alt="Premium landscape"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                quality={80}
                priority={false}
              />
            </div>
          </figure>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <figure className="group relative overflow-hidden rounded-2xl border bg-background/60 shadow-md ring-1 ring-border/60">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/premium/dave-hoefler-g1NR2UZjjws-unsplash.jpg"
                  alt="Premium detail"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  quality={80}
                />
              </div>
            </figure>
            <figure className="group relative overflow-hidden rounded-2xl border bg-background/60 shadow-md ring-1 ring-border/60">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/premium/eugene-golovesov-eJ2MY7Zp3i0-unsplash.jpg"
                  alt="Premium texture"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  quality={80}
                />
              </div>
            </figure>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}

