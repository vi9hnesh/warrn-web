import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArchiveRestore, Video, Combine, HandPlatter, BookCheck, LibraryBig } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-[#F6F6F6] py-16 dark:bg-transparent lg:m-22 lg:mt-28 border-none lg:rounded-3xl">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <p className="uppercase font-mono text-sm text-muted-foreground">Coming soon</p>
                    <h2 className="mt-4 text-balance text-4xl lg:text-5xl">We are just getting started</h2>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-2xl gap-6 *:text-center md:mt-16">
                <Card className="group shadow-none border-none dark:bg-zinc-950 gap-2">
                        <CardHeader>
                            <CardDecorator>
                                <LibraryBig
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="font-medium">Spaces</h3>
                        </CardHeader>

                        <CardContent className="text-sm text-muted-foreground">
                            Spaces for your teams and projects.
                        </CardContent>
                    </Card>
                    
                    <Card className="group shadow-none border-none dark:bg-zinc-950 gap-2">
                        <CardHeader>
                            <CardDecorator>
                                <BookCheck
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="font-medium">Tasks</h3>
                        </CardHeader>

                        <CardContent className="text-sm text-muted-foreground">
                            You do not need epics and stories.
                        </CardContent>
                    </Card>

                    <Card className="group shadow-none border-none dark:bg-zinc-950 gap-2">
                        <CardHeader>
                            <CardDecorator>
                                <Combine
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="font-medium">Collectors</h3>
                        </CardHeader>

                        <CardContent className="text-sm text-muted-foreground">
                            Plug and play collectors for your alert sources.
                        </CardContent>
                    </Card>

                    <Card className="group shadow-none border-none dark:bg-zinc-950 gap-2">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ArchiveRestore
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="font-medium">Recovery</h3>
                        </CardHeader>

                        <CardContent className="text-sm text-muted-foreground">
                            {/* BCP tool */}
                            Recovery plans and BCP tools.
                        </CardContent>
                    </Card>

                    <Card className="group shadow-none border-none dark:bg-zinc-950 gap-2">
                        <CardHeader>
                            <CardDecorator>
                                <Video
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="font-medium">Meeting Rooms</h3>
                        </CardHeader>

                        <CardContent className="text-sm text-muted-foreground">
                            War-rooms and alert coordination spaces.
                        </CardContent>
                    </Card>

                    <Card className="group shadow-none border-none dark:bg-zinc-950 gap-2">
                        <CardHeader>
                            <CardDecorator>
                                <HandPlatter
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="font-medium">YARA</h3>
                        </CardHeader>

                        <CardContent className="text-sm text-muted-foreground">
                            Yet Another Resource Abstractor
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
