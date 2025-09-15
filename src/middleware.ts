import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Allow only root page during early access
  const allowedPaths = [
    '/',
    '/not-found',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
    '/terms',
    '/privacy',
    '/about'
  ]
  
  // Check if current path is allowed
  const isAllowedPath = allowedPaths.includes(pathname)
  
  // If not allowed, redirect to not-found page
  if (!isAllowedPath) {
    return NextResponse.rewrite(new URL('/not-found', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon files and other assets
     */
    '/((?!api|_next/static|_next/image|favicon|logo|images|.*\\.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.gif|.*\\.webp).*)',
  ],
} 