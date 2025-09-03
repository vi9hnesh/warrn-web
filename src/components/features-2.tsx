import { Activity, Atom, DraftingCompass, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection2() {
    return (
        <section className="py-16">
            <div className="mx-22 mt-28 border-none rounded-3xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl  lg:text-5xl">Built for modern teams</h2>
                            <p className="mt-6">We built Warrn for modern teams. We use it ourselves.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Atom className="size-5" />
                                Agentic incident response
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Observability (logs, metrics, traces)
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Status page
                            </li>
                            <li>
                                <DraftingCompass className="size-5" />
                                Heartbeats
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3 max-h-[400px]">
                        <div className="bg-linear-to-b relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700 h-full">
                            <Image 
                                src="/images/dummy2.jpg" 
                                className="hidden rounded-[15px] dark:block w-full h-full object-cover max-h-[376px]" 
                                alt="payments illustration dark" 
                                width={1207} 
                                height={929} 
                            />
                            <Image 
                                src="/images/dummy2.jpg" 
                                className="rounded-[12px] shadow dark:hidden w-full h-full object-cover max-h-[376px]" 
                                alt="payments illustration light" 
                                width={1207} 
                                height={929} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}