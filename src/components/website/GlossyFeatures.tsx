import { GlowingEffect } from "../glowing-feature";
import { Sparkles } from "lucide-react";
import { VideoIcon } from "lucide-react";
import { Atom } from "lucide-react";
import { Shield } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { ChartLineIcon } from "lucide-react";


const GlossyFeatures = () => {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-none py-16">
            {/* <div className="text-center mb-10">
                <p className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Simple, modern, and effective.
                </p>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Let us handle the hard stuff.
                </p>
            </div> */}
            
            {/* First Section: Left tall + Right stacked */}
            <div className="mb-16">
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                    {/* Left feature - tall */}
                    <li className="min-h-[24rem] list-none">
                        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 bg-muted/50">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                                <div className="relative flex flex-1 flex-col justify-between gap-3">
                                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                        <Atom className="h-6 w-6 text-foreground" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-gray-900 dark:text-white">
                                        AI-Powered Engineering Intelligence
                                        </h3>
                                        <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600 dark:text-gray-300">
                                        Cut downtime with AI that thinks like your best engineer.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    {/* Right column - stacked features */}
                    <li className="min-h-[24rem] list-none">
                        <div className="flex flex-col gap-4 h-full">
                            {/* Top right feature */}
                            <div className="relative flex-1 rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 bg-muted/50">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                                        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                            <VideoIcon className="h-6 w-6 text-foreground" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-gray-900 dark:text-white">
                                            Meeting Rooms
                                            </h3>
                                            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600 dark:text-gray-300">
                                            Dedicated video conferencing spaces for incident response coordination.
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom right feature */}
                            <div className="relative flex-1 rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 bg-muted/50">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                                        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                            <Sparkles className="h-6 w-6 text-foreground" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-gray-900 dark:text-white">
                                            Intelligent Triage
                                            </h3>
                                            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600 dark:text-gray-300">
                                            Agents that can triage incidents and respond to them.
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Second Section: Full width feature */}
            <div className="mb-16">
                <ul className="grid grid-cols-1 gap-4 lg:gap-6">
                    <li className="min-h-[14rem] list-none">
                        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 bg-muted/50">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                                <div className="relative flex flex-1 flex-col justify-between gap-3">
                                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                        <Shield className="h-6 w-6 text-foreground" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-gray-900 dark:text-white">
                                        System Health Monitoring
                                        </h3>
                                        <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600 dark:text-gray-300">
                                        Automated threat detection and response with enterprise-grade security.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Third Section: 2 equal columns */}
            <div>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                    <li className="min-h-[14rem] list-none">
                        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 bg-muted/50">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                            borderWidth={3}
                        />
                        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                            <div className="relative flex flex-1 flex-col justify-between gap-3">
                            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                <TrendingUp className="h-6 w-6 text-foreground" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-gray-900 dark:text-white">
                                Analytics Dashboard
                                </h3>
                                <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600 dark:text-gray-300">
                                Comprehensive metrics and insights to improve incident response times.
                                </h2>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    
                    <li className="min-h-[14rem] list-none">
                        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 bg-muted/50">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                            borderWidth={3}
                        />
                        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                            <div className="relative flex flex-1 flex-col justify-between gap-3">
                            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                <ChartLineIcon className="h-6 w-6 text-foreground" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-gray-900 dark:text-white">
                                Kanban Board
                                </h3>
                                <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600 dark:text-gray-300">
                                Visualize your incident response process.
                                </h2>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
  );
};

export default GlossyFeatures;