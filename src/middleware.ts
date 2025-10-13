import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Helper function to get the app domain based on current host
function getAppDomain(currentHost: string): string {
  // Production
  if (currentHost === 'warrn.io') {
    return 'app.warrn.io'
  }
  
  // Local development - landing runs on 3001, app runs on 3000
  if (currentHost.includes('localhost') || currentHost.includes('127.0.0.1')) {
    return currentHost.replace('3001', '3000')
  }
  
  // Staging/preview environments
  if (currentHost.includes('staging') || currentHost.includes('preview')) {
    return `app-${currentHost}`
  }
  
  // Default fallback
  return `app.${currentHost}`
}

// Helper function to check authentication status on app domain
async function checkAuthStatus(appDomain: string, cookies: string): Promise<boolean> {
  try {
    const isLocal = appDomain.includes('localhost') || appDomain.includes('127.0.0.1')
    const protocol = isLocal ? 'http' : 'https'
    // For local development, appDomain already includes the port (localhost:3000)
    const authCheckUrl = `${protocol}://${appDomain}/api/auth/check`
    
    console.log('Checking auth status at:', authCheckUrl)
    
    const response = await fetch(authCheckUrl, {
      method: 'GET',
      headers: {
        'Cookie': cookies,
        'Content-Type': 'application/json',
      },
      // Don't follow redirects, just get the response
      redirect: 'manual'
    })
    
    if (response.ok) {
      const data = await response.json()
      return data.authenticated === true
    }
    
    return false
  } catch (error) {
    console.error('Auth check failed:', error)
    return false
  }
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const host = request.headers.get('host') || ''
  
  // Only check auth for main landing pages, not for assets or API routes
  const shouldCheckAuth = pathname === '/'
  
  // Check if user is authenticated via server-side check
  if (shouldCheckAuth && host && !host.startsWith('app.')) {
    const appDomain = getAppDomain(host)
    
    // Get all cookies as a string
    const cookieHeader = request.headers.get('cookie') || ''
    
    // Check auth status on app domain
    const isAuthenticated = await checkAuthStatus(appDomain, cookieHeader)
    
    if (isAuthenticated) {
      const isLocal = appDomain.includes('localhost') || appDomain.includes('127.0.0.1')
      const protocol = isLocal ? 'http' : 'https'
      // For local development, appDomain already includes the port (localhost:3000)
      const redirectUrl = `${protocol}://${appDomain}/alerts`
      
      console.log('User authenticated, redirecting to:', redirectUrl)
      return NextResponse.redirect(redirectUrl)
    }
  }
  
  // Allow only root page and essential pages during early access
  const allowedPaths = [
    '/',
    '/not-found',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
    '/terms',
    '/privacy',
    '/about',
    '/blog',
    '/features',
    '/pricing',
    '/contact',
    '/shipping',
    '/login'
  ]
  
  // Check if current path starts with allowed paths (for blog posts, etc.)
  const isAllowedPath = allowedPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  )
  
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