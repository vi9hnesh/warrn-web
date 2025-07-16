import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { TextShimmer } from '../text-shimmer';
import { GlowEffect } from '../glowing-button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 -z-10" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            {/* Status badge */}
            <div className="inline-flex items-center rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 px-4 py-2 text-sm font-medium text-muted-foreground mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              <TextShimmer duration={3} spread={0.8}>
                AI-Powered Incident Management Platform
              </TextShimmer>
              <Link href="/blog/introducing-warrn" className="ml-2 text-muted-foreground hover:text-foreground transition-colors">
                Learn more →
              </Link>
            </div>

            {/* Main heading */}
            <div className="space-y-4 mb-8">
              <h1 className="text-8xl font-bold tracking-tight">
                <span className="block text-foreground leading-none">Agentic Incident</span>
                <span className="block text-muted-foreground/80 mt-2 leading-none">Response Platform</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                Automated triage, response, and resolution. AI that actually works.
              </p>
            </div>

            {/* Email signup form */}
            <div className="max-w-md mx-auto mb-16">
              <form className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-4 h-12 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent shadow-sm transition-all duration-200"
                    required
                  />
                </div>
                <div className='relative'>
                  <GlowEffect
                    colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                    mode='colorShift'
                    blur='soft'
                    duration={3}
                    scale={0.9}
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="relative inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium w-full sm:w-auto h-12 px-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  >
                    Get Early Access <ArrowRight className='h-4 w-4' />
                  </Button>
                </div>
              </form>
            </div>

            {/* Bottom message */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built Warrn because we were tired of incident response tools that created more problems than they solved.
              </p>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
