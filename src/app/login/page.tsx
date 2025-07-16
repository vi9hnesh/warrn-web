'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Construction, Clock, Zap, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { EmailInput } from '@/components/ui/email-input'
import { Separator } from '@/components/ui/separator'

export default function LoginPage() {
  const handleNotifyMe = (email: string) => {
    console.log('Notify when ready:', email)
    // TODO: Store email for launch notification
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="relative z-10 border-b border-border/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <ArrowLeft className="size-4" />
                <span className="text-sm text-muted-foreground">Back to home</span>
              </Link>
            </div>
            
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <div className="text-center">
            {/* Status Badge */}
            <div className="mb-8 flex justify-center">
              <Badge variant="secondary" className="px-4 py-2 gap-2 text-sm">
                <Construction className="size-4" />
                Under Development
              </Badge>
            </div>

            {/* Main Message */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                We're building something
                <span className="block text-primary">amazing</span>
              </h1>
            </div>


            {/* Email Notification */}
            <div className="max-w-md mx-auto mb-12">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Be the first to experience the future of incident management
                </p>
              </div>
              <EmailInput
                onSubmit={handleNotifyMe}
                placeholder="Your company email"
                buttonText="Notify Me"
                size="md"
                showHelperText={false}
              />
            </div>
            
            <Separator className="my-12" /> 
            {/* Call to Action */}
            <div className="mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline">
                  <Link href="#">
                    Timeline (Coming Soon)
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 