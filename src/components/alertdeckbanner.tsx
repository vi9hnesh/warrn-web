import { Cpu, Lock, TimerReset, Atom } from 'lucide-react'
import Image from 'next/image'

export default function AlertdeckBanner() {
    return (
        <section className="overflow-hidden py-16 md:py-32">
            <div className="mx-auto max-w-[85%] space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl lg:text-5xl">AI-assisted incident response</h2>
                    <p className="mt-6 text-lg text-muted-foreground">Guarded workflows that adapt to your needs, you are always in control.</p>
                </div>
                <div className="mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative -mx-4 pr-3 pt-3 md:-mx-12">
                    <div className="perspective-midrange">
                        <div className="rotate-x-6 -skew-2">
                            <div className="aspect-88/36 relative">
                                <Image
                                    src="/images/alertdeck-dark.png"
                                    className="hidden dark:block rounded-md"
                                    alt="Alertdeck illustration dark"
                                    width={2797}
                                    height={1137}
                                />
                                <Image
                                    src="/images/alertdeck.png"
                                    className="dark:hidden rounded-md"
                                    alt="Alertdeck illustration light"
                                    width={2797}
                                    height={1137}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Atom className="size-4" />
                            <h3 className="text-sm font-medium font-mono">Warrnagen</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Agents that work in harmony with your team.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium font-mono">Runbooks</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Runbooks that help your team and agents resolve incidents faster.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <TimerReset className="size-4" />
                            <h3 className="text-sm font-medium font-mono">Grace Periods</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Set a grace period for your alerts to be resolved by <span className="font-mono text-xs">Warrnagen</span>.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium font-mono">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Robust approval workflows and controls for your alerts and incidents.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}