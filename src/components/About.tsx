import { Award, Binary, Circle, Sprout } from 'lucide-react'

export default function About() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Our Mission</h2>
                    <hr />
                    <p>We built Warrn because we were tired of incident response tools that created more problems than they solved. Modern teams deserve modern tools that actually help them get work done.</p>
                </div>
                <img className="rounded-(--radius) grayscale" src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="team image" height="" width="" loading="lazy" />
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Circle className="size-4" />
                            <h3 className="text-sm font-medium">Simplicity First</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Complex problems don't require complex solutions.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sprout className="size-4" />
                            <h3 className="text-sm font-medium">AI with Purpose</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">We use AI to solve real problems, not to add buzzwords.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Award className="size-4" />
                            <h3 className="text-sm font-medium">Customer First</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">We are not competitor-obsessed, we are customer-obsessed.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Binary className="size-4" />
                            <h3 className="text-sm font-medium">Customer Is Never Wrong</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">We hear, we listen, we act.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}