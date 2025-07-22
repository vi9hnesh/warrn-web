'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'

const menuItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    // Function to check if a menu item is active
    const isActive = (href: string) => {
        if (href.startsWith('#')) {
            // For hash links, we'll check if we're on the home page
            return pathname === '/' && window.location.hash === href
        }
        // For regular paths, check if current path starts with the href
        return pathname === href || (href !== '/' && pathname.startsWith(href))
    }

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-5 max-w-7xl px-2 transition-all rounded-2xl duration-300', isScrolled && 'bg-background/80 max-w-[90%] border backdrop-blur-lg')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-2">
                        <div className="flex w-full justify-between lg:w-auto mx-3">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="h-8 w-8 m-0 flex items-center justify-center">
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                        width="24px" height="24px" viewBox="0 0 300.000000 300.000000"
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
                                <span className="font-bold font-mono text-xl tracking-tight text-foreground">Warrn</span>
                            </Link>

                            
                            {/* <Link href="/" className="flex items-center space-x-2 ms-2">
                                <div className="relative">
                                    <span className="font-extrabold text-2xl tracking-wide text-foreground font-syne">
                                        w
                                        <span className="text-primary">a</span>
                                        <span className="font-mono">rr</span>
                                        <span className="text-primary">n</span>
                                    </span>
                                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full"></div>
                                </div>
                            </Link> */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <NavigationMenu>
                                <NavigationMenuList className="gap-8">
                                    {menuItems.map((item, index) => (
                                        <NavigationMenuItem key={index}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        "group inline-flex h-9 w-max items-center justify-center rounded-xl bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                                        isActive(item.href) 
                                                            ? "text-foreground bg-accent/50 border border-accent/30" 
                                                            : "text-muted-foreground"
                                                    )}>
                                                    {item.name}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "block duration-150 hover:text-accent-foreground",
                                                    isActive(item.href) 
                                                        ? "text-foreground font-medium" 
                                                        : "text-muted-foreground"
                                                )}
                                                onClick={() => setMenuState(false)}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="lg"
                                    className='lg:inline-flex font-mono'>
                                    <Link href="/login">
                                        <span>Try Warrn</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}