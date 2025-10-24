import { Activity, BellRing, DraftingCompass, Mail, Users, Monitor, Atom, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import { CommandKcomponent } from './website/commandkcom'

export default function FeaturesHeader() {
    return (
        <section className="max-w-[85%] mx-auto py-16">
            <div className=" mt-28 border-none rounded-3xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl lg:text-5xl">Search stops here</h2>
                            <p className="mt-6 text-muted-foreground">Simple, modern, and effective.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <BellRing className="size-5" />
                                Alerts & Incidents
                            </li>
                            <li>
                                <Atom className="size-5" />
                                Warrnagen - agentic response system
                            </li>
                            <li>
                                <Monitor className="size-5" />
                                Public & Private Status pages
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Heartbeats & Monitors
                            </li>
                            <li>
                                <PhoneCall className="size-5" />
                                On-call scheduling
                            </li>
                            <li>
                                <Users className="size-5" />
                                Team & service organization
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-14 px-32 lg:col-span-3 min-h-[450px] max-h-[550px]">
                    <div className="bg-linear-to-b absolute inset-0 z-1 rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700 h-full">
                            <Image 
                                src="https://ewy331gkzr.ufs.sh/f/yR0adrtOWAV30ZrAoiG3phjzOiYSdNfGP9TlEb2oAkFDgMts" 
                                className="rounded-[12px] shadow w-full h-full object-cover" 
                                alt="payments illustration light" 
                                width={1207} 
                                height={929} 
                            />
                        </div>
                        <div className="absolute inset-0 px-32 py-12 z-2">
                            <CommandKcomponent />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}