import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Sparkles, Shield, Zap } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Simple, transparent pricing</h1>
                    <p className="text-muted-foreground">Start free, scale as you grow. No hidden fees, no vendor lock-in.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    {/* Starter Plan */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-medium">Starter</CardTitle>
                            <CardDescription>Perfect for small teams getting started</CardDescription>

                            <div className="my-3 flex items-baseline gap-1">
                                <span className="text-2xl font-semibold">Free</span>
                                <span className="text-sm text-muted-foreground">forever</span>
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="mt-4 w-full">
                                <Link href="/register">Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Up to 5 users',
                                    '1,000 alerts/month',
                                    'Basic AI triage',
                                    'Email notifications',
                                    'Status page',
                                    'Community support'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3 text-green-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Professional Plan */}
                    <Card className="relative border-2 border-primary/20 shadow-lg">
                        <div className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                            <Sparkles className="mr-2 size-3" />
                            Most Popular
                        </div>

                        <CardHeader>
                            <CardTitle className="font-medium">Professional</CardTitle>
                            <CardDescription>For growing teams that need advanced features</CardDescription>

                            <div className="my-3 flex items-baseline gap-1">
                                <span className="text-2xl font-semibold">$29</span>
                                <span className="text-sm text-muted-foreground">per user/month</span>
                            </div>

                            <Button
                                asChild
                                className="mt-4 w-full">
                                <Link href="/register">Start Free Trial</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Everything in Starter',
                                    'Unlimited users',
                                    '50,000 alerts/month',
                                    'Advanced AI incident response',
                                    'Smart alert correlation',
                                    'Automated escalations',
                                    'Mobile app access',
                                    'Slack & Teams integration',
                                    'Custom runbooks',
                                    'SLA tracking',
                                    'Priority support'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3 text-green-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Enterprise Plan */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Enterprise</CardTitle>
                            <CardDescription>For large organizations with complex needs</CardDescription>

                            <div className="my-3 flex items-baseline gap-1">
                                <span className="text-2xl font-semibold">Custom</span>
                                <span className="text-sm text-muted-foreground">pricing</span>
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="mt-4 w-full">
                                <Link href="/contact">Contact Sales</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Everything in Professional',
                                    'Unlimited alerts',
                                    'Custom AI model training',
                                    'Advanced analytics & reporting',
                                    'SOC 2 compliance',
                                    'SAML/SSO integration',
                                    'Custom integrations',
                                    'Dedicated success manager',
                                    '99.99% SLA',
                                    '24/7 phone support'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3 text-green-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}