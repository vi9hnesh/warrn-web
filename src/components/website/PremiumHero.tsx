'use client'

import React from 'react'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from '@/components/website/Header'
import { EmailInput } from '@/components/ui/email-input'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PremiumHero() {
  const handleEmailSubmit = (email: string) => {
    // Replace with real handler when wiring to backend
    console.log('Valid company email from PremiumHero:', email)
  }

  return (
    <>
      <HeroHeader />
      <section className="relative isolate overflow-hidden pb-14 m-22 mt-28 border-none rounded-3xl">
        {/* Background media */}
        <div aria-hidden className="absolute inset-0 -z-20">
          <Image
            src="/images/premium/dave-hoefler-g1NR2UZjjws-unsplash.jpg"
            alt="Atmospheric mountain scene"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover opacity-10 blur-[2px]"
          />
          {/* Radial scrim for readability */}
          <div className="absolute inset-0 bg-[radial-gradient(125%_100%_at_50%_20%,hsl(var(--background)/0)_0%,hsl(var(--background))_70%)]" />
        </div>

        {/* Subtle ambient glows */}
        <div aria-hidden className="absolute -top-24 left-1/2 -z-10 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(220_90%_60%/.15),transparent_60%)] blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-0 -z-10 h-64 w-[42rem] translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,hsl(280_90%_60%/.10),transparent_60%)] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-14">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            {/* Early Access Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse mr-2"></span>
                Early Access
              </div>
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-8 text-balance text-5xl md:text-7xl xl:text-8xl">
              Advanced Alert Management Platform
              {/* Agentic Incident Response Platform */}
            </TextEffect>

            {/* <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.4}
              as="p"
              className="mx-auto mt-6 max-w-2xl text-balance text-lg md:text-xl text-foreground/80">
              Automated triage, response, and resolution.
            </TextEffect> */}

            {/* <AnimatedGroup preset="blur-slide" className='mt-10'>
              <Link
                href="/blog/introducing-warrn"
                className="hover:bg-background dark:hover:border-t-border group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                
                <span className="text-foreground text-sm">Automated triage, response, and resolution</span>
                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedGroup> */}


            {/* <AnimatedGroup preset="blur-slide" className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
              <EmailInput
                onSubmit={handleEmailSubmit}
                placeholder="your@company.com"
                buttonText="Get started"
                size="lg"
                showHelperText={false}
              />
            </AnimatedGroup> */}
          </div>
        </div>

        {/* Framed visual */}
        <AnimatedGroup preset="blur-slide">
          <div className="relative mx-auto mt-10 max-w-6xl px-6 md:mt-16">
            <div className="relative overflow-hidden rounded-3xl border bg-background/60 p-2 shadow-lg shadow-zinc-950/10 ring-1 ring-border/50 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
              <div className="relative aspect-[15/8] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/premium/clem-onojeghuo-nQ6X7BN8QtA-unsplash.jpg"
                  alt="Premium UI inspiration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-cover"
                  priority={false}
                />
                {/* Gradient edge mask */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,transparent_60%,hsl(var(--background)))]" />
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </section>
    </>
  )
}

