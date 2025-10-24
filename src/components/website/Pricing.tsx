"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Check, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import NumberFlow from '@number-flow/react'

const pricingPlans = [
    {
        name: "Basic",
        description: "Everything you need to get started",
        monthlyPrice: "$9",
        yearlyPrice: "$7",
        period: "per seat / month",
        features: [
            "Alerts & Incidents",
            "Status Pages (public)",
            "Runbooks (basic AI assist)",
            "Up to 5 users",
            "10 AI credits, Email alerts only",
            "Upgrade anytime"
        ],
        buttonText: "Start 14-day free trial",
        href: "/register",
        isPopular: false,
        variant: "outline" as const
    },
    {
        name: "Professional",
        description: "Startups & growing teams",
        monthlyPrice: "$29",
        yearlyPrice: "$25",
        period: "per seat / month",
        features: [
            "Slack & GitHub integrations",
            "Triage AI for incidents",
            "Project management (tasks, features, bugs)",
            "Custom domains for status pages",
            "80 on-call minutes + 100 AI credits included",
            "Up to 25 users"
        ],
        buttonText: "Start 14-day free trial",
        href: "/register",
        isPopular: true,
        variant: "default" as const
    },
    {
        name: "Advanced",
        description: "Doesn't get any better than this",
        monthlyPrice: "$45",
        yearlyPrice: "$39",
        period: "per seat / month",
        features: [
            "Audit logs, SSO, advanced analytics",
            "Advanced AI triage & custom workflows",
            "Theming, automation, priority support",
            "200 on-call minutes + 250 AI credits included",
            "Unlimited users"
        ],
        buttonText: "Contact sales / Start trial",
        href: "/contact",
        isPopular: false,
        variant: "outline" as const
    }
];

export default function Pricing() {
    const [isMonthly, setIsMonthly] = useState(true);
    const isMobile = useIsMobile();

    const handleToggle = (checked: boolean) => {
        setIsMonthly(!checked);
    };

    return (
        <section className="py-16 md:py-40">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl lg:text-5xl">Simple, transparent pricing</h1>
                    <p className="text-muted-foreground">Start free, scale as you grow. No hidden fees, no vendor lock-in.</p>
                </div>

                <div className="flex justify-center mt-8 mb-8">
                    <div className="flex items-center space-x-3">
                        <span className={`text-sm font-medium ${!isMonthly ? 'text-muted-foreground' : ''}`}>
                            Monthly
                        </span>
                        <Label>
                            <Switch
                                checked={!isMonthly}
                                onCheckedChange={handleToggle}
                            />
                        </Label>
                        <span className={`text-sm font-medium ${isMonthly ? 'text-muted-foreground' : ''}`}>
                            Annual <span className="text-primary">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <Card key={index} className={plan.isPopular ? "relative border-2 border-primary/20 shadow-lg" : "flex flex-col"}>
                            {plan.isPopular && (
                                <div className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="font-medium">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>

                                <div className="my-3 flex items-baseline gap-1">
                                    <span className="text-2xl font-semibold">
                                        <NumberFlow
                                            value={
                                                isMonthly ?
                                                Number(plan.monthlyPrice.replace('$', '')) :
                                                Number(plan.yearlyPrice.replace('$', ''))
                                            }
                                            format={{
                                                style: "currency",
                                                currency: "USD",
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            }}
                                            transformTiming={{
                                                duration: 500,
                                                easing: "ease-out",
                                            }}
                                            willChange
                                        />
                                    </span>
                                    <span className="text-sm text-muted-foreground">/ {plan.period}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {isMonthly
                                        ? `or ${plan.yearlyPrice} / ${plan.period} billed yearly`
                                        : `Save ${parseInt(plan.monthlyPrice.replace('$', '')) - parseInt(plan.yearlyPrice.replace('$', ''))} per seat`}
                                </p>

                                <Button
                                    asChild
                                    variant={plan.variant}
                                    className="mt-4 w-full">
                                    <Link href={plan.href}>{plan.buttonText}</Link>
                                </Button>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />

                                {index > 0 && (
                                    <div className="mb-2 text-sm font-medium">
                                        Everything in {pricingPlans[index - 1].name}, plus:
                                    </div>
                                )}
                                <ul className="list-outside space-y-3 text-sm">
                                    {plan.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2">
                                            <Check className="size-3 text-green-600" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}