import { Logo } from '@/components/logo'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ExternalLink, MoveUpRight } from 'lucide-react'

const links = [
    // {
    //     group: 'Product',
    //     items: [
    //         {
    //             title: 'Features',
    //             href: '/features',
    //         },
    //         {
    //             title: 'Pricing',
    //             href: '/pricing',
    //         },
    //     ],
    // },
    {
        group: 'Resources',
        items: [
            {
                title: 'Docs',
                href: 'https://docs.warrn.io',
            },
            // {
            //     title: 'Blog',
            //     href: '/blog',
            // },
        ],
    },
    {
        group: 'Company',
        items: [
            {
                title: 'Warrn',
                href: 'https://warrn.io',
            },
            {
                title: 'About',
                href: '/about',
            },
            {
                title: 'Contact',
                href: '/contact',
            },
        ],
    },
    {
        group: 'Legal',
        items: [
            {
                title: 'Terms',
                href: '/terms',
            },
            {
                title: 'Privacy',
                href: '/privacy',
            },
        ],
    },
]

// Helper function to check if a link is external
const isExternalLink = (href: string) => {
    return href.startsWith('http://') || href.startsWith('https://')
}

export default function Footer() {
    return (
        <footer className=" bg-background py-16 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 ms-2">
                            <div className="h-10 w-10 m-0 flex items-center justify-center">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="40px" height="40px" viewBox="0 0 300.000000 300.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                                    fill="currentColor" stroke="none">
                                    <path d="M804 2630 c-18 -6 -45 -25 -62 -44 -32 -37 -36 -55 -48 -279 -3 -64
                                    -11 -120 -16 -123 -10 -6 -168 109 -264 193 -49 42 -72 55 -116 64 -62 13
                                    -120 1 -162 -32 -24 -19 -26 -27 -26 -89 0 -68 1 -70 49 -127 62 -74 111 -120
                                    186 -173 33 -24 89 -71 125 -106 36 -34 80 -76 99 -91 25 -21 32 -34 27 -49
                                    -3 -10 -61 -55 -128 -99 -198 -130 -304 -212 -318 -245 -16 -38 -6 -75 30
                                    -111 57 -57 133 -32 310 102 117 89 164 116 174 101 2 -4 -1 -260 -6 -569 -6
                                    -309 -7 -578 -3 -599 9 -48 56 -95 118 -119 45 -17 51 -17 81 -2 30 14 35 22
                                    46 79 7 39 15 215 19 458 3 217 10 401 15 409 5 8 12 77 15 152 4 82 11 143
                                    18 150 8 8 26 1 70 -29 32 -21 68 -42 80 -46 11 -4 55 -31 97 -61 110 -79 152
                                    -99 215 -99 50 0 55 2 97 46 56 60 59 101 13 168 -36 53 -61 72 -274 221 -88
                                    61 -168 119 -179 129 -17 17 -17 19 -1 44 18 27 144 125 275 213 110 74 180
                                    158 180 215 0 49 -49 97 -98 98 -43 0 -44 -1 -265 -148 -132 -88 -191 -122
                                    -198 -115 -8 8 -8 61 0 183 12 196 5 254 -38 302 -29 33 -84 44 -137 28z"/>
                                    </g>
                                </svg>
                            </div>
                            <span className="font-bold font-mono text-2xl tracking-tight text-foreground">Warrn</span>
                        </Link>
                        {/* <div className="mt-12 flex flex-wrap items-end justify-between gap-6 py-6">
                            <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Warrn, Made by <a href="https://emphoni.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground/80 inline-flex items-center gap-1 group">emphoni<MoveUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /></a></span>
                        </div> */}
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => {
                                    const isExternal = isExternalLink(item.href)
                                    
                                    if (isExternal) {
                                        return (
                                            <a
                                                key={index}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150 group">
                                                <span>{item.title}</span>
                                                <MoveUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            </a>
                                        )
                                    }
                                    
                                    return (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.title}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}