'use client'

import React from 'react';
import { EmailInput } from '@/components/ui/email-input';
import { Button } from '../ui/button';
import Link from 'next/link';

const CTASection: React.FC = () => {
  const handleEmailSubmit = (email: string) => {
    // TODO: Handle form submission
    console.log('Valid company email from CTA:', email)
  }

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
              {/* <EmailInput
                onSubmit={handleEmailSubmit}
                placeholder="Your mail address"
                buttonText="Get Started"
                size="md"
                showHelperText={false}
              /> */}

                <Button
                    asChild
                    size="lg"
                    className='bg-white text-black hover:bg-gray-200 lg:inline-flex  rounded-2xl'>
                    <Link href="https://app.warrn.io/sign-up">
                        <span>Start Now, It's Free</span>
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
