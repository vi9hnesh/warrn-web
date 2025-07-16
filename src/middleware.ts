import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authTokens = request.cookies.get('auth_tokens')?.value
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                    request.nextUrl.pathname.startsWith('/register')
  
  // Protected routes that require authentication (only /secure for now)
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/secure')

  // If trying to access auth page while logged in, redirect to dashboard
  if (isAuthPage && authTokens) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // If trying to access protected route while logged out, redirect to login
  if (isProtectedRoute && !authTokens) {
    return NextResponse.redirect(new URL('/login', request.url))
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
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|ms-icon-150x150.png).*)',
  ],
} 