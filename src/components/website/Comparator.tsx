import { Button } from '@/components/ui/button'
import { Cpu, Sparkles } from 'lucide-react'
import Link from 'next/link'

const tableData = [
    {
        feature: 'Users per Team',
        basic: 'Up to 5',
        professional: 'Up to 25',
        advanced: 'Unlimited',
    },
    {
        feature: 'Alerts & Incidents',
        basic: true,
        professional: true,
        advanced: true,
    },
    {
        feature: 'Status Page',
        basic: 'Public only',
        professional: 'Custom DNS + Private',
        advanced: 'Custom DNS + Private',
    },
    {
        feature: 'Runbooks',
        basic: 'Basic',
        professional: 'AI-powered',
        advanced: 'Advanced templates',
    },
    {
        feature: 'Tasks / Projects',
        basic: false,
        professional: true,
        advanced: true,
    },
    {
        feature: 'Integrations',
        basic: false,
        professional: 'Slack & GitHub',
        advanced: '+ Premium Integrations',
    },
    {
        feature: 'On-Call Minutes',
        basic: '—',
        professional: '80',
        advanced: '200',
    },
    {
        feature: 'AI Credits',
        basic: '10',
        professional: '100',
        advanced: '250',
    },
    {
        feature: 'Phone Calls',
        basic: false,
        professional: true,
        advanced: true,
    },
    {
        feature: 'Triage AI',
        basic: false,
        professional: true,
        advanced: true,
    },
    {
        feature: 'Team Analytics',
        basic: false,
        professional: 'Basic',
        advanced: 'Advanced',
    },
    {
        feature: 'SSO / Audit Logs',
        basic: false,
        professional: false,
        advanced: true,
    },
    {
        feature: 'Add-ons',
        basic: 'AI & Call top-ups',
        professional: 'AI & Call top-ups',
        advanced: 'AI & Call top-ups',
    },
]

export default function PricingComparator() {
    return (
        <section className="border-t py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="w-full overflow-auto lg:overflow-visible">
                    <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
                        <thead className="bg-background sticky top-20">
                            <tr className="*:py-4 *:text-left *:font-medium">
                                <th className="lg:w-2/5"></th>
                                <th className="space-y-3">
                                    <span className="block">Basic</span>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="/register">Start 14-day free trial</Link>
                                    </Button>
                                </th>
                                <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                                    <span className="block">Professional</span>
                                    <Button
                                        asChild
                                        size="sm">
                                        <Link href="/register">Start 14-day free trial</Link>
                                    </Button>
                                </th>
                                <th className="space-y-3">
                                    <span className="block">Advanced</span>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href="/contact">Contact sales / Start trial</Link>
                                    </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-caption text-sm">
                            <tr className="*:py-3">
                                <td className="flex items-center gap-2 font-medium">
                                    <Cpu className="size-4" />
                                    <span>Features</span>
                                </td>
                                <td></td>
                                <td className="bg-muted border-none px-4"></td>
                                <td></td>
                            </tr>
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="*:border-b *:py-3">
                                    <td className="text-muted-foreground">{row.feature}</td>
                                    <td>
                                        {row.basic === true ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-4">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : row.basic === false ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4 text-red-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            row.basic
                                        )}
                                    </td>
                                    <td className="bg-muted border-none px-4">
                                        <div className="-mb-3 border-b py-3">
                                            {row.professional === true ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="size-4">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : row.professional === false ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-4 text-red-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            ) : (
                                                row.professional
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        {row.advanced === true ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-4">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : row.advanced === false ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4 text-red-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            row.advanced
                                        )}
                                    </td>
                                </tr>
                            ))}
                            <tr className="*:py-6">
                                <td></td>
                                <td></td>
                                <td className="bg-muted rounded-b-(--radius) border-none px-4"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}