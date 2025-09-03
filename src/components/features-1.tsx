import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Brain, Shield, Zap, Activity, Globe } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-[#F6F6F6] py-16 md:py-32 dark:bg-transparent m-22 mt-28 border-none rounded-3xl">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    {/* <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Stop paying for tools that don't work</h2> */}
                    <h2 className="text-balance text-4xl lg:text-5xl">Built Like It's 2025, Not 2009</h2>
                    {/* <p className="mt-4">AI-powered tools that eliminate alert fatigue and reduce mean time to resolution.</p> */}
                    <p className="mt-4">Observe, Respond, Resolve. Incident Management Without the Drama</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5 dark:bg-zinc-950">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Incident Response</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">From chaos to clarity in seconds. AI-powered triage that turns incidents into non-events.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 dark:bg-zinc-950">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Activity
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Observability</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">See everything, miss nothing. Complete visibility across your entire stack in one beautiful dashboard.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 dark:bg-zinc-950">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Globe
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Status Page</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Trust through transparency. Keep customers happy with real-time updates they actually want to read.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
