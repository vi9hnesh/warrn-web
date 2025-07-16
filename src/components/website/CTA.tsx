import React from 'react';
import { GlowEffect } from '../glowing-button';
import { Button } from '../ui/button';
import { Mail } from 'lucide-react';
import { SendHorizonal } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-28 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Let us help you deliver excellence
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Get modern with your incident response.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className='relative'>
            <form
              action=""
              className="mx-auto max-w-sm">
                  <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-xl border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                      <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                      <input
                          placeholder="Your mail address"
                          className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                          type="email"
                      />

                      <div className="md:pr-1.5 lg:pr-0">
                          <Button
                              aria-label="submit"
                              size="lg"
                              className="rounded-(--radius)">
                              <span className="hidden md:block">Get Started</span>
                              <SendHorizonal
                                  className="relative mx-auto size-5 md:hidden"
                                  strokeWidth={2}
                              />
                          </Button>
                      </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
