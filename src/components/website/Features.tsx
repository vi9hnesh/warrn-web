import React from "react";
import { GlowingEffect } from "../glowing-feature";
import { Atom, ChartLineIcon, Shield, Sparkles, TrendingUp, VideoIcon } from "lucide-react";
import { TriageFeature } from "./TriageFeature";
import { BentoFeatures } from "./BentoGrid";
import GlossyFeatures from "./GlossyFeatures";


const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative isolate overflow-hidden bg-background py-26">
      <div className="mx-auto px-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built for modern incident response teams
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-muted-foreground">
            warrn provides a complete toolkit for incident detection, response, and resolution - designed for teams who move fast.
          </p> */}
        </div>
        <GlossyFeatures />

        <TriageFeature />
        {/* <BentoFeatures /> */}
        {/* AI Features Section */}
        {/* <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Powered by Intelligence
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            AI that thinks like your best engineer, reducing downtime and improving response times.
          </p>
        </div> */}


        {/* Usability Features Section */}
        {/* <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Designed for Productivity
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Modern, intuitive interfaces that get out of your way and let you focus on what matters.
          </p>
        </div> */}


        {/* Enterprise Features Section */}
        {/* <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Enterprise-Grade Security
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Built with security and reliability at its core, ready for the most demanding environments.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Multi-Tenant Architecture",
                description:
                  "Secure isolation between organizations with customizable workspaces and permissions.",
                icon: (
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
              {
                title: "Observability",
                description:
                  "Comprehensive system metrics, logs, and traces in one unified view.",
                icon: (
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Advanced Reporting",
                description:
                  "Generate detailed reports on incident frequency, resolution times, and team performance.",
                icon: (
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div> */}

        {/* <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10">
              <div className="p-8">
                <div className="grid grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
                  <div className="h-24 bg-white/5 rounded-lg animate-pulse"></div>
                  <div className="h-24 bg-white/10 rounded-lg"></div>
                  <div className="h-24 bg-white/5 rounded-lg animate-pulse delay-100"></div>
                  <div className="h-24 bg-white/10 rounded-lg animate-pulse delay-200"></div>
                  <div className="h-24 bg-white/5 rounded-lg"></div>
                  <div className="h-24 bg-white/10 rounded-lg animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div
        className="absolute inset-x-0 -top-16 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div> */}
    </section>
  );
};

export default FeaturesSection;
