import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AlertTriangle, Users, Settings2, MessageSquare } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-[#F6F6F6] py-16 md:py-32 dark:bg-transparent lg:m-22 lg:mt-28 border-none lg:rounded-3xl">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl lg:text-5xl">Production-Ready Alert Management</h2>
                    <p className="mt-4">Complete alert lifecycle management with advanced team organization and collaboration.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-2xl gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5 dark:bg-zinc-950">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <AlertTriangle
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Comprehensive Alert Management</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Create, acknowledge, resolve with status tracking.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 dark:bg-zinc-950">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Users
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Team & Service Organization</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Team management with service catalog to track ownership and responsibility mapping.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 dark:bg-zinc-950">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Service Configuration</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Track your complete technical stack in one organized inventory.</p>
                        </CardContent>
                    </Card>

                    {/* <Card className="group shadow-zinc-950/5 dark:bg-zinc-950">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <MessageSquare
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Team Collaboration</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Rich comments and discussions on alerts. Foster team collaboration and knowledge sharing during incident response.</p>
                        </CardContent>
                    </Card> */}
                </div>
                
                {/* Future features preview */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                        In Development: Agentic Response, Status Pages, Heartbeats, Observability & More
                    </p>
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
